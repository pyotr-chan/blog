webpackJsonp([0xbaa430c95f6d],{453:function(a,n){a.exports={data:{site:{siteMetadata:{title:"Takumon Blog",author:"Takuto Inoue"}},markdownRemark:{id:"/Users/inouetakumon/git/blog/src/pages/2018/10/07/index.md absPath of file >>> MarkdownRemark",html:'<h2>なにこれ</h2>\n<p>ブログに良くあるYouTubeやTwitterの埋め込みをGatsbyでやる方法のメモです。<br>\nこんな感じで埋め込めるようになります。</p>\n<ul>\n<li>YouTube</li>\n</ul>\n<p><div><iframe src="https://www.youtube.com/embed/z8Kt1gXL_2M" width="undefined" height="undefined"></iframe></div></p>\n<ul>\n<li>Twitter</li>\n</ul>\n<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">最近忙しかったのでアレですが、ブログ更新しました。<br><br>Reactで構造化データマークアップ（JSON-LD対応） <a href="https://t.co/7V49VqH9WI">https://t.co/7V49VqH9WI</a> <a href="https://twitter.com/inouetakumon?ref_src=twsrc%5Etfw">@inouetakumon</a>さんから</p>&mdash; takumontakumon (@inouetakumon) <a href="https://twitter.com/inouetakumon/status/1046062825037344770?ref_src=twsrc%5Etfw">2018年9月29日</a></blockquote>\n<h2>やり方</h2>\n<h3>YouTube</h3>\n<h4>環境設定</h4>\n<p><a href="https://www.gatsbyjs.org/packages/gatsby-remark-embed-youtube/?=youtube">公式ページ</a>で紹介されているように,\n<a href="https://github.com/ntwcklng/gatsby-remark-embed-youtube">gatsby-remark-embed-youtube</a>というプラグインを使います。<br>\n<br></p>\n<ul>\n<li>プラグインをインストールして</li>\n</ul>\n<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save gatsby-remark-embed-youtube</code></pre></div>\n<br>\n<ul>\n<li><code class="language-text">gatsby-config.js</code>の<code class="language-text">gatsby-transformer-remark</code>にオプションとして追加します。</li>\n</ul>\n<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token comment">// ・・・</span>\n  <span class="token punctuation">{</span>\n    resolve<span class="token punctuation">:</span> <span class="token string">"gatsby-transformer-remark"</span><span class="token punctuation">,</span>\n    options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n<span class="gatsby-highlight-code-line">        <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">          resolve<span class="token punctuation">:</span> <span class="token string">"gatsby-remark-embed-youtube"</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">          options<span class="token punctuation">:</span> <span class="token punctuation">{</span>　<span class="token comment">// 固定サイズにする場合に指定</span>\n</span><span class="gatsby-highlight-code-line">            width<span class="token punctuation">:</span> <span class="token number">800</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">            height<span class="token punctuation">:</span> <span class="token number">400</span>\n</span><span class="gatsby-highlight-code-line">          <span class="token punctuation">}</span>\n</span><span class="gatsby-highlight-code-line">        <span class="token punctuation">}</span>\n</span>      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// ・・・</span>\n<span class="token punctuation">}</span></code></pre></div>\n<br>\n<ul>\n<li>もし<code class="language-text">gatsby-transformer-remark</code>のオプションに<code class="language-text">gatsby-remark-responsive-iframe</code>を指定している場合は、それより前に指定しましょう。</li>\n</ul>\n<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n<span class="gatsby-highlight-code-line">  <span class="token string">"gatsby-remark-embed-youtube"</span><span class="token punctuation">,</span>     <span class="token comment">// 先</span>\n</span>  <span class="token string">"gatsby-remark-responsive-iframe"</span>  <span class="token comment">// 後</span>\n<span class="token punctuation">]</span></code></pre></div>\n<br>\nこれで準備が整いました。\n<h4>マークダウンでの書き方</h4>\n<p>下記のように指定します。<br>\n<small>\nz8Kt1gXL<em>2Mの部分が動画のIDに当たります。<br>\n例えば今見ている動画のURLが<a href="https://www.youtube.com/watch?v=z8Kt1gXL">https://www.youtube.com/watch?v=z8Kt1gXL</a></em>2M&#x26;t=8635sとすると動画IDはz8Kt1gXL_2Mです。\n</small></p>\n<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">`youtube:https://www.youtube.com/embed/z8Kt1gXL_2M`</code></pre></div>\n<br>\n<p>するとこんな感じで表示されます。</p>\n<p><div><iframe src="https://www.youtube.com/embed/z8Kt1gXL_2M" width="undefined" height="undefined"></iframe></div></p>\n<h3>Twitter</h3>\n<h4>環境設定</h4>\n<p>こちらも<a href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-twitter">gatsby-plugin-twitter</a>というプラグインを使います。<br>\n<br></p>\n<ul>\n<li>プラグインをインストールして</li>\n</ul>\n<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save gatsby-plugin-twitter</code></pre></div>\n<br>\n<ul>\n<li><code class="language-text">gatsby-config.js</code>に追加します。</li>\n</ul>\n<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token comment">// ・・・</span>\n<span class="gatsby-highlight-code-line">  <span class="token string">"gatsby-plugin-twitter"</span><span class="token punctuation">,</span>\n</span>  <span class="token comment">// ・・・</span>\n<span class="token punctuation">}</span></code></pre></div>\n<h4>マークダウンでの書き方</h4>\n<ul>\n<li>載せたいTwitterの埋め込み用スクリプトをコピーします。</li>\n</ul>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/twitterurl-1-bb9d80d7f9e72ed3fcd8387117747dec-bd5b8.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 32.61964735516373%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAACFklEQVQozx2QvWsTcQCGbxKUVtPBtPlsPkzukktyH7m7XO4ul1wvTWtsEltrNG0FFYJUxCVaUUFptVZKtSIoRRBxcKp/gktnZ0cHXcSfg4ODYM3vtXF4eLcXnodZbpZ/1hrt7xMnW6Qy1SSyOUmyBYckBJ1ktDIRiy4ZjfLk2IiXeLo75MidD+RQ/RY53FojfqVOCuVpoldbpOjO/PAnxW9M11CQMychFCeQ0WxE0zI4yUCcV5BVbWh2DbxSQng8Dp88Cb/egC9dhNdaQkBwEeYNhDIW4lIFfk6nzJAvDkdV+3NulVaMElUsl0ZTEj0eZmmEk2gyV6AxXqGxQJAmsjpNyGWaTGZp3m5Qtdqm2tQCVWsdWpy5CLE8+4fxRzi8f7Hd3329hb3dN7hyuYtU3sJ08yzyxgRYQQcnm2DTAriVd+C2P4LrbqG38hAbqxt4sLqJx4+26ebTV7h3d/0vE+QkfH37sv+pN4vfz27jfu8m3MY8Gmc6cOtzODXXwXSrjdPtJVzoXkNjfhGCYiLIW4iKDlhtCkm1RmOSc6Bu7zPBlIzPO0/6v87V8WV5EQvt89CcOvKmi0ROA583IeqV/y0ttw6hYCPMigildERzNji1OuhIxxIqAqy2z3jDLJ6vr/XXr1/Fje4l6GYFI0EWY7EMPL4YhkcjOHrAsHccQwcM1uM/geDgMGshrTpIyg6N5koIpY39f+dT9tj+cRxwAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="twitterurl1"\n        title=""\n        src="/static/twitterurl-1-bb9d80d7f9e72ed3fcd8387117747dec-fb8a0.png"\n        srcset="/static/twitterurl-1-bb9d80d7f9e72ed3fcd8387117747dec-1a291.png 148w,\n/static/twitterurl-1-bb9d80d7f9e72ed3fcd8387117747dec-2bc4a.png 295w,\n/static/twitterurl-1-bb9d80d7f9e72ed3fcd8387117747dec-fb8a0.png 590w,\n/static/twitterurl-1-bb9d80d7f9e72ed3fcd8387117747dec-bd5b8.png 794w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/twitterurl-2-464d5d9dc0eed95c42b9a594b72f16eb-fde3e.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 530px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 121.88679245283018%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAACXBIWXMAAAsSAAALEgHS3X78AAAFf0lEQVQ4y52TaUxUVxTHJ9VW0piisu+7w8CwzDjAACKCS0GJIBBNVRQEERsq1K1qBZVFZJFNTZp+aPupfmrqp7Zf2qRN2kq01j5n2GQZBgYGmA2Yfd6df+97Qoz2Q5ve5Pf+95373rnn3HOuwNM3dNCr5Xf433qE93yC4RcRD2nmLkjScxAWK0GcNBPSjFwIk+QQSTOQk1eEnXmFSM/Jh294HDaHxMIrNBb+UQn037g/BKIk+V+R1X3YcugmK9mxj4hyiklEWh6JTMsnMZkF/Dwmo4BsLyonibtKSURqHonLLiLxuaUkWppNZLJ0EpOU4fIXb4dnpOSRwK/kBpNW04+Uk+1EfroHqTW9SDnN0QNZ9Us4W0btfcjP9ENG1+Qf9lPuYltlJ9KqOpBS2c6mnLmH4LLuAYHPgStMWV07qs53kbK62zhc14Wj53tQ/kk/pQ9lF/tw4hKnvfz8+KWXHLvQS7UfZRf6UH6xhz3Z+AWSzj0YEGzec5bZeuwW4o40kuTyVqRWdyC69Ar88+sQtP9jnkCOffUIoAQV1PM2//3n4EcJzj+LkLxa1q/wKrz31g4IAsTZjCirEDEpuSQhax+yDxxBhHQnvLfK4BebxquPMAWB8ekIFGfAV5jK26JikyGKS0KQKAVBcWmsSCyBd0jMgCBGKGYSEyWISZST+LRcRCbIESvbAUnW+0jevhciWTZCYqWISpQjOikdYSIZgoUSiEViyMTxEIq3ITp+GyuNF8MvXDQg8I1MYIKEUgTESIh3RALe9YuCh3c4NniFYYN3GDx8Inh9Z0soz5p9vVc41nlF4G36vn5LKLsxOA5eYdRhcuZuprLuKirOXibHa+pxuLwGJcdOobSsmnIKRR+cpFSs6tq8AgdXtfhIBQ6VVbFCaRY8g2jKnf2fM1iZx9zIE2IwmqDX67G4uEBZhNFgwL8NJ4UAbFXtebzlGTggaP/sK2bxx4dg7jWTF+oZPGMUePZcCcXgMLTz83C5XPyPbrebZ22szZZsLtipw4oz9Vi3KWhA0Hann7Ha7JianiFmiwUrKytYXl6Gnka3YjbDYDBinjq20DWdToeR0VFotVp+nVsjLL8hyx3Xes5ha2cfw1lMJhOxWq0wU4dWqwV2uw0Oux1OhwM2mw1Op5Pa7FhaWuKdW+i3nK5mwJ6oWY3wFo1w2WzByIsxMjGpgnJoGKqZWWh1RkxptNDML2JBb4BOb4R6RoPh0RcYn5iAcnCQz2R18A75CNu6ehkjPQRGrSfDGgMUaj2YKR0U0wYoNUuY0lkwvrCCodlljGpXMLmwjAVasDmaNhf56rm+ctjS2cunbNTriUlHI5mnFaZnxqX3X8Y/HDZ33WVgNcE2/IRoB3/DytifIKohLM7N8ikqFEowzxW0jXSYX6Cb0cLMzMzAaDJBrZ7mO+G1M+Qdmg0wftlNvm4owOOG4yA//4C5OQ3GxyegUk1hUqXC5OQkhkdGeOWqzDE4OASNZvaNlLvvMzBqsVhZTPQHc7GUl46R1isYV09hlDqYnZ2lTlRQKJUYGx+nUal5nZ6eppupXovwVcoWAxa6GshYyW4ojxbg2+bLfCWnpjU8mjkt3yJcETh09DaZaPuYaZ86aFu9lnJTB+1DuxnL40r26fcP3T9988D9y3cP3bRIbqvd6bZYbW6b3eFmWdbtcnG43IRWghAO4nY6XW6+sU/XvYywo/e+gt+C3ix6J8Etu4gbdocTLpaApXOz1cYrNzgbd7PeLHbVRxexzjPwsWDPgUNPb7TdwbWmdtvVm22OTzmabvNca253NDR3UO1wNLZ0Oq7f6nI0tnbydk6vUxpaOhxNt7ttsuw8bPSP/FUgEHjk0EcxpZBS9D8pFHhsLtkUEJ79NxbB9MYsPjm1AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="twitterurl2"\n        title=""\n        src="/static/twitterurl-2-464d5d9dc0eed95c42b9a594b72f16eb-fde3e.png"\n        srcset="/static/twitterurl-2-464d5d9dc0eed95c42b9a594b72f16eb-8803e.png 148w,\n/static/twitterurl-2-464d5d9dc0eed95c42b9a594b72f16eb-77437.png 295w,\n/static/twitterurl-2-464d5d9dc0eed95c42b9a594b72f16eb-fde3e.png 530w"\n        sizes="(max-width: 530px) 100vw, 530px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ul>\n<li>マークダウン記事にペーストします。<strong>ただし最後の行は削除しましょう。</strong>Twitterウィジェット用スクリプト読み込みであり、プラグインがやってくれるので。</li>\n</ul>\n<div class="gatsby-highlight" data-language="html"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blockquote</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>twitter-tweet<span class="token punctuation">"</span></span> <span class="token attr-name">data-lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ja<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ja<span class="token punctuation">"</span></span> <span class="token attr-name">dir</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ltr<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    最近忙しかったのでアレですが、ブログ更新しました。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\n    Reactで構造化データマークアップ（JSON-LD対応）\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://t.co/7V49VqH9WI<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>https://t.co/7V49VqH9WI<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://twitter.com/inouetakumon?ref_src=twsrc%5Etfw<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>@inouetakumon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>さんから\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token entity" title="&mdash;">&amp;mdash;</span>\n  takumontakumon (@inouetakumon)\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://twitter.com/inouetakumon/status/1046062825037344770?ref_src=twsrc%5Etfw<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2018年9月29日<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blockquote</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">async</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://platform.twitter.com/widgets.js<span class="token punctuation">"</span></span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- この行は削除 --></span>\n</span></code></pre></div>\n<br>\nするとこんな感じで表示されます。\n<br>\n<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">最近忙しかったのでアレですが、ブログ更新しました。<br><br>Reactで構造化データマークアップ（JSON-LD対応） <a href="https://t.co/7V49VqH9WI">https://t.co/7V49VqH9WI</a> <a href="https://twitter.com/inouetakumon?ref_src=twsrc%5Etfw">@inouetakumon</a>さんから</p>&mdash; takumontakumon (@inouetakumon) <a href="https://twitter.com/inouetakumon/status/1046062825037344770?ref_src=twsrc%5Etfw">2018年9月29日</a></blockquote>\n<h2>まとめ</h2>\n<p>YouTubeとTwitter埋め込みともに、Gatsbyではプラグインが用意されているのでとても簡単に実現できました。\nというか大抵の機能はプラグインが用意されていて、自分で特にやることがないという感じですね。\n今後は、もうちょいReact勉強するために、本格的にブログを改造していきたいです！</p>',frontmatter:{date:"2018/10/07",title:"GatsbyでYouTubeとTwitter埋め込み",tags:["gatsby","sns"]}}},pathContext:{slug:"/2018/10/07/",previous:{fields:{slug:"/2018/09/29/"},frontmatter:{title:"Reactで構造化データマークアップ（JSON-LD対応）",tags:["react","schema-org","json-ld"]}},next:{fields:{slug:"/2018/10/08/"},frontmatter:{title:"GatsbyでPWA対応",tags:["gatsby","pwa"]}}}}}});
//# sourceMappingURL=path---2018-10-07-a8e3504e01069a57166e.js.map