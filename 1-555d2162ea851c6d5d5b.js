(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return d});var n=a(0),o=a.n(n),r=a(4),i=a.n(r),l=a(147),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(208),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var u=a(45);a.d(t,"parsePath",function(){return u.a});var p=o.a.createContext({}),d=function(e){return o.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},154:function(e,t){e.exports={blogTitle:"Takumon blog",blogDescription:"東京でJavaのSIerやってます。",blogUrl:"https://takumon.com",blogRssUrl:"https://takumon.com/rss.xml",blogImageUrl:"https://takumon.com/icons/app-sns.png",blogAuthorTwitterUserName:"inouetakumon",blogRepositoryUrl:"https://github.com/Takumon/blog",blogAuthorTwitterUrl:"https://twitter.com/inouetakumon",blogAuthorQiitaUrl:"https://qiita.com/Takumon",blogAuthorGitHubUrl:"https://github.com/Takumon",blogAuthorFacebookUrl:"https://www.facebook.com/takuto.inoue.54",facebookAppId:"1959327667485352",blogAuthor:"Takumon",blogAuthorDescription:"東京でJavaのSIerやってます。",blogAuthorAvatarUrl:"https://s.gravatar.com/avatar/37d27f624f8c9c8db6fe6b6581b256f1"}},175:function(e,t,a){"use strict";a(216);var n=a(7),o=a.n(n),r=a(0),i=a.n(r),l=a(145),c=a(197),s=a.n(c),m=a(361),u=a.n(m),p=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.value,a=e.count;return a?i.a.createElement("div",{key:t,className:u.a.content},i.a.createElement(l.Link,{to:"/tags/"+s.a.kebabCase(t),className:u.a.link},i.a.createElement("div",{className:u.a.tag_name},t),i.a.createElement("div",{className:u.a.tag_count},a))):i.a.createElement("div",{key:t,className:u.a.content},i.a.createElement(l.Link,{to:"/tags/"+s.a.kebabCase(t),className:u.a.link},i.a.createElement("div",{className:u.a.tag_name},t)))},t}(i.a.Component);t.a=p},181:function(e,t,a){"use strict";var n=a(7),o=a.n(n),r=a(276),i=a(0),l=a.n(i),c=a(182),s=a.n(c),m=a(145),u=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.postTitle,a=e.tag;return l.a.createElement(m.StaticQuery,{query:"451891596",render:function(e){return a?l.a.createElement(s.a,{title:t+" | "+a}):t?l.a.createElement(s.a,{title:t+" | "+e.site.siteMetadata.title}):l.a.createElement(s.a,{title:""+e.site.siteMetadata.title})},data:r})},t}(l.a.Component);t.a=u},196:function(e,t,a){"use strict";a(48);var n=a(7),o=a.n(n),r=a(0),i=a.n(r),l=a(148),c=a(155),s=a(175),m=a(363),u=a.n(m),p=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.post,t=e.tags.map(function(e){return i.a.createElement(s.a,{key:e,value:e})});return i.a.createElement("small",{className:u.a.content},i.a.createElement("div",{className:u.a.date},i.a.createElement(l.a,{icon:c.a}),e.date),i.a.createElement("div",{className:u.a.tags},i.a.createElement(l.a,{icon:c.d}),t))},t}(i.a.Component);t.a=p},206:function(e,t,a){"use strict";a(284);var n=a(7),o=a.n(n),r=a(0),i=a.n(r),l=a(145),c=(a(287),a(289),a(291),a(154)),s=a.n(c),m=a(214),u=(a(293),a(295),a(148)),p=a(215),d=a(155),g=a(298),h=a.n(g),f=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:h.a.content},i.a.createElement("img",{src:s.a.blogAuthorAvatarUrl,alt:s.a.blogAuthor,className:h.a.avatar}),i.a.createElement("div",{className:h.a.main},i.a.createElement("div",null,s.a.blogDescription),i.a.createElement("div",{className:h.a.profile},i.a.createElement("a",{className:h.a.profile__link,href:s.a.blogAuthorGitHubUrl},i.a.createElement(u.a,{color:"#333",className:h.a.profile__icon,icon:p.b})),i.a.createElement("a",{className:h.a.profile__link,href:s.a.blogAuthorTwitterUrl},i.a.createElement(u.a,{color:"#3eaded",className:h.a.profile__icon,icon:p.c})),i.a.createElement("a",{className:h.a.profile__link,href:s.a.blogAuthorQiitaUrl},i.a.createElement(u.a,{color:"white",className:h.a.profile__icon_qiita,icon:d.c})))))},t}(i.a.Component),b=a(300),E=a.n(b);function _(e){var t=e.isRoot?"":i.a.createElement(f,null);return i.a.createElement("footer",{className:E.a.content,role:"contentinfo"},i.a.createElement("div",{className:E.a.content__inner},t,i.a.createElement("h4",{className:E.a.title},i.a.createElement(l.Link,{className:E.a.title__link,to:"/"},s.a.blogTitle,i.a.createElement("i",{className:E.a.tomato_icon}))),i.a.createElement("div",{className:"copyright"},"Copyright © 2018. ",s.a.blogAuthor,i.a.createElement("a",{href:s.a.blogRepositoryUrl,rel:"noopener noreferrer",className:E.a.github_icon}))))}var y=a(302),v=a.n(y),k=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:v.a.content},i.a.createElement("a",{className:v.a.button,href:"https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Ftakumon.com%2Frss.xml",target:"blank"},i.a.createElement("img",{id:"feedlyFollow",src:"https://s3.feedly.com/img/follows/feedly-follow-logo-green_2x.png",alt:"follow us in feedly",width:"36",height:"36"})),i.a.createElement("a",{className:v.a.button,href:s.a.blogRssUrl,target:"blank"},i.a.createElement(u.a,{icon:d.b})))},t}(i.a.Component);a.d(t,"a",function(){return x});var x=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,a=e.children,n="/";"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&(n=""+n);var o="/tags/";"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&(o=""+o);var r,c=t.pathname===n,u=t.pathname.startsWith(o);return r=c?i.a.createElement("div",{className:"headerContainer"},i.a.createElement("div",{className:"headerContainer__inner"},i.a.createElement("h1",{className:"blogTitleArea"},i.a.createElement(l.Link,{className:"blogTitle",to:"/"},s.a.blogTitle," ")),i.a.createElement(f,null)),i.a.createElement(k,null)):u?i.a.createElement("div",{className:"headerContainer"},i.a.createElement("div",{className:"headerContainer__inner"},i.a.createElement("h1",{className:"blogTitleArea"},i.a.createElement(l.Link,{className:"blogTitle",to:"/"},s.a.blogTitle," ")),i.a.createElement(f,null)),i.a.createElement(k,null)):"",i.a.createElement("div",{className:"rootContainer"},function(){return c?i.a.createElement(m.a,{isRoot:c}):""},r,a,i.a.createElement(_,{isRoot:c}))},t}(i.a.Component)},208:function(e,t,a){var n;e.exports=(n=a(234))&&n.default||n},214:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(0),o=a.n(n),r=a(182),i=a.n(r),l=a(154);function c(e){var t=e.isRoot,a=e.title,n=e.description,r=t?"website":"article",c=function(e){var t=e.isRoot,a=e.title,n=e.description,r=e.postUrl,i=e.postDate,c=[{"@type":"Person",name:l.blogAuthor,description:l.blogAuthorDescription,image:{"@type":"ImageObject",url:l.blogAuthorAvatarUrl,width:60,height:60},url:l.blogUrl,sameAs:[l.blogAuthorFacebookUrl,l.blogAuthorTwitterUrl]},{"@type":"thing",name:l.blogAuthor,sameas:l.blogTitle,url:l.blogURL,image:{"@type":"ImageObject",url:l.blogImageUrl,width:60,height:60}}],s={"@type":"Organization",name:l.blogAuthor,description:l.blogAuthorDescription,logo:{"@type":"ImageObject",url:l.blogAuthorAvatarUrl,width:60,height:60}},m=[{"@context":"http://schema.org","@type":"WebSite",inLanguage:"ja",url:l.blogUrl,name:a,alternateName:l.blogTitle,image:l.blogImageUrl,description:l.blogAuthorDescription,author:c,publisher:s,potentialAction:{"@type":"SearchAction",target:l.blogUrl+"/search?q={q}","query-input":"required name=q"}}];t||(m.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r,name:a,image:l.blogImageUrl}}]}),m.push({"@context":"http://schema.org","@type":"BlogPosting",url:l.blogURL,name:a,alternateName:l.blogTitle,headline:a,image:{"@type":"ImageObject",url:l.blogImageUrl},description:n,datePublished:i,dateModified:i,mainEntityOfPage:{"@type":"WebPage","@id":l.blogUrl},author:c,publisher:s}));return o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(m))}({isRoot:t,title:a,description:n,postUrl:e.postUrl,postDate:e.postDate});return o.a.createElement(i.a,null,o.a.createElement("meta",{name:"description",content:n||l.blogDescription}),o.a.createElement("meta",{name:"image",content:l.blogImageUrl}),c,o.a.createElement("meta",{property:"og:title",content:a||l.blogTitle}),o.a.createElement("meta",{property:"og:description",content:n||l.blogDescription}),o.a.createElement("meta",{property:"og:url",content:l.blogUrl}),o.a.createElement("meta",{property:"og:type",content:r}),o.a.createElement("meta",{property:"og:site_name",content:l.blogTitle}),o.a.createElement("meta",{property:"og:image",content:l.blogImageUrl}),o.a.createElement("meta",{property:"fb:app_id",content:l.facebookAppId}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:site",content:"@"+l.blogAuthorTwitterUserName}))}},234:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),o=a.n(n),r=a(4),i=a.n(r),l=a(71),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},276:function(e){e.exports={data:{site:{siteMetadata:{title:"Takumon Blog"}}}}},287:function(e,t,a){},298:function(e,t,a){e.exports={content:"index-module--content--3anmC",avatar:"index-module--avatar--2Wplz",main:"index-module--main--35kmm",profile:"index-module--profile--KnkZV",profile__link:"index-module--profile__link--21WcI",profile__icon:"index-module--profile__icon--3PY8S",profile__icon_qiita:"index-module--profile__icon_qiita--122FF"}},300:function(e,t,a){e.exports={content:"index-module--content--3Sze3",content__inner:"index-module--content__inner--17VhD",title:"index-module--title--2Z4Zb",title__link:"index-module--title__link--E5lkm",copyright:"index-module--copyright--EC9KK",tomato_icon:"index-module--tomato_icon--2zdjE",github_icon:"index-module--github_icon--1smc7"}},302:function(e,t,a){e.exports={content:"index-module--content--2KDEY",button:"index-module--button--3xBxe"}},361:function(e,t,a){e.exports={content:"index-module--content--17ppk",link:"index-module--link--3Smea",tag_name:"index-module--tag_name--E0wNG",tag_count:"index-module--tag_count--sZxzV"}},363:function(e,t,a){e.exports={content:"index-module--content--1Emzf",date:"index-module--date--1G61w",tags:"index-module--tags--1zD7T"}}}]);
//# sourceMappingURL=1-555d2162ea851c6d5d5b.js.map