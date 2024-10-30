var store = [{
        "title": "如何使用jekyll编译博客",
        "excerpt":"安装必须的库   安装ruby  jekyll使用ruby开发，首先要确保在你的机器上安装了ruby。Mac系统目前自带ruby，但是有些系统的ruby版本有些老，需要升级一下：  brew update brew install ruby # 如果已经安装了可以用以下命令升级一下 brew upgrade ruby  安装完成后，可能需要调整PATH环境变量：  echo 'export PATH=\"/usr/local/opt/ruby/bin:$PATH\"' &gt;&gt; ~/.bash_profile source ~/.bash_profile  对于使用Zsh的用户，该指令应添加到 ~/.zshrc 文件中。   安装jekyll  看jekyll官网或者直接看这个    gem install jekyll bundler   jekyll new my-awesome-site   cd my-awesome-site   bundle install   jekyll serve # =&gt; 打开浏览器 http://localhost:4000  在安装完jekyll后，有可能出现jekyll不可执行的问题，需要将ruby插件的可执行目录加入到系统的PATH中：  # 列出当前gem已安装的包，找到jekyll安装路径 gem list  将这个添加到~/.bash_profile或~/.zshrc中：  export PATH=\"/usr/local/lib/ruby/gems/3.3.0/bin:$PATH\"   本地安装jekyll的插件  以下命令会安装Gemfile文件中依赖的包，本地安装了依赖的包才能正常编译。  bundle install   目前本博客是主题使用了minimal-mistakes-jekyll，可以进行定制修改。   编辑博客并编译   直接在_posts目录下新建markdown文件即可。名字遵从日期即可。   # 本地编译，并在目录发生变化时自动编译 jekyll server --watch  ","categories": ["jekyll"],
        "tags": [],
        "url": "/jekyll/build-this-site/",
        "teaser": null
      },{
    "title": "如何使用jekyll编译博客",
    "excerpt":"安装必须的库   安装ruby  jekyll使用ruby开发，首先要确保在你的机器上安装了ruby。Mac系统目前自带ruby，但是有些系统的ruby版本有些老，需要升级一下：  brew update brew install ruby # 如果已经安装了可以用以下命令升级一下 brew upgrade ruby  安装完成后，可能需要调整PATH环境变量：  echo 'export PATH=\"/usr/local/opt/ruby/bin:$PATH\"' &gt;&gt; ~/.bash_profile source ~/.bash_profile  对于使用Zsh的用户，该指令应添加到 ~/.zshrc 文件中。   安装jekyll  看jekyll官网或者直接看这个    gem install jekyll bundler   jekyll new my-awesome-site   cd my-awesome-site   bundle install   jekyll serve # =&gt; 打开浏览器 http://localhost:4000  在安装完jekyll后，有可能出现jekyll不可执行的问题，需要将ruby插件的可执行目录加入到系统的PATH中：  # 列出当前gem已安装的包，找到jekyll安装路径 gem list  将这个添加到~/.bash_profile或~/.zshrc中：  export PATH=\"/usr/local/lib/ruby/gems/3.3.0/bin:$PATH\"   本地安装jekyll的插件  以下命令会安装Gemfile文件中依赖的包，本地安装了依赖的包才能正常编译。  bundle install   目前本博客是主题使用了minimal-mistakes-jekyll，可以进行定制修改。   编辑博客并编译   直接在_posts目录下新建markdown文件即可。名字遵从日期即可。   # 本地编译，并在目录发生变化时自动编译 jekyll server --watch  ","url": "http://localhost:4000/_posts/2024-10-30-build-this-site/"
  },{
    "title": "About",
    "excerpt":"This is the base Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at jekyllrb.com   You can find the source code for Minima at GitHub: jekyll / minima   You can find the source code for Jekyll at GitHub: jekyll / jekyll   ","url": "http://localhost:4000/about/"
  },{
    "title": "文章分类",
    "excerpt":" ","url": "http://localhost:4000/categories/"
  },{
    "title": "文章标签",
    "excerpt":" ","url": "http://localhost:4000/tags/"
  }]
