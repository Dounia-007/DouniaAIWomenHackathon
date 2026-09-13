import { explainAIError } from '../../lib/server/ai-error.mjs';
import { ToolLoopAgent, Output, jsonSchema } from 'ai';
import { assessmentSchema, validAssessment, instructions, sourceMap } from '../../lib/server/assessment';
export const runtime='nodejs';
export const maxDuration=120;
const requests=new Map();
export async function GET(){return Response.json({configured:!!(process.env.AI_GATEWAY_API_KEY||process.env.VERCEL_OIDC_TOKEN)},{headers:{'Cache-Control':'no-store'}})}
export async function POST(request){
 const origin=request.headers.get('origin');
 if(origin&&origin!==new URL(request.url).origin)return Response.json({error:'Please submit the assessment from Metric Lab.'},{status:403});
 let input;
 try{const text=await request.text();if(text.length>24000)return Response.json({error:'Please shorten the metric description.'},{status:413});input=JSON.parse(text)}catch{return Response.json({error:'Please enter a metric name or description.'},{status:400})}
 if(!input||!['existing','paired'].includes(input.mode)||typeof input.metric!=='string'||!input.metric.trim()||input.metric.length>4000)return Response.json({error:'Enter a metric description of up to 4,000 characters.'},{status:400});
 const feedback=input.feedback??{};
 if(!feedback||typeof feedback!=='object'||Array.isArray(feedback)||Object.keys(feedback).some(k=>!['cfo','sustainability','operations'].includes(k))||Object.values(feedback).some(v=>typeof v!=='string'||v.length>2000))return Response.json({error:'Keep each feedback entry under 2,000 characters.'},{status:400});
 const companyFeedback=Object.fromEntries(['cfo','sustainability','operations'].map(k=>[k,(feedback[k]||'').trim()]));
 if(!process.env.AI_GATEWAY_API_KEY&&!process.env.VERCEL_OIDC_TOKEN)return Response.json({error:'No AI credential is configured for this deployment. The site owner needs to add AI_GATEWAY_API_KEY in Vercel for this environment and redeploy. Your entries remain in the form.',code:'AI_SETUP_REQUIRED'},{status:503});
 const now=Date.now();for(const [k,v]of requests)if(v.until<now)requests.delete(k);
 const key=request.headers.get('x-forwarded-for')?.split(',')[0]||'local';const record=requests.get(key)||{count:0,until:now+60000};
 if(record.count>=3||requests.size>1000)return Response.json({error:'Please wait a minute before requesting another assessment.'},{status:429});record.count++;requests.set(key,record);
 try{
 const model=process.env.METRIC_LAB_MODEL||'openai/gpt-6-astra';
 const agent=new ToolLoopAgent({model,instructions,output:Output.object({schema:jsonSchema(assessmentSchema)}),maxOutputTokens:7000,maxRetries:0});
 const result=await agent.generate({prompt:JSON.stringify({mode:input.mode,metric:input.metric.trim(),feedback:companyFeedback}),abortSignal:AbortSignal.timeout(105000)});
 if(!validAssessment(result.output))throw new Error('Invalid assessment');
 const ids=new Set([...Object.values(result.output.attributes).flatMap(a=>a.evidenceIds),...result.output.conflicts.flatMap(c=>c.evidenceIds)]);
 return Response.json({assessment:result.output,sources:Object.fromEntries([...ids].map(id=>[id,sourceMap[id]])),generationId:crypto.randomUUID(),generatedAt:new Date().toISOString(),model,evidenceVersion:'deidentified-33-sources-99-themes-v1'},{headers:{'Cache-Control':'no-store'}});
 }catch(error){
 const failure=explainAIError(error,!!process.env.AI_GATEWAY_API_KEY);
 return Response.json(failure,{status:failure.code==='AI_SETUP_REQUIRED'?503:502});
 }
}
