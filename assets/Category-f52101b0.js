import{r as s,z as C,D as N,C as T,A as m,j as e,M as w}from"./index-aeeb13f0.js";import{T as g,M as l,S as b,b as M}from"./SoloCard-e717b902.js";import"./useControlled-49e4dae8.js";function P({setLoading:r}){const h=s.useMemo(()=>C({palette:{mode:"dark"}}),[!1]),{state:n}=N(),{header:u,handleErrorAlert:p}=s.useContext(T),[i,v]=s.useState(1),[f,j]=s.useState(99),[a,y]=s.useState(n?n.type:"movie"),[o,d]=s.useState(n?n.category:"popular"),[S,x]=s.useState([]);return s.useEffect(()=>{o!=="popular"&&o!=="top_rated"&&d("popular")},[a]),s.useEffect(()=>{r(!0),m.get(`https://api.themoviedb.org/3/${a}/${o}?language=en-US&page=${i}`,{headers:u}).then(({data:t})=>{x(t.results),j(t.total_pages),r(!1)}).catch(t=>{r(!1),p(!0)})},[o,a]),e.jsx(w,{theme:h,children:e.jsxs("div",{className:"pt-[6.5rem] text-white lg:px-8 md:px-4 px-2",children:[e.jsxs("p",{className:"lg:text-5xl text-3xl font-[500] text-orange-500",children:["Categories in ",a==="movie"?"Movies":"TV Shows"]}),e.jsxs("div",{className:"mt-8 grid grid-cols-12 gap-4",children:[e.jsxs(g,{className:"lg:col-span-3 col-span-6",select:!0,value:o,label:"Category",onChange:({target:t})=>d(t.value),children:[a==="tv"&&e.jsx(l,{value:"airing_today",children:"Airing Today"}),a==="tv"&&e.jsx(l,{value:"on_the_air",children:"On the Air"}),a==="movie"&&e.jsx(l,{value:"now_playing",children:"Now Playing"}),e.jsx(l,{value:"popular",children:"Popular"}),e.jsx(l,{value:"top_rated",children:"Top Rated"}),a==="movie"&&e.jsx(l,{value:"upcoming",children:"Upcoming"})]}),e.jsxs(g,{className:"lg:col-span-3 col-span-6",select:!0,value:a,label:"Type",onChange:({target:t})=>y(t.value),children:[e.jsx(l,{value:"movie",children:"Movies"}),e.jsx(l,{value:"tv",children:"TV Shows"})]})]}),e.jsx("p",{className:"mt-8 text-pedia-500 lg:text-4xl text-3xl",children:"Results"}),e.jsxs("div",{className:"my-4 genre-grid",children:[S.map((t,c)=>e.jsx(b,{element:t,type:a,indx:c},c)),i<f&&e.jsxs("div",{className:"rounded-md mx-auto lg:w-full w-60 lg:text-2xl bg-neutral-950 h-full flex justify-center items-center flex-col gap-4 cursor-pointer",onClick:async()=>{r(!0),v(t=>t+1),m.get(`https://api.themoviedb.org/3/movie/${o}?language=en-US&page=${i+1}`,{headers:u}).then(({data:t})=>{x(c=>[...c,...t.results]),r(!1)}).catch(t=>{r(!1),p(!0)})},style:{aspectRatio:"3/4"},children:[e.jsx("div",{className:"bg-neutral-800 rounded-full p-4",children:e.jsx(M,{fontSize:"large"})}),"View more"]})]})]})})}export{P as default};
