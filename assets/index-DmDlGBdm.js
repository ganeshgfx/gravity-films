import{_ as i}from"./index-Bk9mY51w.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-DJT0cPl8.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-DJT0cPl8.js","assets/ValueWithRandom-CmdMwmSl.js","assets/index-Bk9mY51w.js","assets/index-BnEb8BuQ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
