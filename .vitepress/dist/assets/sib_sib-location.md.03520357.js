import{_ as t,o as a,c as s,a as e}from"./app.57a3dbd1.js";const b=JSON.parse('{"title":"模拟定位","description":"","frontmatter":{"contributors":["ZhouYixun"]},"headers":[{"level":2,"title":"开始模拟定位","slug":"开始模拟定位","link":"#开始模拟定位","children":[]},{"level":2,"title":"可用选项","slug":"可用选项","link":"#可用选项","children":[]},{"level":2,"title":"恢复定位","slug":"恢复定位","link":"#恢复定位","children":[]},{"level":2,"title":"可用选项","slug":"可用选项-1","link":"#可用选项-1","children":[]}],"relativePath":"sib/sib-location.md","lastUpdated":1716537034000}'),d={name:"sib/sib-location.md"},n=e(`<h1 id="模拟定位" tabindex="-1">模拟定位 <a class="header-anchor" href="#模拟定位" aria-hidden="true">#</a></h1><p>用于模拟定位经纬度信息。</p><h2 id="开始模拟定位" tabindex="-1">开始模拟定位 <a class="header-anchor" href="#开始模拟定位" aria-hidden="true">#</a></h2><p>马上发起模拟定位（部分应用无法生效）。</p><p>输入指令</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--long</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10.123123</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--lat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-11.01</span></span>
<span class="line"></span></code></pre></div><h2 id="可用选项" tabindex="-1">可用选项 <a class="header-anchor" href="#可用选项" aria-hidden="true">#</a></h2><table><thead><tr><th>快捷使用</th><th>选项名</th><th>数据类型</th><th>描述信息</th></tr></thead><tbody><tr><td></td><td>--long</td><td>float</td><td>经度，可精确到小数点后六位（必须）</td></tr><tr><td></td><td>--lat</td><td>float</td><td>纬度，可精确到小数点后六位（必须）</td></tr><tr><td>-u</td><td>--udid</td><td>string</td><td>指定目标udid设备，不指定默认获取列表第一个设备</td></tr><tr><td>-h</td><td>--help</td><td></td><td>获取帮助指南</td></tr></tbody></table><h2 id="恢复定位" tabindex="-1">恢复定位 <a class="header-anchor" href="#恢复定位" aria-hidden="true">#</a></h2><p>恢复设备原始真实定位。</p><p>输入指令</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">unset</span></span>
<span class="line"></span></code></pre></div><h2 id="可用选项-1" tabindex="-1">可用选项 <a class="header-anchor" href="#可用选项-1" aria-hidden="true">#</a></h2><table><thead><tr><th>快捷使用</th><th>选项名</th><th>数据类型</th><th>描述信息</th></tr></thead><tbody><tr><td>-u</td><td>--udid</td><td>string</td><td>指定目标udid设备，不指定默认获取列表第一个设备</td></tr><tr><td>-h</td><td>--help</td><td></td><td>获取帮助指南</td></tr></tbody></table>`,14),l=[n];function o(r,i,p,c,h,C){return a(),s("div",null,l)}const _=t(d,[["render",o]]);export{b as __pageData,_ as default};