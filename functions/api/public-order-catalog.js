
const SUPABASE_URL="https://qbuqjwpkltbjhlfbyjyb.supabase.co";
const SUPABASE_ANON_KEY="sb_publishable_fqMc6n_yKymvZEb-6u6DDQ_CJZpEbl3";
const headers={"content-type":"application/json; charset=utf-8","cache-control":"public, max-age=30, s-maxage=60"};
export async function onRequest({request}){
  if(request.method!=="GET")return new Response(JSON.stringify({error:"Method Not Allowed"}),{status:405,headers});
  try{
    const upstream=await fetch(SUPABASE_URL+"/rest/v1/rpc/get_public_qr_order_catalog",{method:"POST",headers:{apikey:SUPABASE_ANON_KEY,Authorization:"Bearer "+SUPABASE_ANON_KEY,"content-type":"application/json"},body:"{}"});
    return new Response(await upstream.text(),{status:upstream.status,headers});
  }catch(error){
    return new Response(JSON.stringify({error:"服务目录暂时不可用"}),{status:502,headers});
  }
}
