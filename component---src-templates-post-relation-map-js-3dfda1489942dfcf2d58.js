(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{152:function(t,e,a){"use strict";a.r(e);a(58),a(82),a(83),a(54),a(33),a(53);var n=a(7),o=a.n(n),r=a(0),i=a.n(r),l=(a(159),a(163),a(191)),d=a(275),s=a.n(d),p=a(409),g=a.n(p),c=a(410),x=a.n(c),u=a(411),h=a.n(u);s.a.use(x.a);var m=function(t){function e(e){var a;return(a=t.call(this)||this).goFull=function(){a.setState({isFull:!0})},a.goNotFull=function(){a.setState({isFull:!1})},a.state={isFull:!1},a}return o()(e,t),e.prototype.render=function(){var t=this,e=this.props.pathContext.allPostRelations,a=e.map(function(t){var e,a=t.node.fields.title.replace(/ /g,"");if(a.length>25){e=a.match(/.{25}/g).join("\n");var n=a.length%25;n&&(e+="\n"+a.substring(a.length-n))}else e=a;return{data:{id:t.node.fields.slug,title:e,backgroudImage:t.node.fields.thumbnail||"/icons/app-sns.png",date:t.node.fields.date,href:t.node.fields.slug}}});a.push({data:{id:"zoomUp",title:"",parent:"nparent"},position:{x:0,y:100},selected:!1,selectable:!1,grabbable:!1,locked:!0}),a.push({data:{id:"zoomDown",title:"",parent:"nparent"},position:{x:0,y:260},selected:!1,selectable:!1,grabbable:!1,locked:!0});var n=[];e.forEach(function(t){t.relations.forEach(function(e){var a=e.details,o=e.node;return a.forEach(function(e){var a=e.weight/30*1,r={data:{source:t.node.fields.slug,target:o.fields.slug,width:a,fontSize:10*a,margin:20*a,keyword:e.keyword}};n.some(function(t){return(r.data.source===t.data.source&&r.data.target===t.data.target||r.data.target===t.data.source&&r.data.source===t.data.target)&&r.data.width===t.data.width&&r.data.keyword===t.data.keyword})||n.push(r)})})});var o=g.a.normalizeElements({nodes:a,edges:n}),r=.3,d=this.state.isFull?i.a.createElement("button",{onClick:this.goNotFull},"戻る"):i.a.createElement("button",{onClick:this.goFull},"フルスクリーン表示");return i.a.createElement(l.a,{location:this.props.location},i.a.createElement("h2",{style:{width:"90%",marginLeft:"auto",marginRight:"auto"}},"記事関連度マップ"),i.a.createElement("div",{style:{width:"90%",marginLeft:"auto",marginRight:"auto",marginBottom:"64px"}},"記事毎のタグ・キーワードをもとに関連度合いをCytoscape.jsで可視化したものです。Canvasで描画していますが、記事をクリックして記事に遷移できたりします。 マウスホイールで拡大率を変更できます。マップの左上の+-ボタンでも変更できます。"),i.a.createElement(h.a,{enabled:this.state.isFull,onChange:function(e){return t.setState({isFull:e})}},i.a.createElement("div",{style:{width:"90%",marginLeft:"auto",marginRight:"auto",marginBottom:"-34px",zIndex:1,position:"relative"}},d),i.a.createElement(g.a,{zoom:r,pan:{x:100,y:100},minZoom:.1,maxZoom:4,elements:o,layout:{name:"cose-bilkent",nodeDimensionsIncludeLabels:!1,refresh:30,fit:!0,padding:10,randomize:!0,nodeRepulsion:1e8,idealEdgeLength:700,edgeElasticity:.45,nestingFactor:.1,gravity:.2,numIter:2500,tile:!0,animate:"end",tilingPaddingVertical:400,tilingPaddingHorizontal:300,gravityRangeCompound:1.5,gravityCompound:1,gravityRange:3.8,initialEnergyOnIncremental:.5},style:{width:this.state.isFull?"100vw":"90%",height:"100vh",position:"relative",marginLeft:"auto",marginRight:"auto",border:"1px solid black",backgroundColor:"#ffffff",backgroundImage:"repeating-linear-gradient(to bottom,\n                  transparent 21px,\n                  rgba(225, 225, 225, 0.17) 22px,  rgba(225, 225, 225, 0.17) 22px,\n                  transparent 23px,  transparent 43px, \n                  rgba(225, 225, 225, 0.17) 44px,  rgba(225, 225, 225, 0.17) 44px,\n                  transparent 45px,  transparent 65px, \n                  rgba(225, 225, 225, 0.17) 66px,  rgba(225, 225, 225, 0.17) 66px,\n                  transparent 67px,  transparent 87px, \n                  rgba(225, 225, 225, 0.17) 88px,  rgba(225, 225, 225, 0.17) 88px,\n                  transparent 89px,  transparent 109px, \n                  rgba(225, 225, 225, 0.17) 110px,  rgba(225, 225, 225, 0.17) 110px),\n                repeating-linear-gradient(to right,\n                  transparent 21px,\n                  rgba(225, 225, 225, 0.17) 22px,  rgba(225, 225, 225, 0.17) 22px,\n                  transparent 23px,  transparent 43px, \n                  rgba(225, 225, 225, 0.17) 44px,  rgba(225, 225, 225, 0.17) 44px,\n                  transparent 45px,  transparent 65px, \n                  rgba(225, 225, 225, 0.17) 66px,  rgba(225, 225, 225, 0.17) 66px,\n                  transparent 67px,  transparent 87px, \n                  rgba(225, 225, 225, 0.17) 88px,  rgba(225, 225, 225, 0.17) 88px,\n                  transparent 89px,  transparent 109px, \n                  rgba(225, 225, 225, 0.17) 110px,  rgba(225, 225, 225, 0.17) 110px)"},stylesheet:[{selector:'node[id != "zoomUp"][ id != "zoomDown" ]',style:{label:"data(title)","background-image":"data(backgroudImage)",shape:"rectangle",padding:"0px","text-outline-width":"2px","text-outline-color":"white","text-outline-opacity":"1","text-margin-x":"-300px","text-margin-y":"-1","text-valign":"top","text-halign":"right","font-weight":"bold","text-max-width":"300px","text-wrap":"wrap","font-size":"25px","border-width":"0.2px","border-style":"solid","border-color":"gray",width:"300px",height:"166px",color:"black","background-fit":"contain"}},{selector:'node[id = "zoomUp"]',style:{label:"+",shape:"round-rectangle",width:"150px",height:"150px","border-color":"gray",color:"green","text-valign":"center","text-halign":"center","font-size":"150px","font-weight":"bold"}},{selector:'node[id = "zoomDown"]',style:{label:"-",shape:"round-rectangle",width:"150px",height:"150px","border-color":"gray",color:"green","text-valign":"center","text-halign":"center","font-size":"150px","font-weight":"bold"}},{selector:"edge",style:{label:"data(keyword)",width:"data(width)","curve-style":"bezier","line-cap":"round","text-background-color":"#f1f1f1","text-background-opacity":1,"text-background-shape":"round-rectangle","text-background-padding":"1px","text-max-width":"300px","text-halign":"center","text-wrap":"ellipsis","font-size":"data(fontSize)","control-point-step-size":"data(margin)","text-rotation":"autorotate",color:"black"}}],cy:function(t){t.on("click",'node[id = "zoomUp"]',function(e){r<4&&(r+=.05),t.zoom({level:r,position:e.target.position()})}),t.on("click",'node[id = "zoomDown"]',function(e){r>.1&&(r-=.05),t.zoom({level:r,position:e.target.position()})}),t.on("tap",'node[id != "zoomUp"][ id != "zoomDown" ]',function(){try{window.open(this.data("href"))}catch(t){window.location.href=this.data("href")}}),t.on("mouseover",'node[id != "zoomUp"][ id != "zoomDown" ]',function(t){document.body.style.cursor="pointer",t.target.style({"text-margin-x":"-500px",width:"500px",height:"270px"}),t.target.connectedEdges().style({"line-color":"blue",color:"blue","text-max-width":"400px"})}),t.on("mouseout",'node[id != "zoomUp"][ id != "zoomDown" ]',function(t){document.body.style.cursor="default",t.target.style({"text-margin-x":"-300px",width:"300px",height:"166px"}),t.target.connectedEdges().style({"line-color":"gray",color:"black","text-max-width":"300px"})})}})))},e}(i.a.Component);e.default=m}}]);