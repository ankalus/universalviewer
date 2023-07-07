import"./chunk-YAXTLTJC.js";(function(){"use strict";var m=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function d(e){var t=m.has(e);return e=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e),!t&&e}function s(e){var t=e.isConnected;if(t!==void 0)return t;for(;e&&!(e.__CE_isImportDocument||e instanceof Document);)e=e.parentNode||(window.ShadowRoot&&e instanceof ShadowRoot?e.host:void 0);return!(!e||!(e.__CE_isImportDocument||e instanceof Document))}function f(e,t){for(;t&&t!==e&&!t.nextSibling;)t=t.parentNode;return t&&t!==e?t.nextSibling:null}function h(e,t,n){n=n===void 0?new Set:n;for(var r=e;r;){if(r.nodeType===Node.ELEMENT_NODE){var o=r;t(o);var i=o.localName;if(i==="link"&&o.getAttribute("rel")==="import"){if(r=o.import,r instanceof Node&&!n.has(r))for(n.add(r),r=r.firstChild;r;r=r.nextSibling)h(r,t,n);r=f(e,o);continue}else if(i==="template"){r=f(e,o);continue}if(o=o.__CE_shadowRoot)for(o=o.firstChild;o;o=o.nextSibling)h(o,t,n)}r=r.firstChild?r.firstChild:f(e,r)}}function p(e,t,n){e[t]=n}function _(){this.a=new Map,this.g=new Map,this.c=[],this.f=[],this.b=!1}function ot(e,t,n){e.a.set(t,n),e.g.set(n.constructorFunction,n)}function rt(e,t){e.b=!0,e.c.push(t)}function it(e,t){e.b=!0,e.f.push(t)}function O(e,t){e.b&&h(t,function(n){return C(e,n)})}function C(e,t){if(e.b&&!t.__CE_patched){t.__CE_patched=!0;for(var n=0;n<e.c.length;n++)e.c[n](t);for(n=0;n<e.f.length;n++)e.f[n](t)}}function w(e,t){var n=[];for(h(t,function(o){return n.push(o)}),t=0;t<n.length;t++){var r=n[t];r.__CE_state===1?e.connectedCallback(r):S(e,r)}}function v(e,t){var n=[];for(h(t,function(o){return n.push(o)}),t=0;t<n.length;t++){var r=n[t];r.__CE_state===1&&e.disconnectedCallback(r)}}function E(e,t,n){n=n===void 0?{}:n;var r=n.u||new Set,o=n.i||function(l){return S(e,l)},i=[];if(h(t,function(l){if(l.localName==="link"&&l.getAttribute("rel")==="import"){var c=l.import;c instanceof Node&&(c.__CE_isImportDocument=!0,c.__CE_hasRegistry=!0),c&&c.readyState==="complete"?c.__CE_documentLoadHandled=!0:l.addEventListener("load",function(){var a=l.import;if(!a.__CE_documentLoadHandled){a.__CE_documentLoadHandled=!0;var u=new Set(r);u.delete(a),E(e,a,{u,i:o})}})}else i.push(l)},r),e.b)for(t=0;t<i.length;t++)C(e,i[t]);for(t=0;t<i.length;t++)o(i[t])}function S(e,t){if(t.__CE_state===void 0){var n=t.ownerDocument;if((n.defaultView||n.__CE_isImportDocument&&n.__CE_hasRegistry)&&(n=e.a.get(t.localName))){n.constructionStack.push(t);var r=n.constructorFunction;try{try{if(new r!==t)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{n.constructionStack.pop()}}catch(l){throw t.__CE_state=2,l}if(t.__CE_state=1,t.__CE_definition=n,n.attributeChangedCallback)for(n=n.observedAttributes,r=0;r<n.length;r++){var o=n[r],i=t.getAttribute(o);i!==null&&e.attributeChangedCallback(t,o,null,i,null)}s(t)&&e.connectedCallback(t)}}}_.prototype.connectedCallback=function(e){var t=e.__CE_definition;t.connectedCallback&&t.connectedCallback.call(e)},_.prototype.disconnectedCallback=function(e){var t=e.__CE_definition;t.disconnectedCallback&&t.disconnectedCallback.call(e)},_.prototype.attributeChangedCallback=function(e,t,n,r,o){var i=e.__CE_definition;i.attributeChangedCallback&&-1<i.observedAttributes.indexOf(t)&&i.attributeChangedCallback.call(e,t,n,r,o)};function F(e){var t=document;this.c=e,this.a=t,this.b=void 0,E(this.c,this.a),this.a.readyState==="loading"&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function P(e){e.b&&e.b.disconnect()}F.prototype.f=function(e){var t=this.a.readyState;for(t!=="interactive"&&t!=="complete"||P(this),t=0;t<e.length;t++)for(var n=e[t].addedNodes,r=0;r<n.length;r++)E(this.c,n[r])};function lt(){var e=this;this.b=this.a=void 0,this.c=new Promise(function(t){e.b=t,e.a&&t(e.a)})}function I(e){if(e.a)throw Error("Already resolved.");e.a=void 0,e.b&&e.b(void 0)}function y(e){this.c=!1,this.a=e,this.j=new Map,this.f=function(t){return t()},this.b=!1,this.g=[],this.o=new F(e)}y.prototype.l=function(e,t){var n=this;if(!(t instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!d(e))throw new SyntaxError("The element name '"+e+"' is not valid.");if(this.a.a.get(e))throw Error("A custom element with name '"+e+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var r=function(g){var N=o[g];if(N!==void 0&&!(N instanceof Function))throw Error("The '"+g+"' callback must be a function.");return N},o=t.prototype;if(!(o instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var i=r("connectedCallback"),l=r("disconnectedCallback"),c=r("adoptedCallback"),a=r("attributeChangedCallback"),u=t.observedAttributes||[]}catch{return}finally{this.c=!1}t={localName:e,constructorFunction:t,connectedCallback:i,disconnectedCallback:l,adoptedCallback:c,attributeChangedCallback:a,observedAttributes:u,constructionStack:[]},ot(this.a,e,t),this.g.push(t),this.b||(this.b=!0,this.f(function(){return st(n)}))},y.prototype.i=function(e){E(this.a,e)};function st(e){if(e.b!==!1){e.b=!1;for(var t=e.g,n=[],r=new Map,o=0;o<t.length;o++)r.set(t[o].localName,[]);for(E(e.a,document,{i:function(c){if(c.__CE_state===void 0){var a=c.localName,u=r.get(a);u?u.push(c):e.a.a.get(a)&&n.push(c)}}}),o=0;o<n.length;o++)S(e.a,n[o]);for(;0<t.length;){var i=t.shift();o=i.localName,i=r.get(i.localName);for(var l=0;l<i.length;l++)S(e.a,i[l]);(o=e.j.get(o))&&I(o)}}}y.prototype.get=function(e){if(e=this.a.a.get(e))return e.constructorFunction},y.prototype.m=function(e){if(!d(e))return Promise.reject(new SyntaxError("'"+e+"' is not a valid custom element name."));var t=this.j.get(e);return t||(t=new lt,this.j.set(e,t),this.a.a.get(e)&&!this.g.some(function(n){return n.localName===e})&&I(t)),t.c},y.prototype.s=function(e){P(this.o);var t=this.f;this.f=function(n){return e(function(){return t(n)})}},window.CustomElementRegistry=y,y.prototype.define=y.prototype.l,y.prototype.upgrade=y.prototype.i,y.prototype.get=y.prototype.get,y.prototype.whenDefined=y.prototype.m,y.prototype.polyfillWrapFlushCallback=y.prototype.s;var z=window.Document.prototype.createElement,U=window.Document.prototype.createElementNS,ct=window.Document.prototype.importNode,at=window.Document.prototype.prepend,ut=window.Document.prototype.append,pt=window.DocumentFragment.prototype.prepend,ft=window.DocumentFragment.prototype.append,B=window.Node.prototype.cloneNode,A=window.Node.prototype.appendChild,W=window.Node.prototype.insertBefore,j=window.Node.prototype.removeChild,V=window.Node.prototype.replaceChild,x=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),$=window.Element.prototype.attachShadow,M=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),L=window.Element.prototype.getAttribute,G=window.Element.prototype.setAttribute,J=window.Element.prototype.removeAttribute,D=window.Element.prototype.getAttributeNS,K=window.Element.prototype.setAttributeNS,Q=window.Element.prototype.removeAttributeNS,Y=window.Element.prototype.insertAdjacentElement,Z=window.Element.prototype.insertAdjacentHTML,ht=window.Element.prototype.prepend,dt=window.Element.prototype.append,k=window.Element.prototype.before,mt=window.Element.prototype.after,X=window.Element.prototype.replaceWith,q=window.Element.prototype.remove,gt=window.HTMLElement,H=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),tt=window.HTMLElement.prototype.insertAdjacentElement,et=window.HTMLElement.prototype.insertAdjacentHTML,nt=new function(){};function yt(){var e=b;window.HTMLElement=function(){function t(){var n=this.constructor,r=e.g.get(n);if(!r)throw Error("The custom element being constructed was not registered with `customElements`.");var o=r.constructionStack;if(o.length===0)return o=z.call(document,r.localName),Object.setPrototypeOf(o,n.prototype),o.__CE_state=1,o.__CE_definition=r,C(e,o),o;r=o.length-1;var i=o[r];if(i===nt)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");return o[r]=nt,Object.setPrototypeOf(i,n.prototype),C(e,i),i}return t.prototype=gt.prototype,Object.defineProperty(t.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:t}),t}()}function R(e,t,n){function r(o){return function(i){for(var l=[],c=0;c<arguments.length;++c)l[c]=arguments[c];c=[];for(var a=[],u=0;u<l.length;u++){var g=l[u];if(g instanceof Element&&s(g)&&a.push(g),g instanceof DocumentFragment)for(g=g.firstChild;g;g=g.nextSibling)c.push(g);else c.push(g)}for(o.apply(this,l),l=0;l<a.length;l++)v(e,a[l]);if(s(this))for(l=0;l<c.length;l++)a=c[l],a instanceof Element&&w(e,a)}}n.h!==void 0&&(t.prepend=r(n.h)),n.append!==void 0&&(t.append=r(n.append))}function vt(){var e=b;p(Document.prototype,"createElement",function(t){if(this.__CE_hasRegistry){var n=e.a.get(t);if(n)return new n.constructorFunction}return t=z.call(this,t),C(e,t),t}),p(Document.prototype,"importNode",function(t,n){return t=ct.call(this,t,!!n),this.__CE_hasRegistry?E(e,t):O(e,t),t}),p(Document.prototype,"createElementNS",function(t,n){if(this.__CE_hasRegistry&&(t===null||t==="http://www.w3.org/1999/xhtml")){var r=e.a.get(n);if(r)return new r.constructorFunction}return t=U.call(this,t,n),C(e,t),t}),R(e,Document.prototype,{h:at,append:ut})}function wt(){function e(n,r){Object.defineProperty(n,"textContent",{enumerable:r.enumerable,configurable:!0,get:r.get,set:function(o){if(this.nodeType===Node.TEXT_NODE)r.set.call(this,o);else{var i=void 0;if(this.firstChild){var l=this.childNodes,c=l.length;if(0<c&&s(this)){i=Array(c);for(var a=0;a<c;a++)i[a]=l[a]}}if(r.set.call(this,o),i)for(o=0;o<i.length;o++)v(t,i[o])}}})}var t=b;p(Node.prototype,"insertBefore",function(n,r){if(n instanceof DocumentFragment){var o=Array.prototype.slice.apply(n.childNodes);if(n=W.call(this,n,r),s(this))for(r=0;r<o.length;r++)w(t,o[r]);return n}return o=s(n),r=W.call(this,n,r),o&&v(t,n),s(this)&&w(t,n),r}),p(Node.prototype,"appendChild",function(n){if(n instanceof DocumentFragment){var r=Array.prototype.slice.apply(n.childNodes);if(n=A.call(this,n),s(this))for(var o=0;o<r.length;o++)w(t,r[o]);return n}return r=s(n),o=A.call(this,n),r&&v(t,n),s(this)&&w(t,n),o}),p(Node.prototype,"cloneNode",function(n){return n=B.call(this,!!n),this.ownerDocument.__CE_hasRegistry?E(t,n):O(t,n),n}),p(Node.prototype,"removeChild",function(n){var r=s(n),o=j.call(this,n);return r&&v(t,n),o}),p(Node.prototype,"replaceChild",function(n,r){if(n instanceof DocumentFragment){var o=Array.prototype.slice.apply(n.childNodes);if(n=V.call(this,n,r),s(this))for(v(t,r),r=0;r<o.length;r++)w(t,o[r]);return n}o=s(n);var i=V.call(this,n,r),l=s(this);return l&&v(t,r),o&&v(t,n),l&&w(t,n),i}),x&&x.get?e(Node.prototype,x):rt(t,function(n){e(n,{enumerable:!0,configurable:!0,get:function(){for(var r=[],o=0;o<this.childNodes.length;o++){var i=this.childNodes[o];i.nodeType!==Node.COMMENT_NODE&&r.push(i.textContent)}return r.join("")},set:function(r){for(;this.firstChild;)j.call(this,this.firstChild);r!=null&&r!==""&&A.call(this,document.createTextNode(r))}})})}function Et(e){function t(r){return function(o){for(var i=[],l=0;l<arguments.length;++l)i[l]=arguments[l];l=[];for(var c=[],a=0;a<i.length;a++){var u=i[a];if(u instanceof Element&&s(u)&&c.push(u),u instanceof DocumentFragment)for(u=u.firstChild;u;u=u.nextSibling)l.push(u);else l.push(u)}for(r.apply(this,i),i=0;i<c.length;i++)v(e,c[i]);if(s(this))for(i=0;i<l.length;i++)c=l[i],c instanceof Element&&w(e,c)}}var n=Element.prototype;k!==void 0&&(n.before=t(k)),k!==void 0&&(n.after=t(mt)),X!==void 0&&p(n,"replaceWith",function(r){for(var o=[],i=0;i<arguments.length;++i)o[i]=arguments[i];i=[];for(var l=[],c=0;c<o.length;c++){var a=o[c];if(a instanceof Element&&s(a)&&l.push(a),a instanceof DocumentFragment)for(a=a.firstChild;a;a=a.nextSibling)i.push(a);else i.push(a)}for(c=s(this),X.apply(this,o),o=0;o<l.length;o++)v(e,l[o]);if(c)for(v(e,this),o=0;o<i.length;o++)l=i[o],l instanceof Element&&w(e,l)}),q!==void 0&&p(n,"remove",function(){var r=s(this);q.call(this),r&&v(e,this)})}function _t(){function e(o,i){Object.defineProperty(o,"innerHTML",{enumerable:i.enumerable,configurable:!0,get:i.get,set:function(l){var c=this,a=void 0;if(s(this)&&(a=[],h(this,function(N){N!==c&&a.push(N)})),i.set.call(this,l),a)for(var u=0;u<a.length;u++){var g=a[u];g.__CE_state===1&&r.disconnectedCallback(g)}return this.ownerDocument.__CE_hasRegistry?E(r,this):O(r,this),l}})}function t(o,i){p(o,"insertAdjacentElement",function(l,c){var a=s(c);return l=i.call(this,l,c),a&&v(r,c),s(l)&&w(r,c),l})}function n(o,i){function l(c,a){for(var u=[];c!==a;c=c.nextSibling)u.push(c);for(a=0;a<u.length;a++)E(r,u[a])}p(o,"insertAdjacentHTML",function(c,a){if(c=c.toLowerCase(),c==="beforebegin"){var u=this.previousSibling;i.call(this,c,a),l(u||this.parentNode.firstChild,this)}else if(c==="afterbegin")u=this.firstChild,i.call(this,c,a),l(this.firstChild,u);else if(c==="beforeend")u=this.lastChild,i.call(this,c,a),l(u||this.firstChild,null);else if(c==="afterend")u=this.nextSibling,i.call(this,c,a),l(this.nextSibling,u);else throw new SyntaxError("The value provided ("+String(c)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.")})}var r=b;$&&p(Element.prototype,"attachShadow",function(o){o=$.call(this,o);var i=r;if(i.b&&!o.__CE_patched){o.__CE_patched=!0;for(var l=0;l<i.c.length;l++)i.c[l](o)}return this.__CE_shadowRoot=o}),M&&M.get?e(Element.prototype,M):H&&H.get?e(HTMLElement.prototype,H):it(r,function(o){e(o,{enumerable:!0,configurable:!0,get:function(){return B.call(this,!0).innerHTML},set:function(i){var l=this.localName==="template",c=l?this.content:this,a=U.call(document,this.namespaceURI,this.localName);for(a.innerHTML=i;0<c.childNodes.length;)j.call(c,c.childNodes[0]);for(i=l?a.content:a;0<i.childNodes.length;)A.call(c,i.childNodes[0])}})}),p(Element.prototype,"setAttribute",function(o,i){if(this.__CE_state!==1)return G.call(this,o,i);var l=L.call(this,o);G.call(this,o,i),i=L.call(this,o),r.attributeChangedCallback(this,o,l,i,null)}),p(Element.prototype,"setAttributeNS",function(o,i,l){if(this.__CE_state!==1)return K.call(this,o,i,l);var c=D.call(this,o,i);K.call(this,o,i,l),l=D.call(this,o,i),r.attributeChangedCallback(this,i,c,l,o)}),p(Element.prototype,"removeAttribute",function(o){if(this.__CE_state!==1)return J.call(this,o);var i=L.call(this,o);J.call(this,o),i!==null&&r.attributeChangedCallback(this,o,i,null,null)}),p(Element.prototype,"removeAttributeNS",function(o,i){if(this.__CE_state!==1)return Q.call(this,o,i);var l=D.call(this,o,i);Q.call(this,o,i);var c=D.call(this,o,i);l!==c&&r.attributeChangedCallback(this,i,l,c,o)}),tt?t(HTMLElement.prototype,tt):Y?t(Element.prototype,Y):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."),et?n(HTMLElement.prototype,et):Z?n(Element.prototype,Z):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."),R(r,Element.prototype,{h:ht,append:dt}),Et(r)}var T=window.customElements;if(!T||T.forcePolyfill||typeof T.define!="function"||typeof T.get!="function"){var b=new _;yt(),vt(),R(b,DocumentFragment.prototype,{h:pt,append:ft}),wt(),_t(),document.__CE_hasRegistry=!0;var Ct=new y(b);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:Ct})}}).call(self);typeof document.baseURI!="string"&&Object.defineProperty(Document.prototype,"baseURI",{enumerable:!0,configurable:!0,get:function(){var m=document.querySelector("base");return m?m.href:document.URL}});typeof window.CustomEvent!="function"&&(window.CustomEvent=function(d,s){s=s||{bubbles:!1,cancelable:!1,detail:void 0};var f=document.createEvent("CustomEvent");return f.initCustomEvent(d,s.bubbles,s.cancelable,s.detail),f},window.CustomEvent.prototype=window.Event.prototype);(function(m,d,s){m.composedPath||(m.composedPath=function(){if(this.path)return this.path;var f=this.target;for(this.path=[];f.parentNode!==null;)this.path.push(f),f=f.parentNode;return this.path.push(d,s),this.path})})(Event.prototype,document,window);(function(m){typeof m.matches!="function"&&(m.matches=m.msMatchesSelector||m.mozMatchesSelector||m.webkitMatchesSelector||function(d){d=(this.document||this.ownerDocument).querySelectorAll(d);for(var s=0;d[s]&&d[s]!==this;)++s;return!!d[s]}),typeof m.closest!="function"&&(m.closest=function(d){for(var s=this;s&&s.nodeType===1;){if(s.matches(d))return s;s=s.parentNode}return null})})(window.Element.prototype);(function(m){function d(f){return f=s(f),f.nodeType===11?d(f.host):f}function s(f){return f.parentNode?s(f.parentNode):f}typeof m.getRootNode!="function"&&(m.getRootNode=function(f){return f&&f.composed?d(this):s(this)})})(Element.prototype);(function(m){m.forEach(function(d){d.hasOwnProperty("remove")||Object.defineProperty(d,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode!==null&&this.parentNode.removeChild(this)}})})})([Element.prototype,CharacterData.prototype,DocumentType.prototype]);(function(m){"classList"in m||Object.defineProperty(m,"classList",{get:function(){var d=this,s=(d.getAttribute("class")||"").replace(/^\s+|\s$/g,"").split(/\s+/g);function f(){s.length>0?d.setAttribute("class",s.join(" ")):d.removeAttribute("class")}return s[0]===""&&s.splice(0,1),s.toggle=function(h,p){p!==void 0?p?s.add(h):s.remove(h):s.indexOf(h)!==-1?s.splice(s.indexOf(h),1):s.push(h),f()},s.add=function(){for(var h=[].slice.call(arguments),p=0,_=h.length;p<_;p++)s.indexOf(h[p])===-1&&s.push(h[p]);f()},s.remove=function(){for(var h=[].slice.call(arguments),p=0,_=h.length;p<_;p++)s.indexOf(h[p])!==-1&&s.splice(s.indexOf(h[p]),1);f()},s.item=function(h){return s[h]},s.contains=function(h){return s.indexOf(h)!==-1},s.replace=function(h,p){s.indexOf(h)!==-1&&s.splice(s.indexOf(h),1,p),f()},s.value=d.getAttribute("class")||"",s}})})(Element.prototype);
/*!
Element.classList
*/
/*!
Element.closest and Element.matches
https://github.com/jonathantneal/closest
Creative Commons Zero v1.0 Universal
*/
/*!
Element.getRootNode()
*/
/*!
Element.remove()
*/