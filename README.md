## 基于 dumi+father-build 的组件库开发和文档模板

[github](https://github.com/qld-cf/dumi-tpl)

```bash
// 安装依赖,
$ npm i
```

```bash
// 查看文档 html
$ npm start
```

```bash
// 构建文档查阅html
$ npm run docs:build
// 测试
$ cd dumi-tpl
// 全局安装http-server
$ npm i -g http-server
$ http-server -p 3030
// 访问127.0.0.1:3030，进入dist/index.html即可
```

```bash
// 构建本地包,推送和更新前运行,最终在项目基本路径会找到dist三方包（组件库）
$ npm run lib:build
```

```bash
// 推送更新包
$ npm publish
```

```
// 业务使用
import DetailInfo from 'my-lib'

...
<DetailInfo />
...
```

#### 注意事项

1. 如果需要推送到 npm 或者私有 npm 域

修改 package.json 的 registry

```
 "publishConfig": {
        "registry": "https://your-publish-registry"
    },
```

[github](https://github.com/qld-cf/dumi-tpl)
