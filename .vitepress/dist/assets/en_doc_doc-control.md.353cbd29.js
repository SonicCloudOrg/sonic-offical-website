import{_ as e,o as s,c as a,a as o}from"./app.57a3dbd1.js";const n="/assets/input.3f40f5a6.mp4",C=JSON.parse('{"title":"Control Panel","description":"","frontmatter":{"contributors":["ZhouYixun"]},"headers":[{"level":2,"title":"Android Devices","slug":"android-devices","link":"#android-devices","children":[{"level":3,"title":"Keyboard real-time input","slug":"keyboard-real-time-input","link":"#keyboard-real-time-input","children":[]},{"level":3,"title":"Switch the projection mode","slug":"switch-the-projection-mode","link":"#switch-the-projection-mode","children":[]},{"level":3,"title":"Switch touch mode","slug":"switch-touch-mode","link":"#switch-touch-mode","children":[]},{"level":3,"title":"Remote ADB","slug":"remote-adb","link":"#remote-adb","children":[]},{"level":3,"title":"File management","slug":"file-management","link":"#file-management","children":[]},{"level":3,"title":"Scan QR code","slug":"scan-qr-code","link":"#scan-qr-code","children":[]},{"level":3,"title":"Reconnect UIAutomator Server","slug":"reconnect-uiautomator-server","link":"#reconnect-uiautomator-server","children":[]},{"level":3,"title":"Remote Audio","slug":"remote-audio","link":"#remote-audio","children":[]},{"level":3,"title":"Physical Lookup","slug":"physical-lookup","link":"#physical-lookup","children":[]}]},{"level":2,"title":"iOS Devices","slug":"ios-devices","link":"#ios-devices","children":[{"level":3,"title":"Toggle clarity","slug":"toggle-clarity","link":"#toggle-clarity","children":[]},{"level":3,"title":"Keyboard input (same as Android)","slug":"keyboard-input-same-as-android","link":"#keyboard-input-same-as-android","children":[]},{"level":3,"title":"Siri commands","slug":"siri-commands","link":"#siri-commands","children":[]},{"level":3,"title":"Simulation Positioning","slug":"simulation-positioning","link":"#simulation-positioning","children":[]},{"level":3,"title":"Clipboard operation","slug":"clipboard-operation","link":"#clipboard-operation","children":[]},{"level":3,"title":"Remote WDA","slug":"remote-wda","link":"#remote-wda","children":[]},{"level":3,"title":"remote sib","slug":"remote-sib","link":"#remote-sib","children":[]}]}],"relativePath":"en/doc/doc-control.md","lastUpdated":1716537034000}'),l={name:"en/doc/doc-control.md"},t=o('<h1 id="control-panel" tabindex="-1">Control Panel <a class="header-anchor" href="#control-panel" aria-hidden="true">#</a></h1><p>Here is an introduction to the basic functions of the remote control device.</p><h2 id="android-devices" tabindex="-1">Android Devices <a class="header-anchor" href="#android-devices" aria-hidden="true">#</a></h2><h3 id="keyboard-real-time-input" tabindex="-1">Keyboard real-time input <a class="header-anchor" href="#keyboard-real-time-input" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This function needs to be upgraded to Sonic v2.0.3</p></div><p>When controlling the device remotely.</p><ol><li>Click the mouse into the projection area. (If the mouse clicks outside the projection area again, it will stop listening to keyboard input)</li><li>Use your computer keyboard to directly enter text on the web page.</li><li>You can directly send the corresponding text to the phone, and support delete and enter keys.</li></ol><video class="capacity-video" controls src="'+n+`"></video><div class="warning custom-block"><p class="custom-block-title">note</p><p>After upgrading to Sonic v2.3.0, you can directly click the gray area below the Sonic input method to quickly jump to the system input method setting page to switch input methods.</p></div><h3 id="switch-the-projection-mode" tabindex="-1">Switch the projection mode <a class="header-anchor" href="#switch-the-projection-mode" aria-hidden="true">#</a></h3><p>The current version of Android screen mirroring has two modes, namely minicap mode and scrcpy mode (default).</p><p>scrcpy already supports most models of Android 5-13, and minicap supports Android 4.4-12 models.</p><p>When the selected projection mode is not compatible with your device, you can click the toolbar on the right side of the projection area to switch the projection mode.</p><p>When in minicap mode, black borders appear in the projection area of some Samsung mobile phones, you can try to use [Fix Black Screen] in the toolbar on the right side of the projection area to solve the problem.</p><h3 id="switch-touch-mode" tabindex="-1">Switch touch mode <a class="header-anchor" href="#switch-touch-mode" aria-hidden="true">#</a></h3><p>The current version of Android touch has two modes, namely sonic-android-apk touch and adb native touch.</p><p>By default, the Android projection touch uses <a href="https://sonic-cloud.cn/saa" target="_blank" rel="noreferrer">sonic-android-apk</a> to realize real-time touch, which solves the scenario that minitouch cannot be used in real time on Android 10 or higher. But in some special cases, when the sonic-android-apk is not available, you can click [Repair Touch] on the toolbar on the right side of the projection area to switch to adb native touch.</p><h3 id="remote-adb" tabindex="-1">Remote ADB <a class="header-anchor" href="#remote-adb" aria-hidden="true">#</a></h3><p>The remote ADB function has relied on sonic-android-supply since <strong>v2.0.0-beta</strong> and no longer uses adbkit. ADB can be used to remotely connect the corresponding device to the local, which can be used to perform test tasks or develop and debug scenarios.</p><p>For example, if the user has ADB locally, he can copy the commands of the remote ADB interface to execute locally:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">connect</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx.xxx.xxx.xxx:xxxx</span></span>
<span class="line"><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">devices</span></span>
<span class="line"></span></code></pre></div><p>You will see output similar to</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">List</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">devices</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">attached</span></span>
<span class="line"><span style="color:#FFCB6B;">xxx.xxx.xxx.xxx:xxxx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">device</span></span>
<span class="line"></span></code></pre></div><p>Finish! The device has been connected to the user&#39;s local ADB from the Agent, and you can use ADB related commands to operate the device later. For example to view device resolution:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">size</span></span>
<span class="line"></span></code></pre></div><h3 id="file-management" tabindex="-1">File management <a class="header-anchor" href="#file-management" aria-hidden="true">#</a></h3><p>Files can be uploaded and pulled.</p><ol><li>After uploading the file, the path needs to add the file name, such as uploading abc.jpg to /data/local/tmp, then fill in /data/local/tmp/123.jpg.</li><li>When pulling files, only single-file operations are supported, such as pulling /data/local/tmp/123.jpg, fill in /data/local/tmp/123.jpg.</li></ol><h3 id="scan-qr-code" tabindex="-1">Scan QR code <a class="header-anchor" href="#scan-qr-code" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Some OPPO, vivo and sub-brand devices need to be restarted to take effect.</p></div><p>When you need to scan a QR code, you can upload the QR code picture to the corresponding location, and then open the album when scanning the code to find the corresponding QR code.</p><h3 id="reconnect-uiautomator-server" tabindex="-1">Reconnect UIAutomator Server <a class="header-anchor" href="#reconnect-uiautomator-server" aria-hidden="true">#</a></h3><p>When the default initialization fails, you need to adjust the corresponding settings, you can go to <a href="https://sonic-cloud.cn/en/deploy/android-deploy.html" target="_blank" rel="noreferrer">here</a> to check the configuration. Then click [Initialize UIAutomator2Server] until the Status is Connected.</p><h3 id="remote-audio" tabindex="-1">Remote Audio <a class="header-anchor" href="#remote-audio" aria-hidden="true">#</a></h3><p>The remote audio function currently relies on <a href="https://sonic-cloud.cn/saa/re-saa.html" target="_blank" rel="noreferrer">sonic-android-apk</a> to realize real-time audio transmission. After opening, the real-time audio of the remote device can be played directly on the web page.</p><p>If there is no audio after opening, you can check whether the device has enabled the notification bar permission of sonic-android-apk, etc., to ensure that sonic-android-apk has all permissions.</p><h3 id="physical-lookup" tabindex="-1">Physical Lookup <a class="header-anchor" href="#physical-lookup" aria-hidden="true">#</a></h3><p>When this function is used in a device cluster, it is cumbersome to find a physical machine due to too many devices. After clicking, the device will turn on the blue background and highlight the device screen, which is easy to quickly find the corresponding device during physical inspection.</p><h2 id="ios-devices" tabindex="-1">iOS Devices <a class="header-anchor" href="#ios-devices" aria-hidden="true">#</a></h2><h3 id="toggle-clarity" tabindex="-1">Toggle clarity <a class="header-anchor" href="#toggle-clarity" aria-hidden="true">#</a></h3><p>iOS screencasting uses mjpeg stream by default, and the default is high quality. If you want to reduce bandwidth pressure, you can switch to low quality in the right toolbar, which can reduce most of the bandwidth, but the quality and frame rate will also drop.</p><h3 id="keyboard-input-same-as-android" tabindex="-1">Keyboard input (same as Android) <a class="header-anchor" href="#keyboard-input-same-as-android" aria-hidden="true">#</a></h3><p>When controlling the device remotely.</p><ol><li>Click the mouse into the projection area. (If the mouse clicks outside the projection area again, it will stop listening to keyboard input)</li><li>Use your computer keyboard to directly enter text on the web page.</li><li>You can directly send the corresponding text to the phone.</li></ol><h3 id="siri-commands" tabindex="-1">Siri commands <a class="header-anchor" href="#siri-commands" aria-hidden="true">#</a></h3><p>Siri commands can be sent to iOS devices. like:</p><ol><li>Open your browser</li><li>What day is it today?</li><li>Open Settings</li></ol><p>There are many interesting Siri commands welcome to explore</p><h3 id="simulation-positioning" tabindex="-1">Simulation Positioning <a class="header-anchor" href="#simulation-positioning" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Currently found that some applications do not work.</p></div><p>It can simulate the geographic location of the device location, and the input of latitude and longitude can be accurate to five decimal places.</p><h3 id="clipboard-operation" tabindex="-1">Clipboard operation <a class="header-anchor" href="#clipboard-operation" aria-hidden="true">#</a></h3><p>Supports directly obtaining the clipboard content and settings of the device.</p><p>After setting, you need to long press and click paste on the device.</p><h3 id="remote-wda" tabindex="-1">Remote WDA <a class="header-anchor" href="#remote-wda" aria-hidden="true">#</a></h3><p>The WDA remote debugging connection is used externally.</p><p>For example, the user has Appium locally, and the remote WDA link is <a href="http://192.168.1.1:12345" target="_blank" rel="noreferrer">http://192.168.1.1:12345</a>, then you can:</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">DesiredCapabilitiesdesiredCapabilities </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">DesiredCapabilities</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">desiredCapabilities</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setCapability</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">MobileCapabilityType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PLATFORM_NAME</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Platform</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">IOS</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">desiredCapabilities</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setCapability</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">MobileCapabilityType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">AUTOMATION_NAME</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> AutomationName</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">IOS_XCUI_TEST</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">desiredCapabilities</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setCapability</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">MobileCapabilityType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NEW_COMMAND_TIMEOUT</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3600</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">desiredCapabilities</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setCapability</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">IOSMobileCapabilityType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">COMMAND_TIMEOUTS</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3600</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">desiredCapabilities</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setCapability</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">MobileCapabilityType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NO_RESET</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Fill in the device name, you can also get it through sib</span></span>
<span class="line"><span style="color:#A6ACCD;">desiredCapabilities</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setCapability</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">MobileCapabilityType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DEVICE_NAME</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">My Phone</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">desiredCapabilities</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setCapability</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">MobileCapabilityType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">UDID</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> udId</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">desiredCapabilities</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setCapability</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wdaConnectionTimeout</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60000</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">desiredCapabilities</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setCapability</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">IOSMobileCapabilityType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">WEB_DRIVER_AGENT_URL</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://192.168.1.1:12345</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">desiredCapabilities</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setCapability</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">useXctestrunFile</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false);</span></span>
<span class="line"><span style="color:#A6ACCD;">desiredCapabilities</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setCapability</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">IOSMobileCapabilityType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">SHOW_IOS_LOG</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false);</span></span>
<span class="line"><span style="color:#A6ACCD;">desiredCapabilities</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setCapability</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">IOSMobileCapabilityType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">SHOW_XCODE_LOG</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false);</span></span>
<span class="line"><span style="color:#A6ACCD;">desiredCapabilities</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setCapability</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">skipLogCapture</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true);</span></span>
<span class="line"><span style="color:#A6ACCD;">desiredCapabilities</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setCapability</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">IOSMobileCapabilityType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">USE_PREBUILT_WDA</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">IOSDriver</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://localhost:4723/wd/hub</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> desiredCapabilities</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><p>Finish! The device has been connected from the Agent to your local Appium</p><h3 id="remote-sib" tabindex="-1">remote sib <a class="header-anchor" href="#remote-sib" aria-hidden="true">#</a></h3><p>You can use sib to control the current device on another computer.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">connect</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--host</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">you</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">share</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">device</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">share</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">por</span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>After the connection is successful, you can remotely initiate the sib command operation, such as:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">perfmon</span></span>
<span class="line"></span></code></pre></div>`,64),p=[t];function i(r,c,d,h,y,D){return s(),a("div",null,p)}const A=e(l,[["render",i]]);export{C as __pageData,A as default};