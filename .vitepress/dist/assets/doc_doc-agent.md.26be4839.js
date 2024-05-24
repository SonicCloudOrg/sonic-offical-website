import{_ as e,o as t,c as l,a as i}from"./app.57a3dbd1.js";const u=JSON.parse('{"title":"Agent中心","description":"","frontmatter":{"contributors":["ZhouYixun","ArryListY","shinyvince"]},"headers":[{"level":2,"title":"新增Agent","slug":"新增agent","link":"#新增agent","children":[]},{"level":2,"title":"复制Agent Key","slug":"复制agent-key","link":"#复制agent-key","children":[]},{"level":2,"title":"编辑Agent","slug":"编辑agent","link":"#编辑agent","children":[]},{"level":2,"title":"查看Agent","slug":"查看agent","link":"#查看agent","children":[]},{"level":2,"title":"终止Agent","slug":"终止agent","link":"#终止agent","children":[]},{"level":2,"title":"常见问题（Q&A）","slug":"常见问题-q-a","link":"#常见问题-q-a","children":[]}],"relativePath":"doc/doc-agent.md","lastUpdated":1716537034000}'),n={name:"doc/doc-agent.md"},a=i('<h1 id="agent中心" tabindex="-1">Agent中心 <a class="header-anchor" href="#agent中心" aria-hidden="true">#</a></h1><p>对Agent进行管理。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Agent部署有疑问？可前往 <a href="https://sonic-cloud.cn/deploy/agent-deploy.html" target="_blank" rel="noreferrer">Agent端部署文档</a> 查看哦~</p></div><h2 id="新增agent" tabindex="-1">新增Agent <a class="header-anchor" href="#新增agent" aria-hidden="true">#</a></h2><ol><li>点击【新增Agent】。</li><li>输入Agent名称。</li><li>设置高温值，拖动进度条或在右方输入温度值进行设置(可选，默认值为45℃)。</li><li>设置高温超时，输入超时时间进行设置(可选，默认值为15min)。</li><li>设置机器人类型，目前可选择钉钉、企业微信和飞书机器人(可选)。</li><li>设置WebHook，选择对应机器人类型后复制该机器人webhook并粘贴到输入框中(可选)。</li><li>设置Secret，输入群机器人的密钥(可选)。</li><li>点击【确定】，Agent创建成功。</li></ol><div class="tip custom-block"><p class="custom-block-title">注意</p><p>当机器人设置参数错误时，不会发送告警，请确保设置参数正确。</p></div><h2 id="复制agent-key" tabindex="-1">复制Agent Key <a class="header-anchor" href="#复制agent-key" aria-hidden="true">#</a></h2><p>获取Agent的Key用作Agent端部署使用。</p><ol><li>在Agent列表中，选择对应新增的Agent。</li><li>点击【点击复制】按钮</li></ol><h2 id="编辑agent" tabindex="-1">编辑Agent <a class="header-anchor" href="#编辑agent" aria-hidden="true">#</a></h2><ol><li>点击【编辑】，对Agent信息进行修改。</li><li>输入Agent名称，修改当前Agent名称。</li><li>编辑高温值，拖动进度条或在右方输入温度值进行设置。</li><li>编辑高温超时，输入超时时间进行设置。</li><li>编辑机器人类型，目前可选择钉钉、企业微信和飞书机器人。</li><li>编辑WebHook，选择对应机器人类型后复制该机器人webhook并粘贴到输入框中。</li><li>编辑Secret，输入群机器人的密钥。</li><li>点击【确定】，Agent编辑成功。</li></ol><h2 id="查看agent" tabindex="-1">查看Agent <a class="header-anchor" href="#查看agent" aria-hidden="true">#</a></h2><ol><li>在Agent列表中可查看已创建Agent的基础信息，包括Agent名称、host、port、运行系统、运行版本及状态。</li><li>点击【自动刷新】按钮，开启/关闭自动刷新Agent状态。</li></ol><h2 id="终止agent" tabindex="-1">终止Agent <a class="header-anchor" href="#终止agent" aria-hidden="true">#</a></h2><p>远程停止Agent服务。</p><ol><li>在Agent列表找到对应的Agent。</li><li>点击【终止运行】按钮，终止运行当前Agent。Agent状态将变更为 [离线] 状态。</li></ol><div class="warning custom-block"><p class="custom-block-title">注意</p><p>当Agent为 [在线] 状态时，才可以被终止运行。</p></div><h2 id="常见问题-q-a" tabindex="-1">常见问题（Q&amp;A） <a class="header-anchor" href="#常见问题-q-a" aria-hidden="true">#</a></h2><p>Q1: 为什么Agent接入后，仍然显示离线？</p><p>A1: 刚连上需要手动刷新页面或打开【自动刷新】，如果一直没连上，需要查看Agent日志排查，要检查好填写的Server IP与Agent Key。</p><hr><p>Q2: 感觉远控设备卡顿，或者装包时间过长？</p><p>A2: 针对这个问题可以看以下两点：</p><ol><li>建议 Agent 优先使用有线网络环境而不是无线网络。</li><li>检查设备连接的数据线是否完好，建议使用USB3.0数据线或官方硬件方案的数据线。</li></ol><hr><p>Q3: Mac上启动会有sonic-android-supply或其他插件安全弹窗？</p><p>A3: Mac：系统偏好设置 -&gt; 安全性与隐私 -&gt; 通用，点击信任或仍要打开。</p><hr><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>更多疑问可前往 👉<a href="https://discord.gg/c9ZD6jSyTE" target="_blank" rel="noreferrer">社区</a>👈 交流</p></div>',29),r=[a];function o(c,g,s,d,h,p){return t(),l("div",null,r)}const _=e(n,[["render",o]]);export{u as __pageData,_ as default};