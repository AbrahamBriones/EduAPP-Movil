(function framework7ComponentLoader(e,i){void 0===i&&(i=!0);document,window;var o=e.$,n=(e.Template7,e.utils),r=(e.device,e.support,e.Class,e.Modal,e.ConstructorMethods,e.ModalMethods,{init:function(e){if("md"===this.theme){var i=o(e);0===i.length||0<i.children(".preloader-inner").length||i.append(n.mdPreloaderContent)}},visible:!1,show:function(e){void 0===e&&(e="white");if(!r.visible){var i="md"!==this.theme?"":n.mdPreloaderContent;o("html").addClass("with-modal-preloader"),this.root.append('\n      <div class="preloader-backdrop"></div>\n      <div class="preloader-modal">\n        <div class="preloader color-'+e+'">'+i+"</div>\n      </div>\n    "),r.visible=!0}},hide:function(){r.visible&&(o("html").removeClass("with-modal-preloader"),this.root.find(".preloader-backdrop, .preloader-modal").remove(),r.visible=!1)}}),d={name:"preloader",create:function(){var e=this;n.extend(e,{preloader:{init:r.init.bind(e),show:r.show.bind(e),hide:r.hide.bind(e)}})},on:{photoBrowserOpen:function(e){var o=this;"md"===o.theme&&e.$el.find(".preloader").each(function(e,i){o.preloader.init(i)})},pageInit:function(e){var o=this;"md"===o.theme&&e.$el.find(".preloader").each(function(e,i){o.preloader.init(i)})}},vnode:{preloader:{insert:function(e){var i=e.elm;"md"===this.theme&&this.preloader.init(i)}}}};if(i){if(e.prototype.modules&&e.prototype.modules[d.name])return;e.use(d),e.instance&&(e.instance.useModuleParams(d,e.instance.params),e.instance.useModule(d))}return d}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))