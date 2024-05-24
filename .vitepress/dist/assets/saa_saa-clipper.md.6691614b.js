import{_ as s,o as a,c as n,a as l}from"./app.57a3dbd1.js";const A=JSON.parse('{"title":"剪切板操作","description":"","frontmatter":{"contributors":["ZhouYixun"]},"headers":[{"level":2,"title":"前置操作","slug":"前置操作","link":"#前置操作","children":[]},{"level":2,"title":"直接使用","slug":"直接使用","link":"#直接使用","children":[{"level":3,"title":"设置剪切板内容","slug":"设置剪切板内容","link":"#设置剪切板内容","children":[]},{"level":3,"title":"获取剪切板内容","slug":"获取剪切板内容","link":"#获取剪切板内容","children":[]}]}],"relativePath":"saa/saa-clipper.md","lastUpdated":1716537034000}'),e={name:"saa/saa-clipper.md"},o=l(`<h1 id="剪切板操作" tabindex="-1">剪切板操作 <a class="header-anchor" href="#剪切板操作" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本功能需要 <code>sonic-android-apk</code> v2.0.7 以上，对应Sonic版本为 v2.5.0</p></div><h2 id="前置操作" tabindex="-1">前置操作 <a class="header-anchor" href="#前置操作" aria-hidden="true">#</a></h2><p>先启用Sonic输入法</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ime</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">org.cloud.sonic.android/.keyboard.SonicKeyboard</span></span>
<span class="line"></span></code></pre></div><p>再设置Sonic输入法为当前输入法</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ime</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">org.cloud.sonic.android/.keyboard.SonicKeyboard</span></span>
<span class="line"></span></code></pre></div><p>然后需要在输入框<code>使用过</code>或<code>激活起</code>Sonic输入法，让Sonic输入法为后台应用</p><h2 id="直接使用" tabindex="-1">直接使用 <a class="header-anchor" href="#直接使用" aria-hidden="true">#</a></h2><p>该方式经测试目前支持所有安卓版本。</p><h3 id="设置剪切板内容" tabindex="-1">设置剪切板内容 <a class="header-anchor" href="#设置剪切板内容" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">am</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">broadcast</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SONIC_CLIPPER_SET</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--es</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">msg</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;I like Sonic&#39;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>你可以看到类似输出</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Broadcasting: Intent { act=SONIC_CLIPPER_SET flg=0x400000 (has extras) }</span></span>
<span class="line"><span style="color:#A6ACCD;">Broadcast completed: result=-1, data=&quot;Text is copied into clipboard.&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="获取剪切板内容" tabindex="-1">获取剪切板内容 <a class="header-anchor" href="#获取剪切板内容" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">am</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">broadcast</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SONIC_CLIPPER_GET</span></span>
<span class="line"></span></code></pre></div><p>你可以看到类似输出</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Broadcasting: Intent { act=SONIC_CLIPPER_GET flg=0x400000 }</span></span>
<span class="line"><span style="color:#A6ACCD;">Broadcast completed: result=-1, data=&quot;I like Sonic&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,18),p=[o];function t(c,r,i,d,C,y){return a(),n("div",null,p)}const D=s(e,[["render",t]]);export{A as __pageData,D as default};