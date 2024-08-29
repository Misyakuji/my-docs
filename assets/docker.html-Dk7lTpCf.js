import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as s,f as a}from"./app-D2n9Qu49.js";const t={},l=a('<h3 id="docker列出所有容器" tabindex="-1"><a class="header-anchor" href="#docker列出所有容器"><span>Docker列出所有容器</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -a</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="docker列出所有镜像" tabindex="-1"><a class="header-anchor" href="#docker列出所有镜像"><span>Docker列出所有镜像</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> images</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="docker删除模糊匹配的容器" tabindex="-1"><a class="header-anchor" href="#docker删除模糊匹配的容器"><span>Docker删除模糊匹配的容器</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --filter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;name=jasper&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -q</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="docker删除模糊匹配的镜像" tabindex="-1"><a class="header-anchor" href="#docker删除模糊匹配的镜像"><span>Docker删除模糊匹配的镜像</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rmi</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> images</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --filter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;reference=*jasper*&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -q</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="docker删除所有none标签的镜像" tabindex="-1"><a class="header-anchor" href="#docker删除所有none标签的镜像"><span>Docker删除所有none标签的镜像</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rmi</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> images</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;dangling=true&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -q</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',10),r=[l];function n(h,k){return s(),e("div",null,r)}const c=i(t,[["render",n],["__file","docker.html.vue"]]),p=JSON.parse('{"path":"/notes/docker.html","title":"Docker常用操作","lang":"zh-CN","frontmatter":{"title":"Docker常用操作","icon":"pen-to-square","order":10,"date":"2024-08-29T00:00:00.000Z","category":["容器化"],"tag":["部署"],"description":"Docker列出所有容器 Docker列出所有镜像 Docker删除模糊匹配的容器 Docker删除模糊匹配的镜像 Docker删除所有none标签的镜像","head":[["meta",{"property":"og:url","content":"https://misyakuji.github.io/my-docs/notes/docker.html"}],["meta",{"property":"og:site_name","content":"梦夕笔谈"}],["meta",{"property":"og:title","content":"Docker常用操作"}],["meta",{"property":"og:description","content":"Docker列出所有容器 Docker列出所有镜像 Docker删除模糊匹配的容器 Docker删除模糊匹配的镜像 Docker删除所有none标签的镜像"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-29T06:33:49.000Z"}],["meta",{"property":"article:author","content":"Misyakuji"}],["meta",{"property":"article:tag","content":"部署"}],["meta",{"property":"article:published_time","content":"2024-08-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-29T06:33:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker常用操作\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-29T06:33:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Misyakuji\\",\\"url\\":\\"https://xige.rainrem.top\\"}]}"]]},"headers":[{"level":3,"title":"Docker列出所有容器","slug":"docker列出所有容器","link":"#docker列出所有容器","children":[]},{"level":3,"title":"Docker列出所有镜像","slug":"docker列出所有镜像","link":"#docker列出所有镜像","children":[]},{"level":3,"title":"Docker删除模糊匹配的容器","slug":"docker删除模糊匹配的容器","link":"#docker删除模糊匹配的容器","children":[]},{"level":3,"title":"Docker删除模糊匹配的镜像","slug":"docker删除模糊匹配的镜像","link":"#docker删除模糊匹配的镜像","children":[]},{"level":3,"title":"Docker删除所有none标签的镜像","slug":"docker删除所有none标签的镜像","link":"#docker删除所有none标签的镜像","children":[]}],"git":{"createdTime":1724913229000,"updatedTime":1724913229000,"contributors":[{"name":"Misyakuji","email":"2810013347@qq.com","commits":1}]},"readingTime":{"minutes":0.35,"words":106},"filePathRelative":"notes/docker.md","localizedDate":"2024年8月29日","excerpt":"<h3>Docker列出所有容器</h3>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">docker</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> ps</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -a</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{c as comp,p as data};
