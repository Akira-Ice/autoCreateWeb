/*
 * @Author: Akira
 * @Date: 2023-04-20 16:34:53
 * @LastEditTime: 2023-06-30 16:16:08
 */
const fs = require("fs");
const menus = require("./config/menus");
const deleteFolder = require("./utils/deleteFolder");

/** 路由初始化 */
let route = `{
  path: "/",
  redirect: "/home",
},
{
  path: "/login",
  component: Login,
  meta: { title: "登录页面" },
},
`;

/**
 * @description 获取子路由
 * @param {object} menu - 菜单对象
 * @returns {string} - 子路由字符串
 */
function getChildren(menu) {
  const menuName = menu.id.substring(1);
  let c = ``;
  let name = "";

  if (menu.children) {
    menu.children.forEach((item) => {
      name = item.id.substring(1);
      c += `{
        path: "/${name}",
        component: () => import("@/view/${menuName}/${name}.vue"),
        name: "${name.replace(/^\w/, (c) => c.toUpperCase())}",
        meta: { title: "${name}", requireAuth: true, affix: false, closable: true },
      },`;
    });
  } else {
    c += `{
      path: "",
      component: () => import("@/view/${menuName}/index.vue"),
      name: "${menuName.replace(/^\w/, (c) => c.toUpperCase())}",
      meta: { title: "${menuName}", requireAuth: true, affix: ${menuName == "home" ? true : false}, closable: true },
    },`;
  }

  return `[
    ${c}
  ]`;
}

/**
 * @description 获取路由
 * @param {object} menu - 菜单对象
 * @returns {string} - 路由字符串
 */
function getRouteItem(menu) {
  const menuName = menu.id.substring(1);
  let routeItem = `{
  path: "/${menuName}",
  component: BaseLayout,
  children: ${getChildren(menu)},
},
`;
  return routeItem;
}

async function createRoute(menus) {
  try {
    menus.forEach((item) => {
      route += getRouteItem(item);
    });

    await fs.promises.mkdir("dist/router", { recursive: true });
    await fs.promises.writeFile("dist/router/route.txt", route);
    console.log("File has been created and saved!");
  } catch (error) {
    console.log(error);
  }
}

deleteFolder("dist/router");
console.log("-----------------------------------------------");
createRoute(menus);
