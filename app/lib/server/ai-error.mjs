// Return only fixed diagnostic labels, never provider bodies, prompts or secrets.
export function explainAIError(error, hasKey) {
 const chain=[];for(let e=error;e&&chain.length<5;e=e.cause)chain.push(e);
 const status=chain.find(e=>Number.isInteger(e.statusCode))?.statusCode;
 const text=chain.map(e=>typeof e.message==='string'?e.message:'').join(' ').toLowerCase();
 const names=['GatewayAuthenticationError','GatewayForbiddenError','GatewayModelNotFoundError','GatewayResponseError','GatewayRateLimitError','GatewayFailedDependencyError'];
 const kind=chain.map(e=>e.name).find(n=>names.includes(n))||'UnclassifiedError';
 let reason='UNKNOWN';let message='The AI request failed. The diagnostic below can help the site owner investigate.';
 if(/verif|credit card|payment method/.test(text)){reason='ACCOUNT_VERIFICATION';message='The provider mentions account verification or a payment method. Check the AI Gateway account requirements.';}
 else if(/restricted access to this model|model.*(allowlist|not allowed|disabled)/.test(text)){reason='MODEL_RESTRICTION';message='The provider reports a model restriction. Check the model allowlist in the AI Gateway workspace.';}
 else if(/no providers available|no available providers/.test(text)){reason='NO_PROVIDERS';message='The gateway reports no available providers for this request. Check the workspace provider and model policies.';}
 else if(status===402||/insufficient.*credit|budget.*exceed/.test(text)){reason='BILLING';message='The provider reports a billing, credit or budget restriction.';}
 else if(status===401||kind==='GatewayAuthenticationError'){reason='AUTHENTICATION';message='The gateway rejected authentication. Check that this deployment uses a valid AI Gateway key.';}
 else if(kind==='GatewayModelNotFoundError'){reason='MODEL_NOT_FOUND';message='The gateway could not find the configured model.';}
 else if(status===403&&kind==='GatewayResponseError'){reason='UNRECOGNIZED_403';message='Access was rejected, but the response was not a recognized AI Gateway error. The available evidence does not identify a model-permission problem.';}
 else if(status===403){reason='ACCESS_DENIED';message='The provider rejected access without a recognized specific reason.';}
 const diagnostic=`ML-D2 / ${reason} / HTTP ${status||'unknown'} / ${kind} / ${hasKey?'gateway-key':'oidc'}`;
 return {error:`${message} Diagnostic: ${diagnostic}`,code:[401,402,403].includes(status)?'AI_SETUP_REQUIRED':'ASSESSMENT_FAILED',diagnostic};
}
