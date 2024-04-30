import{_ as o}from"./index-BpO4zNpF.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-CStZ_XaY.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-CStZ_XaY.js","assets/index-BpO4zNpF.js","assets/index-Dfal_9WC.css","assets/ValueWithRandom-Pjh4HD9M.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
