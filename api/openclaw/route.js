"use strict";(()=>{var e={};e.id=833,e.ids=[833],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8058:(e,t,a)=>{a.r(t),a.d(t,{originalPathname:()=>g,patchFetch:()=>m,requestAsyncStorage:()=>d,routeModule:()=>c,serverHooks:()=>u,staticGenerationAsyncStorage:()=>h});var n={};a.r(n),a.d(n,{GET:()=>l,dynamic:()=>p});var o=a(9303),r=a(8716),i=a(3131),s=a(7070);let p="force-static";async function l(e){let{searchParams:t}=new URL(e.url),a=t.get("path")||"";try{let e=await fetch(`http://localhost:3000/${a}`,{headers:{"User-Agent":"Jaythakur.com Proxy"},signal:AbortSignal.timeout(5e3)});if(e.ok){let t=await e.text();return new s.NextResponse(t,{headers:{"Content-Type":"text/html"}})}}catch(e){}return new s.NextResponse(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>OpenClaw Gateway - Offline</title>
      <style>
        body { 
          font-family: system-ui; 
          padding: 40px; 
          text-align: center; 
          background: #1a1a2e; 
          color: #eee; 
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
        }
        h1 { 
          color: #4a9eff; 
          margin-bottom: 24px;
        }
        p { 
          color: #aaa; 
          margin-bottom: 16px; 
          line-height: 1.6;
        }
        .btn { 
          display: inline-block; 
          background: #4a9eff; 
          color: white; 
          padding: 12px 24px; 
          border-radius: 8px; 
          text-decoration: none; 
          margin: 8px; 
          transition: background-color 0.2s;
        }
        .btn:hover {
          background: #3b82f6;
        }
        .btn-secondary {
          background: #374151;
        }
        .btn-secondary:hover {
          background: #4b5563;
        }
        .code {
          background: #0f0f23;
          padding: 12px;
          border-radius: 8px;
          font-family: monospace;
          margin: 16px 0;
          border: 1px solid #333;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🤖 OpenClaw Gateway</h1>
        <p>The OpenClaw Gateway service is not running locally.</p>
        
        <div class="code">
          <div>Start the gateway:</div>
          <div style="color: #4a9eff; margin-top: 8px;">
            openclaw gateway start
          </div>
        </div>
        
        <p>
          OpenClaw is an AI assistant system with modular skills and tool access. 
          The gateway provides a web interface for managing skills, viewing logs, 
          and configuring the agent behavior.
        </p>
        
        <div>
          <a href="http://localhost:3000" target="_blank" class="btn">
            🔗 Open Locally (port 3000)
          </a>
          <a href="/mission-control" class="btn btn-secondary">
            📊 Check System Status
          </a>
          <a href="/apps" class="btn btn-secondary">
            🚀 Back to Apps
          </a>
        </div>
        
        <p style="margin-top: 32px; font-size: 0.9rem;">
          Need help? Check the 
          <a href="https://github.com/openclaw-ai/openclaw" target="_blank" style="color: #4a9eff;">
            OpenClaw documentation
          </a>
        </p>
      </div>
    </body>
    </html>
  `,{headers:{"Content-Type":"text/html"}})}let c=new o.AppRouteRouteModule({definition:{kind:r.x.APP_ROUTE,page:"/api/openclaw/route",pathname:"/api/openclaw",filename:"route",bundlePath:"app/api/openclaw/route"},resolvedPagePath:"/Users/admin/.openclaw/workspace/jaythakur-site/src/app/api/openclaw/route.ts",nextConfigOutput:"export",userland:n}),{requestAsyncStorage:d,staticGenerationAsyncStorage:h,serverHooks:u}=c,g="/api/openclaw/route";function m(){return(0,i.patchFetch)({serverHooks:u,staticGenerationAsyncStorage:h})}}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),n=t.X(0,[276,972],()=>a(8058));module.exports=n})();