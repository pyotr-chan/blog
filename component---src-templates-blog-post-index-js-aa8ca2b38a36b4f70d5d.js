(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{157:function(e,t,n){"use strict";n.r(t);n(262);var a=n(6),r=n.n(a),o=n(263),l=n.n(o),s=n(173),i=n.n(s),c=n(0),d=n.n(c),m=n(38),u=n(271),h=n.n(u),p=(n(383),n(174)),f=n.n(p),_=n(219),v=n(260),w=(n(277),n(220)),b=n.n(w),E=n(688),k=n(689),g=n(690),x=n(691),N=n(692),y=n(693),S=n(694),I=n(695),T=n(408),z=n.n(T),O=n(167),L=n(276);function j(e){var t=e.title,n=e.link,a=e.twitterUserName;return d.a.createElement("ul",{className:z.a.content},d.a.createElement(b.a,null,d.a.createElement("script",{type:"text/javascript",src:"//b.st-hatena.com/js/bookmark_button.js",charset:"utf-8",async:"async"}),d.a.createElement("script",{type:"text/javascript",src:"//widgets.getpocket.com/v1/j/btn.js?v=1",charset:"utf-8",async:"async"})),d.a.createElement("li",{className:z.a.share_button},d.a.createElement(E.a,{additionalProps:{"aria-label":"share_facebook"},url:n},d.a.createElement(k.a,{size:32,round:!0}))),d.a.createElement("li",{className:z.a.share_button},d.a.createElement(g.a,{additionalProps:{"aria-label":"share_googleplus"},url:n},d.a.createElement(x.a,{size:32,round:!0}))),d.a.createElement("li",{className:z.a.share_button},d.a.createElement(N.a,{additionalProps:{"aria-label":"share_linkedin"},url:n},d.a.createElement(y.a,{title:t,size:32,round:!0}))),d.a.createElement("li",{className:z.a.share_button},d.a.createElement(S.a,{additionalProps:{"aria-label":"share_twitter"},title:t,via:a,url:n},d.a.createElement(I.a,{size:32,round:!0}))),d.a.createElement("li",{className:z.a.share_button},d.a.createElement("a",{"aria-label":"share_pocket",className:z.a.pocket_icon_link,href:"https://getpocket.com/edit?url="+n+"&title="+t,onClick:"window.open(this.href, 'PCwindow', 'width=550, height=350, menubar=no, toolbar=no, scrollbars=yes'); return false;"},d.a.createElement(O.a,{color:"#fff",className:z.a.pocket_icon,icon:L.a}))),d.a.createElement("li",{className:z.a.share_button},d.a.createElement("a",{"aria-label":"share_hatena-bookmark",href:"http://b.hatena.ne.jp/entry/",className:"hatena-bookmark-button","data-hatena-bookmark-layout":"touch-counter",title:"このエントリーをはてなブックマークに追加",style:{boxShadow:"none"}},d.a.createElement("img",{src:"https://b.st-hatena.com/images/entry-button/button-only@2x.png",alt:"このエントリーをはてなブックマークに追加",width:"24",height:"24",style:{border:"none"}}))))}var C=n(235),M=n(275),U=(n(81),n(30),n(53),n(82),n(39)),R=n.n(U),D=(n(474),n(475),n(83),n(476)),P=n.n(D),B=n(478),Y=n.n(B),W=n(212),K=n.n(W),A=n(308),H=n.n(A);var q=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=function(e,t){var n=Y()().parse(e);return K()(n,"element",function(e){if(e.tagName&&"a"===e.tagName){var n=decodeURI(e.properties.href.split("#")[1]);e.properties.className=t.includes(n)?P.a.active:""}}),H()(n)}(e.tableOfContents,e.activeItemIds);return d.a.createElement("div",{className:P.a.content,dangerouslySetInnerHTML:{__html:t}})},t}(d.a.Component),G=n(528),J=n.n(G),V=n(616),Q=n.n(V),X=n(617),F=new(n.n(X).a),Z=function(e){function t(t,n){var a;return(a=e.call(this,t,n)||this).state={activeItemIds:[],itemTopOffsets:[]},a.calculateItemTopOffsets=a.calculateItemTopOffsets.bind(R()(R()(a))),a.handleResize=l()(a.handleResize.bind(R()(R()(a))),500),a.handleScroll=l()(a.handleScroll.bind(R()(R()(a))),100),a}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.calculateItemTopOffsets(),window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.handleScroll)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)},n.calculateItemTopOffsets=function(){var e=this.props.rawMarkdownBody;this.setState({itemTopOffsets:ee(function(e){return function(e){return e.reverse(),e.map(function(t,n){var a=e.length-1;if(n===a)return t;for(var r=t.depth,o=n+1;o<=a;o++){var l=e[o];if(r===l.depth);else{if(r<l.depth)break;r>l.depth&&(t.parents?t.parents.push(l):t.parents=[l],r=l.depth)}}return t}).reverse()}(function(e){F.reset();var t=[],n=J()().parse(e);return K()(n,$,function(e){e.children[0].value||console.log(e);var n=e.children[0].value,a=F.slug(n||Q()(e)),r=e.depth;t.push({value:n,id:a,depth:r})}),t}(e))}(e))})},n.handleResize=function(){this.calculateItemTopOffsets(),this.handleScroll()},n.handleScroll=function(){var e=this.state.itemTopOffsets,t=e.find(function(t,n){var a=e[n+1];return a?window.scrollY+64>=t.offsetTop&&window.scrollY+64<a.offsetTop:window.scrollY+64>=t.offsetTop}),n=t?t.parents?[t.id].concat(t.parents.map(function(e){return e.id})):[t.id]:[];this.setState({activeItemIds:n})},n.render=function(){var e=this.state.activeItemIds;return d.a.createElement(q,Object.assign({activeItemIds:e},this.props))},t}(d.a.Component);var $="heading";var ee=function(e){return e.map(function(e){e.value;var t=e.id,n=e.parents,a=document.getElementById(t);return a?{id:t,offsetTop:a.offsetTop,parents:n}:null}).filter(function(e){return e})},te=Z,ne=n(619),ae=n.n(ne);n.d(t,"pageQuery",function(){return oe});var re=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isShowSnsShare:!1},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.stock=this.watchCurrentPosition.bind(this),window.addEventListener("scroll",l()(this.stock,500),!0)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.stock,!0),this.stock=null},n.watchCurrentPosition=function(){this.setState({isShowSnsShare:this.scrollTop()>400})},n.scrollTop=function(){return Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)},n.render=function(){var e,t=this.props.data.markdownRemark,n=i()(this.props,"data.site.siteMetadata.title"),a=this.props.pageContext,r=a.previous,o=a.next,l=a.slug,s=""+f.a.blogUrl+l,c=h()(((e={})[""+ae.a.sns_share]=!0,e[""+ae.a.sns_share_show]=this.state.isShowSnsShare,e[""+ae.a.sns_share_hide]=!this.state.isShowSnsShare,e));return d.a.createElement(v.a,{location:this.props.location},d.a.createElement("article",null,d.a.createElement(_.a,{postTitle:t.frontmatter.title}),d.a.createElement(M.a,{isRoot:!1,title:t.frontmatter.title+" | "+n,description:t.excerpt,postUrl:s,postDate:t.frontmatter.date}),d.a.createElement("div",{className:ae.a.header},d.a.createElement("div",{className:ae.a.header__inner},d.a.createElement("div",{className:ae.a.header__inner__content},d.a.createElement("h4",{className:ae.a.blog_title},d.a.createElement(m.Link,{className:ae.a.blog_title__link,to:"/"},f.a.blogTitle,d.a.createElement("i",{className:ae.a.blog_title__icon}))),d.a.createElement("a",{href:s,rel:"current",className:ae.a.post_title},d.a.createElement("h1",null,t.frontmatter.title)),d.a.createElement(C.a,{color:"#fff",frontmatter:t.frontmatter})))),d.a.createElement("div",{className:ae.a.container},d.a.createElement("div",{className:ae.a.post,dangerouslySetInnerHTML:{__html:t.html}}),d.a.createElement(te,{className:ae.a.toc,tableOfContents:t.tableOfContents,rawMarkdownBody:t.rawMarkdownBody}),d.a.createElement("div",{className:c},d.a.createElement(j,{title:t.frontmatter.title,link:s,twitterUserName:f.a.blogAuthorTwitterUserName})),d.a.createElement("ul",{className:ae.a.paging},d.a.createElement("li",null,r&&d.a.createElement(m.Link,{className:ae.a.link_to_previous,to:r.fields.slug,rel:"prev"},"← 古い記事",d.a.createElement("br",null),r.frontmatter.title)),d.a.createElement("li",null,o&&d.a.createElement(m.Link,{className:ae.a.link_to_next,to:o.fields.slug,rel:"next"},"新しい記事 →",d.a.createElement("br",null),o.frontmatter.title))))))},t}(d.a.Component),oe=(t.default=re,"315745413")},408:function(e,t,n){e.exports={content:"index-module--content--1DYGE",share_button:"index-module--share_button---VgVo",pocket_icon_link:"index-module--pocket_icon_link--3W0dP",pocket_icon:"index-module--pocket_icon--uochy"}},476:function(e,t,n){e.exports={content:"index-module--content--3q5Be",active:"index-module--active--3ce_j"}},619:function(e,t,n){e.exports={blog_title:"index-module--blog_title--GAeRB",blog_title__link:"index-module--blog_title__link--3MKH_",blog_title__icon:"index-module--blog_title__icon--2zkY2",post_title:"index-module--post_title--3KwDI",header:"index-module--header---9Mjo",header__inner:"index-module--header__inner--239tX",header__inner__content:"index-module--header__inner__content--18w2m",fadeInDown:"index-module--fade-in-down--3WKpk",showBackground:"index-module--show-background--3s9Dz",container:"index-module--container--31IEc",post:"index-module--post--2gyes",toc:"index-module--toc--2594L",sns_share:"index-module--sns_share--1D8Ul",paging:"index-module--paging--2jSWU",link_to_previous:"index-module--link_to_previous--3sKxs",link_to_next:"index-module--link_to_next--2gYl2",sns_share_show:"index-module--sns_share_show--AyUIa",sns_share_hide:"index-module--sns_share_hide--nq2bf"}}}]);