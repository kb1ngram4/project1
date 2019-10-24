### fullpage_self项目意义
    串联 es5,es6和工具的使用

### 项目初始化
    1.初始化项目的描述文件 package.json
    2.初始化readme.md文件
    3.初始化编辑器的风格约束文件 .editorconfig
    4.初始化eslint
        npm i eslint -D  : 安装本地开发
        eslint --init    : 初始化配置环境
        add .eslintignore : 初始化eslint的忽略文件  
    5.初始化css相关配置
        sass
            npm i sass -D
        postcss
         npm i postcss-cli autoprefixer -D
            配置文件 .postcssrc.js
    6.初始化js相关配置
        webpack
            npm i webpack@3.10.0 -D
        babel
            npm i @babel/core @babel/cli -D

            npm i @babel/preset-env @babel/polyfill -D    
            兼容语法(preset-env)  兼容api(polyfill)
            配置babelrc文件
                {"presets": ["@babel/preset-env"]}

    7.初始化 .browserslistrc
    8.初始化项目目录
        src :源码
            js
                
            css
        static :静态资源
    9.建仓库
        初始化git 忽略文件 .gitignore

        css,js文件最终要打包成 ./dist/css(js)/目录文件

        脚本文件里删了什么，或者添加什么， npm i 都会删除或下载什么

        为了每次都不用敲命令去打包编译sass，所以用批处理文件.bat文件

#### 生产环境(bat)
    打包static, index.html => dist
        npm install fs-extra -D
    
    开发环境不需要polyfill,生产环境再打开
      import "@babel/polyfill" 
      package.json只需要sass和webpack即可，--watch监听其每一次改动（依赖）
### 同时开两个终端，一个跑sass，一个跑webpack，实时监视
      
      
