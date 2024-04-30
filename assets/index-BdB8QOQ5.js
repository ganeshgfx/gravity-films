import{_ as e}from"./index-Bk9mY51w.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-q9LnxWPa.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-q9LnxWPa.js","assets/index-Bk9mY51w.js","assets/index-BnEb8BuQ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
