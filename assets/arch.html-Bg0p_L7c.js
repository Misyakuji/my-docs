import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,f as o,o as l}from"./app-CwO-OQYn.js";const n={};function s(i,t){return l(),e("div",null,t[0]||(t[0]=[o('<h1 id="arch-linux-常用命令" tabindex="-1"><a class="header-anchor" href="#arch-linux-常用命令"><span>Arch Linux 常用命令</span></a></h1><h2 id="系统信息" tabindex="-1"><a class="header-anchor" href="#系统信息"><span>系统信息</span></a></h2><ul><li><p><strong>查看系统信息</strong><br><code>uname -a</code><br> 显示系统内核和版本信息。</p></li><li><p><strong>查看硬件信息</strong><br><code>lshw</code><br> 列出硬件详细信息。</p></li><li><p><strong>查看 CPU 信息</strong><br><code>lscpu</code><br> 显示 CPU 的架构和其他信息。</p></li><li><p><strong>查看内存使用情况</strong><br><code>free -h</code><br> 显示内存和交换区的使用情况。</p></li><li><p><strong>查看磁盘空间</strong><br><code>df -h</code><br> 显示磁盘使用情况。</p></li><li><p><strong>查看磁盘 I/O</strong><br><code>iostat</code><br> 显示 I/O 性能统计。</p></li></ul><h2 id="软件包管理" tabindex="-1"><a class="header-anchor" href="#软件包管理"><span>软件包管理</span></a></h2><ul><li><p><strong>更新系统</strong><br><code>sudo pacman -Syu</code><br> 更新所有已安装的软件包到最新版本。</p></li><li><p><strong>安装软件包</strong><br><code>sudo pacman -S &lt;包名&gt;</code><br> 安装指定的软件包。</p></li><li><p><strong>卸载软件包</strong><br><code>sudo pacman -R &lt;包名&gt;</code><br> 卸载指定的软件包。</p></li><li><p><strong>搜索软件包</strong><br><code>pacman -Ss &lt;关键字&gt;</code><br> 搜索包含关键字的软件包。</p></li><li><p><strong>查看软件包信息</strong><br><code>pacman -Qi &lt;包名&gt;</code><br> 显示指定软件包的信息。</p></li><li><p><strong>清理缓存</strong><br><code>sudo pacman -Sc</code><br> 删除不再使用的包缓存。</p></li></ul><h2 id="文件和目录操作" tabindex="-1"><a class="header-anchor" href="#文件和目录操作"><span>文件和目录操作</span></a></h2><ul><li><p><strong>查看文件内容</strong><br><code>cat &lt;文件名&gt;</code><br> 显示文件内容。</p></li><li><p><strong>分页查看文件内容</strong><br><code>less &lt;文件名&gt;</code><br> 分页显示文件内容。</p></li><li><p><strong>列出目录内容</strong><br><code>ls -la</code><br> 列出详细的目录内容，包括隐藏文件。</p></li><li><p><strong>复制文件或目录</strong><br><code>cp &lt;源文件&gt; &lt;目标文件&gt;</code><br> 复制文件或目录。</p></li><li><p><strong>移动或重命名文件或目录</strong><br><code>mv &lt;源文件&gt; &lt;目标文件&gt;</code><br> 移动或重命名文件或目录。</p></li><li><p><strong>删除文件或目录</strong><br><code>rm &lt;文件名&gt;</code><br> 删除文件。<br><code>rm -r &lt;目录名&gt;</code><br> 递归删除目录及其内容。</p></li></ul><h2 id="权限管理" tabindex="-1"><a class="header-anchor" href="#权限管理"><span>权限管理</span></a></h2><ul><li><p><strong>修改文件权限</strong><br><code>chmod &lt;权限&gt; &lt;文件名&gt;</code><br> 修改文件权限。例如：<code>chmod 755 &lt;文件名&gt;</code>。</p></li><li><p><strong>修改文件属主和属组</strong><br><code>chown &lt;用户&gt;:&lt;组&gt; &lt;文件名&gt;</code><br> 更改文件的属主和属组。</p></li></ul><h2 id="网络管理" tabindex="-1"><a class="header-anchor" href="#网络管理"><span>网络管理</span></a></h2><ul><li><p><strong>查看网络接口状态</strong><br><code>ip addr</code><br> 显示网络接口的详细信息。</p></li><li><p><strong>测试网络连接</strong><br><code>ping &lt;地址&gt;</code><br> 测试与指定地址的连接。</p></li><li><p><strong>查看网络连接</strong><br><code>netstat -tuln</code><br> 显示网络连接和监听的端口。</p></li></ul><h2 id="服务管理" tabindex="-1"><a class="header-anchor" href="#服务管理"><span>服务管理</span></a></h2><ul><li><p><strong>启动服务</strong><br><code>sudo systemctl start &lt;服务名&gt;</code><br> 启动指定的服务。</p></li><li><p><strong>停止服务</strong><br><code>sudo systemctl stop &lt;服务名&gt;</code><br> 停止指定的服务。</p></li><li><p><strong>重启服务</strong><br><code>sudo systemctl restart &lt;服务名&gt;</code><br> 重启指定的服务。</p></li><li><p><strong>查看服务状态</strong><br><code>systemctl status &lt;服务名&gt;</code><br> 查看指定服务的状态。</p></li><li><p><strong>启用服务开机自启动</strong><br><code>sudo systemctl enable &lt;服务名&gt;</code><br> 启用服务开机自启动。</p></li><li><p><strong>禁用服务开机自启动</strong><br><code>sudo systemctl disable &lt;服务名&gt;</code><br> 禁用服务开机自启动。</p></li></ul><h2 id="日志管理" tabindex="-1"><a class="header-anchor" href="#日志管理"><span>日志管理</span></a></h2><ul><li><p><strong>查看系统日志</strong><br><code>journalctl</code><br> 显示系统日志。</p></li><li><p><strong>查看最新日志条目</strong><br><code>journalctl -xe</code><br> 显示最新的日志条目和错误信息。</p></li></ul><h2 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理"><span>用户管理</span></a></h2><ul><li><p><strong>添加新用户</strong><br><code>sudo useradd &lt;用户名&gt;</code><br> 添加一个新用户。</p></li><li><p><strong>删除用户</strong><br><code>sudo userdel &lt;用户名&gt;</code><br> 删除指定用户。</p></li><li><p><strong>修改用户密码</strong><br><code>sudo passwd &lt;用户名&gt;</code><br> 修改用户的密码。</p></li></ul><h2 id="其他常用命令" tabindex="-1"><a class="header-anchor" href="#其他常用命令"><span>其他常用命令</span></a></h2><ul><li><p><strong>查找文件</strong><br><code>find &lt;目录&gt; -name &lt;文件名&gt;</code><br> 在指定目录下查找文件。</p></li><li><p><strong>搜索内容</strong><br><code>grep &lt;模式&gt; &lt;文件名&gt;</code><br> 在文件中搜索匹配的内容。</p></li><li><p><strong>显示磁盘使用情况</strong><br><code>du -sh &lt;目录名&gt;</code><br> 显示指定目录的磁盘使用情况。</p></li><li><p><strong>显示系统负载</strong><br><code>top</code><br> 实时显示系统负载和进程信息。</p></li></ul><h1 id="开发中常用的命令笔记" tabindex="-1"><a class="header-anchor" href="#开发中常用的命令笔记"><span>开发中常用的命令笔记</span></a></h1><h2 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>Git</span></a></h2><ul><li><p><strong>克隆仓库</strong><br><code>git clone &lt;仓库地址&gt;</code><br> 克隆一个 Git 仓库到本地。</p></li><li><p><strong>查看状态</strong><br><code>git status</code><br> 查看当前工作目录和暂存区的状态。</p></li><li><p><strong>添加更改到暂存区</strong><br><code>git add &lt;文件名&gt;</code><br> 将文件更改添加到暂存区。</p></li><li><p><strong>提交更改</strong><br><code>git commit -m &quot;&lt;提交信息&gt;&quot;</code><br> 提交暂存区的更改。</p></li><li><p><strong>查看提交历史</strong><br><code>git log</code><br> 查看提交历史记录。</p></li><li><p><strong>推送更改到远程仓库</strong><br><code>git push</code><br> 将本地的提交推送到远程仓库。</p></li><li><p><strong>拉取远程仓库的更改</strong><br><code>git pull</code><br> 从远程仓库拉取并合并更改。</p></li><li><p><strong>创建新分支</strong><br><code>git branch &lt;分支名&gt;</code><br> 创建一个新分支。</p></li><li><p><strong>切换分支</strong><br><code>git checkout &lt;分支名&gt;</code><br> 切换到指定的分支。</p></li><li><p><strong>合并分支</strong><br><code>git merge &lt;分支名&gt;</code><br> 将指定分支合并到当前分支。</p></li></ul><h2 id="编程语言" tabindex="-1"><a class="header-anchor" href="#编程语言"><span>编程语言</span></a></h2><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python"><span>Python</span></a></h3><ul><li><p><strong>执行 Python 脚本</strong><br><code>python &lt;脚本名&gt;.py</code><br> 运行 Python 脚本。</p></li><li><p><strong>安装 Python 包</strong><br><code>pip install &lt;包名&gt;</code><br> 使用 pip 安装 Python 包。</p></li><li><p><strong>列出已安装的 Python 包</strong><br><code>pip list</code><br> 显示已安装的 Python 包及其版本。</p></li></ul><h3 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js"><span>Node.js</span></a></h3><ul><li><p><strong>执行 Node.js 脚本</strong><br><code>node &lt;脚本名&gt;.js</code><br> 运行 Node.js 脚本。</p></li><li><p><strong>安装 Node.js 包</strong><br><code>npm install &lt;包名&gt;</code><br> 使用 npm 安装 Node.js 包。</p></li><li><p><strong>列出已安装的 Node.js 包</strong><br><code>npm list</code><br> 显示已安装的 Node.js 包及其版本。</p></li></ul><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java"><span>Java</span></a></h3><ul><li><p><strong>编译 Java 程序</strong><br><code>javac &lt;文件名&gt;.java</code><br> 编译 Java 源文件。</p></li><li><p><strong>运行 Java 程序</strong><br><code>java &lt;类名&gt;</code><br> 运行编译后的 Java 程序。</p></li></ul><h2 id="容器管理-docker" tabindex="-1"><a class="header-anchor" href="#容器管理-docker"><span>容器管理（Docker）</span></a></h2><ul><li><p><strong>查看 Docker 镜像</strong><br><code>docker images</code><br> 列出所有 Docker 镜像。</p></li><li><p><strong>运行 Docker 容器</strong><br><code>docker run &lt;镜像名&gt;</code><br> 运行一个新的 Docker 容器。</p></li><li><p><strong>列出运行中的容器</strong><br><code>docker ps</code><br> 列出当前运行中的 Docker 容器。</p></li><li><p><strong>停止 Docker 容器</strong><br><code>docker stop &lt;容器ID&gt;</code><br> 停止指定的 Docker 容器。</p></li><li><p><strong>删除 Docker 镜像</strong><br><code>docker rmi &lt;镜像名&gt;</code><br> 删除指定的 Docker 镜像。</p></li></ul><h2 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库"><span>数据库</span></a></h2><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL</span></a></h3><ul><li><p><strong>登录 MySQL</strong><br><code>mysql -u &lt;用户名&gt; -p</code><br> 以指定用户登录 MySQL 数据库。</p></li><li><p><strong>显示数据库列表</strong><br><code>SHOW DATABASES;</code><br> 列出所有数据库。</p></li><li><p><strong>选择数据库</strong><br><code>USE &lt;数据库名&gt;;</code><br> 选择当前要操作的数据库。</p></li><li><p><strong>查看表结构</strong><br><code>DESCRIBE &lt;表名&gt;;</code><br> 显示表的结构。</p></li></ul><h3 id="postgresql" tabindex="-1"><a class="header-anchor" href="#postgresql"><span>PostgreSQL</span></a></h3><ul><li><p><strong>登录 PostgreSQL</strong><br><code>psql -U &lt;用户名&gt; -d &lt;数据库名&gt;</code><br> 以指定用户登录 PostgreSQL 数据库。</p></li><li><p><strong>列出数据库</strong><br><code>\\l</code><br> 列出所有数据库。</p></li><li><p><strong>切换数据库</strong><br><code>\\c &lt;数据库名&gt;</code><br> 切换到指定的数据库。</p></li><li><p><strong>查看表结构</strong><br><code>\\d &lt;表名&gt;</code><br> 显示表的结构。</p></li></ul><h2 id="其他开发工具" tabindex="-1"><a class="header-anchor" href="#其他开发工具"><span>其他开发工具</span></a></h2><ul><li><p><strong>查看系统环境变量</strong><br><code>printenv</code><br> 显示所有环境变量。</p></li><li><p><strong>查找命令所在路径</strong><br><code>which &lt;命令名&gt;</code><br> 显示命令的路径。</p></li><li><p><strong>创建和激活虚拟环境（Python）</strong><br><code>python -m venv &lt;环境名&gt;</code><br> 创建虚拟环境。<br><code>source &lt;环境名&gt;/bin/activate</code><br> 激活虚拟环境。</p></li><li><p><strong>生成 SSH 密钥对</strong><br><code>ssh-keygen</code><br> 生成新的 SSH 密钥对。</p></li></ul>',38)]))}const a=r(n,[["render",s],["__file","arch.html.vue"]]),p=JSON.parse('{"path":"/notes/Linux/arch.html","title":"Arch系","lang":"zh-CN","frontmatter":{"title":"Arch系","icon":"fab fa-markdown","order":2,"category":["Linux"],"tag":["Markdown"],"description":"Arch Linux 常用命令 系统信息 查看系统信息 uname -a 显示系统内核和版本信息。 查看硬件信息 lshw 列出硬件详细信息。 查看 CPU 信息 lscpu 显示 CPU 的架构和其他信息。 查看内存使用情况 free -h 显示内存和交换区的使用情况。 查看磁盘空间 df -h 显示磁盘使用情况。 查看磁盘 I/O iostat 显...","head":[["meta",{"property":"og:url","content":"https://misyakuji.github.io/my-docs/notes/Linux/arch.html"}],["meta",{"property":"og:site_name","content":"梦夕笔谈"}],["meta",{"property":"og:title","content":"Arch系"}],["meta",{"property":"og:description","content":"Arch Linux 常用命令 系统信息 查看系统信息 uname -a 显示系统内核和版本信息。 查看硬件信息 lshw 列出硬件详细信息。 查看 CPU 信息 lscpu 显示 CPU 的架构和其他信息。 查看内存使用情况 free -h 显示内存和交换区的使用情况。 查看磁盘空间 df -h 显示磁盘使用情况。 查看磁盘 I/O iostat 显..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-30T02:25:59.000Z"}],["meta",{"property":"article:author","content":"Misyakuji"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:modified_time","content":"2024-08-30T02:25:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Arch系\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-30T02:25:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Misyakuji\\",\\"url\\":\\"https://xige.rainrem.top\\"}]}"]]},"headers":[{"level":2,"title":"系统信息","slug":"系统信息","link":"#系统信息","children":[]},{"level":2,"title":"软件包管理","slug":"软件包管理","link":"#软件包管理","children":[]},{"level":2,"title":"文件和目录操作","slug":"文件和目录操作","link":"#文件和目录操作","children":[]},{"level":2,"title":"权限管理","slug":"权限管理","link":"#权限管理","children":[]},{"level":2,"title":"网络管理","slug":"网络管理","link":"#网络管理","children":[]},{"level":2,"title":"服务管理","slug":"服务管理","link":"#服务管理","children":[]},{"level":2,"title":"日志管理","slug":"日志管理","link":"#日志管理","children":[]},{"level":2,"title":"用户管理","slug":"用户管理","link":"#用户管理","children":[]},{"level":2,"title":"其他常用命令","slug":"其他常用命令","link":"#其他常用命令","children":[]},{"level":2,"title":"Git","slug":"git","link":"#git","children":[]},{"level":2,"title":"编程语言","slug":"编程语言","link":"#编程语言","children":[{"level":3,"title":"Python","slug":"python","link":"#python","children":[]},{"level":3,"title":"Node.js","slug":"node-js","link":"#node-js","children":[]},{"level":3,"title":"Java","slug":"java","link":"#java","children":[]}]},{"level":2,"title":"容器管理（Docker）","slug":"容器管理-docker","link":"#容器管理-docker","children":[]},{"level":2,"title":"数据库","slug":"数据库","link":"#数据库","children":[{"level":3,"title":"MySQL","slug":"mysql","link":"#mysql","children":[]},{"level":3,"title":"PostgreSQL","slug":"postgresql","link":"#postgresql","children":[]}]},{"level":2,"title":"其他开发工具","slug":"其他开发工具","link":"#其他开发工具","children":[]}],"git":{"createdTime":1724913229000,"updatedTime":1724984759000,"contributors":[{"name":"Misyakuji","email":"2810013347@qq.com","commits":3}]},"readingTime":{"minutes":5.06,"words":1517},"filePathRelative":"notes/Linux/arch.md","localizedDate":"2024年8月29日","excerpt":"\\n<h2>系统信息</h2>\\n<ul>\\n<li>\\n<p><strong>查看系统信息</strong><br>\\n<code>uname -a</code><br>\\n显示系统内核和版本信息。</p>\\n</li>\\n<li>\\n<p><strong>查看硬件信息</strong><br>\\n<code>lshw</code><br>\\n列出硬件详细信息。</p>\\n</li>\\n<li>\\n<p><strong>查看 CPU 信息</strong><br>\\n<code>lscpu</code><br>\\n显示 CPU 的架构和其他信息。</p>\\n</li>\\n<li>\\n<p><strong>查看内存使用情况</strong><br>\\n<code>free -h</code><br>\\n显示内存和交换区的使用情况。</p>\\n</li>\\n<li>\\n<p><strong>查看磁盘空间</strong><br>\\n<code>df -h</code><br>\\n显示磁盘使用情况。</p>\\n</li>\\n<li>\\n<p><strong>查看磁盘 I/O</strong><br>\\n<code>iostat</code><br>\\n显示 I/O 性能统计。</p>\\n</li>\\n</ul>","autoDesc":true}');export{a as comp,p as data};