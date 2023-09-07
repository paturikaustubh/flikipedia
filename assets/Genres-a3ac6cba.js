import{r as p,k as Dt,i as pt,l as Qe,w as Nt,_ as g,b as ft,g as gt,s as W,d as C,u as bt,f as Ye,j as n,o as te,q as ht,c as wt,e as q,n as kt,B as Ct,x as ut,y as Oe,z as $t,D as Te,I as Rt,P as Lt,E as jt,F as Et,H as Mt,J as zt,C as _t,A as _e,T as Vt,K as Xe,M as Ve}from"./index-155670d5.js";import{S as Ft,A as Ht}from"./SoloCard-40580336.js";import{P as At}from"./Popper-5db8ebc2.js";const Bt=e=>{const t=p.useRef({});return p.useEffect(()=>{t.current=e}),t.current},Wt=Bt;function yt(e){return typeof e.normalize<"u"?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function Ut(e={}){const{ignoreAccents:t=!0,ignoreCase:s=!0,limit:i,matchFrom:b="any",stringify:$,trim:y=!1}=e;return(f,{inputValue:S,getOptionLabel:R})=>{let P=y?S.trim():S;s&&(P=P.toLowerCase()),t&&(P=yt(P));const I=P?f.filter(J=>{let T=($||R)(J);return s&&(T=T.toLowerCase()),t&&(T=yt(T)),b==="start"?T.indexOf(P)===0:T.indexOf(P)>-1}):f;return typeof i=="number"?I.slice(0,i):I}}function dt(e,t){for(let s=0;s<e.length;s+=1)if(t(e[s]))return s;return-1}const Gt=Ut(),It=5,Kt=e=>{var t;return e.current!==null&&((t=e.current.parentElement)==null?void 0:t.contains(document.activeElement))};function qt(e){const{unstable_isActiveElementInListbox:t=Kt,unstable_classNamePrefix:s="Mui",autoComplete:i=!1,autoHighlight:b=!1,autoSelect:$=!1,blurOnSelect:y=!1,clearOnBlur:f=!e.freeSolo,clearOnEscape:S=!1,componentName:R="useAutocomplete",defaultValue:P=e.multiple?[]:null,disableClearable:I=!1,disableCloseOnSelect:J=!1,disabled:T,disabledItemsFocusable:V=!1,disableListWrap:Q=!1,filterOptions:Ce=Gt,filterSelectedOptions:w=!1,freeSolo:X=!1,getOptionDisabled:U,getOptionLabel:re=a=>{var o;return(o=a.label)!=null?o:a},groupBy:M,handleHomeEndKeys:ce=!e.freeSolo,id:oe,includeInputInList:he=!1,inputValue:u,isOptionEqualToValue:m=(a,o)=>a===o,multiple:x=!1,onChange:pe,onClose:ue,onHighlightChange:Y,onInputChange:ae,onOpen:$e,open:Se,openOnFocus:De=!1,options:D,readOnly:de=!1,selectOnFocus:Ze=!e.freeSolo,value:Ne}=e,F=Dt(oe);let z=re;z=a=>{const o=re(a);return typeof o!="string"?String(o):o};const we=p.useRef(!1),je=p.useRef(!0),j=p.useRef(null),H=p.useRef(null),[Pe,et]=p.useState(null),[G,ke]=p.useState(-1),Fe=b?0:-1,_=p.useRef(Fe),[c,He]=pt({controlled:Ne,default:P,name:R}),[O,me]=pt({controlled:u,default:"",name:R,state:"inputValue"}),[fe,Be]=p.useState(!1),Re=p.useCallback((a,o)=>{if(!(x?c.length<o.length:o!==null)&&!f)return;let r;if(x)r="";else if(o==null)r="";else{const h=z(o);r=typeof h=="string"?h:""}O!==r&&(me(r),ae&&ae(a,r,"reset"))},[z,O,x,ae,me,f,c]),[ge,We]=pt({controlled:Se,default:!1,name:R,state:"open"}),[tt,Ue]=p.useState(!0),Ge=!x&&c!=null&&O===z(c),B=ge&&!de,k=B?Ce(D.filter(a=>!(w&&(x?c:[c]).some(o=>o!==null&&m(a,o)))),{inputValue:Ge&&tt?"":O,getOptionLabel:z}):[],K=Wt({filteredOptions:k,value:c,inputValue:O});p.useEffect(()=>{const a=c!==K.value;fe&&!a||X&&!a||Re(null,c)},[c,Re,fe,K.value,X]);const Ee=ge&&k.length>0&&!de,Le=Qe(a=>{a===-1?j.current.focus():Pe.querySelector(`[data-tag-index="${a}"]`).focus()});p.useEffect(()=>{x&&G>c.length-1&&(ke(-1),Le(-1))},[c,x,G,Le]);function ot(a,o){if(!H.current||a===-1)return-1;let l=a;for(;;){if(o==="next"&&l===k.length||o==="previous"&&l===-1)return-1;const r=H.current.querySelector(`[data-option-index="${l}"]`),h=V?!1:!r||r.disabled||r.getAttribute("aria-disabled")==="true";if(r&&!r.hasAttribute("tabindex")||h)l+=o==="next"?1:-1;else return l}}const Z=Qe(({event:a,index:o,reason:l="auto"})=>{if(_.current=o,o===-1?j.current.removeAttribute("aria-activedescendant"):j.current.setAttribute("aria-activedescendant",`${F}-option-${o}`),Y&&Y(a,o===-1?null:k[o],l),!H.current)return;const r=H.current.querySelector(`[role="option"].${s}-focused`);r&&(r.classList.remove(`${s}-focused`),r.classList.remove(`${s}-focusVisible`));let h=H.current;if(H.current.getAttribute("role")!=="listbox"&&(h=H.current.parentElement.querySelector('[role="listbox"]')),!h)return;if(o===-1){h.scrollTop=0;return}const L=H.current.querySelector(`[data-option-index="${o}"]`);if(L&&(L.classList.add(`${s}-focused`),l==="keyboard"&&L.classList.add(`${s}-focusVisible`),h.scrollHeight>h.clientHeight&&l!=="mouse"&&l!=="touch")){const A=L,ie=h.clientHeight+h.scrollTop,vt=A.offsetTop+A.offsetHeight;vt>ie?h.scrollTop=vt-h.clientHeight:A.offsetTop-A.offsetHeight*(M?1.3:0)<h.scrollTop&&(h.scrollTop=A.offsetTop-A.offsetHeight*(M?1.3:0))}}),ee=Qe(({event:a,diff:o,direction:l="next",reason:r="auto"})=>{if(!B)return;const L=ot((()=>{const A=k.length-1;if(o==="reset")return Fe;if(o==="start")return 0;if(o==="end")return A;const ie=_.current+o;return ie<0?ie===-1&&he?-1:Q&&_.current!==-1||Math.abs(o)>1?0:A:ie>A?ie===A+1&&he?-1:Q||Math.abs(o)>1?A:0:ie})(),l);if(Z({index:L,reason:r,event:a}),i&&o!=="reset")if(L===-1)j.current.value=O;else{const A=z(k[L]);j.current.value=A,A.toLowerCase().indexOf(O.toLowerCase())===0&&O.length>0&&j.current.setSelectionRange(O.length,A.length)}}),at=()=>{const a=(o,l)=>{const r=o?z(o):"",h=l?z(l):"";return r===h};if(_.current!==-1&&K.filteredOptions&&K.filteredOptions.length!==k.length&&K.inputValue===O&&(x?c.length===K.value.length&&K.value.every((o,l)=>z(c[l])===z(o)):a(K.value,c))){const o=K.filteredOptions[_.current];if(o&&k.some(r=>z(r)===z(o)))return!0}return!1},xe=p.useCallback(()=>{if(!B||at())return;const a=x?c[0]:c;if(k.length===0||a==null){ee({diff:"reset"});return}if(H.current){if(a!=null){const o=k[_.current];if(x&&o&&dt(c,r=>m(o,r))!==-1)return;const l=dt(k,r=>m(r,a));l===-1?ee({diff:"reset"}):Z({index:l});return}if(_.current>=k.length-1){Z({index:k.length-1});return}Z({index:_.current})}},[k.length,x?!1:c,w,ee,Z,B,O,x]),lt=Qe(a=>{Nt(H,a),a&&xe()});p.useEffect(()=>{xe()},[xe]);const be=a=>{ge||(We(!0),Ue(!0),$e&&$e(a))},ne=(a,o)=>{ge&&(We(!1),ue&&ue(a,o))},se=(a,o,l,r)=>{if(x){if(c.length===o.length&&c.every((h,L)=>h===o[L]))return}else if(c===o)return;pe&&pe(a,o,l,r),He(o)},ve=p.useRef(!1),ye=(a,o,l="selectOption",r="options")=>{let h=l,L=o;if(x){L=Array.isArray(c)?c.slice():[];const A=dt(L,ie=>m(o,ie));A===-1?L.push(o):r!=="freeSolo"&&(L.splice(A,1),h="removeOption")}Re(a,L),se(a,L,h,{option:o}),!J&&(!a||!a.ctrlKey&&!a.metaKey)&&ne(a,h),(y===!0||y==="touch"&&ve.current||y==="mouse"&&!ve.current)&&j.current.blur()};function rt(a,o){if(a===-1)return-1;let l=a;for(;;){if(o==="next"&&l===c.length||o==="previous"&&l===-1)return-1;const r=Pe.querySelector(`[data-tag-index="${l}"]`);if(!r||!r.hasAttribute("tabindex")||r.disabled||r.getAttribute("aria-disabled")==="true")l+=o==="next"?1:-1;else return l}}const Me=(a,o)=>{if(!x)return;O===""&&ne(a,"toggleInput");let l=G;G===-1?O===""&&o==="previous"&&(l=c.length-1):(l+=o==="next"?1:-1,l<0&&(l=0),l===c.length&&(l=-1)),l=rt(l,o),ke(l),Le(l)},Ke=a=>{we.current=!0,me(""),ae&&ae(a,"","clear"),se(a,x?[]:null,"clear")},nt=a=>o=>{if(a.onKeyDown&&a.onKeyDown(o),!o.defaultMuiPrevented&&(G!==-1&&["ArrowLeft","ArrowRight"].indexOf(o.key)===-1&&(ke(-1),Le(-1)),o.which!==229))switch(o.key){case"Home":B&&ce&&(o.preventDefault(),ee({diff:"start",direction:"next",reason:"keyboard",event:o}));break;case"End":B&&ce&&(o.preventDefault(),ee({diff:"end",direction:"previous",reason:"keyboard",event:o}));break;case"PageUp":o.preventDefault(),ee({diff:-It,direction:"previous",reason:"keyboard",event:o}),be(o);break;case"PageDown":o.preventDefault(),ee({diff:It,direction:"next",reason:"keyboard",event:o}),be(o);break;case"ArrowDown":o.preventDefault(),ee({diff:1,direction:"next",reason:"keyboard",event:o}),be(o);break;case"ArrowUp":o.preventDefault(),ee({diff:-1,direction:"previous",reason:"keyboard",event:o}),be(o);break;case"ArrowLeft":Me(o,"previous");break;case"ArrowRight":Me(o,"next");break;case"Enter":if(_.current!==-1&&B){const l=k[_.current],r=U?U(l):!1;if(o.preventDefault(),r)return;ye(o,l,"selectOption"),i&&j.current.setSelectionRange(j.current.value.length,j.current.value.length)}else X&&O!==""&&Ge===!1&&(x&&o.preventDefault(),ye(o,O,"createOption","freeSolo"));break;case"Escape":B?(o.preventDefault(),o.stopPropagation(),ne(o,"escape")):S&&(O!==""||x&&c.length>0)&&(o.preventDefault(),o.stopPropagation(),Ke(o));break;case"Backspace":if(x&&!de&&O===""&&c.length>0){const l=G===-1?c.length-1:G,r=c.slice();r.splice(l,1),se(o,r,"removeOption",{option:c[l]})}break;case"Delete":if(x&&!de&&O===""&&c.length>0&&G!==-1){const l=G,r=c.slice();r.splice(l,1),se(o,r,"removeOption",{option:c[l]})}break}},st=a=>{Be(!0),De&&!we.current&&be(a)},it=a=>{if(t(H)){j.current.focus();return}Be(!1),je.current=!0,we.current=!1,$&&_.current!==-1&&B?ye(a,k[_.current],"blur"):$&&X&&O!==""?ye(a,O,"blur","freeSolo"):f&&Re(a,c),ne(a,"blur")},ze=a=>{const o=a.target.value;O!==o&&(me(o),Ue(!1),ae&&ae(a,o,"input")),o===""?!I&&!x&&se(a,null,"clear"):be(a)},E=a=>{const o=Number(a.currentTarget.getAttribute("data-option-index"));_.current!==o&&Z({event:a,index:o,reason:"mouse"})},N=a=>{Z({event:a,index:Number(a.currentTarget.getAttribute("data-option-index")),reason:"touch"}),ve.current=!0},le=a=>{const o=Number(a.currentTarget.getAttribute("data-option-index"));ye(a,k[o],"selectOption"),ve.current=!1},mt=a=>o=>{const l=c.slice();l.splice(a,1),se(o,l,"removeOption",{option:c[a]})},qe=a=>{ge?ne(a,"toggleInput"):be(a)},xt=a=>{a.currentTarget.contains(a.target)&&a.target.getAttribute("id")!==F&&a.preventDefault()},ct=a=>{a.currentTarget.contains(a.target)&&(j.current.focus(),Ze&&je.current&&j.current.selectionEnd-j.current.selectionStart===0&&j.current.select(),je.current=!1)},Je=a=>{!T&&(O===""||!ge)&&qe(a)};let Ie=X&&O.length>0;Ie=Ie||(x?c.length>0:c!==null);let Ae=k;return M&&(Ae=k.reduce((a,o,l)=>{const r=M(o);return a.length>0&&a[a.length-1].group===r?a[a.length-1].options.push(o):a.push({key:l,index:l,group:r,options:[o]}),a},[])),T&&fe&&it(),{getRootProps:(a={})=>g({"aria-owns":Ee?`${F}-listbox`:null},a,{onKeyDown:nt(a),onMouseDown:xt,onClick:ct}),getInputLabelProps:()=>({id:`${F}-label`,htmlFor:F}),getInputProps:()=>({id:F,value:O,onBlur:it,onFocus:st,onChange:ze,onMouseDown:Je,"aria-activedescendant":B?"":null,"aria-autocomplete":i?"both":"list","aria-controls":Ee?`${F}-listbox`:void 0,"aria-expanded":Ee,autoComplete:"off",ref:j,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:T}),getClearProps:()=>({tabIndex:-1,onClick:Ke}),getPopupIndicatorProps:()=>({tabIndex:-1,onClick:qe}),getTagProps:({index:a})=>g({key:a,"data-tag-index":a,tabIndex:-1},!de&&{onDelete:mt(a)}),getListboxProps:()=>({role:"listbox",id:`${F}-listbox`,"aria-labelledby":`${F}-label`,ref:lt,onMouseDown:a=>{a.preventDefault()}}),getOptionProps:({index:a,option:o})=>{const l=(x?c:[c]).some(h=>h!=null&&m(o,h)),r=U?U(o):!1;return{key:z(o),tabIndex:-1,role:"option",id:`${F}-option-${a}`,onMouseMove:E,onClick:le,onTouchStart:N,"data-option-index":a,"aria-disabled":r,"aria-selected":l}},id:F,inputValue:O,value:c,dirty:Ie,expanded:B&&Pe,popupOpen:B,focused:fe||G!==-1,anchorEl:Pe,setAnchorEl:et,focusedTag:G,groupedOptions:Ae}}function Jt(e){return ft("MuiListSubheader",e)}gt("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const Qt=["className","color","component","disableGutters","disableSticky","inset"],Xt=e=>{const{classes:t,color:s,disableGutters:i,inset:b,disableSticky:$}=e,y={root:["root",s!=="default"&&`color${C(s)}`,!i&&"gutters",b&&"inset",!$&&"sticky"]};return ht(y,Jt,t)},Yt=W("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.color!=="default"&&t[`color${C(s.color)}`],!s.disableGutters&&t.gutters,s.inset&&t.inset,!s.disableSticky&&t.sticky]}})(({theme:e,ownerState:t})=>g({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(e.vars||e).palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},t.color==="primary"&&{color:(e.vars||e).palette.primary.main},t.color==="inherit"&&{color:"inherit"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.inset&&{paddingLeft:72},!t.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(e.vars||e).palette.background.paper})),Tt=p.forwardRef(function(t,s){const i=bt({props:t,name:"MuiListSubheader"}),{className:b,color:$="default",component:y="li",disableGutters:f=!1,disableSticky:S=!1,inset:R=!1}=i,P=Ye(i,Qt),I=g({},i,{color:$,component:y,disableGutters:f,disableSticky:S,inset:R}),J=Xt(I);return n.jsx(Yt,g({as:y,className:te(J.root,b),ref:s,ownerState:I},P))});Tt.muiSkipListHighlight=!0;const Zt=Tt,eo=wt(n.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function to(e){return ft("MuiChip",e)}const oo=gt("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),v=oo,ao=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],lo=e=>{const{classes:t,disabled:s,size:i,color:b,iconColor:$,onDelete:y,clickable:f,variant:S}=e,R={root:["root",S,s&&"disabled",`size${C(i)}`,`color${C(b)}`,f&&"clickable",f&&`clickableColor${C(b)}`,y&&"deletable",y&&`deletableColor${C(b)}`,`${S}${C(b)}`],label:["label",`label${C(i)}`],avatar:["avatar",`avatar${C(i)}`,`avatarColor${C(b)}`],icon:["icon",`icon${C(i)}`,`iconColor${C($)}`],deleteIcon:["deleteIcon",`deleteIcon${C(i)}`,`deleteIconColor${C(b)}`,`deleteIcon${C(S)}Color${C(b)}`]};return ht(R,to,t)},ro=W("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e,{color:i,iconColor:b,clickable:$,onDelete:y,size:f,variant:S}=s;return[{[`& .${v.avatar}`]:t.avatar},{[`& .${v.avatar}`]:t[`avatar${C(f)}`]},{[`& .${v.avatar}`]:t[`avatarColor${C(i)}`]},{[`& .${v.icon}`]:t.icon},{[`& .${v.icon}`]:t[`icon${C(f)}`]},{[`& .${v.icon}`]:t[`iconColor${C(b)}`]},{[`& .${v.deleteIcon}`]:t.deleteIcon},{[`& .${v.deleteIcon}`]:t[`deleteIcon${C(f)}`]},{[`& .${v.deleteIcon}`]:t[`deleteIconColor${C(i)}`]},{[`& .${v.deleteIcon}`]:t[`deleteIcon${C(S)}Color${C(i)}`]},t.root,t[`size${C(f)}`],t[`color${C(i)}`],$&&t.clickable,$&&i!=="default"&&t[`clickableColor${C(i)})`],y&&t.deletable,y&&i!=="default"&&t[`deletableColor${C(i)}`],t[S],t[`${S}${C(i)}`]]}})(({theme:e,ownerState:t})=>{const s=e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300];return g({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${v.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${v.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:s,fontSize:e.typography.pxToRem(12)},[`& .${v.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${v.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${v.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${v.icon}`]:g({marginLeft:5,marginRight:-6},t.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},t.iconColor===t.color&&g({color:e.vars?e.vars.palette.Chip.defaultIconColor:s},t.color!=="default"&&{color:"inherit"})),[`& .${v.deleteIcon}`]:g({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:q(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:q(e.palette.text.primary,.4)}},t.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},t.color!=="default"&&{color:e.vars?`rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)`:q(e.palette[t.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[t.color].contrastText}})},t.size==="small"&&{height:24},t.color!=="default"&&{backgroundColor:(e.vars||e).palette[t.color].main,color:(e.vars||e).palette[t.color].contrastText},t.onDelete&&{[`&.${v.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:q(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},t.onDelete&&t.color!=="default"&&{[`&.${v.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}})},({theme:e,ownerState:t})=>g({},t.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:q(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${v.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:q(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},t.clickable&&t.color!=="default"&&{[`&:hover, &.${v.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}}),({theme:e,ownerState:t})=>g({},t.variant==="outlined"&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${v.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${v.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${v.avatar}`]:{marginLeft:4},[`& .${v.avatarSmall}`]:{marginLeft:2},[`& .${v.icon}`]:{marginLeft:4},[`& .${v.iconSmall}`]:{marginLeft:2},[`& .${v.deleteIcon}`]:{marginRight:5},[`& .${v.deleteIconSmall}`]:{marginRight:3}},t.variant==="outlined"&&t.color!=="default"&&{color:(e.vars||e).palette[t.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`:q(e.palette[t.color].main,.7)}`,[`&.${v.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:q(e.palette[t.color].main,e.palette.action.hoverOpacity)},[`&.${v.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:q(e.palette[t.color].main,e.palette.action.focusOpacity)},[`& .${v.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`:q(e.palette[t.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[t.color].main}}})),no=W("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,t)=>{const{ownerState:s}=e,{size:i}=s;return[t.label,t[`label${C(i)}`]]}})(({ownerState:e})=>g({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},e.size==="small"&&{paddingLeft:8,paddingRight:8}));function Ot(e){return e.key==="Backspace"||e.key==="Delete"}const so=p.forwardRef(function(t,s){const i=bt({props:t,name:"MuiChip"}),{avatar:b,className:$,clickable:y,color:f="default",component:S,deleteIcon:R,disabled:P=!1,icon:I,label:J,onClick:T,onDelete:V,onKeyDown:Q,onKeyUp:Ce,size:w="medium",variant:X="filled",tabIndex:U,skipFocusWhenDisabled:re=!1}=i,M=Ye(i,ao),ce=p.useRef(null),oe=kt(ce,s),he=D=>{D.stopPropagation(),V&&V(D)},u=D=>{D.currentTarget===D.target&&Ot(D)&&D.preventDefault(),Q&&Q(D)},m=D=>{D.currentTarget===D.target&&(V&&Ot(D)?V(D):D.key==="Escape"&&ce.current&&ce.current.blur()),Ce&&Ce(D)},x=y!==!1&&T?!0:y,pe=x||V?Ct:S||"div",ue=g({},i,{component:pe,disabled:P,size:w,color:f,iconColor:p.isValidElement(I)&&I.props.color||f,onDelete:!!V,clickable:x,variant:X}),Y=lo(ue),ae=pe===Ct?g({component:S||"div",focusVisibleClassName:Y.focusVisible},V&&{disableRipple:!0}):{};let $e=null;V&&($e=R&&p.isValidElement(R)?p.cloneElement(R,{className:te(R.props.className,Y.deleteIcon),onClick:he}):n.jsx(eo,{className:te(Y.deleteIcon),onClick:he}));let Se=null;b&&p.isValidElement(b)&&(Se=p.cloneElement(b,{className:te(Y.avatar,b.props.className)}));let De=null;return I&&p.isValidElement(I)&&(De=p.cloneElement(I,{className:te(Y.icon,I.props.className)})),n.jsxs(ro,g({as:pe,className:te(Y.root,$),disabled:x&&P?!0:void 0,onClick:T,onKeyDown:u,onKeyUp:m,ref:oe,tabIndex:re&&P?-1:U,ownerState:ue},ae,M,{children:[Se||De,n.jsx(no,{className:te(Y.label),ownerState:ue,children:J}),$e]}))}),io=so;function co(e){return ft("MuiAutocomplete",e)}const po=gt("MuiAutocomplete",["root","expanded","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]),d=po;var St,Pt;const uo=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","slotProps","value"],fo=["ref"],go=e=>{const{classes:t,disablePortal:s,expanded:i,focused:b,fullWidth:$,hasClearIcon:y,hasPopupIcon:f,inputFocused:S,popupOpen:R,size:P}=e,I={root:["root",i&&"expanded",b&&"focused",$&&"fullWidth",y&&"hasClearIcon",f&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",S&&"inputFocused"],tag:["tag",`tagSize${C(P)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",R&&"popupIndicatorOpen"],popper:["popper",s&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return ht(I,co,t)},bo=W("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e,{fullWidth:i,hasClearIcon:b,hasPopupIcon:$,inputFocused:y,size:f}=s;return[{[`& .${d.tag}`]:t.tag},{[`& .${d.tag}`]:t[`tagSize${C(f)}`]},{[`& .${d.inputRoot}`]:t.inputRoot},{[`& .${d.input}`]:t.input},{[`& .${d.input}`]:y&&t.inputFocused},t.root,i&&t.fullWidth,$&&t.hasPopupIcon,b&&t.hasClearIcon]}})(({ownerState:e})=>g({[`&.${d.focused} .${d.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${d.clearIndicator}`]:{visibility:"visible"}}},e.fullWidth&&{width:"100%"},{[`& .${d.tag}`]:g({margin:3,maxWidth:"calc(100% - 6px)"},e.size==="small"&&{margin:2,maxWidth:"calc(100% - 4px)"}),[`& .${d.inputRoot}`]:{flexWrap:"wrap",[`.${d.hasPopupIcon}&, .${d.hasClearIcon}&`]:{paddingRight:26+4},[`.${d.hasPopupIcon}.${d.hasClearIcon}&`]:{paddingRight:52+4},[`& .${d.input}`]:{width:0,minWidth:30}},[`& .${ut.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${ut.root}.${Oe.sizeSmall}`]:{[`& .${ut.input}`]:{padding:"2px 4px 3px 0"}},[`& .${$t.root}`]:{padding:9,[`.${d.hasPopupIcon}&, .${d.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${d.hasPopupIcon}.${d.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${d.input}`]:{padding:"7.5px 4px 7.5px 5px"},[`& .${d.endAdornment}`]:{right:9}},[`& .${$t.root}.${Oe.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${d.input}`]:{padding:"2.5px 4px 2.5px 8px"}},[`& .${Te.root}`]:{paddingTop:19,paddingLeft:8,[`.${d.hasPopupIcon}&, .${d.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${d.hasPopupIcon}.${d.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${Te.input}`]:{padding:"7px 4px"},[`& .${d.endAdornment}`]:{right:9}},[`& .${Te.root}.${Oe.sizeSmall}`]:{paddingBottom:1,[`& .${Te.input}`]:{padding:"2.5px 4px"}},[`& .${Oe.hiddenLabel}`]:{paddingTop:8},[`& .${Te.root}.${Oe.hiddenLabel}`]:{paddingTop:0,paddingBottom:0,[`& .${d.input}`]:{paddingTop:16,paddingBottom:17}},[`& .${Te.root}.${Oe.hiddenLabel}.${Oe.sizeSmall}`]:{[`& .${d.input}`]:{paddingTop:8,paddingBottom:9}},[`& .${d.input}`]:g({flexGrow:1,textOverflow:"ellipsis",opacity:0},e.inputFocused&&{opacity:1})})),ho=W("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(e,t)=>t.endAdornment})({position:"absolute",right:0,top:"calc(50% - 14px)"}),mo=W(Rt,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(e,t)=>t.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),xo=W(Rt,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:e},t)=>g({},t.popupIndicator,e.popupOpen&&t.popupIndicatorOpen)})(({ownerState:e})=>g({padding:2,marginRight:-2},e.popupOpen&&{transform:"rotate(180deg)"})),vo=W(At,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[{[`& .${d.option}`]:t.option},t.popper,s.disablePortal&&t.popperDisablePortal]}})(({theme:e,ownerState:t})=>g({zIndex:(e.vars||e).zIndex.modal},t.disablePortal&&{position:"absolute"})),Co=W(Lt,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(e,t)=>t.paper})(({theme:e})=>g({},e.typography.body1,{overflow:"auto"})),$o=W("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(e,t)=>t.loading})(({theme:e})=>({color:(e.vars||e).palette.text.secondary,padding:"14px 16px"})),yo=W("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(e,t)=>t.noOptions})(({theme:e})=>({color:(e.vars||e).palette.text.secondary,padding:"14px 16px"})),Io=W("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(e,t)=>t.listbox})(({theme:e})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",[`& .${d.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[e.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${d.focused}`]:{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${d.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:q(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${d.focused}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:q(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${d.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:q(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}}})),Oo=W(Zt,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(e,t)=>t.groupLabel})(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,top:-8})),So=W("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(e,t)=>t.groupUl})({padding:0,[`& .${d.option}`]:{paddingLeft:24}}),Po=p.forwardRef(function(t,s){var i,b,$,y;const f=bt({props:t,name:"MuiAutocomplete"}),{autoComplete:S=!1,autoHighlight:R=!1,autoSelect:P=!1,blurOnSelect:I=!1,ChipProps:J,className:T,clearIcon:V=St||(St=n.jsx(jt,{fontSize:"small"})),clearOnBlur:Q=!f.freeSolo,clearOnEscape:Ce=!1,clearText:w="Clear",closeText:X="Close",componentsProps:U={},defaultValue:re=f.multiple?[]:null,disableClearable:M=!1,disableCloseOnSelect:ce=!1,disabled:oe=!1,disabledItemsFocusable:he=!1,disableListWrap:u=!1,disablePortal:m=!1,filterSelectedOptions:x=!1,forcePopupIcon:pe="auto",freeSolo:ue=!1,fullWidth:Y=!1,getLimitTagsText:ae=l=>`+${l}`,getOptionLabel:$e,groupBy:Se,handleHomeEndKeys:De=!f.freeSolo,includeInputInList:D=!1,limitTags:de=-1,ListboxComponent:Ze="ul",ListboxProps:Ne,loading:F=!1,loadingText:z="Loading…",multiple:we=!1,noOptionsText:je="No options",openOnFocus:j=!1,openText:H="Open",PaperComponent:Pe=Lt,PopperComponent:et=At,popupIcon:G=Pt||(Pt=n.jsx(Et,{})),readOnly:ke=!1,renderGroup:Fe,renderInput:_,renderOption:c,renderTags:He,selectOnFocus:O=!f.freeSolo,size:me="medium",slotProps:fe={}}=f,Be=Ye(f,uo),{getRootProps:Re,getInputProps:ge,getInputLabelProps:We,getPopupIndicatorProps:tt,getClearProps:Ue,getTagProps:Ge,getListboxProps:B,getOptionProps:k,value:K,dirty:Ee,expanded:Le,id:ot,popupOpen:Z,focused:ee,focusedTag:at,anchorEl:xe,setAnchorEl:lt,inputValue:be,groupedOptions:ne}=qt(g({},f,{componentName:"Autocomplete"})),se=!M&&!oe&&Ee&&!ke,ve=(!ue||pe===!0)&&pe!==!1,{onMouseDown:ye}=ge(),{ref:rt}=Ne??{},Me=B(),{ref:Ke}=Me,nt=Ye(Me,fo),st=kt(Ke,rt),ze=$e||(l=>{var r;return(r=l.label)!=null?r:l}),E=g({},f,{disablePortal:m,expanded:Le,focused:ee,fullWidth:Y,getOptionLabel:ze,hasClearIcon:se,hasPopupIcon:ve,inputFocused:at===-1,popupOpen:Z,size:me}),N=go(E);let le;if(we&&K.length>0){const l=r=>g({className:N.tag,disabled:oe},Ge(r));He?le=He(K,l,E):le=K.map((r,h)=>n.jsx(io,g({label:ze(r),size:me},l({index:h}),J)))}if(de>-1&&Array.isArray(le)){const l=le.length-de;!ee&&l>0&&(le=le.splice(0,de),le.push(n.jsx("span",{className:N.tag,children:ae(l)},le.length)))}const qe=Fe||(l=>n.jsxs("li",{children:[n.jsx(Oo,{className:N.groupLabel,ownerState:E,component:"div",children:l.group}),n.jsx(So,{className:N.groupUl,ownerState:E,children:l.children})]},l.key)),ct=c||((l,r)=>n.jsx("li",g({},l,{children:ze(r)}))),Je=(l,r)=>{const h=k({option:l,index:r});return ct(g({},h,{className:N.option}),l,{selected:h["aria-selected"],index:r,inputValue:be},E)},Ie=(i=fe.clearIndicator)!=null?i:U.clearIndicator,Ae=(b=fe.paper)!=null?b:U.paper,a=($=fe.popper)!=null?$:U.popper,o=(y=fe.popupIndicator)!=null?y:U.popupIndicator;return n.jsxs(p.Fragment,{children:[n.jsx(bo,g({ref:s,className:te(N.root,T),ownerState:E},Re(Be),{children:_({id:ot,disabled:oe,fullWidth:!0,size:me==="small"?"small":void 0,InputLabelProps:We(),InputProps:g({ref:lt,className:N.inputRoot,startAdornment:le,onClick:l=>{l.target===l.currentTarget&&ye(l)}},(se||ve)&&{endAdornment:n.jsxs(ho,{className:N.endAdornment,ownerState:E,children:[se?n.jsx(mo,g({},Ue(),{"aria-label":w,title:w,ownerState:E},Ie,{className:te(N.clearIndicator,Ie==null?void 0:Ie.className),children:V})):null,ve?n.jsx(xo,g({},tt(),{disabled:oe,"aria-label":Z?X:H,title:Z?X:H,ownerState:E},o,{className:te(N.popupIndicator,o==null?void 0:o.className),children:G})):null]})}),inputProps:g({className:N.input,disabled:oe,readOnly:ke},ge())})})),xe?n.jsx(vo,g({as:et,disablePortal:m,style:{width:xe?xe.clientWidth:null},ownerState:E,role:"presentation",anchorEl:xe,open:Z},a,{className:te(N.popper,a==null?void 0:a.className),children:n.jsxs(Co,g({ownerState:E,as:Pe},Ae,{className:te(N.paper,Ae==null?void 0:Ae.className),children:[F&&ne.length===0?n.jsx($o,{className:N.loading,ownerState:E,children:z}):null,ne.length===0&&!ue&&!F?n.jsx(yo,{className:N.noOptions,ownerState:E,role:"presentation",onMouseDown:l=>{l.preventDefault()},children:je}):null,ne.length>0?n.jsx(Io,g({as:Ze,className:N.listbox,ownerState:E},nt,Ne,{ref:st,children:ne.map((l,r)=>Se?qe({key:l.key,group:l.group,children:l.options.map((h,L)=>Je(h,l.index+L))}):Je(l,r))})):null]}))})):null]})}),ko=Po;function To({setLoading:e}){const t=p.useMemo(()=>Mt({palette:{mode:"dark"}}),[!1]),s=zt(),{adult:i,header:b,handleErrorAlert:$}=p.useContext(_t),y=[{value:"popularity.asc",option:"Popularity ASC"},{value:"popularity.desc",option:"Popularity DESC"},{value:"revenue.asc",option:"Revenue ASC"},{value:"revenue.desc",option:"Revenue DESC"},{value:"primary_release_date.asc",option:"Primary release date ASC"},{value:"primary_release_date.desc",option:"Primary release date DESC"},{value:"vote_average.asc",option:"Vote average ASC"},{value:"vote_average.desc",option:"Vote average DESC"},{value:"vote_count.asc",option:"Vote count ASC"},{value:"vote_count.desc",option:"Vote count DESC"}],[f,S]=p.useState(39848),[R,P]=p.useState(99),[I,J]=p.useState(s.state?s.state.genres:[]),[T,V]=p.useState([]),[Q,Ce]=p.useState("%2C"),[w,X]=p.useState(s.state?s.state.type:"movie"),[U,re]=p.useState([]),[M,ce]=p.useState("popularity.desc"),[oe,he]=p.useState(!0);return p.useEffect(()=>{e(!0),_e.get(`https://api.themoviedb.org/3/genre/${w}/list?language=en`,{headers:b}).then(({data:m})=>{V(m.genres)}).catch(m=>{$(!0)}),J([]);async function u(){await _e.get(`https://api.themoviedb.org/3/discover/${w}?include_adult=${i}&include_video=false&language=en-US&page=1&sort_by=${M}`,{headers:b}).then(({data:m})=>{re(m.results),P(m.total_pages),e(!1)}).catch(m=>{e(!1),$(!0)})}u(),S(1)},[w]),p.useEffect(()=>{if(oe)he(!1);else{e(!0);async function u(){await _e.get(`https://api.themoviedb.org/3/discover/${w}?include_adult=${i}&include_video=false&language=en-US&page=1&sort_by=${M}${I.length>0?`&with_genres=${I.map(m=>m).join(Q)}`:""}`,{headers:b}).then(({data:m})=>{re(m.results),P(m.total_pages),e(!1)}).catch(m=>{e(!1),$(!0)})}u(),S(1)}},[i,M,Q]),n.jsx(Vt,{theme:t,children:n.jsxs("div",{className:"pt-[6.5rem] text-white lg:px-8 md:px-4 px-2",children:[n.jsxs("p",{className:"lg:text-5xl text-3xl font-[500] text-orange-500",children:["Genres in ",w==="movie"?"Movies":"TV Shows"]}),n.jsxs("div",{className:"mt-8 grid grid-cols-12 gap-4",children:[n.jsx("div",{className:"lg:col-span-8 md:col-span-6 col-span-12 items-center",children:n.jsx(ko,{size:"medium",multiple:!0,disableCloseOnSelect:!0,id:"genre-selector",options:T,value:T.filter(({id:u})=>I.includes(u)),getOptionLabel:u=>u.name,onChange:(u,m)=>J(m.map(({id:x})=>x)),renderInput:u=>n.jsx(Xe,{...u,label:"Genres"})})}),n.jsx("div",{className:"lg:col-span-2 md:col-span-3 col-span-6 w-full",children:n.jsxs(Xe,{select:!0,value:Q,className:"w-full",onChange:({target:u})=>Ce(u.value),disabled:I.length<2,label:"Include genres as",children:[n.jsx(Ve,{value:"%2C",children:"And"}),n.jsx(Ve,{value:"%7C",children:"Or"})]})}),n.jsx("div",{className:"lg:col-span-2 md:col-span-3 col-span-6 w-full",children:n.jsxs(Xe,{select:!0,value:w,className:"w-full",onChange:({target:u})=>X(u.value),label:"Type",children:[n.jsx(Ve,{value:"movie",children:"Movies"}),n.jsx(Ve,{value:"tv",children:"TV Shows"})]})})]}),n.jsx("div",{className:"flex justify-end mt-2 gap-4 items-center",children:n.jsx("div",{className:"lg:text-xl text-fliki-500 border-2 border-fliki-500 rounded-md px-4 py-2 cursor-pointer hover:text-neutral-900 hover:bg-fliki-500 duration-200",onClick:()=>{e(!0),document.getElementById("genre-img").classList.add("hide"),_e.get(`https://api.themoviedb.org/3/discover/${w}?include_adult=${i}&include_video=false&language=en-US&page=1&sort_by=${M}${I.length>0?`&with_genres=${I.map(u=>u).join(Q)}`:""}`,{headers:b}).then(({data:u})=>{re(u.results),document.getElementById("genre-img").classList.remove("hide"),e(!1)}).catch(u=>{e(!1),$(!0)})},children:"Search"})}),n.jsxs("div",{className:"flex gap-4 mt-12 justify-between items-center",children:[n.jsx("div",{className:"lg:text-4xl text-3xl text-pedia-500 font-[500]",children:"Results"}),n.jsx(Xe,{select:!0,value:M,onChange:({target:u})=>ce(u.value),label:"Sort by",children:y.map(({value:u,option:m},x)=>n.jsx(Ve,{value:u,children:m},x))})]}),n.jsxs("div",{className:"my-4 genre-grid mx-auto",children:[U.map((u,m)=>n.jsx(Ft,{element:u,type:w,indx:m},m)),f<R&&n.jsxs("div",{className:"rounded-md mx-auto w-full lg:text-2xl bg-neutral-950 h-full flex justify-center items-center flex-col gap-4 cursor-pointer",onClick:async()=>{e(!0),S(u=>u+1),_e.get(`https://api.themoviedb.org/3/discover/${w}?include_adult=${i}&include_video=false&language=en-US&page=${f+1}&sort_by=${M}${I.length>0?`&with_genres=${I.map(u=>u.id).join(Q)}`:""}`,{headers:b}).then(({data:u})=>{re(m=>[...m,...u.results]),e(!1)}).catch(u=>{e(!1),$(!0)})},style:{aspectRatio:"3/4"},children:[n.jsx("div",{className:"bg-neutral-800 rounded-full p-4",children:n.jsx(Ht,{fontSize:"large"})}),"View more"]})]})]})})}export{To as default};
