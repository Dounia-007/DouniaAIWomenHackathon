import {reportFont} from './report-font.js';
import {jsPDF} from 'jspdf';
const clean=v=>String(v??'').replace(/[−–—]/g,'-').replace(/[‘’]/g,"'").replace(/[“”]/g,'"').replace(/₂/g,'2').replace(/₀/g,'0').replace(/₁/g,'1').replace(/₃/g,'3').replace(/→|↗|↓/g,'');
export function createReportPDF(report){
 const doc=new jsPDF({unit:'mm',format:'a4'});doc.addFileToVFS('MetricSans.ttf',reportFont);doc.addFont('MetricSans.ttf','MetricSans','normal');doc.addFont('MetricSans.ttf','MetricSans','bold');const navy='#172c40',orange='#b84722',muted='#536475';let y=28;
 const page=()=>{doc.addPage();y=28;};
 const ensure=h=>{if(y+h>277)page();};
 function text(value,size=10,color=navy,bold=false){if(!value)return;doc.setFont('MetricSans',bold?'bold':'normal');doc.setFontSize(size);doc.setTextColor(color);const lines=doc.splitTextToSize(clean(value),170);const step=size*.45;for(const line of lines){ensure(step);doc.text(line,20,y);y+=step;}y+=3;}
 function section(label){ensure(23);y+=5;text(label,18,navy,true);doc.setDrawColor('#dce2e8');doc.line(20,y,190,y);y+=9;}
 function detail(label,value){if(!value)return;ensure(18);text(label.toUpperCase(),8,muted,true);text(value);}
 function card(title,body){ensure(30);doc.setFillColor('#fff0e8');doc.rect(20,y-5,2,12,'F');text(title,13,orange,true);body();y+=5;}
 doc.setProperties({title:`${report.name} - Assessment and meeting agenda`,author:'Metric Lab'});
 text('ASSESSMENT & MEETING AGENDA',9,orange,true);text(report.name,26,navy,true);text(report.summary,11);detail('Metric formula',report.formula);
 const issues=report.issues||[],open=issues.filter(i=>!i.done),closed=issues.filter(i=>i.done);
 y+=3;text(`${open.length} open agenda items     /     ${closed.length} recorded resolutions     /     ${(report.attributes||[]).length} attributes`,10,orange,true);
 section('01  Your meeting agenda');
 if(!open.length)text('No open agenda items. Recorded resolutions do not establish metric validity.');
 open.forEach((i,n)=>card(`${String(n+1).padStart(2,'0')}  ${i.agenda}`,()=>{detail('Expected meeting output',i.outcome);detail('Proposed lead',i.lead);detail('Meeting note',i.note);detail('Source issue',i.title);}));
 if(closed.length){section('Recorded resolutions');closed.forEach(i=>card(i.title,()=>{detail('Resolution',i.note);detail('Original agenda item',i.agenda);}));}
 page();section('02  Nine-attribute assessment');
 (report.attributes||[]).forEach(a=>card(a.name,()=>{text(a.classification,14,orange,true);text(a.reasoning);detail('Conditions',a.conditions);detail('Interpretation',a.interpretation);detail('Missing evidence',a.missing);detail('Evidence references',a.evidence);}));
 page();section('03  Issues and proposed resolutions');
 issues.forEach(i=>card(i.title,()=>{text(i.done?'RESOLVED':'OPEN',8,muted,true);text((i.attributes||[]).join(' / '),9,muted);detail('Why it matters',i.reasoning);(i.roles||[]).forEach(r=>detail(r.name,r.text));detail('Proposed resolution',i.solution);detail('Expected meeting output',i.outcome);detail('Recorded note',i.note);detail('Evidence references',i.evidence);}));
 const roles=(report.attributes||[]).filter(a=>a.roles?.length);if(roles.length){section('Supporting attribute interpretations');roles.forEach(a=>card(a.name,()=>a.roles.forEach(r=>detail(r.name,r.text))));}
 const feedback=(report.feedback||[]).filter(r=>r.text);if(feedback.length){section('Feedback supplied for discussion');feedback.forEach(r=>detail(r.name,r.text));}
 if(report.questions?.length){section('Questions still to clarify');report.questions.forEach((q,i)=>text(`${i+1}. ${q}`));}
 section('Research evidence and limits');text(report.notice,9,muted);(report.sources||[]).forEach(s=>detail(s.id,s.text));(report.metadata||[]).forEach(m=>text(m,8,muted));
 const pages=doc.getNumberOfPages();for(let i=1;i<=pages;i++){doc.setPage(i);doc.setFillColor(navy);doc.rect(0,0,210,16,'F');doc.setTextColor('#ffffff');doc.setFont('MetricSans','bold');doc.setFontSize(11);doc.text('METRIC LAB',20,10);doc.setFillColor(orange);doc.rect(0,16,210,1.2,'F');doc.setDrawColor('#dce2e8');doc.line(20,284,190,284);doc.setFont('MetricSans','normal');doc.setFontSize(8);doc.setTextColor(muted);doc.text('Meeting review | '+new Date().toLocaleDateString('en-GB'),20,290);doc.text(`${i} / ${pages}`,190,290,{align:'right'});}
 return doc;
}
