import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,f as l,o}from"./app-PJoSawsW.js";const r={};function s(i,e){return o(),n("div",null,e[0]||(e[0]=[l('<h1 id="vue-js-框架知识点笔记" tabindex="-1"><a class="header-anchor" href="#vue-js-框架知识点笔记"><span>Vue.js 框架知识点笔记</span></a></h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>Vue.js 是一个用于构建用户界面的开源 JavaScript 框架，由 Evan You 开发和维护。它旨在通过提供简单的 API 和高度的灵活性，帮助开发者更高效地构建动态、响应式的 Web 应用。Vue.js 结合了 Angular 和 React 的优点，既易于上手，又具有强大的功能。</p><h2 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念"><span>核心概念</span></a></h2><h3 id="_1-实例-instance" tabindex="-1"><a class="header-anchor" href="#_1-实例-instance"><span>1. 实例（Instance）</span></a></h3><ul><li><p><strong>定义</strong><br> Vue 实例是 Vue.js 应用的基本构建块，每个 Vue 应用都是通过创建一个 Vue 实例开始的。Vue 实例负责管理应用的逻辑和数据，并控制视图的渲染。</p></li><li><p><strong>特点</strong></p><ul><li><strong>初始化</strong>：通过 <code>new Vue()</code> 创建实例，并传入配置对象。</li><li><strong>生命周期</strong>：Vue 实例经历一系列生命周期钩子，包括创建、挂载、更新和销毁。</li></ul></li></ul><h3 id="_2-组件-components" tabindex="-1"><a class="header-anchor" href="#_2-组件-components"><span>2. 组件（Components）</span></a></h3><ul><li><p><strong>定义</strong><br> 组件是 Vue.js 的核心构建块，用于创建封装的、可重用的 UI 元素。组件包含模板、脚本和样式，可以嵌套组合来构建复杂的界面。</p></li><li><p><strong>特点</strong></p><ul><li><strong>封装性</strong>：每个组件封装了自己的模板、逻辑和样式。</li><li><strong>复用性</strong>：组件可以在应用中多次使用，促进代码的复用和模块化。</li></ul></li></ul><h3 id="_3-模板-templates" tabindex="-1"><a class="header-anchor" href="#_3-模板-templates"><span>3. 模板（Templates）</span></a></h3><ul><li><p><strong>定义</strong><br> Vue 使用模板语法来声明式地绑定 DOM 元素和 Vue 实例的数据。模板由 HTML 和 Vue 的特定语法（如指令）组成，用于定义组件的视图。</p></li><li><p><strong>特点</strong></p><ul><li><strong>插值</strong>：使用 <code>{{ }}</code> 表达式绑定数据到 DOM 元素。</li><li><strong>指令</strong>：使用 <code>v-</code> 前缀的指令（如 <code>v-if</code>, <code>v-for</code>）来控制 DOM 元素的行为和渲染。</li></ul></li></ul><h3 id="_4-数据绑定-data-binding" tabindex="-1"><a class="header-anchor" href="#_4-数据绑定-data-binding"><span>4. 数据绑定（Data Binding）</span></a></h3><ul><li><p><strong>定义</strong><br> 数据绑定是 Vue.js 的核心特性之一，通过绑定数据到视图，自动更新 UI。当数据变化时，视图会自动响应更新。</p></li><li><p><strong>特点</strong></p><ul><li><strong>双向绑定</strong>：通过 <code>v-model</code> 实现输入控件与数据之间的双向绑定。</li><li><strong>响应式</strong>：数据的变化会自动触发视图的更新。</li></ul></li></ul><h3 id="_5-生命周期钩子-lifecycle-hooks" tabindex="-1"><a class="header-anchor" href="#_5-生命周期钩子-lifecycle-hooks"><span>5. 生命周期钩子（Lifecycle Hooks）</span></a></h3><ul><li><p><strong>定义</strong><br> 生命周期钩子是 Vue 组件在其生命周期内特定阶段触发的方法，允许开发者在组件创建、更新和销毁时执行自定义逻辑。</p></li><li><p><strong>特点</strong></p><ul><li><strong>创建阶段</strong>：<code>created</code>，<code>beforeMount</code>。</li><li><strong>更新阶段</strong>：<code>beforeUpdate</code>，<code>updated</code>。</li><li><strong>销毁阶段</strong>：<code>beforeDestroy</code>，<code>destroyed</code>。</li></ul></li></ul><h3 id="_6-计算属性-computed-properties" tabindex="-1"><a class="header-anchor" href="#_6-计算属性-computed-properties"><span>6. 计算属性（Computed Properties）</span></a></h3><ul><li><p><strong>定义</strong><br> 计算属性用于基于其他数据计算和返回一个值，具有缓存功能。计算属性的值会在其依赖的数据发生变化时自动更新。</p></li><li><p><strong>特点</strong></p><ul><li><strong>缓存</strong>：计算属性的值会被缓存，只有在相关依赖发生变化时才会重新计算。</li><li><strong>声明式</strong>：使用计算属性可以将复杂的逻辑从模板中提取出来。</li></ul></li></ul><h3 id="_7-方法-methods" tabindex="-1"><a class="header-anchor" href="#_7-方法-methods"><span>7. 方法（Methods）</span></a></h3><ul><li><p><strong>定义</strong><br> 方法是 Vue 组件中的函数，用于处理事件和执行逻辑操作。与计算属性不同，方法不会被缓存，每次调用都会执行。</p></li><li><p><strong>特点</strong></p><ul><li><strong>事件处理</strong>：用于响应用户交互，如点击按钮或提交表单。</li><li><strong>非缓存</strong>：每次调用方法时，都会执行函数体。</li></ul></li></ul><h3 id="_8-组件间通信-component-communication" tabindex="-1"><a class="header-anchor" href="#_8-组件间通信-component-communication"><span>8. 组件间通信（Component Communication）</span></a></h3><ul><li><p><strong>定义</strong><br> Vue 提供了多种方式来实现组件间的通信，包括父子组件通信和兄弟组件通信。</p></li><li><p><strong>特点</strong></p><ul><li><strong>父子组件</strong>：通过 props 传递数据，从子组件通过事件向父组件传递数据。</li><li><strong>事件总线</strong>：使用事件总线实现非父子组件间的通信（不推荐，用 Vuex 更为规范）。</li></ul></li></ul><h3 id="_9-插槽-slots" tabindex="-1"><a class="header-anchor" href="#_9-插槽-slots"><span>9. 插槽（Slots）</span></a></h3><ul><li><p><strong>定义</strong><br> 插槽允许开发者在父组件中插入子组件的内容，用于创建灵活的、可插拔的组件结构。</p></li><li><p><strong>特点</strong></p><ul><li><strong>默认插槽</strong>：用于插入默认内容。</li><li><strong>具名插槽</strong>：可以定义多个具名插槽，以支持更复杂的布局需求。</li></ul></li></ul><h3 id="_10-vuex" tabindex="-1"><a class="header-anchor" href="#_10-vuex"><span>10. Vuex</span></a></h3><ul><li><p><strong>定义</strong><br> Vuex 是 Vue.js 的状态管理库，用于集中管理应用中的所有状态，提供了一种清晰的方式来管理和维护状态。</p></li><li><p><strong>特点</strong></p><ul><li><strong>单一数据源</strong>：应用的状态集中存储在 Vuex 中，所有组件共享同一数据源。</li><li><strong>状态变更</strong>：状态的变更通过提交 mutations 实现，确保状态变更是可追踪的。</li></ul></li></ul><h3 id="_11-路由-vue-router" tabindex="-1"><a class="header-anchor" href="#_11-路由-vue-router"><span>11. 路由（Vue Router）</span></a></h3><ul><li><p><strong>定义</strong><br> Vue Router 是官方提供的路由管理库，用于管理单页应用中的路由和导航。</p></li><li><p><strong>特点</strong></p><ul><li><strong>声明式路由</strong>：通过配置路由表来定义路径与组件的映射关系。</li><li><strong>嵌套路由</strong>：支持嵌套和动态路由，灵活构建复杂的导航结构。</li></ul></li></ul><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2><ul><li><p><strong>创建新 Vue 应用</strong><br><code>npm install -g @vue/cli</code><br><code>vue create &lt;应用名&gt;</code><br> 用于初始化一个新的 Vue 项目。</p></li><li><p><strong>启动开发服务器</strong><br><code>npm run serve</code><br> 启动本地开发服务器，预览应用。</p></li><li><p><strong>构建生产版本</strong><br><code>npm run build</code><br> 构建优化过的生产版本，准备部署。</p></li><li><p><strong>添加新依赖</strong><br><code>npm install &lt;包名&gt;</code><br> 安装新的 npm 包依赖。</p></li><li><p><strong>移除依赖</strong><br><code>npm uninstall &lt;包名&gt;</code><br> 移除不再需要的 npm 包依赖。</p></li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><ul><li><a href="https://vuejs.org/v2/guide/" target="_blank" rel="noopener noreferrer">Vue.js 官方文档</a></li><li><a href="https://vuex.vuejs.org/" target="_blank" rel="noopener noreferrer">Vuex 官方文档</a></li><li><a href="https://router.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue Router 官方文档</a></li></ul>',30)]))}const p=t(r,[["render",s],["__file","Vue.html.vue"]]),c=JSON.parse('{"path":"/notes/fontend/Vue.html","title":"Vue","lang":"zh-CN","frontmatter":{"title":"Vue","icon":"pen-to-square","date":"2024-08-03T00:00:00.000Z","category":["前端"],"tag":["框架"],"description":"Vue.js 框架知识点笔记 概述 Vue.js 是一个用于构建用户界面的开源 JavaScript 框架，由 Evan You 开发和维护。它旨在通过提供简单的 API 和高度的灵活性，帮助开发者更高效地构建动态、响应式的 Web 应用。Vue.js 结合了 Angular 和 React 的优点，既易于上手，又具有强大的功能。 核心概念 1. 实例...","head":[["meta",{"property":"og:url","content":"https://misyakuji.github.io/my-docs/notes/fontend/Vue.html"}],["meta",{"property":"og:site_name","content":"梦夕笔谈"}],["meta",{"property":"og:title","content":"Vue"}],["meta",{"property":"og:description","content":"Vue.js 框架知识点笔记 概述 Vue.js 是一个用于构建用户界面的开源 JavaScript 框架，由 Evan You 开发和维护。它旨在通过提供简单的 API 和高度的灵活性，帮助开发者更高效地构建动态、响应式的 Web 应用。Vue.js 结合了 Angular 和 React 的优点，既易于上手，又具有强大的功能。 核心概念 1. 实例..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-30T02:25:59.000Z"}],["meta",{"property":"article:author","content":"Misyakuji"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:published_time","content":"2024-08-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-30T02:25:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-30T02:25:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Misyakuji\\",\\"url\\":\\"https://xige.rainrem.top\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"核心概念","slug":"核心概念","link":"#核心概念","children":[{"level":3,"title":"1. 实例（Instance）","slug":"_1-实例-instance","link":"#_1-实例-instance","children":[]},{"level":3,"title":"2. 组件（Components）","slug":"_2-组件-components","link":"#_2-组件-components","children":[]},{"level":3,"title":"3. 模板（Templates）","slug":"_3-模板-templates","link":"#_3-模板-templates","children":[]},{"level":3,"title":"4. 数据绑定（Data Binding）","slug":"_4-数据绑定-data-binding","link":"#_4-数据绑定-data-binding","children":[]},{"level":3,"title":"5. 生命周期钩子（Lifecycle Hooks）","slug":"_5-生命周期钩子-lifecycle-hooks","link":"#_5-生命周期钩子-lifecycle-hooks","children":[]},{"level":3,"title":"6. 计算属性（Computed Properties）","slug":"_6-计算属性-computed-properties","link":"#_6-计算属性-computed-properties","children":[]},{"level":3,"title":"7. 方法（Methods）","slug":"_7-方法-methods","link":"#_7-方法-methods","children":[]},{"level":3,"title":"8. 组件间通信（Component Communication）","slug":"_8-组件间通信-component-communication","link":"#_8-组件间通信-component-communication","children":[]},{"level":3,"title":"9. 插槽（Slots）","slug":"_9-插槽-slots","link":"#_9-插槽-slots","children":[]},{"level":3,"title":"10. Vuex","slug":"_10-vuex","link":"#_10-vuex","children":[]},{"level":3,"title":"11. 路由（Vue Router）","slug":"_11-路由-vue-router","link":"#_11-路由-vue-router","children":[]}]},{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1724913229000,"updatedTime":1724984759000,"contributors":[{"name":"Misyakuji","email":"2810013347@qq.com","commits":3}]},"readingTime":{"minutes":4.4,"words":1319},"filePathRelative":"notes/fontend/Vue.md","localizedDate":"2024年8月3日","excerpt":"\\n<h2>概述</h2>\\n<p>Vue.js 是一个用于构建用户界面的开源 JavaScript 框架，由 Evan You 开发和维护。它旨在通过提供简单的 API 和高度的灵活性，帮助开发者更高效地构建动态、响应式的 Web 应用。Vue.js 结合了 Angular 和 React 的优点，既易于上手，又具有强大的功能。</p>\\n<h2>核心概念</h2>\\n<h3>1. 实例（Instance）</h3>\\n<ul>\\n<li>\\n<p><strong>定义</strong><br>\\nVue 实例是 Vue.js 应用的基本构建块，每个 Vue 应用都是通过创建一个 Vue 实例开始的。Vue 实例负责管理应用的逻辑和数据，并控制视图的渲染。</p>\\n</li>\\n<li>\\n<p><strong>特点</strong></p>\\n<ul>\\n<li><strong>初始化</strong>：通过 <code>new Vue()</code> 创建实例，并传入配置对象。</li>\\n<li><strong>生命周期</strong>：Vue 实例经历一系列生命周期钩子，包括创建、挂载、更新和销毁。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{p as comp,c as data};
