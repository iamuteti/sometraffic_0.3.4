import{_ as q}from"./nuxt-link.a4d01235.js";import{_ as et,a as ot,b as st,c as it,d as at}from"./TasksHistory.e02ee739.js";import{p as rt,j as E,k as O,r as V,q as Y,o as f,b as h,i as d,e as p,u as o,s as lt,h as t,t as v,F as W,v as F,l as u,x as nt,y as dt,z as ct,m as G,w as P,a as ut,A as mt,B as r,C as y,D as T,E as S,G as j,H as k,I as _t,J as pt,K as gt,L as ft}from"./entry.4d41dba5.js";import{u as M}from"./fetch.013f5933.js";import{m as K}from"./index.f023ee0f.js";import{D as ht}from"./index.ae89bd94.js";import{_ as yt}from"./loading.d0a0085e.js";const D=$=>(dt("data-v-d6238d26"),$=$(),ct(),$),vt=D(()=>t("div",{class:"text"}," Are you sure? ",-1)),bt={class:"flex justify-between"},xt={class:"font-bold py-4 capitalize"},wt=D(()=>t("img",{style:{width:"20px","margin-top":"20px"},src:et,class:"information-items"},null,-1)),kt={class:"overflow-x-auto"},$t={class:"w-full whitespace-nowrap"},It=D(()=>t("thead",{class:"bg-black/60"},[t("tr",null,[t("th",{class:"text-left py-3 px-2"},"Info ID"),t("th",{class:"text-left py-3 px-2"},"Item ID"),t("th",{class:"text-left py-3 px-2"},"Information"),t("th",{class:"text-left py-3 px-2"},"Category"),t("th",{class:"text-left py-3 px-2"},"Posts/Month"),t("th",{class:"text-left py-3 px-2"},"Date/Time"),t("th",{class:"text-left py-3 px-2"},"Actions")])],-1)),Ct={class:"border-b border-gray-700",key:"clickdata.id"},At={class:"py-3 px-2"},Mt={class:"py-3 px-2"},Vt={class:"py-3 px-2 tooltip"},Ut={class:"py-3 px-2 capitalize"},Tt={class:"py-3 px-2 capitalize"},St={class:"py-3 px-2 capitalize"},Dt={class:"py-3 px-2"},Lt={class:"inline-flex items-center space-x-3"},zt=D(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})],-1)),Bt=["onClick"],Ht=D(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),jt=[Ht],qt={name:"InformationItems",props:["limit","itemid"]},Rt=Object.assign(qt,{props:{limit:Number,itemid:Number},setup($){const g=$,b=E("$awn"),{id:I}=O().params,m=V(!1),C=V([]),U=V(0),L=G(),z=(l,_)=>{const c=new Date(l);return K(c).format(_)},x=async()=>{const{limit:l,itemid:_}=nt(g),{data:c}=await M(`${L.API_BASE_URL}information-items/all?limit=${l.value}&itemid=${_.value}`,"$bD1cKDODKc");C.value=c.value.data,U.value=c.value.count};Y(x);const A=async()=>{const l=localStorage.getItem("sometraffic_delete_info"),{data:_,error:c}=await M(`${L.API_BASE_URL}information-items/delete/${l}`,{method:"GET",params:{id:l}},"$WlP2Xv7PrS");_.value&&(m.value=!1,await b.success(_.value.message)),c.value&&(m.value=!1,await b.alert(c.value.statusMessage)),localStorage.removeItem("sometraffic_delete_info"),await x()},e=async l=>{m.value=!0,localStorage.setItem("sometraffic_delete_info",l)};return(l,_)=>{const c=q;return f(),h("div",null,[d(o(ht),{title:"You can NOT undo this action",modalClass:"confirm-modal",visible:o(m),"onUpdate:visible":_[0]||(_[0]=a=>lt(m)?m.value=a:null),cancelButton:{text:"Cancel"},okButton:{text:"Okay",onclick:()=>A()}},{default:p(()=>[vt]),_:1},8,["visible","okButton"]),t("div",bt,[t("h1",xt," Information Items ("+v(o(U))+") ",1),d(c,{to:`/information-items?id=${o(I)}`},{default:p(()=>[wt]),_:1},8,["to"])]),t("div",kt,[t("table",$t,[It,t("tbody",null,[(f(!0),h(W,null,F(o(C),a=>(f(),h("tr",Ct,[t("td",At,[d(c,{to:`/information-items/${a.item_id}`,title:"Edit",class:"hover:text-white"},{default:p(()=>[u(v(a==null?void 0:a.item_id),1)]),_:2},1032,["to"])]),t("td",Mt,[d(c,{to:`/category-items/${a==null?void 0:a.Category_Item.unique_identifier}`,title:"Edit",class:"hover:text-white"},{default:p(()=>[u(v(a==null?void 0:a.Category_Item.unique_identifier),1)]),_:2},1032,["to"])]),t("td",Vt,v(a.information.length>90?a.information.slice(0,90)+"...":a.information),1),t("td",Ut,v(a==null?void 0:a.Category_Item.category),1),t("td",Tt,v(a==null?void 0:a.posts_per_month),1),t("td",St,v(z(a==null?void 0:a.timestamp,"YYYY-MM-DD H:m")),1),t("td",Dt,[t("div",Lt,[d(c,{to:`/information-items/${a.item_id}`,title:"Edit",class:"hover:text-white"},{default:p(()=>[zt]),_:2},1032,["to"]),t("span",{onClick:R=>e(a.id),title:"Delete",class:"hover:text-white"},jt,8,Bt)])])]))),128))])])])])}}}),Nt=rt(Rt,[["__scopeId","data-v-d6238d26"]]);const Pt={id:"last-tracking-url"},Et={class:"flex justify-between"},Ot=t("h1",{class:"font-bold py-4 capitalize"},"Update Category Item",-1),Yt={class:"bg-[#bcbcbc] inline-flex justify-center rounded-md border px-4 py-2 mt-4 mr-2 text-black"},Wt={class:"bg-[#bcbcbc] inline-flex justify-center rounded-md border px-4 py-2 mt-4 text-black"},Ft=["onSubmit"],Gt={class:"overflow-hidden shadow sm:rounded-md"},Kt={class:"px-4 py-5 sm:p-6"},Jt={class:"col-span-12"},Qt={class:"grid grid-cols-12"},Xt=t("div",{class:"col-span-3 flex items-center text-sm font-medium text-gray-700"}," Created ",-1),Zt={class:"col-span-3"},te=["value"],ee={class:"col-span-12"},oe={class:"grid grid-cols-12"},se=t("div",{class:"col-span-3 flex items-center text-sm font-medium text-gray-700"}," Item title ",-1),ie={class:"col-span-9"},ae={class:"col-span-12 pt-4"},re={class:"grid grid-cols-12"},le={class:"col-span-3 w-fit flex items-center text-sm font-medium text-gray-700"},ne={class:"basis-1/5 flex items-center text-sm font-medium text-gray-700 pl-3"},de=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"})],-1),ce=[de],ue=["href"],me=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})],-1),_e=[me],pe={class:"col-span-9"},ge={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 ml-2 text-gray-800",style:{display:"inline-block"}},fe=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"},null,-1),he=[fe],ye={src:yt,class:"loading"},ve={class:"col-span-12 py-2"},be={class:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-12 gap-4 gap-x-4"},xe={class:"col-span-3 flex items-center text-sm font-medium text-gray-700"},we={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 ml-2 text-gray-800",style:{display:"inline-block"}},ke=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"},null,-1),$e=[ke],Ie={class:"col-span-9"},Ce=t("option",{value:"facebook"},"Facebook",-1),Ae=t("option",{value:"linkedin"},"LinkedIn",-1),Me=t("option",{value:"meetup"},"Meetup",-1),Ve=t("option",{value:"anything"},"Anything",-1),Ue=[Ce,Ae,Me,Ve],Te={class:"col-span-12 sm:col-span-12 mt-2"},Se={class:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-12 gap-4 gap-x-4"},De={class:"col-span-12 sm:col-span-12"},Le=t("label",{for:"information",class:"block text-sm font-medium text-gray-700"},"Information",-1),ze={class:"col-span-12 mt-2"},Be={class:"flex items-center mb-2"},He=t("label",{for:"default-radio-1",class:"ml-2 text-sm font-medium text-gray-700"},"New found group, no strategy yet.",-1),je={class:"flex items-center"},qe=t("label",{for:"default-radio-2",class:"ml-2 text-sm font-medium text-gray-700"},"This group is inactive, no actions needed.",-1),Re={class:"flex flex-row py-2"},Ne={class:"basis-1/4 flex items-center text-sm font-medium text-gray-700"},Pe={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 ml-2 text-gray-800",style:{display:"inline-block"}},Ee=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"},null,-1),Oe=[Ee],Ye={class:"basis-1/2"},We=["value"],Fe={class:"flex flex-row py-2"},Ge={class:"basis-1/4 flex items-center text-sm font-medium text-gray-700"},Ke={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 ml-2 text-gray-800",style:{display:"inline-block"}},Je=t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"},null,-1),Qe=[Je],Xe={class:"basis-1/3"},Ze={class:"items-center w-full text-sm font-medium text-gray-900 sm:flex"},to={class:"w-full"},eo={class:"flex items-center pl-3"},oo=t("label",{for:"horizontal-list-radio-id",class:"w-full py-3 ml-2 text-sm font-medium text-gray-900"},"Low",-1),so={class:"w-full"},io={class:"flex items-center pl-3"},ao=t("label",{for:"horizontal-list-radio-id",class:"w-full py-3 ml-2 text-sm font-medium text-gray-900"},"Medium",-1),ro={class:"w-full"},lo={class:"flex items-center pl-3"},no=t("label",{for:"horizontal-list-radio-license",class:"w-full py-3 ml-2 text-sm font-medium text-gray-900"},"High ",-1),co={class:"flex flex-row py-2"},uo=t("div",{class:"basis-1/4 flex items-center text-sm font-medium text-gray-700"}," Visibility * ",-1),mo={class:"basis-1/4"},_o={class:"items-center w-full text-sm font-medium text-gray-900 sm:flex"},po={class:"w-full"},go={class:"flex items-center pl-3"},fo=t("label",{for:"horizontal-list-radio-license",class:"w-full py-3 ml-2 text-sm font-medium text-gray-900"},"Private ",-1),ho={class:"w-full"},yo={class:"flex items-center pl-3"},vo=t("label",{for:"horizontal-list-radio-id",class:"w-full py-3 ml-2 text-sm font-medium text-gray-900"},"Public",-1),bo={class:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-12 gap-4 gap-x-4 py-4"},xo={class:"col-span-12"},wo={class:"grid grid-cols-12"},ko=t("div",{class:"col-span-3 w-fit flex items-center text-sm font-medium text-gray-700"}," URL 2 information ",-1),$o={class:"col-span-9 px-1.5"},Io={class:"col-span-12"},Co={class:"grid grid-cols-12"},Ao={class:"col-span-3 w-fit flex items-center text-sm font-medium text-gray-700"},Mo={class:"basis-1/5 flex items-center text-sm font-medium text-gray-700 pl-3"},Vo=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"})],-1),Uo=[Vo],To=["href"],So=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})],-1),Do=[So],Lo={class:"col-span-9 px-1.5"},zo=t("div",{class:"col-span-12"},[t("p",{class:"text-sm font-medium text-gray-700 pt-2"}," Automatic scheduling: ")],-1),Bo={class:"col-span-12"},Ho={class:"grid grid-cols-12"},jo=t("div",{class:"col-span-3 w-fit flex items-center text-sm font-medium text-gray-700"}," Planning frequency ",-1),qo={class:"col-span-5 px-1.5"},Ro=gt('<option disabled> Every 4, 6, 8 hours, 2 days, week, month... </option><option value="4">4 hours</option><option value="6">6 hours</option><option value="8">8 hours</option><option value="12">12 hours</option><option value="24">Daily</option><option value="48">2 days</option><option value="72">3 days</option><option value="120">5 days</option><option value="168">Weekly</option><option value="336">Bi weekly</option><option value="720">Monthly</option><option value="1440">Bi Monthly</option>',13),No=[Ro],Po={class:"col-span-12"},Eo={class:"grid grid-cols-12"},Oo=t("div",{class:"col-span-3 w-fit flex items-center text-sm font-medium text-gray-700"}," Automatic status ",-1),Yo={class:"col-span-3 px-1.5"},Wo={class:"flex items-center relative w-max cursor-pointer select-none"},Fo=t("span",{class:"absolute font-medium text-xs uppercase right-1 text-white"}," OFF ",-1),Go=t("span",{class:"absolute font-medium text-xs uppercase right-8 text-white"}," ON ",-1),Ko=t("span",{class:"w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200"},null,-1),Jo={class:"flex flex-row mt-4"},Qo={class:"basis-1/3 px-1.5"},Xo=["disabled"],Zo={class:"basis-1/3 px-1.5"},ts=["disabled"],es={class:"basis-1/3 px-1.5"},os={class:"flex flex-row"},ss=t("div",{class:"basis-1/4 flex items-center text-sm font-medium text-gray-700"}," Item ID ",-1),is={class:"basis-3/4"},as=["disabled"],rs=t("div",{class:"px-4 py-3 text-right sm:px-6 w-full sm:w-full"},[t("button",{type:"submit",class:"bg-[#bcbcbc] inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"}," Submit ")],-1),ls={id:"tasks_list",class:"shadow sm:rounded-md"},ns={class:"px-4 py-5 sm:p-6"},ds=t("h1",{class:"font-bold py-4 capitalize"},"Tasks",-1),cs={class:"text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"},us={class:"flex flex-wrap -mb-px"},ms={class:"mr-2"},_s={class:"mr-2"},ps={class:"mr-2"},gs={class:"mr-2"},fs={class:"mt-4"},hs={id:"information_items",class:"shadow sm:rounded-md my-4"},ys={class:"px-4 py-5 sm:p-6"},vs={data(){return{tab:1}},methods:{activeTabOne(){this.tab=1},activeTabTwo(){this.tab=2},activeTabThree(){this.tab=3},activeTabFour(){this.tab=4}}},Ms=Object.assign(vs,{__name:"[id]",async setup($){let g,b;const I=E("$awn"),m=G(),{id:C}=([g,b]=P(()=>O().params),g=await g,b(),g);let U=new Date().toLocaleTimeString(),L=localStorage.getItem("user");const z=V([]),x=V(""),A=V(!1);setInterval(()=>{U=new Date().toLocaleTimeString()},10);const e=ut({id:"",username:"",timestamp:U,item_id:"",information:"",category:"",item_title:"",group:"",priority:"",visibility:null,url_1_link:"",url_2_txt:"",url_2_link:"",plan_frequency:"",automatic_status:null,createdAt:""}),{data:l}=([g,b]=P(()=>M(`${m.API_BASE_URL}category-items/identifier/${C}`,{key:C},"$S9TS9Shr5R")),g=await g,b(),g);l.value&&(e.id=l.value.id,e.username=l.value.username,e.timestamp=new Date(l.value.timestamp).toLocaleTimeString(),e.item_id=l.value.unique_identifier,e.information=l.value.information,e.category=l.value.category,e.item_title=l.value.item_title,e.group=l.value.cat_group,e.priority=l.value.priority,e.visibility=l.value.visibility,e.url_1_link=l.value.url_1_link,e.url_2_txt=l.value.url_2_txt,e.url_2_link=l.value.url_2_link,e.plan_frequency=l.value.plan_frequency,e.automatic_status=l.value.automatic_status,e.createdAt=l.value.createdAt);const _=(n,s)=>{const w=new Date(n);return K(w).format(s)},c=async()=>{const n={id:e.id,username:e.username,timestamp:new Date,item_title:e.item_title,unique_identifier:e.item_id,information:e.information,category:e.category,priority:e.priority,cat_group:e.group,visibility:e.visibility,url_1_txt:e.url_1_txt,url_1_link:e.url_1_link,url_2_txt:e.url_2_txt,url_2_link:e.url_2_link,plan_frequency:e.plan_frequency,automatic_status:e.automatic_status},{data:s,error:w}=await M(`${m.API_BASE_URL}category-items/update/${C}`,{method:"PUT",body:n},"$VtRYEvyhMG");s.value&&(console.log("data value",s.value.message),await I.success(s.value.message),ft("/category-items")),w.value&&await I.alert(w.value.statusMessage)},a=async n=>{A.value=!0,isValidUrl(n)&&I.asyncBlock(M(`${m.API_BASE_URL}category-items/all/?url=${n}`,"$ZiR48IHfAs"),s=>{A.value=!1,s.data&&s.data.value.length?x.value="invalid":x.value="valid"})},R=()=>{A.value=!0},N=async n=>{var s=document.getElementById(n);s.select(),s.setSelectionRange(0,99999),navigator.clipboard.writeText(s.value),await I.success(s.value+" copied to clipboard!")};return Y(async()=>{const{data:n}=await M(`${m.API_BASE_URL}groups/all?userid=${JSON.parse(L).userId}`,"$mWPeobaeQo");z.value=n.value}),(n,s)=>{const w=q,B=q,J=ot,Q=st,X=it,Z=at,tt=Nt,H=pt("tooltip");return f(),h("div",null,[t("div",Pt,[t("div",Et,[Ot,t("span",null,[t("button",Yt,[d(w,{to:{path:"/information-items/add",query:{id:o(e).id}}},{default:p(()=>[u("Add Information")]),_:1},8,["to"])]),t("button",Wt,[d(w,{to:{path:"/tasks/add",query:{id:o(e).id,priority:o(e).priority}}},{default:p(()=>[u("Add Task")]),_:1},8,["to"])])])]),t("form",{onSubmit:mt(c,["prevent"])},[t("div",Gt,[t("div",Kt,[t("div",Jt,[t("div",Qt,[Xt,t("div",Zt,[t("input",{type:"text",value:_(o(e).createdAt,"YYYY-MM-DD HH:mm"),class:"bg-[#dddddd] h-10 py-2 px-3 text-gray-900 mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring-indigo-500 sm:text-sm",disabled:""},null,8,te)])])]),t("div",ee,[t("div",oe,[se,t("div",ie,[r(t("input",{placeholder:"Need to enter the title or subject (obligatory)",type:"text","onUpdate:modelValue":s[0]||(s[0]=i=>o(e).item_title=i),id:"item_title",class:"bg-[#dddddd] h-10 py-2 px-3 text-gray-900 mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring-indigo-500 sm:text-sm",required:""},null,512),[[y,o(e).item_title]])])])]),t("div",ae,[t("div",re,[t("div",le,[u(" Item Url "),t("div",ne,[t("button",{type:"button",onClick:s[1]||(s[1]=i=>N("url_1_link")),title:"Copy Command To Clipboard"},ce),t("a",{href:o(e).url_1_link,target:"_blank",rel:"noopener noreferrer",title:"Open To New Tap",class:"pl-2"},_e,8,ue)])]),t("div",pe,[r(t("input",{type:"text",id:"url_1_link","onUpdate:modelValue":s[2]||(s[2]=i=>o(e).url_1_link=i),onChange:s[3]||(s[3]=i=>a(o(e).url_1_link)),onKeypress:s[4]||(s[4]=i=>R(o(e).url_1_link)),class:T(o(x)==="valid"?"bg-[#dddddd] h-10 py-2 px-3 text-gray-900 mt-1 rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring-indigo-500 sm:text-sm input-w-loading valid":o(x)==="invalid"?"bg-[#dddddd] h-10 py-2 px-3 text-gray-900 mt-1 rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring-indigo-500 sm:text-sm input-w-loading invalid":"bg-[#dddddd] h-10 py-2 px-3 text-gray-900 mt-1 rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring-indigo-500 sm:text-sm input-w-loading")},null,34),[[y,o(e).url_1_link]]),r((f(),h("svg",ge,he)),[[H,{content:"<div>When you type or paste a URL here, after you leave the input field (item URL) the database will check if the URL already exists and make it red. Otherwise it will become green. <br />If you paste a new URL and leave, the system will show again that it is checking if it exists and become either green or red again.</div>",html:!0},void 0,{right:!0}]]),r(t("img",ye,null,512),[[S,o(A)===!0]])])])]),t("div",ve,[t("div",be,[t("div",xe,[u(" Category * "),r((f(),h("svg",we,$e)),[[H,{content:"<div>Obligatory, here you have to select what social media platform you are using. If you would like to track traffic from one that is not listed, <br />you can select Anything and put for example Instragram in the title.</div>",html:!0},void 0,{right:!0}]])]),t("div",Ie,[r(t("select",{"onUpdate:modelValue":s[5]||(s[5]=i=>o(e).category=i),id:"category",class:"bg-[#dddddd] h-10 py-2 px-3 text-gray-900 mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring-indigo-500 sm:text-sm",required:""},Ue,512),[[j,o(e).category]])])])]),t("div",Te,[t("div",Se,[t("div",De,[Le,r(t("textarea",{"onUpdate:modelValue":s[6]||(s[6]=i=>o(e).information=i),rows:"6",id:"information",class:"bg-[#dddddd] py-2 px-3 text-gray-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring-indigo-500 sm:text-sm",placeholder:"(free text field, 1000 characters max, about 30 sentenses max) what is the goal of this item or project"},null,512),[[y,o(e).information]])])])]),t("div",ze,[t("div",Be,[r(t("input",{"onUpdate:modelValue":s[7]||(s[7]=i=>o(e).information=i),id:"default-radio-1",type:"radio",value:"New found group, no strategy yet.",name:"default-radio",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,512),[[k,o(e).information]]),He]),t("div",je,[r(t("input",{"onUpdate:modelValue":s[8]||(s[8]=i=>o(e).information=i),id:"default-radio-2",type:"radio",value:"This group is inactive, no actions needed.",name:"default-radio",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,512),[[k,o(e).information]]),qe])]),t("div",null,[t("div",Re,[t("div",Ne,[u(" Group * "),r((f(),h("svg",Pe,Oe)),[[H,{content:`<div>You should try to create some groups to organise the Items in. When you get clicks, you can see how many clicks there were from specific groups created by you.<br />
                          Example for remote working groups: Freelancers, Work from Home, Digital Nomad. You will learn over time what groups give you the most clicks per post. <br />
                          We advise to use 4-6 groups per project.</div>`,html:!0},void 0,{right:!0}]])]),t("div",Ye,[r(t("select",{id:"priority",class:"bg-[#dddddd] h-10 py-2 px-3 text-gray-900 mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring-indigo-500 sm:text-sm","onUpdate:modelValue":s[9]||(s[9]=i=>o(e).group=i)},[(f(!0),h(W,null,F(o(z),i=>(f(),h("option",{value:`${i.id}`},v(i.name),9,We))),256))],512),[[j,o(e).group]])])]),t("div",Fe,[t("div",Ge,[u(" Priority * "),r((f(),h("svg",Ke,Qe)),[[H,{content:"<div>Here you can select what the priority for this item will be. Inactive ones found groups are usually Low priority. <br />Normal groups are Medium and only groups with a lot of potential to get clicks are High. When unsure, you can select medium.</div>",html:!0},void 0,{right:!0}]])]),t("div",Xe,[t("ul",Ze,[t("li",to,[t("div",eo,[r(t("input",{"onUpdate:modelValue":s[10]||(s[10]=i=>o(e).priority=i),id:"horizontal-list-radio-id",type:"radio",value:"3",name:"priority",class:"w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"},null,512),[[k,o(e).priority]]),oo])]),t("li",so,[t("div",io,[r(t("input",{"onUpdate:modelValue":s[11]||(s[11]=i=>o(e).priority=i),id:"horizontal-list-radio-id",type:"radio",value:"2",name:"priority",class:"w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"},null,512),[[k,o(e).priority]]),ao])]),t("li",ro,[t("div",lo,[r(t("input",{"onUpdate:modelValue":s[12]||(s[12]=i=>o(e).priority=i),id:"horizontal-list-radio-license",type:"radio",value:"1",name:"priority",class:"w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"},null,512),[[k,o(e).priority]]),no])])])])]),t("div",co,[uo,t("div",mo,[t("ul",_o,[t("li",po,[t("div",go,[r(t("input",{"onUpdate:modelValue":s[13]||(s[13]=i=>o(e).visibility=i),id:"horizontal-list-radio-license",type:"radio",value:"private",name:"list-radio",class:"w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"},null,512),[[k,o(e).visibility]]),fo])]),t("li",ho,[t("div",yo,[r(t("input",{"onUpdate:modelValue":s[14]||(s[14]=i=>o(e).visibility=i),id:"horizontal-list-radio-id",type:"radio",value:"public",name:"list-radio",class:"w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"},null,512),[[k,o(e).visibility]]),vo])])])])])]),t("div",bo,[t("div",xo,[t("div",wo,[ko,t("div",$o,[r(t("input",{type:"text","onUpdate:modelValue":s[15]||(s[15]=i=>o(e).url_2_txt=i),id:"url_2_txt",class:"bg-[#dddddd] h-10 py-2 px-3 text-gray-900 mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring-indigo-500 sm:text-sm"},null,512),[[y,o(e).url_2_txt]])])])]),t("div",Io,[t("div",Co,[t("div",Ao,[u(" URL 2 link "),t("div",Mo,[t("button",{type:"button",onClick:s[16]||(s[16]=i=>N("url_2_link")),title:"Copy Command To Clipboard"},Uo),t("a",{href:o(e).url_2_link,target:"_blank",rel:"noopener noreferrer",title:"Open To New Tab",class:"pl-2"},Do,8,To)])]),t("div",Lo,[r(t("input",{type:"text","onUpdate:modelValue":s[17]||(s[17]=i=>o(e).url_2_link=i),id:"url_2_link",class:"bg-[#dddddd] h-10 py-2 px-3 text-gray-900 mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring-indigo-500 sm:text-sm"},null,512),[[y,o(e).url_2_link]])])])]),zo,t("div",Bo,[t("div",Ho,[jo,t("div",qo,[r(t("select",{"onUpdate:modelValue":s[18]||(s[18]=i=>o(e).plan_frequency=i),id:"plan_frequency",class:"bg-[#dddddd] h-10 py-2 px-3 text-gray-900 mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring-indigo-500 sm:text-sm"},No,512),[[j,o(e).plan_frequency]])])])])]),t("div",Po,[t("div",Eo,[Oo,t("div",Yo,[t("label",Wo,[r(t("input",{"onUpdate:modelValue":s[19]||(s[19]=i=>o(e).automatic_status=i),id:"automatic_status",type:"checkbox","true-value":"on","false-value":"off",class:"appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 bg-red-500"},null,512),[[_t,o(e).automatic_status]]),Fo,Go,Ko])])])]),t("div",Jo,[t("div",Qo,[r(t("input",{type:"text","onUpdate:modelValue":s[20]||(s[20]=i=>o(e).username=i),disabled:o(e).username,id:"username",class:"bg-[#dddddd] h-10 py-2 px-3 text-gray-900 mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring-indigo-500 sm:text-sm",required:""},null,8,Xo),[[y,o(e).username]])]),t("div",Zo,[r(t("input",{type:"text","onUpdate:modelValue":s[21]||(s[21]=i=>o(e).timestamp=i),disabled:o(e).timestamp,id:"timestamp",class:"bg-[#dddddd] h-10 py-2 px-3 text-gray-900 mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring-indigo-500 sm:text-sm",required:""},null,8,ts),[[y,o(e).timestamp]])]),t("div",es,[t("div",os,[ss,t("div",is,[r(t("input",{type:"text","onUpdate:modelValue":s[22]||(s[22]=i=>o(e).item_id=i),disabled:o(e).item_id,id:"item_id",class:"bg-[#dddddd] h-10 py-2 px-3 text-gray-900 mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring-indigo-500 sm:text-sm",required:""},null,8,as),[[y,o(e).item_id]])])])])])]),rs])],40,Ft),t("div",ls,[t("div",ns,[ds,t("div",cs,[t("ul",us,[t("li",ms,[d(B,{to:"#",onClick:n.activeTabOne,class:T(n.tab===1?"inline-block p-4 text-white border-b-2 border-white rounded-t-lg active dark:text-white dark:border-white":"inline-block p-4 border-b-2 border-transparent rounded-t-lg text-black hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")},{default:p(()=>[u(" All ")]),_:1},8,["onClick","class"])]),t("li",_s,[d(B,{to:"#",onClick:n.activeTabTwo,class:T(n.tab===2?"inline-block p-4 text-white border-b-2 border-white rounded-t-lg active dark:text-white dark:border-white":"inline-block p-4 border-b-2 border-transparent rounded-t-lg text-black hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")},{default:p(()=>[u(" Unscheduled ")]),_:1},8,["onClick","class"])]),t("li",ps,[d(B,{to:"#",onClick:n.activeTabThree,class:T(n.tab===3?"inline-block p-4 text-white border-b-2 border-white rounded-t-lg active dark:text-white dark:border-white":"inline-block p-4 border-b-2 border-transparent rounded-t-lg text-black hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")},{default:p(()=>[u(" Planned ")]),_:1},8,["onClick","class"])]),t("li",gs,[d(B,{to:"#",onClick:n.activeTabFour,class:T(n.tab===4?"inline-block p-4 text-white border-b-2 border-white rounded-t-lg active dark:text-white dark:border-white":"inline-block p-4 border-b-2 border-transparent rounded-t-lg text-black hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")},{default:p(()=>[u(" History ")]),_:1},8,["onClick","class"])])])]),t("div",fs,[r(t("div",null,[d(J,{limit:5,showSearch:!1,itemid:o(e).id},null,8,["itemid"])],512),[[S,n.tab===1]]),r(t("div",null,[d(Q,{limit:5,showSearch:!1,itemid:o(e).id},null,8,["itemid"])],512),[[S,n.tab===2]]),r(t("div",null,[d(X,{limit:5,showSearch:!1,itemid:o(e).id},null,8,["itemid"])],512),[[S,n.tab===3]]),r(t("div",null,[d(Z,{limit:5,showSearch:!1,itemid:o(e).id},null,8,["itemid"])],512),[[S,n.tab===4]])])])]),t("div",hs,[t("div",ys,[d(tt,{limit:5,itemid:o(e).id},null,8,["itemid"])])])])])}}});export{Ms as default};
