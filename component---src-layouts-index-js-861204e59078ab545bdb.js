webpackJsonp([0x67ef26645b2a,60335399758886],{139:function(t,e){t.exports={layoutContext:{}}},283:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},a=n(2),l=o(a),u=n(289),i=o(u),c=n(139),f=o(c);e.default=function(t){return l.default.createElement(i.default,r({},t,f.default))},t.exports=e.default},377:function(t,e){},134:function(t,e){},135:function(t,e){},103:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var u=n(2),i=o(u);n(135),n(134);var c=n(21),f=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return l(e,t),e.prototype.render=function(){return i.default.createElement("div",{style:{display:"flex",marginBottom:(0,c.rhythm)(2)}},i.default.createElement("img",{src:"https://s.gravatar.com/avatar/37d27f624f8c9c8db6fe6b6581b256f1?s=80",alt:"\bTakuto Inoue",style:{marginRight:(0,c.rhythm)(.5),marginBottom:0,width:(0,c.rhythm)(2),height:(0,c.rhythm)(2),borderRadius:(0,c.rhythm)(1)}}),i.default.createElement("p",null,"東京でJavaのSIerやってます。"))},e}(i.default.Component);e.default=f,t.exports=e.default},286:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=t.isRoot,n=e?"":l.default.createElement(s.default,null);return l.default.createElement("footer",{className:"footer",role:"contentinfo"},l.default.createElement("div",{className:"footer__inner"},n,l.default.createElement("h4",{className:"footer__title"},l.default.createElement(i.default,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"Takumon blog")),l.default.createElement("div",{className:"copyright"},"Copyright © 2018. Takumon"),l.default.createElement("a",{href:"https://github.com/Takumon/blog",rel:"noopener noreferrer",style:{boxShadow:"none"}},l.default.createElement("i",{className:"footer-icon-github",style:{backgroundImage:"url("+f.default+")"}}))))}e.__esModule=!0,e.default=r;var a=n(2),l=o(a),u=n(92),i=o(u),c=n(576),f=o(c),M=n(103),s=o(M);n(21);t.exports=e.default},430:function(t,e){},431:function(t,e){},289:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i=n(2),c=o(i),f=n(92),M=o(f),s=n(21),y=n(286),d=o(y);n(377),n(430),n(431);var m=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return l(e,t),e.prototype.render=function(){var t=this.props,e=t.location,n=t.children,o=(t.data,void 0),r="/",a=e.pathname===r;return o=a?c.default.createElement("h1",{style:u({},(0,s.scale)(1.5),{marginBottom:(0,s.rhythm)(1.5),marginTop:0})},c.default.createElement(M.default,{style:{boxShadow:"none",textDecoration:"none",color:"inherit",fontFamily:"Montserrat"},className:"milky",to:"/"},"Takumon Blog")):c.default.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:(0,s.rhythm)(-1)}},c.default.createElement(M.default,{style:{boxShadow:"none",textDecoration:"none",color:"inherit",fontFamily:"Montserrat"},className:"milky",to:"/"},"Takumon Blog")),c.default.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:(0,s.rhythm)(24),padding:(0,s.rhythm)(1.5)+" "+(0,s.rhythm)(.75)}},o,n(),c.default.createElement(d.default,{isRoot:a}))},e}(c.default.Component);e.default=m,t.exports=e.default},576:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgYXJpYS1sYWJlbGxlZGJ5PSJ0aXRsZSIKYXJpYS1kZXNjcmliZWRieT0iZGVzYyIgcm9sZT0iaW1nIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPHRpdGxlPkdpdGh1YjwvdGl0bGU+CiAgPGRlc2M+QSBsaW5lIHN0eWxlZCBpY29uIGZyb20gT3Jpb24gSWNvbiBMaWJyYXJ5LjwvZGVzYz4KICA8cGF0aCBkYXRhLW5hbWU9ImxheWVyMSIKICBkPSJNMzIgMS45NTJhMzAuMDE5IDMwLjAxOSAwIDAgMC05LjQ2OSA1OC41YzEuNS4yODEgMi4wNjMtLjY1NiAyLjA2My0xLjQwNnYtNS42MjVjLTguMzQ0IDEuNzc5LTEwLjEyNS0zLjU2My0xMC4xMjUtMy41NjMtMS40MDYtMy40NjktMy4zNzUtNC40MDYtMy4zNzUtNC40MDYtMi43MTktMS44NzUuMTg3LTEuNzgxLjE4Ny0xLjc4MSAzIC4xODggNC41OTQgMy4wOTQgNC41OTQgMy4wOTQgMi43MTkgNC41OTQgNy4wMzEgMy4yODEgOC43MTkgMi41MzFhNi41IDYuNSAwIDAgMSAxLjg3NS00LjAzMWMtNi42NTYtLjc1LTEzLjY4OC0zLjM3NS0xMy42ODgtMTQuODEyYTExLjUgMTEuNSAwIDAgMSAzLjA5NC04LjA2MyAxMS4yMTcgMTEuMjE3IDAgMCAxIC4yODEtNy45NjlzMi41MzEtLjg0NCA4LjI1IDMuMDk0YTI4Ljk0NCAyOC45NDQgMCAwIDEgNy41LTEuMDMxIDI4LjQgMjguNCAwIDAgMSA3LjUgMS4wMzFjNS43MTktMy44NDQgOC4yNS0zLjA5NCA4LjI1LTMuMDk0YTExLjIxNyAxMS4yMTcgMCAwIDEgLjI4MSA3Ljk2OSAxMS4zNCAxMS4zNCAwIDAgMSAzLjA5NCA4LjA2M2MwIDExLjUzMS03LjAzMSAxNC4wNjMtMTMuNjg4IDE0LjgxM2E3LjI2MiA3LjI2MiAwIDAgMSAyLjA2MyA1LjUzNHY4LjI1YzAgLjg0NC41NjIgMS42ODcgMi4wNjMgMS40MDZBMzAuMDE5IDMwLjAxOSAwIDAgMCAzMiAxLjk1MnoiCiAgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTU1NTU1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIKICBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KPC9zdmc+"}});
//# sourceMappingURL=component---src-layouts-index-js-861204e59078ab545bdb.js.map