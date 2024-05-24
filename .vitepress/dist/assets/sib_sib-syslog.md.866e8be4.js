import{_ as s,o as t,c as a,a as e}from"./app.57a3dbd1.js";const u=JSON.parse('{"title":"系统日志","description":"","frontmatter":{"contributors":["ZhouYixun"]},"headers":[{"level":2,"title":"获取系统日志","slug":"获取系统日志","link":"#获取系统日志","children":[]},{"level":2,"title":"可用选项","slug":"可用选项","link":"#可用选项","children":[]}],"relativePath":"sib/sib-syslog.md","lastUpdated":1716537034000}'),n={name:"sib/sib-syslog.md"},l=e(`<h1 id="系统日志" tabindex="-1">系统日志 <a class="header-anchor" href="#系统日志" aria-hidden="true">#</a></h1><p>系统日志的实时查看与筛选。</p><h2 id="获取系统日志" tabindex="-1">获取系统日志 <a class="header-anchor" href="#获取系统日志" aria-hidden="true">#</a></h2><p>获取系统实时日志。</p><p>输入指令</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">syslog</span></span>
<span class="line"></span></code></pre></div><hr><p>一般地，我们还会筛选我们需要的信息，此时可以加上 -f 选项。</p><p>输入指令</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">syslog</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">myAppTag</span></span>
<span class="line"></span></code></pre></div><h2 id="可用选项" tabindex="-1">可用选项 <a class="header-anchor" href="#可用选项" aria-hidden="true">#</a></h2><table><thead><tr><th>快捷使用</th><th>选项名</th><th>数据类型</th><th>描述信息</th></tr></thead><tbody><tr><td>-f</td><td>--filter</td><td></td><td>筛选的信息</td></tr><tr><td>-u</td><td>--udid</td><td>string</td><td>指定目标udid设备，不指定默认获取列表第一个设备</td></tr><tr><td>-h</td><td>--help</td><td></td><td>获取帮助指南</td></tr></tbody></table>`,12),d=[l];function o(p,r,i,c,h,_){return t(),a("div",null,d)}const y=s(n,[["render",o]]);export{u as __pageData,y as default};