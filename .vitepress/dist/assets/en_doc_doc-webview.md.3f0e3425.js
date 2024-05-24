import{_ as e,o as i,c as o,a}from"./app.57a3dbd1.js";const g=JSON.parse('{"title":"WebView/H5 debugging","description":"","frontmatter":{"contributors":["ZhouYixun"]},"headers":[{"level":2,"title":"Precautions","slug":"precautions","link":"#precautions","children":[]},{"level":2,"title":"android","slug":"android","link":"#android","children":[]},{"level":2,"title":"iOS","slug":"ios","link":"#ios","children":[]}],"relativePath":"en/doc/doc-webview.md","lastUpdated":1716537034000}'),n={name:"en/doc/doc-webview.md"},t=a(`<h1 id="webview-h5-debugging" tabindex="-1">WebView/H5 debugging <a class="header-anchor" href="#webview-h5-debugging" aria-hidden="true">#</a></h1><p>Teaching and precautions when using web page debugging.</p><h2 id="precautions" tabindex="-1">Precautions <a class="header-anchor" href="#precautions" aria-hidden="true">#</a></h2><p>Starting from v2.0.0-beta, when using web page debugging, make sure:</p><ol><li>The WebView page has been opened</li><li>The App under test has enabled the Debug switch of WebView. (If it is WeChat&#39;s H5, small programs, etc., you need to make sure that WeChat&#39;s debugx5 is turned on)</li></ol><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">webView</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setWebContentsDebuggingEnabled</span><span style="color:#89DDFF;">(true);</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>If it is the default browser of the mobile phone, some browsers need to enable the debug switch.</li><li>This function needs to forward the Devtools service, which is already built in the official Docker image, so it can only be used when Docker deploys the front-end and back-end. To use the local development environment, you need to enable the chrome devtools service and modify the ws address by yourself.</li></ol><h2 id="android" tabindex="-1">android <a class="header-anchor" href="#android" aria-hidden="true">#</a></h2><ol><li>Go to the WebView page.</li><li>Click [Get webView process].</li><li>Select the corresponding process and click [Debug Now].</li><li>Done! You can debug like chrome-devtools!</li></ol><h2 id="ios" tabindex="-1">iOS <a class="header-anchor" href="#ios" aria-hidden="true">#</a></h2><p>The iOS web debugging webkit protocol receiver is under continuous maintenance, you can go to <a href="https://sonic-cloud.cn/siwa/re-siwa.html" target="_blank" rel="noreferrer">here</a> to learn more.</p><ol><li>Go to System [Settings].</li><li>Find the Safari browser in the application list.</li><li>Click [Advanced] -&gt; [Web Inspector] and [Remote Automation] to enable both.</li><li>Go to the WebView page.</li><li>Click [Get webView process].</li><li>Select the corresponding process and click [Debug Now].</li><li>Done! You can debug like chrome-devtools!</li></ol>`,12),s=[t];function l(r,d,c,h,p,u){return i(),o("div",null,s)}const w=e(n,[["render",l]]);export{g as __pageData,w as default};