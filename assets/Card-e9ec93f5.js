import{c as t,j as a,L as d}from"./index-9dbbceac.js";const l=t(a.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),i=t(a.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");function c({item:e,type:n,indx:s}){return a.jsxs(d,{onClick:()=>window.scrollTo({top:0}),to:`/flikipedia/${n}/${e.id}`,className:"lg:w-40 hover:lg:w-96 duration-500 z-10 card-link rounded-md bg-neutral-900 hover:lg:scale-[1.03] relative",id:`container-${e.id}`,onMouseEnter:()=>{document.getElementById(`details-${e.id}-${s}`).classList.add("show")},onMouseLeave:()=>{document.getElementById(`details-${e.id}-${s}`).classList.remove("show")},children:[a.jsx("img",{loading:"lazy",className:"lg:w-fit w-48 max-w-sm rounded-md duration-500 card",src:e.poster_path&&`https://image.tmdb.org/t/p/w300${e.poster_path}`,alt:e.title??e.name}),a.jsxs("div",{className:"card-details",id:`details-${e.id}-${s}`,children:[a.jsx("span",{children:e.title??e.name}),a.jsxs("span",{children:[a.jsx("i",{className:"fa fa-star mr-1","aria-hidden":"true"}),Math.round(e.vote_average*10)/10]})]})]})}export{c as C,l as a,i as b};