import{_ as n}from"./index-BpO4zNpF.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-CeeS_Mgk.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-CNh14DST.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-CeeS_Mgk.js","assets/PolygonDrawerBase-C2nG4jbg.js","assets/index-BpO4zNpF.js","assets/index-Dfal_9WC.css","assets/TriangleDrawer-CNh14DST.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
