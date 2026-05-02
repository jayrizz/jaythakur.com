"use strict";(()=>{var e={};e.id=434,e.ids=[434],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8447:(e,t,a)=>{a.r(t),a.d(t,{originalPathname:()=>x,patchFetch:()=>m,requestAsyncStorage:()=>d,routeModule:()=>c,serverHooks:()=>h,staticGenerationAsyncStorage:()=>u});var r={};a.r(r),a.d(r,{GET:()=>l,dynamic:()=>p});var o=a(9303),n=a(8716),i=a(3131),s=a(7070);let p="force-static";async function l(e){let{searchParams:t}=new URL(e.url),a=t.get("path")||"";try{let e=await fetch(`http://localhost:18800/${a}`,{headers:{"User-Agent":"Jaythakur.com Proxy"},signal:AbortSignal.timeout(5e3)});if(e.ok){let t=await e.text();return new s.NextResponse(t,{headers:{"Content-Type":"text/html"}})}}catch(e){}return new s.NextResponse(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>AOC Dashboard - Offline</title>
      <style>
        body { font-family: system-ui; padding: 40px; text-align: center; background: #1a1a2e; color: #eee; }
        .container { max-width: 500px; margin: 0 auto; }
        h1 { color: #ff6b6b; }
        p { color: #aaa; }
        .btn { display: inline-block; background: #4a9eff; color: white; padding: 12px 24px; 
               border-radius: 8px; text-decoration: none; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🖥️ AOC Dashboard</h1>
        <p>Local service not running</p>
        <p>To start: openclaw gateway start</p>
        <a href="http://localhost:18800" class="btn" target="_blank">Open Locally</a>
      </div>
    </body>
    </html>
  `,{headers:{"Content-Type":"text/html"}})}let c=new o.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/aoc/route",pathname:"/api/aoc",filename:"route",bundlePath:"app/api/aoc/route"},resolvedPagePath:"/Users/admin/.openclaw/workspace/jaythakur-site/src/app/api/aoc/route.ts",nextConfigOutput:"export",userland:r}),{requestAsyncStorage:d,staticGenerationAsyncStorage:u,serverHooks:h}=c,x="/api/aoc/route";function m(){return(0,i.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:u})}}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[276,972],()=>a(8447));module.exports=r})();