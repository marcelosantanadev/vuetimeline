import{format as e}from"timeago.js";var t={mixins:[{props:{theme:{type:String,default:null,validator:function(e){return["dark","light"].includes(e)}}},computed:{computedTheme:function(){return this.theme?this.theme:this.$gb.vuetimeline.theme}}}],props:{animation:{type:Boolean,default:!0},animationContainer:{type:String,default:null},animationDuration:{type:Number,default:1500},color:{type:String,default:"#30ca91",required:!0},date:{type:Date,required:!0},dateString:{type:String,default:null},isLast:{type:Boolean,default:!1}},computed:{ago:function(){return this.dateString||e(this.date)},getBackgroundColor:function(){return{background:this.color}},getColor:function(){return{color:this.color}}},mounted:function(){this.animation&&(0,require("scrollreveal").default)().reveal(this.$el,{container:this.animationContainer,duration:this.animationDuration})},methods:{onContentClick:function(e){this.$emit("click",e)}}};var i,n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var a={};var u=function(e,t,i,n,a,u,l,d,r,o){"boolean"!=typeof l&&(r=d,d=l,l=!1);var p,g="function"==typeof i?i.options:i;if(e&&e.render&&(g.render=e.render,g.staticRenderFns=e.staticRenderFns,g._compiled=!0,a&&(g.functional=!0)),n&&(g._scopeId=n),u?(p=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,r(e)),e&&e._registeredComponents&&e._registeredComponents.add(u)},g._ssrRegister=p):t&&(p=l?function(e){t.call(this,o(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,d(e))}),p)if(g.functional){var m=g.render;g.render=function(e,t){return p.call(t),m(e,t)}}else{var _=g.beforeCreate;g.beforeCreate=_?[].concat(_,p):[p]}return i}({render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("article",{class:["gb-vue-timeline-update","gb-vue-timeline-update--"+e.computedTheme,"js-vue-timeline-update",{"gb-vue-timeline-update--is-last":e.isLast}]},[i("div",{staticClass:"gb-vue-timeline-update__left"},[e.$slots.left?i("div",{staticClass:"gb-vue-timeline-update__ago"},[e._t("left")],2):e._e()]),i("div",{staticClass:"gb-vue-timeline-update__center"},[i("span",{staticClass:"gb-vue-timeline-update__bullet"},[i("span",{class:["gb-vue-timeline-update__ago"],style:e.getBackgroundColor},[e._v(e._s(e.ago))])]),i("span",{staticClass:"gb-vue-timeline-update__line"})]),i("div",{class:["gb-vue-timeline-update__right",{"gb-vue-timeline-update__right--clickable":e.$listeners.click}],on:{click:e.onContentClick}},[e.$slots.default?i("div",{staticClass:"gb-vue-timeline-update__slot"},[e._t("default")],2):e._e()])])},staticRenderFns:[]},(function(e){e&&e("data-v-58c297a8_0",{source:'@charset "UTF-8";.gb-vue-timeline-update{display:flex;overflow:hidden;text-align:left;font-family:Heebo,"Helvetica Neue",Source Sans Pro,Helvetica,Arial,sans-serif}.gb-vue-timeline-update a{text-decoration:underline}.gb-vue-timeline-update .gb-vue-timeline-update__left .gb-vue-timeline-update__ago,.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__ago{font-size:14px;user-select:none}.gb-vue-timeline-update .gb-vue-timeline-update__left{display:none}.gb-vue-timeline-update .gb-vue-timeline-update__center{position:relative;flex:0 0 auto;margin-right:65px;margin-left:55px}.gb-vue-timeline-update .gb-vue-timeline-update__center .gb-vue-timeline-update__bullet{position:absolute;top:0;left:50%;transform:translateX(-50%)}.gb-vue-timeline-update .gb-vue-timeline-update__center .gb-vue-timeline-update__line{display:inline-block;margin-top:50px;width:1px;height:100%}.gb-vue-timeline-update .gb-vue-timeline-update__right{flex:1;padding-bottom:40px;width:100%}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__description,.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__title{font-size:16px;line-height:26px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information{display:flex;flex-direction:column;margin-top:4px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta{display:flex;align-items:center;margin-bottom:10px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta .gb-vue-timeline-update__category{align-self:flex-start;flex:0 0 auto;margin-right:10px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta .gb-vue-timeline-update__ago{line-height:24px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__title{flex:1;margin:0 0 4px;text-transform:uppercase;font-weight:700}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__title--clickable{cursor:pointer}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__description{margin:0}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__thumbnail{box-sizing:border-box;margin:6px 0 12px;max-width:100%;border-width:1px;border-style:solid;border-radius:6px;transition:all 250ms linear;user-select:none}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__thumbnail--clickable{cursor:pointer}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__slot{background:#fff;padding:20px;border-radius:3px;color:#424242}.gb-vue-timeline-update .gb-vue-timeline-update__right--clickable{cursor:pointer}.gb-vue-timeline-update--is-last .gb-vue-timeline-update__right{padding-bottom:20px}.gb-vue-timeline-update--dark{color:#fff}.gb-vue-timeline-update--dark a{color:#fff}.gb-vue-timeline-update--dark .gb-vue-timeline-update__left .gb-vue-timeline-update__ago,.gb-vue-timeline-update--dark .gb-vue-timeline-update__right .gb-vue-timeline-update__ago{color:#a9c7df}.gb-vue-timeline-update--dark .gb-vue-timeline-update__center .gb-vue-timeline-update__bullet{border-radius:30px;margin-top:5px;border:1px dashed #afafaf;color:#fff;width:95px;height:45px;font-size:14px;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gb-vue-timeline-update--dark .gb-vue-timeline-update__center .gb-vue-timeline-update__bullet .gb-vue-timeline-update__ago{padding:8px;border-radius:15px}.gb-vue-timeline-update--dark .gb-vue-timeline-update__center .gb-vue-timeline-update__line{border-right:1px dashed #afafaf}.gb-vue-timeline-update--dark .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta .gb-vue-timeline-update__category{box-shadow:0 1px 5px 0 #18191a}.gb-vue-timeline-update--dark .gb-vue-timeline-update__right .gb-vue-timeline-update__thumbnail{border-color:#fff;box-shadow:0 1px 5px 0 #18191a}.gb-vue-timeline-update--dark .gb-vue-timeline-update__right .gb-vue-timeline-update__description{color:#a9c7df}.gb-vue-timeline-update--dark.gb-vue-timeline-update--is-last .gb-vue-timeline-update__center .gb-vue-timeline-update__line{background:linear-gradient(#313d4f 50%,rgba(49,61,79,0))}.gb-vue-timeline-update--light{color:#2c405a}.gb-vue-timeline-update--light a{color:#2c405a}.gb-vue-timeline-update--light .gb-vue-timeline-update__left .gb-vue-timeline-update__ago,.gb-vue-timeline-update--light .gb-vue-timeline-update__right .gb-vue-timeline-update__ago{color:#556c8d}.gb-vue-timeline-update--light .gb-vue-timeline-update__center .gb-vue-timeline-update__bullet{border-radius:30px;margin-top:5px;border:1px dashed #afafaf;color:#fff;width:95px;height:45px;font-size:14px;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gb-vue-timeline-update--light .gb-vue-timeline-update__center .gb-vue-timeline-update__bullet .gb-vue-timeline-update__ago{padding:8px;border-radius:15px}.gb-vue-timeline-update--light .gb-vue-timeline-update__center .gb-vue-timeline-update__line{border-right:1px dashed #afafaf}.gb-vue-timeline-update--light .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta .gb-vue-timeline-update__category{box-shadow:0 1px 5px 0 #eaf6ff}.gb-vue-timeline-update--light .gb-vue-timeline-update__right .gb-vue-timeline-update__thumbnail{border-color:#3f536e;box-shadow:0 1px 5px 0 #eaf6ff}.gb-vue-timeline-update--light .gb-vue-timeline-update__right .gb-vue-timeline-update__description{color:#556c8d}.gb-vue-timeline-update--light.gb-vue-timeline-update--is-last .gb-vue-timeline-update__center .gb-vue-timeline-update__line{background:linear-gradient(#c5d9e8 50%,rgba(197,217,232,0))}@media (min-width:48em){.gb-vue-timeline-update .gb-vue-timeline-update__left{display:block;flex:0 0 auto;width:50px;text-align:right}.gb-vue-timeline-update .gb-vue-timeline-update__left .gb-vue-timeline-update__ago{display:inline-block;line-height:32px}.gb-vue-timeline-update .gb-vue-timeline-update__center{margin-right:65px;margin-left:65px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__description,.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__title{font-size:18px;line-height:28px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information{flex-direction:row}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta .gb-vue-timeline-update__ago{display:none}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__title{margin-bottom:8px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__thumbnail{margin:8px 0 16px}}',map:void 0,media:void 0})}),t,void 0,!1,void 0,!1,(function(e){return function(e,t){return function(e,t){var u=n?t.media||"default":e,l=a[u]||(a[u]={ids:new Set,styles:[]});if(!l.ids.has(e)){l.ids.add(e);var d=t.source;if(t.map&&(d+="\n/*# sourceURL="+t.map.sources[0]+" */",d+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),l.element||(l.element=document.createElement("style"),l.element.type="text/css",t.media&&l.element.setAttribute("media",t.media),void 0===i&&(i=document.head||document.getElementsByTagName("head")[0]),i.appendChild(l.element)),"styleSheet"in l.element)l.styles.push(d),l.element.styleSheet.cssText=l.styles.filter(Boolean).join("\n");else{var r=l.ids.size-1,o=document.createTextNode(d),p=l.element.childNodes;p[r]&&l.element.removeChild(p[r]),p.length?l.element.insertBefore(o,p[r]):l.element.appendChild(o)}}}(e,t)}}),void 0,void 0);var l={install:function e(t,i){e.installed||(e.installed=!0,t.component("vue-timeline-update",u),t.prototype.$gb||(t.prototype.$gb={}),t.prototype.$gb.vuetimeline={},t.prototype.$gb.vuetimeline.theme=(i||{}).theme||"dark")}},d=null;"undefined"!=typeof window?d=window.Vue:"undefined"!=typeof global&&(d=global.Vue),d&&d.use(l);export default l;
