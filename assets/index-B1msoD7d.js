import{l as j,n as B,O as q,c as E,o as _,m as T,p as O,b as H,q as P,s as w,t as I,u as A,v as L,D as W,C as F,R as G,w as J,d as z,e as K,k as N}from"./index-uYyiPXOa.js";import{E as Q}from"./ExternalInteractorBase-k2qNqvn7.js";class S{constructor(){this.distance=200,this.duration=.4,this.mix=!1}load(i){if(i){if(i.distance!==void 0&&(this.distance=i.distance),i.duration!==void 0&&(this.duration=i.duration),i.mix!==void 0&&(this.mix=i.mix),i.opacity!==void 0&&(this.opacity=i.opacity),i.color!==void 0){const e=j(this.color)?void 0:this.color;this.color=B(i.color,o=>q.create(e,o))}i.size!==void 0&&(this.size=i.size)}}}class U extends S{constructor(){super(),this.selectors=[]}load(i){super.load(i),i&&i.selectors!==void 0&&(this.selectors=i.selectors)}}class X extends S{load(i){super.load(i),i&&(this.divs=B(i.divs,e=>{const o=new U;return o.load(e),o}))}}var h;(function(c){c.color="color",c.opacity="opacity",c.size="size"})(h||(h={}));function D(c,i,e,o){if(i>=e){const n=c+(i-e)*o;return E(n,c,i)}else if(i<e){const n=c-(e-i)*o;return E(n,i,c)}}const y="bubble",C=0,Y=0,Z=2,R=1,k=1,$=0,V=0,g=.5,x=1;class ee extends Q{constructor(i){super(i),this._clickBubble=()=>{var s;const e=this.container,o=e.actualOptions,n=e.interactivity.mouse.clickPosition,b=o.interactivity.modes.bubble;if(!b||!n)return;e.bubble||(e.bubble={});const t=e.retina.bubbleModeDistance;if(!t||t<C)return;const u=e.particles.quadTree.queryCircle(n,t,l=>this.isEnabled(l)),{bubble:r}=e;for(const l of u){if(!r.clicking)continue;l.bubble.inRange=!r.durationEnd;const f=l.getPosition(),d=_(f,n),p=(new Date().getTime()-(e.interactivity.mouse.clickTime??Y))/T;p>b.duration&&(r.durationEnd=!0),p>b.duration*Z&&(r.clicking=!1,r.durationEnd=!1);const v={bubbleObj:{optValue:e.retina.bubbleModeSize,value:l.bubble.radius},particlesObj:{optValue:O(l.options.size.value)*e.retina.pixelRatio,value:l.size.value},type:h.size};this._process(l,d,p,v);const a={bubbleObj:{optValue:b.opacity,value:l.bubble.opacity},particlesObj:{optValue:O(l.options.opacity.value),value:((s=l.opacity)==null?void 0:s.value)??R},type:h.opacity};this._process(l,d,p,a),!r.durationEnd&&d<=t?this._hoverBubbleColor(l,d):delete l.bubble.color}},this._hoverBubble=()=>{const e=this.container,o=e.interactivity.mouse.position,n=e.retina.bubbleModeDistance;if(!n||n<C||!o)return;const b=e.particles.quadTree.queryCircle(o,n,t=>this.isEnabled(t));for(const t of b){t.bubble.inRange=!0;const u=t.getPosition(),r=_(u,o),s=k-r/n;r<=n?s>=V&&e.interactivity.status===H&&(this._hoverBubbleSize(t,s),this._hoverBubbleOpacity(t,s),this._hoverBubbleColor(t,s)):this.reset(t),e.interactivity.status===P&&this.reset(t)}},this._hoverBubbleColor=(e,o,n)=>{const b=this.container.actualOptions,t=n??b.interactivity.modes.bubble;if(t){if(!e.bubble.finalColor){const u=t.color;if(!u)return;const r=w(u);e.bubble.finalColor=I(r)}if(e.bubble.finalColor)if(t.mix){e.bubble.color=void 0;const u=e.getFillColor();e.bubble.color=u?A(L(u,e.bubble.finalColor,k-o,o)):e.bubble.finalColor}else e.bubble.color=e.bubble.finalColor}},this._hoverBubbleOpacity=(e,o,n)=>{var f,d;const b=this.container,t=b.actualOptions,u=(n==null?void 0:n.opacity)??((f=t.interactivity.modes.bubble)==null?void 0:f.opacity);if(!u)return;const r=e.options.opacity.value,s=((d=e.opacity)==null?void 0:d.value)??R,l=D(s,u,O(r),o);l!==void 0&&(e.bubble.opacity=l)},this._hoverBubbleSize=(e,o,n)=>{const b=this.container,t=n!=null&&n.size?n.size*b.retina.pixelRatio:b.retina.bubbleModeSize;if(t===void 0)return;const u=O(e.options.size.value)*b.retina.pixelRatio,r=e.size.value,s=D(r,t,u,o);s!==void 0&&(e.bubble.radius=s)},this._process=(e,o,n,b)=>{const t=this.container,u=b.bubbleObj.optValue,r=t.actualOptions,s=r.interactivity.modes.bubble;if(!s||u===void 0)return;const l=s.duration,f=t.retina.bubbleModeDistance,d=b.particlesObj.optValue,p=b.bubbleObj.value,v=b.particlesObj.value??$,a=b.type;if(!(!f||f<C||u===d))if(t.bubble||(t.bubble={}),t.bubble.durationEnd)p&&(a===h.size&&delete e.bubble.radius,a===h.opacity&&delete e.bubble.opacity);else if(o<=f){if((p??v)!==u){const m=v-n*(v-u)/l;a===h.size&&(e.bubble.radius=m),a===h.opacity&&(e.bubble.opacity=m)}}else a===h.size&&delete e.bubble.radius,a===h.opacity&&delete e.bubble.opacity},this._singleSelectorHover=(e,o,n)=>{const b=this.container,t=document.querySelectorAll(o),u=b.actualOptions.interactivity.modes.bubble;!u||!t.length||t.forEach(r=>{const s=r,l=b.retina.pixelRatio,f={x:(s.offsetLeft+s.offsetWidth*g)*l,y:(s.offsetTop+s.offsetHeight*g)*l},d=s.offsetWidth*g*l,p=n.type===W.circle?new F(f.x,f.y,d):new G(s.offsetLeft*l,s.offsetTop*l,s.offsetWidth*l,s.offsetHeight*l),v=b.particles.quadTree.query(p,a=>this.isEnabled(a));for(const a of v){if(!p.contains(a.getPosition()))continue;a.bubble.inRange=!0;const M=u.divs,m=J(M,s);(!a.bubble.div||a.bubble.div!==s)&&(this.clear(a,e,!0),a.bubble.div=s),this._hoverBubbleSize(a,x,m),this._hoverBubbleOpacity(a,x,m),this._hoverBubbleColor(a,x,m)}})},i.bubble||(i.bubble={}),this.handleClickMode=e=>{e===y&&(i.bubble||(i.bubble={}),i.bubble.clicking=!0)}}clear(i,e,o){i.bubble.inRange&&!o||(delete i.bubble.div,delete i.bubble.opacity,delete i.bubble.radius,delete i.bubble.color)}init(){const i=this.container,e=i.actualOptions.interactivity.modes.bubble;e&&(i.retina.bubbleModeDistance=e.distance*i.retina.pixelRatio,e.size!==void 0&&(i.retina.bubbleModeSize=e.size*i.retina.pixelRatio))}interact(i){const e=this.container.actualOptions,o=e.interactivity.events,n=o.onHover,b=o.onClick,t=n.enable,u=n.mode,r=b.enable,s=b.mode,l=o.onDiv;t&&z(y,u)?this._hoverBubble():r&&z(y,s)?this._clickBubble():K(y,l,(f,d)=>this._singleSelectorHover(i,f,d))}isEnabled(i){const e=this.container,o=e.actualOptions,n=e.interactivity.mouse,b=((i==null?void 0:i.interactivity)??o.interactivity).events,{onClick:t,onDiv:u,onHover:r}=b,s=N(y,u);return s||r.enable&&n.position||t.enable&&n.clickPosition?z(y,r.mode)||z(y,t.mode)||s:!1}loadModeOptions(i,...e){i.bubble||(i.bubble=new X);for(const o of e)i.bubble.load(o==null?void 0:o.bubble)}reset(i){i.bubble.inRange=!1}}async function oe(c,i=!0){await c.addInteractor("externalBubble",e=>Promise.resolve(new ee(e)),i)}export{X as Bubble,S as BubbleBase,U as BubbleDiv,oe as loadExternalBubbleInteraction};