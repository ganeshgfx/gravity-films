const __vite__fileDeps=["assets/OutOfCanvasUpdater-CR1inX-y.js","assets/index-BMDJ9Dnp.js","assets/index-CWEKmmLH.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-BMDJ9Dnp.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-CR1inX-y.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};