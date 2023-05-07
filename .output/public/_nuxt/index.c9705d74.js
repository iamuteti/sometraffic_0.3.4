import{k as C,r as _,a as D,w as L,q as U,b as h,i as E,e as R,u as n,s as M,h as e,A as P,B as y,C as b,F as j,v as N,j as O,o as g,t as v,m as T}from"./entry.4d41dba5.js";import{u as l}from"./fetch.013f5933.js";import{D as F}from"./index.ae89bd94.js";const V={id:"users_groups"},q=e("div",{class:"text"},"Are you sure?",-1),G={class:"overflow-hidden shadow sm:rounded-md"},H={class:"px-4 py-5 sm:p-6"},K={class:"grid grid-cols-12"},W={class:"col-span-12"},X=["onSubmit"],Y={class:"grid"},z={class:"col-span-12"},J={class:"grid grid-cols-12"},Q=e("div",{class:"col-span-3 w-fit flex items-center text-sm font-medium text-gray-700"}," Name ",-1),Z={class:"col-span-9 px-1.5"},ee={class:"grid grid-cols-12"},se=e("div",{class:"col-span-3 flex items-center text-sm font-medium text-gray-700"}," Description ",-1),te={class:"col-span-9 px-1.5"},oe=e("div",{class:"px-2 py-3 text-right sm:px-2 w-full sm:w-full"},[e("button",{type:"submit",class:"bg-[#bcbcbc] inline-flex justify-end rounded-md border border-transparent py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"}," Submit ")],-1),ae={class:"col-span-12"},ie={class:"overflow-x-auto"},ne={class:"w-full whitespace-nowrap"},de=e("thead",{class:"bg-black/60"},[e("tr",null,[e("th",{class:"text-left py-3 px-2 rounded-l-lg"},"ID"),e("th",{class:"text-left py-3 px-2"},"Name"),e("th",{class:"text-left py-3 px-2"},"Description"),e("th",{class:"text-left py-3 px-2 rounded-r-lg"},"Actions")])],-1),re={class:"border-b border-gray-700",key:"clickdata.id"},le={class:"py-3 px-2"},ce={class:"py-3 px-2"},ue={class:"py-3 px-2"},pe={class:"py-3 px-2"},me={class:"inline-flex items-center space-x-3"},_e=["onClick"],he=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})],-1),ge=[he],ve=["onClick"],fe=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1),xe=[fe],ke={__name:"index",async setup(we){let c,f;const d=T(),i=O("$awn"),{id:p}=C().query,r=_(!1),x=_([]),A=_(0),m=JSON.parse(localStorage.getItem("user")),t=D({id:"",user_id:"",name:"",description:""});if(p){const{data:a}=([c,f]=L(()=>l(`${d.API_BASE_URL}groups/${p}`,{key:p},"$oAw4SAftOf")),c=await c,f(),c);t.id=a.value.id,t.user_id=m.userId,t.name=a.value.name,t.description=a.value.description}const k=async()=>{const a={user_id:m.userId,name:t.name,description:t.description};if(t.id!==""){const{data:s,error:o}=await l(`${d.API_BASE_URL}groups/update/${t.id}`,{method:"PUT",params:{id:t.id},body:a},"$WqaXAfemG5");s.value&&(t.id="",t.name="",t.description="",u(),await i.success(s.value.message)),o.value&&await i.alert(o.value.statusMessage)}else await l(`${d.API_BASE_URL}groups/create`,{method:"POST",body:a},"$7FKX7jOSb0").then(s=>{s.data.value&&(t.id="",t.name="",t.description="",u(),i.success(s.data.value.message)),s.error.value&&(console.log("Error:",s),i.alert(s.error.value))}).catch(s=>{console.log("error",s),i.alert("Unable to save group.")})},u=async()=>{var s;const{data:a}=await l(`${d.API_BASE_URL}groups/all?userid=${m.userId}`,"$h6hmIRjp3D");x.value=a.value,A.value=(s=a.value)==null?void 0:s.length},S=async a=>{const{data:s}=await l(`${d.API_BASE_URL}groups/${a}`,"$B4sKFHDqDh");t.id=s.value.id,t.name=s.value.name,t.description=s.value.description},$=async a=>{r.value=!0,localStorage.setItem("sometraffic_delete_group",a)},B=async()=>{const a=localStorage.getItem("sometraffic_delete_group"),{data:s,error:o}=await l(`${d.API_BASE_URL}groups/delete/${a}`,{method:"GET",params:{id:a}},"$Gvnm0xgY9a");s.value&&(r.value=!1,await i.success(s.value.message)),o.value&&(r.value=!1,await i.alert(o.value.statusMessage)),localStorage.removeItem("sometraffic_delete_group"),await u()};return U(u),(a,s)=>(g(),h("div",V,[E(n(F),{title:"You can NOT undo this action",modalClass:"confirm-modal",visible:n(r),"onUpdate:visible":s[0]||(s[0]=o=>M(r)?r.value=o:null),cancelButton:{text:"Cancel"},okButton:{text:"Okay",onclick:()=>B()}},{default:R(()=>[q]),_:1},8,["visible","okButton"]),e("div",G,[e("div",H,[e("div",K,[e("div",W,[e("form",{onSubmit:P(k,["prevent"])},[e("div",Y,[e("div",z,[e("div",J,[Q,e("div",Z,[y(e("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=o=>n(t).name=o),id:"name",maxlength:"100",class:"bg-[#dddddd] h-10 py-2 px-3 text-gray-900 mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring-indigo-500 sm:text-sm"},null,512),[[b,n(t).name]])])]),e("div",ee,[se,e("div",te,[y(e("textarea",{"onUpdate:modelValue":s[2]||(s[2]=o=>n(t).description=o),id:"description",rows:"6",maxlength:"500",class:"bg-[#dddddd] h-20 py-2 px-3 text-gray-900 mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-gray-800 focus:ring-indigo-500 sm:text-sm"},null,512),[[b,n(t).description]])])]),oe])])],40,X)]),e("div",ae,[e("div",ie,[e("table",ne,[de,e("tbody",null,[(g(!0),h(j,null,N(n(x),o=>{var w;return g(),h("tr",re,[e("td",le,v(o.id),1),e("td",ce,v(o.name),1),e("td",ue,v(((w=o.description)==null?void 0:w.length)>100?o.description.slice(0,100)+"...":o.description),1),e("td",pe,[e("div",me,[e("span",{onClick:I=>S(o.id),title:"Edit",class:"hover:text-white"},ge,8,_e),e("span",{onClick:I=>$(o.id),title:"Delete",class:"hover:text-white"},xe,8,ve)])])])}),128))])])])])])])])]))}};export{ke as default};
