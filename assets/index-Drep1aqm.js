import{_ as o}from"./index-Bk9mY51w.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-2fxMumJj.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-2fxMumJj.js","assets/index-Bk9mY51w.js","assets/index-BnEb8BuQ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
