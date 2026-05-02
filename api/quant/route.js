"use strict";(()=>{var e={};e.id=493,e.ids=[493],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},1475:(e,t,a)=>{a.r(t),a.d(t,{originalPathname:()=>m,patchFetch:()=>x,requestAsyncStorage:()=>c,routeModule:()=>l,serverHooks:()=>h,staticGenerationAsyncStorage:()=>d});var r={};a.r(r),a.d(r,{GET:()=>u,dynamic:()=>p});var n=a(9303),o=a(8716),i=a(3131),s=a(7070);let p="force-static";async function u(e){let{searchParams:t}=new URL(e.url),a=t.get("path")||"";try{let e=await fetch(`http://localhost:5173/${a}`,{headers:{"User-Agent":"Jaythakur.com Proxy"},signal:AbortSignal.timeout(5e3)});if(e.ok){let t=await e.text();return new s.NextResponse(t,{headers:{"Content-Type":"text/html"}})}}catch(e){}return new s.NextResponse(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Quant Dashboard - Offline</title>
      <style>
        body { font-family: system-ui; padding: 40px; text-align: center; background: #1a1a2e; color: #eee; }
        .container { max-width: 500px; margin: 0 auto; }
        h1 { color: #ff6b6b; }
        p { color: #aaa; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>📊 Quant Dashboard</h1>
        <p>Local service not running</p>
        <a href="http://localhost:5173" target="_blank">Open Locally</a>
      </div>
    </body>
    </html>
  `,{headers:{"Content-Type":"text/html"}})}let l=new n.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/quant/route",pathname:"/api/quant",filename:"route",bundlePath:"app/api/quant/route"},resolvedPagePath:"/Users/admin/.openclaw/workspace/jaythakur-site/src/app/api/quant/route.ts",nextConfigOutput:"export",userland:r}),{requestAsyncStorage:c,staticGenerationAsyncStorage:d,serverHooks:h}=l,m="/api/quant/route";function x(){return(0,i.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:d})}}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[276,972],()=>a(1475));module.exports=r})();