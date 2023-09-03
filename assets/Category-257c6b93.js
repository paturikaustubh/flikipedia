import{r as s,y as S,z as C,C as N,A as x,j as e,I as T}from"./index-052b190b.js";import{T as g,M as l,S as w,b}from"./SoloCard-910800cb.js";import"./Grow-4282cd1e.js";function A({setLoading:o}){const m=s.useMemo(()=>S({palette:{mode:"dark"}}),[!1]),{state:n}=C(),{header:u}=s.useContext(N),[c,h]=s.useState(1),[v,j]=s.useState(99),[a,f]=s.useState(n?n.type:"movie"),[r,p]=s.useState(n?n.category:"popular"),[y,d]=s.useState([]);return s.useEffect(()=>{r!=="popular"&&r!=="top_rated"&&p("popular")},[a]),s.useEffect(()=>{o(!0),x.get(`https://api.themoviedb.org/3/${a}/${r}?language=en-US&page=${c}`,{headers:u}).then(({data:t})=>{d(t.results),j(t.total_pages),o(!1)})},[r,a]),e.jsx(T,{theme:m,children:e.jsxs("div",{className:"pt-[6.5rem] text-white lg:px-8 md:px-4 px-2",children:[e.jsxs("p",{className:"lg:text-5xl text-3xl font-[500] text-orange-500",children:["Categories in ",a==="movie"?"Movies":"TV Shows"]}),e.jsxs("div",{className:"mt-8 grid grid-cols-12 gap-4",children:[e.jsxs(g,{className:"lg:col-span-3 col-span-6",select:!0,value:r,label:"Category",onChange:({target:t})=>p(t.value),children:[a==="tv"&&e.jsx(l,{value:"airing_today",children:"Airing Today"}),a==="tv"&&e.jsx(l,{value:"on_the_air",children:"On the Air"}),a==="movie"&&e.jsx(l,{value:"now_playing",children:"Now Playing"}),e.jsx(l,{value:"popular",children:"Popular"}),e.jsx(l,{value:"top_rated",children:"Top Rated"}),a==="movie"&&e.jsx(l,{value:"upcoming",children:"Upcoming"})]}),e.jsxs(g,{className:"lg:col-span-3 col-span-6",select:!0,value:a,label:"Type",onChange:({target:t})=>f(t.value),children:[e.jsx(l,{value:"movie",children:"Movies"}),e.jsx(l,{value:"tv",children:"TV Shows"})]})]}),e.jsx("p",{className:"mt-8 text-pedia-500 lg:text-4xl text-3xl",children:"Results"}),e.jsxs("div",{className:"my-4 genre-grid",children:[y.map((t,i)=>e.jsx(w,{element:t,type:a,indx:i},i)),c<v&&e.jsxs("div",{className:"rounded-md mx-auto lg:w-full w-60 lg:text-2xl bg-neutral-950 h-full flex justify-center items-center flex-col gap-4 cursor-pointer",onClick:async()=>{o(!0),h(t=>t+1),x.get(`https://api.themoviedb.org/3/movie/${r}?language=en-US&page=${c+1}`,{headers:u}).then(({data:t})=>{d(i=>[...i,...t.results]),o(!1)})},style:{aspectRatio:"3/4"},children:[e.jsx("div",{className:"bg-neutral-800 rounded-full p-4",children:e.jsx(b,{fontSize:"large"})}),"View more"]})]})]})})}export{A as default};
