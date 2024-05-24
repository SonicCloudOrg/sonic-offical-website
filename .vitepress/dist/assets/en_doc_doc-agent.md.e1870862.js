import{_ as e,o as t,c as n,a as i}from"./app.57a3dbd1.js";const m=JSON.parse('{"title":"Agent Center","description":"","frontmatter":{"contributors":["ZhouYixun","ArryListY","shinyvince"]},"headers":[{"level":2,"title":"Add Agent","slug":"add-agent","link":"#add-agent","children":[]},{"level":2,"title":"Copy Agent Key","slug":"copy-agent-key","link":"#copy-agent-key","children":[]},{"level":2,"title":"Edit Agent","slug":"edit-agent","link":"#edit-agent","children":[]},{"level":2,"title":"View Agent","slug":"view-agent","link":"#view-agent","children":[]},{"level":2,"title":"Terminate Agent","slug":"terminate-agent","link":"#terminate-agent","children":[]},{"level":2,"title":"Frequently Asked Questions (Q&A)","slug":"frequently-asked-questions-q-a","link":"#frequently-asked-questions-q-a","children":[]}],"relativePath":"en/doc/doc-agent.md","lastUpdated":1716537034000}'),o={name:"en/doc/doc-agent.md"},a=i('<h1 id="agent-center" tabindex="-1">Agent Center <a class="header-anchor" href="#agent-center" aria-hidden="true">#</a></h1><p>Manage Agents.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Have questions about Agent deployment? You can go to <a href="https://sonic-cloud.cn/en/deploy/agent-deploy.html" target="_blank" rel="noreferrer">Agent deployment document</a> to view~</p></div><h2 id="add-agent" tabindex="-1">Add Agent <a class="header-anchor" href="#add-agent" aria-hidden="true">#</a></h2><ol><li>Click [Add Agent].</li><li>Enter the Agent name.</li><li>Set the high temperature value, drag the progress bar or enter the temperature value on the right to set (optional, the default value is 45°C).</li><li>Set the high temperature timeout, enter the timeout time to set (optional, the default value is 15min).</li><li>Set the robot type. Currently, DingTalk, Enterprise WeChat and Feishu robots can be selected (optional).</li><li>Set the WebHook, select the corresponding robot type, copy the robot webhook and paste it into the input box (optional).</li><li>Set Secret, enter the secret key of the group robot (optional).</li><li>Click [OK], the Agent is created successfully.</li></ol><div class="tip custom-block"><p class="custom-block-title">note</p><p>When the robot setting parameters are wrong, no alarm will be sent, please make sure the setting parameters are correct.</p></div><h2 id="copy-agent-key" tabindex="-1">Copy Agent Key <a class="header-anchor" href="#copy-agent-key" aria-hidden="true">#</a></h2><p>Obtain the Key of the Agent for deployment on the Agent side.</p><ol><li>In the Agent list, select the corresponding newly added Agent.</li><li>Click the [Click to copy] button</li></ol><h2 id="edit-agent" tabindex="-1">Edit Agent <a class="header-anchor" href="#edit-agent" aria-hidden="true">#</a></h2><ol><li>Click [Edit] to modify the Agent information.</li><li>Enter the Agent name to modify the current Agent name.</li><li>Edit the high temperature value, drag the progress bar or enter the temperature value on the right to set.</li><li>Edit the high temperature timeout, enter the timeout time to set.</li><li>Edit the robot type, currently you can choose DingTalk, Enterprise WeChat and Feishu robots.</li><li>Edit the WebHook, select the corresponding robot type, copy the robot webhook and paste it into the input box.</li><li>Edit Secret and enter the secret key of the group robot.</li><li>Click [OK], Agent editing is successful.</li></ol><h2 id="view-agent" tabindex="-1">View Agent <a class="header-anchor" href="#view-agent" aria-hidden="true">#</a></h2><ol><li>In the Agent list, you can view the basic information of the created Agent, including Agent name, host, port, operating system, operating version, and status.</li><li>Click the [Auto Refresh] button to enable/disable automatic refresh of the Agent status.</li></ol><h2 id="terminate-agent" tabindex="-1">Terminate Agent <a class="header-anchor" href="#terminate-agent" aria-hidden="true">#</a></h2><p>Remotely stop the Agent service.</p><ol><li>Find the corresponding Agent in the Agent list.</li><li>Click the [Stop Running] button to stop running the current Agent. Agent status will change to [Offline] status.</li></ol><div class="warning custom-block"><p class="custom-block-title">note</p><p>When the Agent is in [Online] state, it can be terminated.</p></div><h2 id="frequently-asked-questions-q-a" tabindex="-1">Frequently Asked Questions (Q&amp;A) <a class="header-anchor" href="#frequently-asked-questions-q-a" aria-hidden="true">#</a></h2><p>Q1: Why does it still show as offline after the Agent is connected?</p><p>A1: You need to manually refresh the page or turn on [Auto Refresh] just after connecting. If you haven’t connected all the time, you need to check the Agent log and check the filled Server IP and Agent Key.</p><hr><p>Q2: Do you feel that the remote control device is stuck, or the packaging time is too long?</p><p>A2: For this problem, we can look at the following two points:</p><ol><li>It is recommended that the Agent use a wired network environment instead of a wireless network.</li><li>Check whether the data cable connected to the device is intact. It is recommended to use a USB3.0 data cable or a data cable from an official hardware solution.</li></ol><hr><p>Q3: There will be sonic-android-supply or other plug-in security pop-up windows when starting on Mac?</p><p>A3: Mac: System Preferences -&gt; Security &amp; Privacy -&gt; General, click Trust or Open anyway.</p><hr><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>For more questions, please go to 👉<a href="https://discord.gg/c9ZD6jSyTE" target="_blank" rel="noreferrer">Community</a>👈 to communicate</p></div>',29),r=[a];function l(s,h,c,d,g,p){return t(),n("div",null,r)}const y=e(o,[["render",l]]);export{m as __pageData,y as default};