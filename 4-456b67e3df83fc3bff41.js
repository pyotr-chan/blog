(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{278:function(e,t,n){"use strict";n(242);var a=n(7),o=n.n(a),i=n(243),l=n.n(i),s=n(0),r=n.n(s),c=n(38),d=n(244),m=n.n(d),u=(n(245),n(159)),h=n.n(u),_=n(204),p=(n(246),n(180)),f=n.n(p),E=n(463),v=n(464),b=n(465),w=n(466),x=n(467),g=n(468),k=n(469),N=n(470),y=n(327),S=n.n(y),I=n(163),T=n(241);function L(e){var t=e.title,n=e.link,a=e.twitterUserName;return r.a.createElement("ul",{className:S.a.content},r.a.createElement(f.a,null,r.a.createElement("script",{type:"text/javascript",src:"//b.st-hatena.com/js/bookmark_button.js",charset:"utf-8",async:"async"}),r.a.createElement("script",{type:"text/javascript",src:"//widgets.getpocket.com/v1/j/btn.js?v=1",charset:"utf-8",async:"async"})),r.a.createElement("li",{className:S.a.share_button},r.a.createElement(E.a,{additionalProps:{"aria-label":"share_facebook"},url:n},r.a.createElement(v.a,{size:32,round:!0}))),r.a.createElement("li",{className:S.a.share_button},r.a.createElement(b.a,{additionalProps:{"aria-label":"share_googleplus"},url:n},r.a.createElement(w.a,{size:32,round:!0}))),r.a.createElement("li",{className:S.a.share_button},r.a.createElement(x.a,{additionalProps:{"aria-label":"share_linkedin"},url:n},r.a.createElement(g.a,{title:t,size:32,round:!0}))),r.a.createElement("li",{className:S.a.share_button},r.a.createElement(k.a,{additionalProps:{"aria-label":"share_twitter"},title:t,via:a,url:n},r.a.createElement(N.a,{size:32,round:!0}))),r.a.createElement("li",{className:S.a.share_button},r.a.createElement("a",{"aria-label":"share_pocket",className:S.a.pocket_icon_link,href:"https://getpocket.com/edit?url="+n+"&title="+t,onClick:"window.open(this.href, 'PCwindow', 'width=550, height=350, menubar=no, toolbar=no, scrollbars=yes'); return false;"},r.a.createElement(I.a,{color:"#fff",className:S.a.pocket_icon,icon:T.a}))),r.a.createElement("li",{className:S.a.share_button},r.a.createElement("a",{"aria-label":"share_hatena-bookmark",href:"http://b.hatena.ne.jp/entry/",className:"hatena-bookmark-button","data-hatena-bookmark-layout":"touch-counter",title:"このエントリーをはてなブックマークに追加",style:{boxShadow:"none"}},r.a.createElement("img",{src:"https://b.st-hatena.com/images/entry-button/button-only@2x.png",alt:"このエントリーをはてなブックマークに追加",width:"24",height:"24",style:{border:"none"}}))))}var z=n(218),O=n(239),j=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.iframely&&window.iframely.load()},n.render=function(){return r.a.createElement(f.a,null,r.a.createElement("script",{type:"text/javascript",src:"https://cdn.iframe.ly/embed.js",charset:"utf-8"}))},t}(r.a.Component),C=(n(80),n(30),n(53),n(81),n(39)),D=n.n(C),U=(n(394),n(395),n(15)),P=n(396),M=n.n(P),A=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.headings,n=e.activeItemIds;return r.a.createElement(U.Location,null,function(e){e.navigate;var a=e.location;return r.a.createElement("div",{className:M.a.content},r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.id,style:{marginLeft:12*(e.depth-2)+"px"}},r.a.createElement(c.Link,{to:a.pathname+"#"+e.id,className:n.includes(e.id)?M.a.active:""},e.value))})))})},t}(r.a.Component),R=function(e){function t(t,n){var a;return(a=e.call(this,t,n)||this).state={activeItemIds:[],itemTopOffsets:[]},a.calculateItemTopOffsets=a.calculateItemTopOffsets.bind(D()(D()(a))),a.handleResize=l()(a.handleResize.bind(D()(D()(a))),500),a.handleScroll=l()(a.handleScroll.bind(D()(D()(a))),100),a}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.calculateItemTopOffsets(),window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.handleScroll)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)},n.calculateItemTopOffsets=function(){var e=this.props.headings;this.setState({itemTopOffsets:Y(e)})},n.handleResize=function(){this.calculateItemTopOffsets(),this.handleScroll()},n.handleScroll=function(){var e=this.state.itemTopOffsets,t=e.find(function(t,n){var a=e[n+1];return a?window.scrollY+64>=t.offsetTop&&window.scrollY+64<a.offsetTop:window.scrollY+64>=t.offsetTop}),n=t?t.parents?[t.id].concat(t.parents.map(function(e){return e.id})):[t.id]:[];this.setState({activeItemIds:n})},n.render=function(){var e=this.state.activeItemIds;return r.a.createElement(A,Object.assign({activeItemIds:e},this.props))},t}(r.a.Component),Y=function(e){return e.map(function(e){e.value;var t=e.id,n=e.parents,a=document.getElementById(t);return a?{id:t,offsetTop:a.offsetTop,parents:n}:null}).filter(function(e){return e})},q=R,K=n(397),B=n.n(K),Q=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.previous,n=e.next;return r.a.createElement("div",null,r.a.createElement("ul",{className:B.a.to_prev_and_next},r.a.createElement("li",null,t&&r.a.createElement(c.Link,{className:B.a.link_to_previous,to:t.fields.slug,rel:"prev"},"← 古い記事",r.a.createElement("br",null),t.fields.title)),r.a.createElement("li",null,n&&r.a.createElement(c.Link,{className:B.a.link_to_next,to:n.fields.slug,rel:"next"},"新しい記事 →",r.a.createElement("br",null),n.fields.title))),r.a.createElement("div",{className:B.a.to_list},r.a.createElement(c.Link,{className:B.a.link_to_list,to:"/",rel:"prev"},r.a.createElement("i",{className:B.a.tomato_icon_1}),r.a.createElement("i",{className:B.a.tomato_icon_2}),"記事一覧",r.a.createElement("i",{className:B.a.tomato_icon_3}),r.a.createElement("i",{className:B.a.tomato_icon_4}))))},t}(r.a.Component),F=n(398),G=n.n(F),H=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isShowSnsShare:!1},n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.stock=this.watchCurrentPosition.bind(this),window.addEventListener("scroll",l()(this.stock,500),!0)},n.componentWillUnmount=function(){this.stock&&window.removeEventListener("scroll",this.stock,!0),this.stock=null},n.watchCurrentPosition=function(){this.setState({isShowSnsShare:this.scrollTop()>400})},n.scrollTop=function(){return Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)},n.render=function(){var e,t=this.props,n=t.fields,a=t.headings,o=t.html,i=t.pageContext,l=i.previous,s=i.next,d=i.slug,u=t.siteTitle,p=""+h.a.blogUrl+d,f=m()(((e={})[""+G.a.sns_share]=!0,e[""+G.a.sns_share_show]=this.state.isShowSnsShare,e[""+G.a.sns_share_hide]=!this.state.isShowSnsShare,e)),E=n.thumbnail?h.a.blogUrl+n.thumbnail:void 0;return r.a.createElement("article",null,r.a.createElement(_.a,{postTitle:n.title}),r.a.createElement(j,null),r.a.createElement(O.a,{isRoot:!1,title:n.title+" | "+u,description:n.excerpt,postUrl:p,postDate:n.date,largeImage:E}),r.a.createElement("div",{className:G.a.header},r.a.createElement("div",{className:G.a.header__inner},r.a.createElement("div",{className:G.a.header__inner__content},r.a.createElement("h4",{className:G.a.blog_title},r.a.createElement(c.Link,{className:G.a.blog_title__link,to:"/"},h.a.blogTitle,r.a.createElement("i",{className:G.a.blog_title__icon}))),r.a.createElement("a",{href:p,rel:"current",className:G.a.post_title},r.a.createElement("h1",null,n.title)),r.a.createElement(z.a,{tags:n.tags,date:n.date,color:"#fff"})))),r.a.createElement("div",{className:G.a.container},r.a.createElement("div",{className:G.a.post,dangerouslySetInnerHTML:{__html:o}}),r.a.createElement("div",{className:G.a.toc},r.a.createElement(q,{headings:a})),r.a.createElement("div",{className:f},r.a.createElement(L,{title:n.title,link:p,twitterUserName:h.a.blogAuthorTwitterUserName})),r.a.createElement("div",{className:G.a.paging},r.a.createElement(Q,{previous:l,next:s}))))},t}(r.a.Component);t.a=H},327:function(e,t,n){e.exports={content:"index-module--content--2oOyK",share_button:"index-module--share_button--1_Ao0",pocket_icon_link:"index-module--pocket_icon_link--37sUy",pocket_icon:"index-module--pocket_icon--2gifQ"}},396:function(e,t,n){e.exports={content:"index-module--content--3HINo",active:"index-module--active--1gAL3"}},397:function(e,t,n){e.exports={to_prev_and_next:"index-module--to_prev_and_next--E1i2h",link_to_previous:"index-module--link_to_previous--1iFck",link_to_next:"index-module--link_to_next--3Cl_I",to_list:"index-module--to_list--XDq_F",link_to_list:"index-module--link_to_list--1Yoax",tomato_icon_1:"index-module--tomato_icon_1--3rBK2",spin:"index-module--spin--A031L",tomato_icon_2:"index-module--tomato_icon_2--zOktn",tomato_icon_3:"index-module--tomato_icon_3--3qOQ3",tomato_icon_4:"index-module--tomato_icon_4--ZA8gK",fadeInDown:"index-module--fade-in-down--1Fg2u"}},398:function(e,t,n){e.exports={blog_title:"index-module--blog_title--2Y-Vh",blog_title__link:"index-module--blog_title__link--1qE-q",blog_title__icon:"index-module--blog_title__icon--GQPKG",post_title:"index-module--post_title--KshCf",header:"index-module--header--1xuwl",header__inner:"index-module--header__inner--urHnD",header__inner__content:"index-module--header__inner__content--1zy44",fadeInDown:"index-module--fade-in-down--1Gc_h",showBackground:"index-module--show-background--1Ngv1",container:"index-module--container--2jq6d",post:"index-module--post--1EbBj",toc:"index-module--toc--2NvMh",sns_share:"index-module--sns_share--1yIrS",paging:"index-module--paging--2vJ4h",sns_share_show:"index-module--sns_share_show--1QM3g",sns_share_hide:"index-module--sns_share_hide--dDzAX"}}}]);