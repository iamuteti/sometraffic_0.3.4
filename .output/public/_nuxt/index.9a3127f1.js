import{_ as be}from"./nuxt-link.c6f72093.js";import{p as Ie,k as Be,r as W,a as Me,q as Ae,b as Z,h as t,i as J,e as Q,u as c,s as $e,t as u,B as ze,C as je,N as qe,F as Ee,v as Ne,j as Te,o as k,l as he,y as Re,z as Ve,m as Ye}from"./entry.4f8ac3bc.js";import{u as ge}from"./fetch.bfbb55d7.js";import{m as Ge}from"./index.cf89d3ce.js";import{D as He}from"./index.d4c87e0c.js";const _=O=>(Re("data-v-93928ea1"),O=O(),Ve(),O),Ue={id:"information_items",class:"shadow sm:rounded-md"},Fe=_(()=>t("div",{class:"text"},"Are you sure?",-1)),Pe={class:"flex justify-between"},Ke={class:"font-bold py-4 capitalize"},Oe={class:"flex items-start"},We={class:"flex border-2 rounded"},Je={class:"relative"},Qe=_(()=>t("svg",{color:"black",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)),Xe=[Qe],Ze=_(()=>t("svg",{class:"w-6 h-6 text-slate-50",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[t("path",{d:"M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"})],-1)),ke=[Ze],we=_(()=>t("div",{class:"flex items-center justify-center"},null,-1)),et={class:"overflow-x-auto"},tt={class:"w-full whitespace-nowrap"},st=_(()=>t("thead",{class:"bg-black/60"},[t("tr",null,[t("th",{class:"text-left py-3 px-2"},"Info ID"),t("th",{class:"text-left py-3 px-2"},"Item ID"),t("th",{class:"text-left py-3 px-2"},"Information"),t("th",{class:"text-left py-3 px-2"},"Category"),t("th",{class:"text-left py-3 px-2"},"Posts/Month"),t("th",{class:"text-left py-3 px-2"},"Date/Time"),t("th",{class:"text-left py-3 px-2 rounded-r-lg"},"Actions")])],-1)),at={class:"border-b border-gray-700",key:"clickdata.id"},nt={class:"py-3 px-2"},ot={class:"py-3 px-2"},it={class:"py-3 px-2 tooltip"},lt={class:"py-3 px-2 capitalize"},ut={class:"py-3 px-2 capitalize"},_t={class:"py-3 px-2 capitalize"},dt={class:"py-3 px-2"},rt={class:"inline-flex items-center space-x-3"},ct=_(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})],-1)),vt=["onClick"],mt=_(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),pt=[mt],Ct={__name:"index",setup(O){const w=Te("$awn"),{id:X}=Be().query,d=W(!1),i=W([]),l=W([]),v=W(0),a=Me({vaClDa:X!==""?X:""}),ee=Ye(),xe=()=>{a.vaClDa="",l.value=i.value,v.value=i.value.length},te=()=>{var n;l.value=(n=i==null?void 0:i._value)==null?void 0:n.filter(e=>{var o,s,r,m,p,C,f,h,g,x,L,y,D,S,b,I,B,M,A,$,z,j,q,E,N,T,R,V,Y,G,H,U,F,P,K;return((r=e.username.toLowerCase())==null?void 0:r.includes((s=(o=a.vaClDa)==null?void 0:o.toString())==null?void 0:s.toLowerCase()))||((m=e==null?void 0:e.item_id)==null?void 0:m.includes(a.vaClDa))||((p=e==null?void 0:e.Category_Item.unique_identifier)==null?void 0:p.includes(a.vaClDa))||((h=e==null?void 0:e.timestamp)==null?void 0:h.toLowerCase().includes((f=(C=a.vaClDa)==null?void 0:C.toString())==null?void 0:f.toLowerCase()))||((L=e==null?void 0:e.information)==null?void 0:L.toLowerCase().includes((x=(g=a.vaClDa)==null?void 0:g.toString())==null?void 0:x.toLowerCase()))||((b=(y=e==null?void 0:e.url_1_txt)==null?void 0:y.toLowerCase())==null?void 0:b.includes((S=(D=a.vaClDa)==null?void 0:D.toString())==null?void 0:S.toLowerCase()))||((A=(I=e==null?void 0:e.url_1_link)==null?void 0:I.toLowerCase())==null?void 0:A.includes((M=(B=a.vaClDa)==null?void 0:B.toString())==null?void 0:M.toLowerCase()))||((q=($=e==null?void 0:e.url_2_txt)==null?void 0:$.toLowerCase())==null?void 0:q.includes((j=(z=a.vaClDa)==null?void 0:z.toString())==null?void 0:j.toLowerCase()))||((R=(E=e==null?void 0:e.url_2_link)==null?void 0:E.toLowerCase())==null?void 0:R.includes((T=(N=a.vaClDa)==null?void 0:N.toString())==null?void 0:T.toLowerCase()))||((Y=(V=e==null?void 0:e.posts_per_month)==null?void 0:V.toString())==null?void 0:Y.includes(a.vaClDa))||((H=(G=e==null?void 0:e.posts_today)==null?void 0:G.toString())==null?void 0:H.includes(a.vaClDa))||((F=(U=e==null?void 0:e.members_total)==null?void 0:U.toString())==null?void 0:F.includes(a.vaClDa))||((K=(P=e==null?void 0:e.members_new)==null?void 0:P.toString())==null?void 0:K.includes(a.vaClDa))}),v.value=l.value.length},Le=()=>{var n;l.value=(n=i==null?void 0:i._value)==null?void 0:n.filter(e=>{var o,s,r,m,p,C,f,h,g,x,L,y,D,S,b,I,B,M,A,$,z,j,q,E,N,T,R,V,Y,G,H,U,F,P,K,ae,ne,oe,ie,le,ue,_e,de,re,ce,ve,me,pe,Ce,fe;return((r=e.username.toLowerCase())==null?void 0:r.includes((s=(o=a.vaClDa)==null?void 0:o.toString())==null?void 0:s.toLowerCase()))||((m=e==null?void 0:e.unique_identifier)==null?void 0:m.includes(a.vaClDa))||((p=e==null?void 0:e.Category_Item.unique_identifier)==null?void 0:p.includes(a.vaClDa))||((h=e==null?void 0:e.item_title)==null?void 0:h.toLowerCase().includes((f=(C=a.vaClDa)==null?void 0:C.toString())==null?void 0:f.toLowerCase()))||((y=(g=e==null?void 0:e.category)==null?void 0:g.toLowerCase())==null?void 0:y.includes((L=(x=a.vaClDa)==null?void 0:x.toString())==null?void 0:L.toLowerCase()))||((I=(D=e==null?void 0:e.cat_group)==null?void 0:D.toLowerCase())==null?void 0:I.includes((b=(S=a.vaClDa)==null?void 0:S.toString())==null?void 0:b.toLowerCase()))||(($=(B=e==null?void 0:e.priority)==null?void 0:B.toLowerCase())==null?void 0:$.includes((A=(M=a.vaClDa)==null?void 0:M.toString())==null?void 0:A.toLowerCase()))||((E=(z=e==null?void 0:e.information)==null?void 0:z.toLowerCase())==null?void 0:E.includes((q=(j=a.vaClDa)==null?void 0:j.toString())==null?void 0:q.toLowerCase()))||((V=(N=e==null?void 0:e.visibility)==null?void 0:N.toLowerCase())==null?void 0:V.includes((R=(T=a.vaClDa)==null?void 0:T.toString())==null?void 0:R.toLowerCase()))||((U=(Y=e==null?void 0:e.automatic_status)==null?void 0:Y.toLowerCase())==null?void 0:U.includes((H=(G=a.vaClDa)==null?void 0:G.toString())==null?void 0:H.toLowerCase()))||((ae=(F=e==null?void 0:e.url_1_txt)==null?void 0:F.toLowerCase())==null?void 0:ae.includes((K=(P=a.vaClDa)==null?void 0:P.toString())==null?void 0:K.toLowerCase()))||((le=(ne=e==null?void 0:e.url_1_link)==null?void 0:ne.toLowerCase())==null?void 0:le.includes((ie=(oe=a.vaClDa)==null?void 0:oe.toString())==null?void 0:ie.toLowerCase()))||((re=(ue=e==null?void 0:e.url_2_txt)==null?void 0:ue.toLowerCase())==null?void 0:re.includes((de=(_e=a.vaClDa)==null?void 0:_e.toString())==null?void 0:de.toLowerCase()))||((pe=(ce=e==null?void 0:e.url_2_link)==null?void 0:ce.toLowerCase())==null?void 0:pe.includes((me=(ve=a.vaClDa)==null?void 0:ve.toString())==null?void 0:me.toLowerCase()))||((fe=(Ce=e==null?void 0:e.plan_frequency)==null?void 0:Ce.toString())==null?void 0:fe.includes(a.vaClDa))}),v.value=l.value.length},ye=(n,e)=>{const o=new Date(n);return Ge(o).format(e)},se=async()=>{const{data:n}=await ge(`${ee.API_BASE_URL}information-items/all`,"$W3zfG6LLas");i.value=n.value.data,l.value=n.value.data,v.value=n.value.count,X&&te()},De=async()=>{const n=localStorage.getItem("sometraffic_delete_info"),{data:e,error:o}=await ge(`${ee.API_BASE_URL}information-items/delete/${n}`,{method:"GET",params:{id:n}},"$asSLG4l8GT");e.value&&(d.value=!1,await w.success(e.value.message)),o.value&&(d.value=!1,await w.alert(o.value.statusMessage)),localStorage.removeItem("sometraffic_delete_info"),await se()},Se=async n=>{d.value=!0,localStorage.setItem("sometraffic_delete_info",n)};return Ae(se),(n,e)=>{const o=be;return k(),Z("div",null,[t("div",Ue,[J(c(He),{title:"You can NOT undo this action",modalClass:"confirm-modal",visible:c(d),"onUpdate:visible":e[0]||(e[0]=s=>$e(d)?d.value=s:null),cancelButton:{text:"Cancel"},okButton:{text:"Okay",onclick:()=>De()}},{default:Q(()=>[Fe]),_:1},8,["visible","okButton"]),t("div",Pe,[t("h1",Ke," Information Items list ("+u(c(v))+") ",1),t("div",Oe,[t("div",We,[t("div",Je,[ze(t("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=s=>c(a).vaClDa=s),class:"px-4 py-2 w-80 border-inherit bg-inherit pr-9 focus:outline-none focus:ring focus:border-blue-600 search",placeholder:"Search...",onKeyup:e[2]||(e[2]=qe(s=>Le(),["enter"]))},null,544),[[je,c(a).vaClDa]]),t("button",{class:"absolute inset-y-0 right-0 px-2",onClick:e[3]||(e[3]=s=>xe())},Xe)]),t("button",{class:"flex items-center justify-center px-4 border-l bg-blue-700",onClick:e[4]||(e[4]=s=>te())},ke)])])]),we,t("div",et,[t("table",tt,[st,t("tbody",null,[(k(!0),Z(Ee,null,Ne(c(l),s=>(k(),Z("tr",at,[t("td",nt,[J(o,{to:`/information-items/${s.item_id}`,title:"Edit",class:"hover:text-white"},{default:Q(()=>[he(u(s==null?void 0:s.item_id),1)]),_:2},1032,["to"])]),t("td",ot,[J(o,{to:`/category-items/${s==null?void 0:s.Category_Item.unique_identifier}`,title:"Edit",class:"hover:text-white"},{default:Q(()=>[he(u(s==null?void 0:s.Category_Item.unique_identifier),1)]),_:2},1032,["to"])]),t("td",it,u(s.information.length>90?s.information.slice(0,90)+"...":s.information),1),t("td",lt,u(s==null?void 0:s.Category_Item.category),1),t("td",ut,u(s==null?void 0:s.posts_per_month),1),t("td",_t,u(ye(s==null?void 0:s.timestamp,"YYYY-MM-DD H:m")),1),t("td",dt,[t("div",rt,[J(o,{to:`/information-items/${s.item_id}`,title:"Edit",class:"hover:text-white"},{default:Q(()=>[ct]),_:2},1032,["to"]),t("span",{onClick:r=>Se(s.id),title:"Delete",class:"hover:text-white"},pt,8,vt)])])]))),128))])])])])])}}},yt=Ie(Ct,[["__scopeId","data-v-93928ea1"]]);export{yt as default};