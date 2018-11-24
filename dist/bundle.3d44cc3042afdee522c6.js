webpackJsonp([2],[,,,,,,,,,,,,,,,function(e,t,n){t=e.exports=n(27)(!1),t.push([e.i,"html {\n  box-sizing: border-box;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', sans-serif;\n}\n",""])},function(e,t,n){var r=n(72);t=e.exports=n(27)(!1),t.push([e.i,"html, body, .root {\n  height: 100%;\n}\nbody {\n  line-height: 1.5;\n}\nbody, .app {\n  background: white;\n}\n\n/* main page */\n\n.list-books-title {\n  padding: 10px 0;\n  background: #2e7c31;\n  text-align: center;\n}\n.list-books-title h1 {\n  font-weight: 400;\n  margin: 0;\n  color: white;\n}\n\n.list-books-content {\n  padding: 0 0 80px;\n  flex: 1;\n}\n\n.bookshelf {\n  padding: 0 10px 20px;\n}\n\n@media (min-width: 600px) {\n  .bookshelf {\n    padding: 0 20px 40px;\n  }\n}\n\n.bookshelf-title {\n  border-bottom: 1px solid #dedede;\n}\n.bookshelf-books {\n  text-align: center;\n}\n\n.open-search {\n  position: fixed;\n  right: 25px;\n  bottom: 25px;\n}\n.open-search a {\n  display: block;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: #2e7d32;\n  background-image: url("+r(n(73))+");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 28px;\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n  font-size: 0;\n}\n\n/* search page */\n\n.search-books-bar {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  display: flex;\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 0 6px rgba(0,0,0,0.23);\n  background-color: #FFF;\n}\n.search-books-input-wrapper {\n  flex: 1;\n  background: #e9e;\n}\n.search-books-bar input {\n  width: 100%;\n  padding: 15px 10px;\n  font-size: 1.25em;\n  border: none;\n  outline: none;\n}\n\n.close-search {\n  display: block;\n  top: 20px;\n  left: 15px;\n  width: 50px;\n  height: 53px;\n  background: white;\n  background-image: url("+r(n(74))+");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 28px;\n  font-size: 0;\n}\n\n.search-books-results {\n  padding: 80px 10px 20px;\n}\n\n/* books grid */\n\n.books-grid {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.books-grid li {\n  padding: 10px 15px;\n  text-align: left;\n}\n\n.book {\n  width: 140px;\n}\n.book-title,\n.book-authors {\n  font-size: 0.8em;\n}\n.book-title {\n  margin-top: 10px;\n}\n.book-authors {\n  color: #999;\n}\n\n.book-top {\n  position: relative;\n  height: 200px;\n  display: flex;\n  align-items: flex-end;\n}\n\n.book-shelf-changer {\n  position: absolute;\n  right: 0;\n  bottom: -10px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #60ac5d;\n  background-image: url("+r(n(75))+");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 20px;\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n}\n.book-shelf-changer select {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n\n/* book cover */\n\n.book-cover {\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n  background: #eee;\n}\n.book-cover-title {\n  padding: 20px 10px 0;\n  text-align: center;\n  font-size: 0.8em;\n}\n",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="https://reactnd-books-api.udacity.com",a=localStorage.token;a||(a=localStorage.token=Math.random().toString(36).substr(-8));var i={Accept:"application/json",Authorization:a};t.get=function(e){return fetch(o+"/books/"+e,{headers:i}).then(function(e){return e.json()}).then(function(e){return e.book})},t.getAll=function(){return fetch(o+"/books",{headers:i}).then(function(e){return e.json()}).then(function(e){return e.books})},t.update=function(e,t){return fetch(o+"/books/"+e.id,{method:"PUT",headers:r({},i,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},t.search=function(e,t){return fetch(o+"/search",{method:"POST",headers:r({},i,{"Content-Type":"application/json"}),body:JSON.stringify({query:e,maxResults:t})}).then(function(e){return e.json()}).then(function(e){return e.books})}},,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(0),i=r(a),u=n(1),s=r(u),l=n(29),c=r(l),f=function(e){var t=e.bookShelfTitle,n=e.books,r=e.handleStatusUpdate;return i.default.createElement("div",{className:"bookshelf"},i.default.createElement("h2",{className:"bookshelf-title"},t),i.default.createElement("div",{className:"bookshelf-books"},i.default.createElement("ol",{className:"books-grid"},n.length>0&&n.map(function(e){return i.default.createElement("li",{key:e.id},i.default.createElement(c.default,o({shelf:e.shelf,bookId:e.id,bookCoverImage:e.imageLinks.thumbnail,bookTitle:e.title,bookAuthors:e.authors,handleStatusUpdate:r},e)))}))))};f.propTypes={bookShelfTitle:s.default.string,books:s.default.array,handleStatusUpdate:s.default.func.isRequired},f.defaultProps={bookShelfTitle:"No title set",books:[]},t.default=f},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var a=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=b[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(f(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(f(r.parts[a],t));b[r.id]={id:r.id,refs:1,parts:i}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],u=a[1],s=a[2],l=a[3],c={css:u,media:s,sourceMap:l};r[i]?r[i].parts.push(c):n.push(r[i]={id:i,parts:[c]})}return n}function a(e,t){var n=y(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=w[w.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),w.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=y(e.insertAt.before,n);n.insertBefore(t,o)}}function i(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=w.indexOf(e);t>=0&&w.splice(t,1)}function u(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=c();n&&(e.attrs.nonce=n)}return l(t,e.attrs),a(e,t),t}function s(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",l(t,e.attrs),a(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function c(){return n.nc}function f(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var l=k++;n=v||(v=u(t)),r=d.bind(null,n,l,!1),o=d.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=h.bind(null,n,t),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),r=p.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function d(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=E(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function h(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=x(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(i),u&&URL.revokeObjectURL(u)}var b={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),g=function(e,t){return t?t.querySelector(e):document.querySelector(e)},y=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=g.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),v=null,k=0,w=[],x=n(70);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var u=n[i],s=b[u.id];s.refs--,a.push(s)}if(e){r(o(e,t),t)}for(var i=0;i<a.length;i++){var s=a[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete b[s.id]}}}};var E=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),i=n(1),u=r(i),s=n(4),l=function(e){var t=e.bookId,n=e.shelf,r=e.bookCoverImage,o=e.bookTitle,i=e.bookAuthors,u=e.handleStatusUpdate;return a.default.createElement("div",{className:"book"},a.default.createElement("div",{className:"book-top"},a.default.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:'url("'+r+'")'}}),a.default.createElement("div",{className:"book-shelf-changer"},a.default.createElement("select",{defaultValue:n,onChange:function(e){u({id:t},e.target.value)}},a.default.createElement("option",{value:"none",disabled:!0},"Move to..."),a.default.createElement("option",{value:"currentlyReading"},"Currently Reading"),a.default.createElement("option",{value:"wantToRead"},"Want to Read"),a.default.createElement("option",{value:"read"},"Read"),a.default.createElement("option",{value:"none"},"None")))),a.default.createElement("div",{className:"book-title"},o),a.default.createElement("div",{className:"book-authors"},i.map(function(e){return a.default.createElement("span",{key:e},e,a.default.createElement("br",null))})),a.default.createElement("div",{className:"book-authors"},a.default.createElement(s.Link,{className:"more",to:"/details/"+t},"More...")))};l.propTypes={bookId:u.default.string.isRequired,shelf:u.default.string,bookCoverImage:u.default.string,bookTitle:u.default.string,bookAuthors:u.default.array,handleStatusUpdate:u.default.func.isRequired},l.defaultProps={shelf:"none",bookCoverImage:"",bookTitle:"Title",bookAuthors:["No Authors"]},t.default=l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),a=r(o),i=n(19),u=r(i),s=n(4),l=n(62),c=r(l);n(69),n(71),u.default.render(a.default.createElement(s.BrowserRouter,null,a.default.createElement(c.default,null)),document.getElementById("react-container"))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=r(s),c=n(4),f=n(63),d=r(f),p=n(64),h=(r(p),n(17)),b=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(h),m=n(66),g=r(m),y=n(67),v=r(y),k=n(68),w=r(k),x=(0,d.default)({loader:function(){return n.e(0).then(n.bind(null,77))},loading:w.default}),E=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={bookList:[]},n.loadList=n.loadList.bind(n),n.handleBookStatusUpdate=n.handleBookStatusUpdate.bind(n),n}return i(t,e),u(t,[{key:"componentDidMount",value:function(){this.loadList()}},{key:"loadList",value:function(){var e=this;b.getAll().then(function(t){return e.setState({bookList:t})})}},{key:"handleBookStatusUpdate",value:function(e,t){var n=this;b.update(e,t).then(function(e){return e&&n.loadList()})}},{key:"render",value:function(){var e=this;return l.default.createElement("div",{className:"app"},l.default.createElement(c.Route,{path:"/search",render:function(){return l.default.createElement(v.default,{handleBookStatusUpdate:e.handleBookStatusUpdate,books:e.state.bookList})}}),l.default.createElement(c.Route,{path:"/details/:bookId",component:x}),l.default.createElement(c.Route,{path:"/",exact:!0,render:function(){return l.default.createElement(g.default,{handleBookStatusUpdate:e.handleBookStatusUpdate,books:e.state.bookList})}}))}}]),t}(l.default.Component);t.default=E},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return"object"===b(n.m)&&e().every(function(e){return void 0!==e&&void 0!==n.m[e]})}function u(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}function s(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach(function(r){var o=u(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then(function(e){t.loaded[r]=e}).catch(function(e){t.error=e})})}catch(e){t.error=e}return t.promise=Promise.all(n).then(function(e){return t.loading=!1,e}).catch(function(e){throw t.loading=!1,e}),t}function l(e){return e&&e.__esModule?e.default:e}function c(e,t){return m.createElement(l(e),t)}function f(e,t){function n(){return f||(f=e(l.loader)),f.promise}var u,s;if(!t.loading)throw new Error("react-loadable requires a `loading` component");var l=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:c,webpack:null,modules:null},t),f=null;return y.push(n),"function"==typeof l.webpack&&v.push(function(){if(i(l.webpack))return n()}),s=u=function(t){function i(a){r(this,i);var u=o(this,t.call(this,a));return u.retry=function(){u.setState({error:null,loading:!0,timedOut:!1}),f=e(l.loader),u._loadModule()},n(),u.state={error:f.error,pastDelay:!1,timedOut:!1,loading:f.loading,loaded:f.loaded},u}return a(i,t),i.preload=function(){return n()},i.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},i.prototype._loadModule=function(){var e=this;if(this.context.loadable&&Array.isArray(l.modules)&&l.modules.forEach(function(t){e.context.loadable.report(t)}),f.loading){"number"==typeof l.delay&&(0===l.delay?this.setState({pastDelay:!0}):this._delay=setTimeout(function(){e.setState({pastDelay:!0})},l.delay)),"number"==typeof l.timeout&&(this._timeout=setTimeout(function(){e.setState({timedOut:!0})},l.timeout));var t=function(){e._mounted&&(e.setState({error:f.error,loaded:f.loaded,loading:f.loading}),e._clearTimeouts())};f.promise.then(function(){t()}).catch(function(e){t()})}},i.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},i.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},i.prototype.render=function(){return this.state.loading||this.state.error?m.createElement(l.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?l.render(this.state.loaded,this.props):null},i}(m.Component),u.contextTypes={loadable:g.shape({report:g.func.isRequired})},s}function d(e){return f(u,e)}function p(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return f(s,e)}function h(e){for(var t=[];e.length;){var n=e.pop();t.push(n())}return Promise.all(t).then(function(){if(e.length)return h(e)})}var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m=n(0),g=n(1),y=[],v=[];d.Map=p;var k=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return a(t,e),t.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},t.prototype.render=function(){return m.Children.only(this.props.children)},t}(m.Component);k.propTypes={report:g.func.isRequired},k.childContextTypes={loadable:g.shape({report:g.func.isRequired}).isRequired},d.Capture=k,d.preloadAll=function(){return new Promise(function(e,t){h(y).then(e,t)})},d.preloadReady=function(){return new Promise(function(e,t){h(v).then(e,e)})},e.exports=d},function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,a=function(e){return o.exec(e).slice(1)};t.resolve=function(){for(var t="",o=!1,a=arguments.length-1;a>=-1&&!o;a--){var i=a>=0?arguments[a]:e.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,o="/"===i.charAt(0))}return t=n(r(t.split("/"),function(e){return!!e}),!o).join("/"),(o?"/":"")+t||"."},t.normalize=function(e){var o=t.isAbsolute(e),a="/"===i(e,-1);return e=n(r(e.split("/"),function(e){return!!e}),!o).join("/"),e||o||(e="."),e&&a&&(e+="/"),(o?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var o=r(e.split("/")),a=r(n.split("/")),i=Math.min(o.length,a.length),u=i,s=0;s<i;s++)if(o[s]!==a[s]){u=s;break}for(var l=[],s=u;s<o.length;s++)l.push("..");return l=l.concat(a.slice(u)),l.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=a(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},t.basename=function(e,t){var n=a(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){return a(e)[3]};var i="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(t,n(65))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function i(){b&&p&&(b=!1,p.length?h=p.concat(h):m=-1,h.length&&u())}function u(){if(!b){var e=o(i);b=!0;for(var t=h.length;t;){for(p=h,h=[];++m<t;)p&&p[m].run();m=-1,t=h.length}p=null,b=!1,a(e)}}function s(e,t){this.fun=e,this.array=t}function l(){}var c,f,d=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,h=[],b=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||b||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),i=n(1),u=r(i),s=n(4),l=n(26),c=r(l),f=function(e){var t=e.books,n=e.handleBookStatusUpdate,r=[{name:"Currently Reading",slug:"currentlyReading"},{name:"Want to Read",slug:"wantToRead"},{name:"Read",slug:"read"}];return a.default.createElement("div",{className:"list-books"},a.default.createElement("div",{className:"list-books-title"},a.default.createElement("h1",null,"MyReads app")),a.default.createElement("div",{className:"list-books-content"},r.map(function(e){return a.default.createElement(c.default,{key:e.slug,bookShelfTitle:e.name,books:t.filter(function(t){return t.shelf===e.slug}),handleStatusUpdate:n})})),a.default.createElement("div",{className:"open-search"},a.default.createElement(s.Link,{to:"/search"},"Add a book")))};f.propTypes={books:u.default.array,handleBookStatusUpdate:u.default.func.isRequired},f.defaultProps={books:[]},t.default=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=r(s),c=n(1),f=r(c),d=n(4),p=n(17),h=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(p),b=n(26),m=r(b),g=function(e){function t(){var e,n,r,i;o(this,t);for(var u=arguments.length,s=Array(u),l=0;l<u;l++)s[l]=arguments[l];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={searchedList:[],query:""},i=n,a(r,i)}return i(t,e),u(t,[{key:"handleSearchUpdate",value:function(e){var t=this,n=e.target.value;this.setState({query:n}),h.search(n,20).then(function(e){for(var n=e,r=t.props.books,o=0;o<n.length;o++)for(var a=0;a<r.length;a++){if(n[o].id===r[a].id){n[o].shelf=r[a].shelf;break}n[o].shelf="none"}t.setState({searchedList:n})})}},{key:"render",value:function(){var e=this;return l.default.createElement("div",{className:"search-books"},l.default.createElement("div",{className:"search-books-bar"},l.default.createElement(d.Link,{className:"close-search",to:"/"},"Back"),l.default.createElement("div",{className:"search-books-input-wrapper"},l.default.createElement("input",{type:"text",name:"searchTerm",placeholder:"Search by title or author",onChange:function(t){e.handleSearchUpdate(t)},value:this.state.query}))),l.default.createElement("div",{className:"search-books-results"},l.default.createElement(m.default,{bookShelfTitle:"Search Results",books:this.state.searchedList,handleStatusUpdate:this.props.handleBookStatusUpdate}),l.default.createElement("ol",{className:"books-grid"})))}}]),t}(s.Component);g.propTypes={books:f.default.array,handleBookStatusUpdate:f.default.func.isRequired},g.defaultProps={books:[]},t.default=g},function(e,t,n){"use strict";function r(e){var t=e.isLoading,n=e.pastDelay,r=e.error;return t&&n?a.default.createElement("p",null,"Loading..."):r&&!t?a.default.createElement("p",null,"Error!"):null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(o)},function(e,t,n){var r=n(15);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0;var a=n(28)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(15,function(){var t=n(15);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o))return e;var a;return a=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}},function(e,t,n){var r=n(16);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0;var a=n(28)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(16,function(){var t=n(16);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiLz4KPC9zdmc+Cg=="},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjODg4ODg4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTIwIDExSDcuODNsNS41OS01LjU5TDEyIDRsLTggOCA4IDggMS40MS0xLjQxTDcuODMgMTNIMjB2LTJ6Ii8+Cjwvc3ZnPgo="},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTcgMTBsNSA1IDUtNXoiLz4KPC9zdmc+Cg=="}],[30]);