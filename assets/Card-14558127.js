import{c as o,j as s,L as n}from"./index-65af81af.js";const r=o(s.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),i=o(s.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");function c({item:e,type:l,indx:a}){return s.jsxs(n,{onClick:()=>window.scrollTo({top:0}),to:`/flikipedia/${l}/${e.id}`,className:"lg:w-40 hover:lg:w-96 duration-500 z-10 card-link rounded-md bg-neutral-900 hover:lg:scale-[1.03] relative",id:`container-${e.id}`,onMouseEnter:()=>{const t=document.getElementById(`details-${e.id}-${a}`);console.log(t),t.classList.add("show")},onMouseLeave:()=>{document.getElementById(`details-${e.id}-${a}`).classList.remove("show")},children:[s.jsx("img",{loading:"lazy",className:"lg:w-fit w-48 max-w-sm rounded-md duration-500 card",src:e.poster_path&&`https://image.tmdb.org/t/p/w300${e.poster_path}`,alt:e.title}),s.jsxs("div",{className:"card-details",id:`details-${e.id}-${a}`,children:[s.jsx("span",{children:e.title}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-star mr-1","aria-hidden":"true"}),e.vote_average]})]})]})}export{c as C,r as a,i as b};
