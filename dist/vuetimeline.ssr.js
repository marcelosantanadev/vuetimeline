'use strict';Object.defineProperty(exports,'__esModule',{value:true});/**************************************************************************
 * MIXINS > THEME
 * @docs https://vuejs.org/v2/guide/mixins.html
 ***************************************************************************/

var ThemeMixin = {
  props: {
    theme: {
      type: String,
      default: null,
      validator: function validator(x) {
        return ["dark", "light"].includes(x)
      }
    }
  },

  computed: {
    computedTheme: function computedTheme() {
      if (this.theme) {
        return this.theme
      }

      return this.$gb.vuetimeline.theme
    }
  }
};//

var script = {
  mixins: [ThemeMixin],

  props: {
    animation: {
      type: Boolean,
      default: true
    },
    animationContainer: {
      type: String,
      default: null
    },
    animationDuration: {
      type: Number,
      default: 1500
    },
    backgroundColor: {
      type: String,
      default: "#30ca91",
      required: true
    },
    fontColor: {
      type: String,
      default: "#000000",
      required: true
    },
    dateString: {
      type: String,
      default: null
    },
    isLast: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ago: function ago() {
      return this.dateString
    },
    getBackgroundColor: function getBackgroundColor() {
      return {
        background: this.backgroundColor,
        color: this.fontColor
      }
    },
  },

  mounted: function mounted() {
    if (this.animation) {
      var ScrollReveal = require("scrollreveal").default;

      ScrollReveal().reveal(this.$el, {
        container: this.animationContainer,
        duration: this.animationDuration
      });
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onContentClick: function onContentClick(event) {
      this.$emit("click", event);
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        { return function () { }; }
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: function () { return context._renderStyles(context._styles); }
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return function (id, style) { return addStyle(id, style, context); };
}
function addStyle(id, css, context) {
    var group =  css.media || 'default' ;
    var style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        var code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    var css = '';
    for (var key in styles) {
        var style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{class:["gb-vue-timeline-update", "gb-vue-timeline-update--" + _vm.computedTheme, "js-vue-timeline-update", { "gb-vue-timeline-update--is-last": _vm.isLast }]},[_vm._ssrNode("<div class=\"gb-vue-timeline-update__left\">","</div>",[(_vm.$slots.left)?_vm._ssrNode("<div class=\"gb-vue-timeline-update__ago\">","</div>",[_vm._t("left")],2):_vm._e()]),_vm._ssrNode("<div class=\"gb-vue-timeline-update__center\">","</div>",[_vm._ssrNode("<span class=\"gb-vue-timeline-update__bullet\">","</span>",[_vm._ssrNode("<span"+(_vm._ssrClass(null,["gb-vue-timeline-update__ago d-flex align-items-center justify-content-center"]))+(_vm._ssrStyle(null,_vm.getBackgroundColor, null))+">","</span>",[_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.ago))),_vm._t("updateago")],2)]),_vm._ssrNode("<span class=\"gb-vue-timeline-update__line\"></span>")],2),_vm._ssrNode("<div"+(_vm._ssrClass(null,["gb-vue-timeline-update__right",{ "gb-vue-timeline-update__right--clickable": _vm.$listeners.click }]))+">","</div>",[(_vm.$slots.default)?_vm._ssrNode("<div class=\"gb-vue-timeline-update__slot\">","</div>",[_vm._t("default")],2):_vm._e()])])};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-40df1bae_0", { source: "@charset \"UTF-8\";.gb-vue-timeline-update{display:flex;overflow:hidden;text-align:left;font-family:Heebo,\"Helvetica Neue\",Source Sans Pro,Helvetica,Arial,sans-serif}.gb-vue-timeline-update a{text-decoration:underline}.gb-vue-timeline-update .gb-vue-timeline-update__left .gb-vue-timeline-update__ago,.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__ago{font-size:14px;user-select:none}.gb-vue-timeline-update .gb-vue-timeline-update__left{display:none}.gb-vue-timeline-update .gb-vue-timeline-update__center{position:relative;flex:0 0 auto;margin-right:65px;margin-left:55px}.gb-vue-timeline-update .gb-vue-timeline-update__center .gb-vue-timeline-update__bullet{position:absolute;top:0;left:50%;transform:translateX(-50%)}.gb-vue-timeline-update .gb-vue-timeline-update__center .gb-vue-timeline-update__line{display:inline-block;margin-top:50px;width:1px;height:100%}.gb-vue-timeline-update .gb-vue-timeline-update__right{flex:1;padding-bottom:40px;width:100%}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__description,.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__title{font-size:16px;line-height:26px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information{display:flex;flex-direction:column;margin-top:4px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta{display:flex;align-items:center;margin-bottom:10px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta .gb-vue-timeline-update__category{align-self:flex-start;flex:0 0 auto;margin-right:10px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta .gb-vue-timeline-update__ago{line-height:24px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__title{flex:1;margin:0 0 4px;text-transform:uppercase;font-weight:700}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__title--clickable{cursor:pointer}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__description{margin:0}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__thumbnail{box-sizing:border-box;margin:6px 0 12px;max-width:100%;border-width:1px;border-style:solid;border-radius:6px;transition:all 250ms linear;user-select:none}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__thumbnail--clickable{cursor:pointer}.gb-vue-timeline-update .gb-vue-timeline-update__right--clickable{cursor:pointer}.gb-vue-timeline-update--is-last .gb-vue-timeline-update__right{padding-bottom:20px}.gb-vue-timeline-update--dark{color:#fff}.gb-vue-timeline-update--dark a{color:#fff}.gb-vue-timeline-update--dark .gb-vue-timeline-update__left .gb-vue-timeline-update__ago,.gb-vue-timeline-update--dark .gb-vue-timeline-update__right .gb-vue-timeline-update__ago{color:#a9c7df}.gb-vue-timeline-update--dark .gb-vue-timeline-update__center .gb-vue-timeline-update__bullet{border-radius:30px;margin-top:5px;border:1px dashed #afafaf;color:#fff;font-size:14px;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:3px}.gb-vue-timeline-update--dark .gb-vue-timeline-update__center .gb-vue-timeline-update__bullet .gb-vue-timeline-update__ago{padding:8px;border-radius:15px;min-width:35px;min-height:35px}.gb-vue-timeline-update--dark .gb-vue-timeline-update__center .gb-vue-timeline-update__line{border-right:1px dashed #afafaf}.gb-vue-timeline-update--dark .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta .gb-vue-timeline-update__category{box-shadow:0 1px 5px 0 #18191a}.gb-vue-timeline-update--dark .gb-vue-timeline-update__right .gb-vue-timeline-update__thumbnail{border-color:#fff;box-shadow:0 1px 5px 0 #18191a}.gb-vue-timeline-update--dark .gb-vue-timeline-update__right .gb-vue-timeline-update__description{color:#a9c7df}.gb-vue-timeline-update--dark.gb-vue-timeline-update--is-last .gb-vue-timeline-update__center .gb-vue-timeline-update__line{border:none!important}.gb-vue-timeline-update--light{color:#2c405a}.gb-vue-timeline-update--light a{color:#2c405a}.gb-vue-timeline-update--light .gb-vue-timeline-update__left .gb-vue-timeline-update__ago,.gb-vue-timeline-update--light .gb-vue-timeline-update__right .gb-vue-timeline-update__ago{color:#556c8d}.gb-vue-timeline-update--light .gb-vue-timeline-update__center .gb-vue-timeline-update__bullet{border-radius:30px;margin-top:5px;border:1px dashed #afafaf;color:#fff;font-size:14px;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:3px}.gb-vue-timeline-update--light .gb-vue-timeline-update__center .gb-vue-timeline-update__bullet .gb-vue-timeline-update__ago{padding:8px;border-radius:15px;min-width:35px;min-height:35px}.gb-vue-timeline-update--light .gb-vue-timeline-update__center .gb-vue-timeline-update__line{border-right:1px dashed #afafaf}.gb-vue-timeline-update--light .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta .gb-vue-timeline-update__category{box-shadow:0 1px 5px 0 #eaf6ff}.gb-vue-timeline-update--light .gb-vue-timeline-update__right .gb-vue-timeline-update__thumbnail{border-color:#3f536e;box-shadow:0 1px 5px 0 #eaf6ff}.gb-vue-timeline-update--light .gb-vue-timeline-update__right .gb-vue-timeline-update__description{color:#556c8d}.gb-vue-timeline-update--light.gb-vue-timeline-update--is-last .gb-vue-timeline-update__center .gb-vue-timeline-update__line{border:none!important}@media (min-width:48em){.gb-vue-timeline-update .gb-vue-timeline-update__left{display:block;flex:0 0 auto;width:50px;text-align:right}.gb-vue-timeline-update .gb-vue-timeline-update__left .gb-vue-timeline-update__ago{display:inline-block;line-height:32px}.gb-vue-timeline-update .gb-vue-timeline-update__center{margin-right:65px;margin-left:65px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__description,.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__title{font-size:18px;line-height:28px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information{flex-direction:row}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__meta .gb-vue-timeline-update__ago{display:none}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__information .gb-vue-timeline-update__title{margin-bottom:8px}.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__thumbnail{margin:8px 0 16px}}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = "data-v-40df1bae";
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject shadow dom */
  

  
  var VueTimelineUpdate = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    createInjectorSSR,
    undefined
  );/**************************************************************************
 * IMPORTS
 ***************************************************************************/

/**************************************************************************
 * ENVIRONMENT CONFIGURATIONS
 ***************************************************************************/

// install function executed by Vue.use()
function install(Vue, options) {
  if (install.installed) {
    return
  } else {
    install.installed = true;
  }

  // Declare the component
  Vue.component("vue-timeline-update", VueTimelineUpdate);

  // Configure the theme to use (dark will always be the default theme)
  if (!Vue.prototype.$gb) {
    Vue.prototype.$gb = {};
  }

  Vue.prototype.$gb.vuetimeline = {};
  Vue.prototype.$gb.vuetimeline.theme = (options || {}).theme || "dark";
}

// Create module definition for Vue.use()
var plugin = {
  install: install
};

// To auto-install when vue is found
/* global window global */
var GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}exports.default=plugin;