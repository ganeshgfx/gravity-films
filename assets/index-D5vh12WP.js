import{_ as i}from"./index-BAOnEQgt.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-BkAwr7kT.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-BkAwr7kT.js","assets/ValueWithRandom-CVz2Xwzz.js","assets/index-BAOnEQgt.js","assets/index-Cn4xDG62.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
