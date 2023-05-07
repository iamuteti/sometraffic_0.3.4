import{_ as Ke}from"./nuxt-link.a4d01235.js";import{r as Ve,a as Pe,q as qe,b as _,h as s,B as Qe,C as Ge,u as p,F as Je,v as Oe,j as We,o as C,i as Ye,e as ze,l as Fe,t as i,m as Xe}from"./entry.4d41dba5.js";import{u as Ze}from"./fetch.013f5933.js";import{m as ke}from"./index.f023ee0f.js";const we={id:"click_data",class:"shadow sm:rounded-md"},et={class:"flex justify-between"},tt=s("h1",{class:"font-bold py-4 uppercase"},"Click list",-1),st={class:"flex items-start"},nt={class:"flex border-2 rounded border-blue-600"},ot={class:"relative"},lt=s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),it=[lt],at=s("svg",{class:"w-6 h-6 text-slate-50",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[s("path",{d:"M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"})],-1),rt=[at],ut=s("div",{class:"flex items-center justify-center"},null,-1),dt={class:"overflow-x-auto"},_t={class:"w-full whitespace-nowrap"},pt=s("thead",{class:"bg-black/60"},[s("tr",null,[s("th",{class:"text-left py-3 px-2"},"Tracking URL"),s("th",{class:"text-left py-3 px-2"},"Task ID"),s("th",{class:"text-left py-3 px-2"},"Device"),s("th",{class:"text-left py-3 px-2"},"Date / Time"),s("th",{class:"text-left py-3 px-2"},"Country"),s("th",{class:"text-left py-3 px-2"},"City"),s("th",{class:"text-left py-3 px-2"},"Referrer")])],-1),Ct={class:"border-b border-gray-700",key:"clickdata.id"},vt={class:"py-3 px-2"},ct={class:"py-3 px-2"},gt={class:"py-3 px-2"},ht={class:"py-3 px-2"},xt={class:"py-3 px-2"},ft={class:"py-3 px-2"},mt={class:"py-3 px-2"},Mt={__name:"index",setup(Dt){We("$awn");const a=Ve([]),d=Ve([]),n=Pe({vaClDa:""}),Ae=Xe(),He=()=>{n.vaClDa="",d.value=a.value},Ie=()=>{var o;d.value=(o=a==null?void 0:a._value)==null?void 0:o.filter(e=>{var l,t,r,u,c,g,h,x,f,m,D,y,L,S,b,B,M,R,j,N,T,$,E,U,V,Y,z,F,A,H,I,K,P,q,Q,G,J,O,W,X,Z,k,w,ee,te,se,ne,oe,le,ie,ae,re,ue,de,_e,pe,Ce,ve,ce,ge,he,xe,fe,me,De,ye,Le,Se,be,Be,Me,Re,je,Ne,Te,$e,Ee,Ue;return((l=e==null?void 0:e.task_id)==null?void 0:l.includes(n.vaClDa))||((c=(u=(r=(t=e.Redirect)==null?void 0:t.tracking_url)==null?void 0:r.toString())==null?void 0:u.toLowerCase())==null?void 0:c.includes(n.vaClDa))||((g=e.ip_address)==null?void 0:g.includes(n.vaClDa))||((h=e.screen_resolution)==null?void 0:h.includes(n.vaClDa))||((x=e.network_speed)==null?void 0:x.includes(n.vaClDa))||((f=e.latitude)==null?void 0:f.includes(n.vaClDa))||((m=e.longtitude)==null?void 0:m.includes(n.vaClDa))||((D=e.zipcode)==null?void 0:D.includes(n.vaClDa))||((y=e.timestamp)==null?void 0:y.includes(n.vaClDa))||((L=v(e==null?void 0:e.timestamp,"H:m"))==null?void 0:L.includes(n.vaClDa))||((R=(b=(S=e==null?void 0:e.device)==null?void 0:S.toString())==null?void 0:b.toLowerCase())==null?void 0:R.includes((M=(B=n.vaClDa)==null?void 0:B.toString())==null?void 0:M.toLowerCase()))||((E=(N=(j=e==null?void 0:e.referrer_url)==null?void 0:j.toString())==null?void 0:N.toLowerCase())==null?void 0:E.includes(($=(T=n.vaClDa)==null?void 0:T.toString())==null?void 0:$.toLowerCase()))||((F=(V=(U=e==null?void 0:e.country)==null?void 0:U.toString())==null?void 0:V.toLowerCase())==null?void 0:F.includes((z=(Y=n.vaClDa)==null?void 0:Y.toString())==null?void 0:z.toLowerCase()))||((P=(H=(A=e==null?void 0:e.country_code)==null?void 0:A.toString())==null?void 0:H.toLowerCase())==null?void 0:P.includes((K=(I=n.vaClDa)==null?void 0:I.toString())==null?void 0:K.toLowerCase()))||((O=(Q=(q=e==null?void 0:e.region)==null?void 0:q.toString())==null?void 0:Q.toLowerCase())==null?void 0:O.includes((J=(G=n.vaClDa)==null?void 0:G.toString())==null?void 0:J.toLowerCase()))||((w=(X=(W=e==null?void 0:e.region_name)==null?void 0:W.toString())==null?void 0:X.toLowerCase())==null?void 0:w.includes((k=(Z=n.vaClDa)==null?void 0:Z.toString())==null?void 0:k.toLowerCase()))||((oe=(te=(ee=e==null?void 0:e.operating_system)==null?void 0:ee.toString())==null?void 0:te.toLowerCase())==null?void 0:oe.includes((ne=(se=n.vaClDa)==null?void 0:se.toString())==null?void 0:ne.toLowerCase()))||((ue=(ie=(le=e==null?void 0:e.browser)==null?void 0:le.toString())==null?void 0:ie.toLowerCase())==null?void 0:ue.includes((re=(ae=n.vaClDa)==null?void 0:ae.toString())==null?void 0:re.toLowerCase()))||((ve=(_e=(de=e==null?void 0:e.browser_language)==null?void 0:de.toString())==null?void 0:_e.toLowerCase())==null?void 0:ve.includes((Ce=(pe=n.vaClDa)==null?void 0:pe.toString())==null?void 0:Ce.toLowerCase()))||((fe=(ge=(ce=e==null?void 0:e.ip_lookup_status)==null?void 0:ce.toString())==null?void 0:ge.toLowerCase())==null?void 0:fe.includes((xe=(he=n.vaClDa)==null?void 0:he.toString())==null?void 0:xe.toLowerCase()))||((Se=(De=(me=e==null?void 0:e.isp)==null?void 0:me.toString())==null?void 0:De.toLowerCase())==null?void 0:Se.includes((Le=(ye=n.vaClDa)==null?void 0:ye.toString())==null?void 0:Le.toLowerCase()))||((je=(Be=(be=e==null?void 0:e.connection_type)==null?void 0:be.toString())==null?void 0:Be.toLowerCase())==null?void 0:je.includes((Re=(Me=n.vaClDa)==null?void 0:Me.toString())==null?void 0:Re.toLowerCase()))||((Ue=(Te=(Ne=e==null?void 0:e.city)==null?void 0:Ne.toString())==null?void 0:Te.toLowerCase())==null?void 0:Ue.includes((Ee=($e=n.vaClDa)==null?void 0:$e.toString())==null?void 0:Ee.toLowerCase()))})},v=(o,e)=>{const l=new Date(o);return ke(l).format(e)};return qe(async()=>{const{data:o}=await Ze(`${Ae.API_BASE_URL}clickdata/all`,"$PQmKnKUN7L");a.value=o.value,d.value=o.value}),(o,e)=>{const l=Ke;return C(),_("div",null,[s("div",we,[s("div",et,[tt,s("div",st,[s("div",nt,[s("div",ot,[Qe(s("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>p(n).vaClDa=t),class:"px-4 py-2 w-80 border-inherit bg-inherit pr-9 focus:outline-none focus:ring focus:border-blue-600",placeholder:"Search..."},null,512),[[Ge,p(n).vaClDa]]),s("button",{class:"absolute inset-y-0 right-0 px-2",onClick:e[1]||(e[1]=t=>He())},it)]),s("button",{class:"flex items-center justify-center px-4 border-l bg-blue-700",onClick:e[2]||(e[2]=t=>Ie())},rt)])])]),ut,s("div",dt,[s("table",_t,[pt,s("tbody",null,[(C(!0),_(Je,null,Oe(p(d),t=>{var r;return C(),_("tr",Ct,[s("td",vt,[Ye(l,{to:`/tracking-url/${(r=t==null?void 0:t.Redirect)==null?void 0:r.id}`,title:"Edit",class:"hover:text-white"},{default:ze(()=>{var u;return[Fe(i((u=t==null?void 0:t.Redirect)==null?void 0:u.tracking_url.slice(-7)),1)]}),_:2},1032,["to"])]),s("td",ct,[Ye(l,{to:`/click-list/detail/${t==null?void 0:t.task_id}`,title:"Edit",class:"hover:text-white"},{default:ze(()=>[Fe(i(t==null?void 0:t.task_id),1)]),_:2},1032,["to"])]),s("td",gt,i(t==null?void 0:t.device),1),s("td",ht,i(v(t==null?void 0:t.timestamp,"YYYY-MM-DD H:m")),1),s("td",xt,i(t==null?void 0:t.country),1),s("td",ft,i(t==null?void 0:t.city),1),s("td",mt,i(t==null?void 0:t.referrer_url),1)])}),128))])])])])])}}};export{Mt as default};
