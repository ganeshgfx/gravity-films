import{O as h,x as m,z as k,b as v,o as L,A as O,B as w,d as C}from"./index-uYyiPXOa.js";import{E as G}from"./ExternalInteractorBase-k2qNqvn7.js";class E{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(n){n&&(n.blink!==void 0&&(this.blink=n.blink),n.color!==void 0&&(this.color=h.create(this.color,n.color)),n.consent!==void 0&&(this.consent=n.consent),n.opacity!==void 0&&(this.opacity=n.opacity))}}class D{constructor(){this.distance=100,this.links=new E}load(n){n&&(n.distance!==void 0&&(this.distance=n.distance),this.links.load(n.links))}}const M=0;function P(e,n,i,t,o,s){m(e,i,t),e.strokeStyle=k(o,s),e.lineWidth=n,e.stroke()}function x(e,n,i,t,o){e.canvas.draw(s=>{const a=n.getPosition();P(s,n.retina.linksWidth??M,a,o,i,t)})}const I="grab",q=0,H=0;class R extends G{constructor(n){super(n)}clear(){}init(){const n=this.container,i=n.actualOptions.interactivity.modes.grab;i&&(n.retina.grabModeDistance=i.distance*n.retina.pixelRatio)}interact(){var c;const n=this.container,i=n.actualOptions,t=i.interactivity;if(!t.modes.grab||!t.events.onHover.enable||n.interactivity.status!==v)return;const o=n.interactivity.mouse.position;if(!o)return;const s=n.retina.grabModeDistance;if(!s||s<q)return;const a=n.particles.quadTree.queryCircle(o,s,r=>this.isEnabled(r));for(const r of a){const y=r.getPosition(),l=L(y,o);if(l>s)continue;const d=t.modes.grab.links,b=d.opacity,u=b-l*b/s;if(u<=H)continue;const f=d.color??((c=r.options.links)==null?void 0:c.color);if(!n.particles.grabLineColor&&f){const p=t.modes.grab.links;n.particles.grabLineColor=O(f,p.blink,p.consent)}const g=w(r,void 0,n.particles.grabLineColor);g&&x(n,r,g,u,o)}}isEnabled(n){const i=this.container,t=i.interactivity.mouse,o=((n==null?void 0:n.interactivity)??i.actualOptions.interactivity).events;return o.onHover.enable&&!!t.position&&C(I,o.onHover.mode)}loadModeOptions(n,...i){n.grab||(n.grab=new D);for(const t of i)n.grab.load(t==null?void 0:t.grab)}reset(){}}async function B(e,n=!0){await e.addInteractor("externalGrab",i=>Promise.resolve(new R(i)),n)}export{D as Grab,E as GrabLinks,B as loadExternalGrabInteraction};