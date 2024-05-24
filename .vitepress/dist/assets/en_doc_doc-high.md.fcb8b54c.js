import{_ as e,o as t,c as a,a as i}from"./app.57a3dbd1.js";const n="/assets/high-1.d185687d.png",b=JSON.parse('{"title":"Advanced Teaching","description":"","frontmatter":{"contributors":["ZhouYixun"]},"headers":[{"level":2,"title":"Global parameters","slug":"global-parameters","link":"#global-parameters","children":[]},{"level":2,"title":"Public steps","slug":"public-steps","link":"#public-steps","children":[]},{"level":2,"title":"Cooperate with Jenkins plugin","slug":"cooperate-with-jenkins-plugin","link":"#cooperate-with-jenkins-plugin","children":[]},{"level":2,"title":"Conclusion","slug":"conclusion","link":"#conclusion","children":[]}],"relativePath":"en/doc/doc-high.md","lastUpdated":1716537034000}'),o={name:"en/doc/doc-high.md"},s=i('<h1 id="advanced-teaching" tabindex="-1">Advanced Teaching <a class="header-anchor" href="#advanced-teaching" aria-hidden="true">#</a></h1><p>This page uses <strong>Note App</strong> as an example to introduce how to use advanced UI automation functions.</p><h2 id="global-parameters" tabindex="-1">Global parameters <a class="header-anchor" href="#global-parameters" aria-hidden="true">#</a></h2><p>When our simple UI automation use case is completed, some of our input parameters need to be extracted for maintenance.</p><ol><li>Go to the [Global Parameters] page and add new global parameters. For example, the parameter name is abc, and the content is 123456</li><li>Adjust the input content in the original input step to the new global parameter</li></ol><p><img src="'+n+'" alt="high-1"></p><div><p>When we deliver the test task, we will find that {{abc}} will be replaced with 123456</p></div><div class="tip custom-block"><p class="custom-block-title">tip</p><p>If you want the same parameter name to have different values when distributed to different devices, you can check <a href="https://sonic-cloud.cn/en/doc/doc-global.html#special-usage" target="_blank" rel="noreferrer">Special Usage</a></p><p>Currently global parameters are available for:</p><ul><li>Control information</li><li>Application name, package name</li><li>enter text</li><li>WebView name</li><li>Handle name</li><li>etc...</li></ul><p>During the test, results such as [Get Text] can also be stored in temporary parameters, and can be referenced in the same way later to achieve the effect of parameter passing.</p></div><h2 id="public-steps" tabindex="-1">Public steps <a class="header-anchor" href="#public-steps" aria-hidden="true">#</a></h2><p>When our multiple use cases contain repeated steps, we can extract them as common steps for maintenance.</p><div class="tip custom-block"><p class="custom-block-title">tip</p><p>For details, please refer to <a href="https://sonic-cloud.cn/en/doc/doc-pub.html" target="_blank" rel="noreferrer">Public Procedure Documentation</a></p></div><h2 id="cooperate-with-jenkins-plugin" tabindex="-1">Cooperate with Jenkins plugin <a class="header-anchor" href="#cooperate-with-jenkins-plugin" aria-hidden="true">#</a></h2><p>If you want Jenkins to build the apk or ipa package, it can be automatically uploaded to the Sonic platform for batch installation and testing, you can use sonic-ci-helper-plugin</p><div class="tip custom-block"><p class="custom-block-title">tip</p><p>For details, please refer to <a href="https://sonic-cloud.cn/sch/re-sch.html" target="_blank" rel="noreferrer">sonic-ci-helper-plugin documentation</a></p></div><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-hidden="true">#</a></h2><p>The simple advanced teaching is here. For more interesting functions such as custom scripts, iterating control lists, switching WebViews, etc., you can go to [Test Steps Related] to view, and you can use them as needed. May Sonic bring you a friendly experience.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>For more questions, please go to 👉<a href="https://discord.gg/c9ZD6jSyTE" target="_blank" rel="noreferrer">Community</a>👈 to communicate</p></div>',17),l=[s];function r(c,p,d,h,u,m){return t(),a("div",null,l)}const f=e(o,[["render",r]]);export{b as __pageData,f as default};