import{_ as o}from"./index-BpO4zNpF.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-Di4wrCgQ.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-Di4wrCgQ.js","assets/index-BpO4zNpF.js","assets/index-Dfal_9WC.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
