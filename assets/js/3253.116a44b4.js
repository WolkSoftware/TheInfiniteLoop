/*! For license information please see 3253.116a44b4.js.LICENSE.txt */
(self.webpackChunkinfinite_loop_dot_org=self.webpackChunkinfinite_loop_dot_org||[]).push([[3253],{8875:(e,t,o)=>{var n;!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(n=function(){return a}.call(t,o,t,e))||(e.exports=n)}()},6871:(e,t,o)=>{"use strict";function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function r(e){this.setState(function(t){var o=this.constructor.getDerivedStateFromProps(e,t);return null!=o?o:null}.bind(this))}function a(e,t){try{var o=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,n)}finally{this.props=o,this.state=n}}function l(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var o=null,l=null,s=null;if("function"==typeof t.componentWillMount?o="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(o="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?l="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(l="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?s="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==o||null!==l||null!==s){var i=e.displayName||e.name,u="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+u+" but also contains the following legacy lifecycles:"+(null!==o?"\n  "+o:"")+(null!==l?"\n  "+l:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=r),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=a;var c=t.componentDidUpdate;t.componentDidUpdate=function(e,t,o){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:o;c.call(this,e,t,n)}}return e}o.r(t),o.d(t,{polyfill:()=>l}),n.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0},9983:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=o(7294),l=h(a),s=h(o(3935)),i=h(o(5697)),u=h(o(8747)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(o(7149)),f=o(1112),d=h(f),p=o(6871);function h(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var v=t.portalClassName="ReactModalPortal",y=t.bodyOpenClassName="ReactModal__Body--open",b=f.canUseDOM&&void 0!==s.default.createPortal,O=function(e){return document.createElement(e)},C=function(){return b?s.default.createPortal:s.default.unstable_renderSubtreeIntoContainer};function g(e){return e()}var w=function(e){function t(){var e,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=Array(a),c=0;c<a;c++)i[c]=arguments[c];return o=r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.removePortal=function(){!b&&s.default.unmountComponentAtNode(r.node);var e=g(r.props.parentSelector);e&&e.contains(r.node)?e.removeChild(r.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},r.portalRef=function(e){r.portal=e},r.renderPortal=function(e){var o=C()(r,l.default.createElement(u.default,n({defaultStyles:t.defaultStyles},e)),r.node);r.portalRef(o)},m(r,o)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){f.canUseDOM&&(b||(this.node=O("div")),this.node.className=this.props.portalClassName,g(this.props.parentSelector).appendChild(this.node),!b&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:g(e.parentSelector),nextParent:g(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,o){if(f.canUseDOM){var n=this.props,r=n.isOpen,a=n.portalClassName;e.portalClassName!==a&&(this.node.className=a);var l=o.prevParent,s=o.nextParent;s!==l&&(l.removeChild(this.node),s.appendChild(this.node)),(e.isOpen||r)&&!b&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(f.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),o=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);o?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,o-t)):this.removePortal()}}},{key:"render",value:function(){return f.canUseDOM&&b?(!this.node&&b&&(this.node=O("div")),C()(l.default.createElement(u.default,n({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){c.setElement(e)}}]),t}(a.Component);w.propTypes={isOpen:i.default.bool.isRequired,style:i.default.shape({content:i.default.object,overlay:i.default.object}),portalClassName:i.default.string,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,className:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),overlayClassName:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),appElement:i.default.oneOfType([i.default.instanceOf(d.default),i.default.instanceOf(f.SafeHTMLCollection),i.default.instanceOf(f.SafeNodeList),i.default.arrayOf(i.default.instanceOf(d.default))]),onAfterOpen:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,ariaHideApp:i.default.bool,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,parentSelector:i.default.func,aria:i.default.object,data:i.default.object,role:i.default.string,contentLabel:i.default.string,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func},w.defaultProps={isOpen:!1,portalClassName:v,bodyOpenClassName:y,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return l.default.createElement("div",e,t)},contentElement:function(e,t){return l.default.createElement("div",e,t)}},w.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(w),t.default=w},8747:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(7294),s=v(o(5697)),i=m(o(9685)),u=v(o(8338)),c=m(o(7149)),f=m(o(2409)),d=o(1112),p=v(d),h=v(o(9623));function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function v(e){return e&&e.__esModule?e:{default:e}}o(5063);var y={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},b=function(e){return"Tab"===e.code||9===e.keyCode},O=function(e){return"Escape"===e.code||27===e.keyCode},C=0,g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.setOverlayRef=function(e){o.overlay=e,o.props.overlayRef&&o.props.overlayRef(e)},o.setContentRef=function(e){o.content=e,o.props.contentRef&&o.props.contentRef(e)},o.afterClose=function(){var e=o.props,t=e.appElement,n=e.ariaHideApp,r=e.htmlOpenClassName,a=e.bodyOpenClassName,l=e.parentSelector,s=l&&l().ownerDocument||document;a&&f.remove(s.body,a),r&&f.remove(s.getElementsByTagName("html")[0],r),n&&C>0&&0===(C-=1)&&c.show(t),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(i.returnFocus(o.props.preventScroll),i.teardownScopedFocus()):i.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),h.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(i.setupScopedFocus(o.node),i.markForFocusLater()),o.setState({isOpen:!0},(function(){o.openAnimationFrame=requestAnimationFrame((function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})}))})))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var e=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:e},(function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())}))},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(e){b(e)&&(0,u.default)(o.content,e),o.props.shouldCloseOnEsc&&O(e)&&(e.stopPropagation(),o.requestClose(e))},o.handleOverlayOnClick=function(e){null===o.shouldClose&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(e):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(e){o.props.shouldCloseOnOverlayClick||e.target!=o.overlay||e.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(e){return o.ownerHandlesClose()&&o.props.onRequestClose(e)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(e,t){var n="object"===(void 0===t?"undefined":r(t))?t:{base:y[e],afterOpen:y[e]+"--after-open",beforeClose:y[e]+"--before-close"},a=n.base;return o.state.afterOpen&&(a=a+" "+n.afterOpen),o.state.beforeClose&&(a=a+" "+n.beforeClose),"string"==typeof t&&t?a+" "+t:a},o.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(o,n){return o[e+"-"+n]=t[n],o}),{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,o=e.ariaHideApp,n=e.htmlOpenClassName,r=e.bodyOpenClassName,a=e.parentSelector,l=a&&a().ownerDocument||document;r&&f.add(l.body,r),n&&f.add(l.getElementsByTagName("html")[0],n),o&&(C+=1,c.hide(t)),h.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,o=e.className,r=e.overlayClassName,a=e.defaultStyles,l=e.children,s=o?{}:a.content,i=r?{}:a.overlay;if(this.shouldBeClosed())return null;var u={ref:this.setOverlayRef,className:this.buildClassName("overlay",r),style:n({},i,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},c=n({id:t,ref:this.setContentRef,style:n({},s,this.props.style.content),className:this.buildClassName("content",o),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),f=this.props.contentElement(c,l);return this.props.overlayElement(u,f)}}]),t}(l.Component);g.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},g.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(p.default),s.default.instanceOf(d.SafeHTMLCollection),s.default.instanceOf(d.SafeNodeList),s.default.arrayOf(s.default.instanceOf(p.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},t.default=g,e.exports=t.default},7149:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){s&&(s.removeAttribute?s.removeAttribute("aria-hidden"):null!=s.length?s.forEach((function(e){return e.removeAttribute("aria-hidden")})):document.querySelectorAll(s).forEach((function(e){return e.removeAttribute("aria-hidden")})));s=null},t.log=function(){0},t.assertNodeList=i,t.setElement=function(e){var t=e;if("string"==typeof t&&l.canUseDOM){var o=document.querySelectorAll(t);i(o,t),t=o}return s=t||s},t.validateElement=u,t.hide=function(e){var t=!0,o=!1,n=void 0;try{for(var r,a=u(e)[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){r.value.setAttribute("aria-hidden","true")}}catch(l){o=!0,n=l}finally{try{!t&&a.return&&a.return()}finally{if(o)throw n}}},t.show=function(e){var t=!0,o=!1,n=void 0;try{for(var r,a=u(e)[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){r.value.removeAttribute("aria-hidden")}}catch(l){o=!0,n=l}finally{try{!t&&a.return&&a.return()}finally{if(o)throw n}}},t.documentNotReadyOrSSRTesting=function(){s=null};var n,r=o(2473),a=(n=r)&&n.__esModule?n:{default:n},l=o(1112);var s=null;function i(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function u(e){var t=e||s;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,a.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}},5063:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){for(var e=[l,s],t=0;t<e.length;t++){var o=e[t];o&&(o.parentNode&&o.parentNode.removeChild(o))}l=s=null,i=[]},t.log=function(){console.log("bodyTrap ----------"),console.log(i.length);for(var e=[l,s],t=0;t<e.length;t++){var o=e[t]||{};console.log(o.nodeName,o.className,o.id)}console.log("edn bodyTrap ----------")};var n,r=o(9623),a=(n=r)&&n.__esModule?n:{default:n};var l=void 0,s=void 0,i=[];function u(){0!==i.length&&i[i.length-1].focusContent()}a.default.subscribe((function(e,t){l||s||((l=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),l.style.position="absolute",l.style.opacity="0",l.setAttribute("tabindex","0"),l.addEventListener("focus",u),(s=l.cloneNode()).addEventListener("focus",u)),(i=t).length>0?(document.body.firstChild!==l&&document.body.insertBefore(l,document.body.firstChild),document.body.lastChild!==s&&document.body.appendChild(s)):(l.parentElement&&l.parentElement.removeChild(l),s.parentElement&&s.parentElement.removeChild(s))}))},2409:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){var e=document.getElementsByTagName("html")[0];for(var t in o)r(e,o[t]);var a=document.body;for(var l in n)r(a,n[l]);o={},n={}},t.log=function(){0};var o={},n={};function r(e,t){e.classList.remove(t)}t.add=function(e,t){return r=e.classList,a="html"==e.nodeName.toLowerCase()?o:n,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(a,e),r.add(e)}));var r,a},t.remove=function(e,t){return r=e.classList,a="html"==e.nodeName.toLowerCase()?o:n,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(a,e),0===a[e]&&r.remove(e)}));var r,a}},9685:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){l=[]},t.log=function(){0},t.handleBlur=u,t.handleFocus=c,t.markForFocusLater=function(){l.push(document.activeElement)},t.returnFocus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{return void(0!==l.length&&(t=l.pop()).focus({preventScroll:e}))}catch(o){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){l.length>0&&l.pop()},t.setupScopedFocus=function(e){s=e,window.addEventListener?(window.addEventListener("blur",u,!1),document.addEventListener("focus",c,!0)):(window.attachEvent("onBlur",u),document.attachEvent("onFocus",c))},t.teardownScopedFocus=function(){s=null,window.addEventListener?(window.removeEventListener("blur",u),document.removeEventListener("focus",c)):(window.detachEvent("onBlur",u),document.detachEvent("onFocus",c))};var n,r=o(7845),a=(n=r)&&n.__esModule?n:{default:n};var l=[],s=null,i=!1;function u(){i=!0}function c(){if(i){if(i=!1,!s)return;setTimeout((function(){s.contains(document.activeElement)||((0,a.default)(s)[0]||s).focus()}),0)}}},9623:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(){console.log("portalOpenInstances ----------"),console.log(n.openInstances.length),n.openInstances.forEach((function(e){return console.log(e)})),console.log("end portalOpenInstances ----------")},t.resetState=function(){n=new o};var o=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var o=t.openInstances.indexOf(e);-1!==o&&(t.openInstances.splice(o,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(o){return o(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]},n=new o;t.default=n},1112:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0;var n,r=o(8875);var a=((n=r)&&n.__esModule?n:{default:n}).default,l=a.canUseDOM?window.HTMLElement:{};t.SafeHTMLCollection=a.canUseDOM?window.HTMLCollection:{},t.SafeNodeList=a.canUseDOM?window.NodeList:{},t.canUseDOM=a.canUseDOM;t.default=l},8338:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var o=(0,a.default)(e);if(!o.length)return void t.preventDefault();var n=void 0,r=t.shiftKey,s=o[0],i=o[o.length-1],u=l();if(e===u){if(!r)return;n=i}i!==u||r||(n=s);s===u&&r&&(n=i);if(n)return t.preventDefault(),void n.focus();var c=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==c||"Chrome"==c[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var f=o.indexOf(u);f>-1&&(f+=r?-1:1);if(void 0===(n=o[f]))return t.preventDefault(),void(n=r?i:s).focus();t.preventDefault(),n.focus()};var n,r=o(7845),a=(n=r)&&n.__esModule?n:{default:n};function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return e.activeElement.shadowRoot?l(e.activeElement.shadowRoot):e.activeElement}e.exports=t.default},7845:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var o=[].slice.call(t.querySelectorAll("*"),0).reduce((function(t,o){return t.concat(o.shadowRoot?e(o.shadowRoot):[o])}),[]);return o.filter(s)};var o="none",n="contents",r=/input|select|textarea|button|object|iframe/;function a(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;try{var r=window.getComputedStyle(e),a=r.getPropertyValue("display");return t?a!==n&&function(e,t){return"visible"!==t.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0}(e,r):a===o}catch(l){return console.warn("Failed to inspect element style"),!1}}function l(e,t){var o=e.nodeName.toLowerCase();return(r.test(o)&&!e.disabled||"a"===o&&e.href||t)&&function(e){for(var t=e,o=e.getRootNode&&e.getRootNode();t&&t!==document.body;){if(o&&t===o&&(t=o.host.parentNode),a(t))return!1;t=t.parentNode}return!0}(e)}function s(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var o=isNaN(t);return(o||t>=0)&&l(e,!o)}e.exports=t.default},3253:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=o(9983),a=(n=r)&&n.__esModule?n:{default:n};t.default=a.default,e.exports=t.default},2473:e=>{"use strict";var t=function(){};e.exports=t}}]);