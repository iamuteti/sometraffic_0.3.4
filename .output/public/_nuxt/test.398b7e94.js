import{R as c,k as l,w as u,b as _,m as i,o as m,h}from"./entry.4f8ac3bc.js";import{u as f}from"./fetch.bfbb55d7.js";const d=h("h1",null,"Test Page",-1),g=[d],k={__name:"test",async setup(p){let e,t;c();const o=l(),s=i();s.BASE_URL+o.fullPath;const a={}.BASE_URL+"/test";console.log("Path and route: ",a,o),console.log("Document referrer: ",document.referrer);const n=([e,t]=u(()=>f(`${s.API_BASE_URL}trackingurl/get-meta`,{method:"POST",body:{tracking_url:a}},"$rVQMEfhjEx").then(r=>r.data.value)),e=await e,t(),e);return console.log("0000006: ",n),(r,R)=>(m(),_("div",null,g))}};export{k as default};