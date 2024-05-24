import{_ as e,o as i,c as l,a as t}from"./app.57a3dbd1.js";const a="/assets/high-1.d185687d.png",b=JSON.parse('{"title":"进阶教学","description":"","frontmatter":{"contributors":["ZhouYixun"]},"headers":[{"level":2,"title":"全局参数","slug":"全局参数","link":"#全局参数","children":[]},{"level":2,"title":"公共步骤","slug":"公共步骤","link":"#公共步骤","children":[]},{"level":2,"title":"配合Jenkins插件","slug":"配合jenkins插件","link":"#配合jenkins插件","children":[]},{"level":2,"title":"结语","slug":"结语","link":"#结语","children":[]}],"relativePath":"doc/doc-high.md","lastUpdated":1716537034000}'),c={name:"doc/doc-high.md"},s=t('<h1 id="进阶教学" tabindex="-1">进阶教学 <a class="header-anchor" href="#进阶教学" aria-hidden="true">#</a></h1><p>本页为 <strong>笔记App</strong> 为例，介绍如何使用进阶UI自动化功能。</p><h2 id="全局参数" tabindex="-1">全局参数 <a class="header-anchor" href="#全局参数" aria-hidden="true">#</a></h2><p>当我们一个简单的UI自动化用例完成时，我们部分输入参数需要抽离出来维护。</p><ol><li>前往【全局参数】页面，添加新的全局参数。如参数名为 abc，内容为123456</li><li>调整原输入步骤中的输入内容为新增的全局参数</li></ol><p><img src="'+a+'" alt="high-1"></p><div><p>当我们下发测试任务的时候，就会发现{{abc}}会替换为123456</p></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果希望同一个参数名分发给不同设备时为不同的值，可以查看 <a href="https://sonic-cloud.cn/doc/doc-global.html#%E7%89%B9%E6%AE%8A%E7%94%A8%E6%B3%95" target="_blank" rel="noreferrer">特殊用法</a></p><p>目前全局参数可用于：</p><ul><li>控件信息</li><li>应用名、包名</li><li>输入文本</li><li>WebView名称</li><li>Handle名称</li><li>等等...</li></ul><p>测试过程中，例如【获取文本】一类的结果也可以存放到临时参数里，后续也可以通过相同方式引用，达到参数传递的效果。</p></div><h2 id="公共步骤" tabindex="-1">公共步骤 <a class="header-anchor" href="#公共步骤" aria-hidden="true">#</a></h2><p>当我们多个用例含有重复的步骤，我们可以提取为公共步骤进行维护。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>详情可以查看 <a href="https://sonic-cloud.cn/doc/doc-pub.html" target="_blank" rel="noreferrer">公共步骤文档</a></p></div><h2 id="配合jenkins插件" tabindex="-1">配合Jenkins插件 <a class="header-anchor" href="#配合jenkins插件" aria-hidden="true">#</a></h2><p>如果希望Jenkins构建了apk或者ipa包之后，能自动上传到Sonic平台并进行批量安装、测试，可以使用 sonic-ci-helper-plugin</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>详情可以查看 <a href="https://sonic-cloud.cn/sch/re-sch.html" target="_blank" rel="noreferrer">sonic-ci-helper-plugin使用文档</a></p></div><h2 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-hidden="true">#</a></h2><p>简单的进阶教学就到这里了。更多 自定义脚本、迭代控件列表、切换WebView 等等有趣的功能可以前往【测试步骤相关】查看，可以按需使用。愿Sonic能给你带来友好的使用体验。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>更多疑问可前往 👉<a href="https://discord.gg/c9ZD6jSyTE" target="_blank" rel="noreferrer">社区</a>👈 交流</p></div>',17),r=[s];function n(o,d,p,h,u,_){return i(),l("div",null,r)}const g=e(c,[["render",n]]);export{b as __pageData,g as default};