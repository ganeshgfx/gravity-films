import{_ as i}from"./index-BpO4zNpF.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-DjCfL0rg.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-DjCfL0rg.js","assets/ValueWithRandom-Pjh4HD9M.js","assets/index-BpO4zNpF.js","assets/index-Dfal_9WC.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
