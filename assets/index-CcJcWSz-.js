import{_ as e}from"./index-BAOnEQgt.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-CBpzB7zx.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-CBpzB7zx.js","assets/index-BAOnEQgt.js","assets/index-Cn4xDG62.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
