import{_ as n}from"./index-BAOnEQgt.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-Cz8ZC7cg.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-BSw3znat.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-Cz8ZC7cg.js","assets/PolygonDrawerBase-DVM-2yL7.js","assets/index-BAOnEQgt.js","assets/index-Cn4xDG62.css","assets/TriangleDrawer-BSw3znat.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
