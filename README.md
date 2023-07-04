# autoCreateWeb

结合 layui-vue 以及 api文档 自动生成**路由配置、组件文件、接口函数**。

正在开发中...

![image-20230628191515394](https://s2.loli.net/2023/06/28/lNtqKuE4OoC3Zjb.png)

## 目录结构

```bash
|-autoCreateWeb
  |-autoCreate_api.js
  |-autoCreate_route.js
  |-autoCreate_view.js
  |-config
  |  |-apidoc.js
  |  |-menus.js
  |  |-template
  |  |  |-index.js
  |  |  |-template_homeTemp.js
  |  |  |-template_manageTemp.js
  |  |  |-template_newsTemp.js
  |-dist
  |  |-api
  |  |  |-module
  |  |  |  |-alipay.ts
  |  |  |  |-Order.ts
  |  |  |  |-Record.ts
  |  |  |  |-Socket.ts
  |  |  |  |-Tree.ts
  |  |  |  |-User.ts
  |  |-router
  |  |  |-route.txt
  |  |-view
  |  |  |-home
  |  |  |  |-index.vue
  |  |  |-manager
  |  |  |  |-manager_1.vue
  |  |  |  |-manager_2.vue
  |  |  |-manager1
  |  |  |  |-index.vue
  |  |  |-manager2
  |  |  |  |-index.vue
  |  |  |-manager3
  |  |  |  |-index.vue
  |  |  |-manager4
  |  |  |  |-index.vue
  |  |  |-news
  |  |  |  |-index.vue
  |-README.md
  |-utils
  |  |-deleteFolder.js
```

## 相关配置

`config` 目录下即是整个项目的菜单配置以及接口文档的数据。

### menus.js

数据结构：

```ts
interface ImenuItem {
  // 唯一 id 亦是 路由路径
  id: string;
  // 默认图标，需要自行修改
  icon: string;
  // 菜单标题
  title: string;
  // 菜单权限 [0, 1, 2] [普通用户, 管理员, 超级管理员]
  role: number;
}

type menus = ImenuItem[]
```

示例：

```js
module.exports = [
  {
    id: "/home",
    icon: "layui-icon-home",
    title: "首页",
    role: 0,
  },
  {
    id: "/news",
    icon: "layui-icon-home",
    title: "公告",
    role: 0,
  },
  {
    id: "/manager",
    icon: "layui-icon-home",
    title: "xx管理",
    role: 1,
    children: [
      { id: "/manager_1", icon: "layui-icon-home", title: "xx管理_1" },
      { id: "/manager_2", icon: "layui-icon-home", title: "xx管理_2" },
    ],
  },
  {
    id: "/manager1",
    icon: "layui-icon-home",
    title: "xx管理1",
    role: 1,
  },
  {
    id: "/manager2",
    icon: "layui-icon-home",
    title: "xx管理2",
    role: 1,
  },
  {
    id: "/manager3",
    icon: "layui-icon-home",
    title: "xx管理3",
    role: 2,
  },
  {
    id: "/manager4",
    icon: "layui-icon-home",
    title: "xx管理4",
    role: 2,
  },
];
```

### apidoc.js

将接口文档导入 postman 再将其 json 数据导出即可。

```js
const apiDoc = {
  info: {
    _postman_id: "e3af4920-8816-4293-8138-326ecb0bc3ab",
    name: "TreeHoles",
    schema: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    _exporter_id: "19078443",
  },
  item: [],
  auth: {},
  event: {}
}
```

## 思考&改进

1. apidoc 数据中参数传递存在类型、格式等问题，待验证...
2. 后续 ts 重构...
