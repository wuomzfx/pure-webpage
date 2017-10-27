# pure web page

> pure scaffold for developing web page

## Usage

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Config

`config/index.js`:

- `layout`
  - `html`: 默认的html模板文件
  - `entry`: 模板文件对应的入口js，所有页面公共的js也可以在此文件中写入。如不需要，可以删除此配置。

- `assetsVersionMode`: 静态资源版本控制模式。设为`hash`则采用文件哈希值；或者直接写后端的对应的版本变量名；或者直接写 `+new Date()`则每次发布更新资源时间戳。另外，这仅对html内引入的静态资源有效，css内链的图片依旧采用哈希值来控制版本。

其他配置可参考 [guide](http://vuejs-templates.github.io/webpack/)

