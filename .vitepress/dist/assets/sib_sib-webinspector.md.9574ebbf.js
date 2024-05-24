import{_ as t,o as a,c as s,a as e}from"./app.57a3dbd1.js";const u=JSON.parse('{"title":"网页检阅器","description":"","frontmatter":{"contributors":["ZhouYixun"]},"headers":[{"level":2,"title":"启动服务","slug":"启动服务","link":"#启动服务","children":[]},{"level":2,"title":"启用CDP Adapter","slug":"启用cdp-adapter","link":"#启用cdp-adapter","children":[]},{"level":2,"title":"指定启动端口","slug":"指定启动端口","link":"#指定启动端口","children":[]},{"level":2,"title":"可用选项","slug":"可用选项","link":"#可用选项","children":[]}],"relativePath":"sib/sib-webinspector.md","lastUpdated":1716537034000}'),d={name:"sib/sib-webinspector.md"},n=e(`<h1 id="网页检阅器" tabindex="-1">网页检阅器 <a class="header-anchor" href="#网页检阅器" aria-hidden="true">#</a></h1><p>开启iOS设备上的网页检阅服务。</p><h2 id="启动服务" tabindex="-1">启动服务 <a class="header-anchor" href="#启动服务" aria-hidden="true">#</a></h2><p>只启动webinspector服务。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">webinspector</span></span>
<span class="line"></span></code></pre></div><h2 id="启用cdp-adapter" tabindex="-1">启用CDP Adapter <a class="header-anchor" href="#启用cdp-adapter" aria-hidden="true">#</a></h2><p>启用后将使用 <strong>sonic-ios-webkit-adapter</strong> 将WebKit协议转换兼容，可直接与Chrome协议交互。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">webinspector</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--cdp</span></span>
<span class="line"></span></code></pre></div><h2 id="指定启动端口" tabindex="-1">指定启动端口 <a class="header-anchor" href="#指定启动端口" aria-hidden="true">#</a></h2><p>一般地，我们需要指定webinspector服务启动端口，可以加上 <strong>-p</strong> 指定。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">webinspector</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9222</span></span>
<span class="line"></span></code></pre></div><h2 id="可用选项" tabindex="-1">可用选项 <a class="header-anchor" href="#可用选项" aria-hidden="true">#</a></h2><table><thead><tr><th>快捷使用</th><th>选项名</th><th>数据类型</th><th>描述信息</th></tr></thead><tbody><tr><td>-u</td><td>--udid</td><td>string</td><td>指定目标udid设备，不指定默认获取列表第一个设备</td></tr><tr><td>-p</td><td>--port</td><td>int</td><td>启动端口</td></tr><tr><td></td><td>--cdp</td><td></td><td>是否启动CDP Adapter（默认为false）</td></tr><tr><td></td><td>--protocol-debug</td><td></td><td>是否启动protocol debug模式（默认为false）</td></tr><tr><td></td><td>--dtx-debug</td><td></td><td>是否启动dtx debug模式（默认为false）</td></tr><tr><td>-h</td><td>--help</td><td></td><td>获取帮助指南</td></tr></tbody></table>`,13),l=[n];function r(p,o,i,c,h,b){return a(),s("div",null,l)}const _=t(d,[["render",r]]);export{u as __pageData,_ as default};