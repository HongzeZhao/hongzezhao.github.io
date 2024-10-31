---
layout: single
title:  "如何使用jekyll编译博客"
date:   2024-10-30 11:37:51 +0800
categories: web
tags: jekyll ruby
---

## 安装必须的库

### 安装 ruby
jekyll使用ruby开发，首先要确保在你的机器上安装了ruby。Mac系统目前自带ruby，但是有些系统的ruby版本有些老，需要升级一下：
```shell
brew update
brew install ruby
# 如果已经安装了可以用以下命令升级一下
brew upgrade ruby
```
安装完成后，可能需要调整PATH环境变量：
```shell
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile
source ~/.bash_profile
```
对于使用Zsh的用户，该指令应添加到 ~/.zshrc 文件中。

### 安装 jekyll
看[jekyll官网](https://jekyllcn.com/)或者直接看这个
```shell
  gem install jekyll bundler
  jekyll new my-awesome-site
  cd my-awesome-site
  bundle install
  jekyll serve
# => 打开浏览器 http://localhost:4000
```
在安装完jekyll后，有可能出现jekyll不可执行的问题，需要将ruby插件的可执行目录加入到系统的PATH中：
```shell
# 列出当前gem已安装的包，找到jekyll安装路径
gem list
```
将这个添加到`~/.bash_profile`或`~/.zshrc`中：
```shell
export PATH="/usr/local/lib/ruby/gems/3.3.0/bin:$PATH"
```

### 本地安装 jekyll 的插件
以下命令会安装Gemfile文件中依赖的包，本地安装了依赖的包才能正常编译。
```shell
bundle install
```

目前本博客是主题使用了[minimal-mistakes-jekyll](https://github.com/mmistakes/minimal-mistakes)，可以进行定制修改。

## 编辑博客并编译

直接在`_posts`目录下新建markdown文件即可。名字遵从日期即可。

```shell
# 本地编译，并在目录发生变化时自动编译
jekyll serve --watch
```


## 部署到 github pages
使用github actions自动编译部署jekyll很方便，需要在action tab下配置一个pipeline，直接搜jekyll的，都用默认的即可。这样theme也不需要使用remote的也能轻松编译成功。
详细直接参考[Jekyll Github Actions](https://jekyllrb.com/docs/continuous-integration/github-actions/)
