import{a,g as o}from"./chunk-MP7EINQY.js";var l=class{constructor(e,r,i){this.options=e;this.adapter=r;this._el=this.options.target,i&&i.forEach(({name:t,cb:n})=>{this.on(t,n)})}set(e,r){}on(e,r,i){var t=this._eventListeners||(this._eventListeners={});(t[e]||(t[e]=[])).push({cb:r,ctx:i})}fire(e,...r){var i=[].slice.call(arguments,1),t=((this._eventListeners||(this._eventListeners={}))[e]||[]).slice(),n=0,s=t.length;for(n;n<s;n++)t[n].cb.apply(t[n].ctx,i)}showSpinner(){this._el.parentElement?.classList.remove("loaded")}hideSpinner(){this._el.parentElement?.classList.add("loaded")}async configure(e){let r=[];if(this.fire(o.CONFIGURE,{config:e,cb:i=>{r.push(i)}}),r.length){let t=(await Promise.all(r)).reduce((n,s)=>a(n,s));e=a(e,t)}return e}exitFullScreen(){}resize(){}dispose(){this._el.innerHTML="",this._el.className="",this.adapter?.dispose()}};export{l as a};