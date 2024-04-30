import{_ as e}from"./index-BpO4zNpF.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-DNiYKKxk.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-DNiYKKxk.js","assets/index-BpO4zNpF.js","assets/index-Dfal_9WC.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
