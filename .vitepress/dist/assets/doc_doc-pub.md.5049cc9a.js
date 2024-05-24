import{_ as l,o as i,c as e,a}from"./app.57a3dbd1.js";const f=JSON.parse('{"title":"公共步骤","description":"","frontmatter":{"contributors":["ZhouYixun","小蓝枣"]},"headers":[{"level":2,"title":"添加公共步骤","slug":"添加公共步骤","link":"#添加公共步骤","children":[]},{"level":2,"title":"步骤关联的逻辑处理","slug":"步骤关联的逻辑处理","link":"#步骤关联的逻辑处理","children":[]},{"level":2,"title":"步骤关联的异常处理","slug":"步骤关联的异常处理","link":"#步骤关联的异常处理","children":[]},{"level":2,"title":"查看公共步骤详情","slug":"查看公共步骤详情","link":"#查看公共步骤详情","children":[]},{"level":2,"title":"编辑公共步骤","slug":"编辑公共步骤","link":"#编辑公共步骤","children":[]},{"level":2,"title":"删除公共步骤","slug":"删除公共步骤","link":"#删除公共步骤","children":[]}],"relativePath":"doc/doc-pub.md","lastUpdated":1716537034000}'),r={name:"doc/doc-pub.md"},t=a('<h1 id="公共步骤" tabindex="-1">公共步骤 <a class="header-anchor" href="#公共步骤" aria-hidden="true">#</a></h1><p>对项目进行公共步骤管理。</p><h2 id="添加公共步骤" tabindex="-1">添加公共步骤 <a class="header-anchor" href="#添加公共步骤" aria-hidden="true">#</a></h2><ol><li>前往首页，点击目标项目。</li><li>点击【测试数据管理】选项。</li><li>点击【公共步骤】选项。</li><li>点击【添加公共步骤】按钮。</li><li>输入公共步骤名称，选择平台。</li><li>点击【保存】按钮保存公共步骤基本信息。</li><li>点击【步骤列表】页签。</li><li>点击【添加步骤】按钮。</li><li>选择要添加的步骤类型以及相关信息。</li><li>点击【提交】按钮完成步骤添加。</li><li>在步骤列表里点击“加号”按钮添加已选步骤。</li><li>再次点击【保存】按钮。</li><li>公共步骤添加完毕！</li></ol><h2 id="步骤关联的逻辑处理" tabindex="-1">步骤关联的逻辑处理 <a class="header-anchor" href="#步骤关联的逻辑处理" aria-hidden="true">#</a></h2><p>意为该测试步骤关联的逻辑处理，包含以下4种逻辑类型。</p><ul><li><p>if：该步骤无异常时，会执行子步骤；</p></li><li><p>eles if：如果上一个if条件步骤有异常，则进入该逻辑判断，无异常时会执行子步骤；</p></li><li><p>else：如果以上条件全失败，则执行子步骤；</p></li><li><p>while：如果条件无异常，则重复执行子步骤。</p></li></ul><h2 id="步骤关联的异常处理" tabindex="-1">步骤关联的异常处理 <a class="header-anchor" href="#步骤关联的异常处理" aria-hidden="true">#</a></h2><p>意为该测试步骤出现异常时的处理方案，包含以下3种异常类型。</p><ul><li><p>忽略：忽略异常并继续执行（逻辑处理时不抛出异常）；</p></li><li><p>告警：标记警告并获取异常截图和异常堆栈，然后继续执行（逻辑处理时不抛出异常）；</p></li><li><p>中断：标记失败并获取异常截图、异常堆栈和测试录像，然后中断执行（逻辑处理时抛出异常）。</p></li></ul><h2 id="查看公共步骤详情" tabindex="-1">查看公共步骤详情 <a class="header-anchor" href="#查看公共步骤详情" aria-hidden="true">#</a></h2><ol><li>前往首页，点击目标项目。</li><li>点击【测试数据管理】选项。</li><li>点击【公共步骤】选项。</li><li>点击目标步骤的【查看步骤】按钮。</li><li>即可查看公共步骤详情。</li></ol><h2 id="编辑公共步骤" tabindex="-1">编辑公共步骤 <a class="header-anchor" href="#编辑公共步骤" aria-hidden="true">#</a></h2><ol><li>前往首页，点击目标项目。</li><li>点击【测试数据管理】选项。</li><li>点击【公共步骤】选项。</li><li>点击目标步骤的【编辑】按钮。</li><li>编辑你需要更改的信息。</li><li>点击【保存】按钮。</li><li>公共步骤编辑完毕！</li></ol><h2 id="删除公共步骤" tabindex="-1">删除公共步骤 <a class="header-anchor" href="#删除公共步骤" aria-hidden="true">#</a></h2><ol><li>前往首页，点击目标项目。</li><li>点击【测试数据管理】选项。</li><li>点击【公共步骤】选项。</li><li>点击目标步骤的【删除】按钮。</li><li>再次点击【确定】按钮。</li><li>公共步骤删除完毕！</li></ol>',16),d=[t];function h(n,c,o,s,p,u){return i(),e("div",null,d)}const b=l(r,[["render",h]]);export{f as __pageData,b as default};