import{a as _,e as v,g as H}from"./chunk-JPWMMWT7.js";import{a as F,c as D}from"./chunk-UYLDA6E6.js";import{c as I,e as L,f as E,g as V,n as f,p as o}from"./chunk-2YE6NNA6.js";import{a as y}from"./chunk-T6TTLDCO.js";import{c as g}from"./chunk-YAXTLTJC.js";var b=g(F());var n=y(),T=class extends _{constructor(e){super(e,!0,!0);this.isCreated=!1;this.isOpen=!1}create(){super.create(),this.extensionHost.subscribe(o.CANVAS_INDEX_CHANGE,t=>{this.selectIndex(parseInt(t))}),this.extensionHost.subscribe(o.LOGIN,()=>{this.loadThumbs()}),this.extensionHost.subscribe(o.CLICKTHROUGH,()=>{this.loadThumbs()}),this.$thumbs=n('<div class="thumbs"></div>'),this.$element.append(this.$thumbs);let e=this.extension.helper.getViewingDirection()||b.ViewingDirection.LEFT_TO_RIGHT;this.$thumbs.addClass(e);let s=this;n.templates({thumbsTemplate:'<a id="thumb{{>index}}" class="{{:~className()}}" data-src="{{>uri}}" data-visible="{{>visible}}" data-index="{{>index}}" tabindex="0">                                <div class="wrap" style="height:{{>height + ~extraHeight()}}px"></div>                                <div class="info">                                    <span class="index">{{:#index + 1}}</span>                                    <span class="label" title="{{>label}}">{{>label}}&nbsp;</span>                                    <span class="searchResults" title="{{:~searchResultsTitle()}}">{{>data.searchResults}}</span>                                </div>                             </a>                             {{if ~separator()}}                                  <div class="separator"></div>                              {{/if}}'});let a=this.options.thumbsExtraHeight;n.views.helpers({separator:function(){return!1},extraHeight:function(){return a},className:function(){let t="thumb";this.data.index===0&&(t+=" first"),this.data.uri||(t+=" placeholder");let i=s.extension.helper.getViewingDirection();return i&&(i===b.ViewingDirection.LEFT_TO_RIGHT||i===b.ViewingDirection.RIGHT_TO_LEFT)||s.extension.helper.isPaged()?t+=" twoCol":t+=" oneCol",t},searchResultsTitle:function(){let t=Number(this.data.data.searchResults);return t?t>1?f.format(s.content.searchResults,t.toString()):f.format(s.content.searchResult,t.toString()):""}}),this.$element.on("scroll",()=>{this.scrollStop()},100),this.resize()}databind(){!this.thumbs||(this._$thumbsCache=null,this.createThumbs(),this.loadThumbs(0),this.selectIndex(this.extension.helper.canvasIndex))}createThumbs(){let e=this;if(!this.thumbs)return;let s=[];for(let t=0;t<this.thumbs.length;t++){let i=this.thumbs[t];s.push(i.height)}let a=V.median(s);for(let t=0;t<this.thumbs.length;t++){let i=this.thumbs[t];i.height=a}this.$thumbs.link(n.templates.thumbsTemplate,this.thumbs),this.$thumbs.undelegate(".thumb","click"),this.$thumbs.delegate(".thumb","click",function(t){t.preventDefault();let i=n.view(this).data;return e.lastThumbClickedIndex=i.index,e.extensionHost.publish(o.THUMB_SELECTED,i),!1}),this.$thumbs.delegate(".thumb","keydown",function(t){let i=t.originalEvent,r=E.getCharCode(i);if(r===v.Spacebar||r===v.Enter){t.preventDefault();let u=n.view(this).data;e.lastThumbClickedIndex=u.index,e.extensionHost.publish(o.THUMB_SELECTED,u)}}),this.setLabel(),this.isCreated=!0}scrollStop(){let e=1/((this.$thumbs.height()-this.$element.height())/this.$element.scrollTop());e>1&&(e=1);let s=Math.floor((this.thumbs.length-1)*e);this.loadThumbs(s)}loadThumbs(e=this.extension.helper.canvasIndex){if(!this.thumbs||!this.thumbs.length)return;let s,t=this.extension.helper.getCanvasByIndex(e).getContent();if(t.length){let l=t[0].getBody();if(l.length){let h=l[0].getType();h&&(s=h.toString().toLowerCase())}}let i=e,r=this.options.thumbsLoadRange,u={start:i>r?i-r:0,end:i<this.thumbs.length-1-r?i+r:this.thumbs.length-1},S=this.options.thumbsImageFadeInDuration,p=this;for(let m=u.start;m<=u.end;m++){let l=this.getThumbByIndex(m),h=l.find(".wrap");if(!h.hasClass("loading")&&!h.hasClass("loaded"))if(l.attr("data-visible")!=="false"){h.removeClass("loadingFailed"),h.addClass("loading"),s&&h.addClass(s);let x=l.attr("data-src");p.config.options.thumbsCacheInvalidation&&p.config.options.thumbsCacheInvalidation.enabled&&(x+=`${p.config.options.thumbsCacheInvalidation.paramType}t=${I.getTimeStamp()}`);let c=n('<img src="'+x+'" alt=""/>');c.hide(),c.on("load",function(){n(this).fadeIn(S,function(){n(this).parent().switchClass("loading","loaded")})}),c.on("error",function(){n(this).parent().switchClass("loading","loadingFailed")}),h.append(c)}else h.hide()}}show(){this.isOpen=!0,this.$element.show(),setTimeout(()=>{this.selectIndex(this.extension.helper.canvasIndex)},1)}hide(){this.isOpen=!1,this.$element.hide()}isPDF(){let s=this.extension.helper.getCurrentCanvas().getType();return s?s.toString().includes("pdf"):!1}setLabel(){n(this.$thumbs).find("span.index").hide(),n(this.$thumbs).find("span.label").show()}addSelectedClassToThumbs(e){this.getThumbByIndex(e).addClass("selected")}selectIndex(e){if(e===-1||!this.thumbs||!this.thumbs.length)return;this.getAllThumbs().removeClass("selected"),this.$selectedThumb=this.getThumbByIndex(e),this.addSelectedClassToThumbs(e),~this.extension.getPagedIndices(e).indexOf(this.lastThumbClickedIndex)||this.$element.scrollTop(this.$selectedThumb.position().top),this.loadThumbs(e)}getAllThumbs(){return this._$thumbsCache||(this._$thumbsCache=this.$thumbs.find(".thumb")),this._$thumbsCache}getThumbByIndex(e){return this.$thumbs.find('[data-index="'+e+'"]')}scrollToThumb(e){let s=this.getThumbByIndex(e);this.$element.scrollTop(s.position().top)}resize(){super.resize()}};var $=class extends T{create(){this.setConfig("resourcesLeftPanel"),super.create()}};var w=g(F());var R=g(D()),d=y(),A=class extends H{constructor(e){super(e)}create(){this.setConfig("resourcesLeftPanel"),super.create(),this.setTitle(this.content.title),this.$tabsContent=d('<div class="tabsContent"></div>'),this.$main.append(this.$tabsContent),this.$views=d('<div class="views"></div>'),this.$tabsContent.append(this.$views),this.$thumbsView=d('<div class="thumbsView"></div>'),this.$views.append(this.$thumbsView),this.$resourcesView=d('<div class="resourcesView"></div>'),this.$resources=d("<ul></ul>"),this.$resourcesView.append(this.$resources),this.$views.append(this.$resourcesView),this.thumbsView=new $(this.$thumbsView),this.dataBind()}dataBind(){this.dataBindThumbsView();let e=this.extension.helper.getCurrentCanvas().getResources();e.length===0&&this.$resourcesView.hide();for(let s=0;s<e.length;s++){let t=e[s].getResource();if(t){let i=R.LanguageMap.getValue(t.getLabel());if(i){let r=L.simplifyMimeType(t.getFormat().toString()),u=d('<li><a href="'+t.id+'" target="_blank">'+i+" ("+r+")</li>");this.$resources.append(u)}}}}dataBindThumbsView(){if(!this.thumbsView)return;let e,s,a=this.extension.helper.getViewingDirection();a&&(a===w.ViewingDirection.LEFT_TO_RIGHT||a===w.ViewingDirection.RIGHT_TO_LEFT)?(e=this.config.options.twoColThumbWidth,s=this.config.options.twoColThumbHeight):(e=this.config.options.oneColThumbWidth,s=this.config.options.oneColThumbHeight),typeof e=="undefined"&&(e=100),typeof s=="undefined"&&(s=100),this.thumbsView.thumbs=this.extension.helper.getThumbs(e,s),this.thumbsView.thumbs.length<2&&this.$thumbsView.hide(),this.thumbsView.databind()}expandFullStart(){super.expandFullStart(),this.extensionHost.publish(o.LEFTPANEL_EXPAND_FULL_START)}expandFullFinish(){super.expandFullFinish(),this.extensionHost.publish(o.LEFTPANEL_EXPAND_FULL_FINISH)}collapseFullStart(){super.collapseFullStart(),this.extensionHost.publish(o.LEFTPANEL_COLLAPSE_FULL_START)}collapseFullFinish(){super.collapseFullFinish(),this.extensionHost.publish(o.LEFTPANEL_COLLAPSE_FULL_FINISH)}resize(){super.resize(),this.$views.height(this.$main.height()),this.$resources.height(this.$main.height())}};export{A as a};