/*
 * @Author: Akira
 * @Date: 2023-04-20 18:44:12
 * @LastEditTime: 2023-06-30 16:14:13
 */
const fs = require("fs");
const menus = require("./config/menus");
const deleteFolder = require("./utils/deleteFolder");
const { homeTemp, newsTemp, manageTemp } = require("./config/template");

function getTemp(menuName) {
  return menuName == "home" ? homeTemp : menuName == "news" ? newsTemp : manageTemp;
}

/**
 * 创建view目录以及组件文件
 * @param {object} menus
 */
async function createView(menus) {
  try {
    /** 模板 */
    let temp = "";
    /** 创建view目录 */
    await fs.promises.mkdir("dist/view", { recursive: true });

    /** 遍历菜单 */
    menus.map(async (menu) => {
      /** 获取菜单 id */
      const menuName = menu.id.substring(1);
      /** 创建 vue 文件 */
      await fs.promises.mkdir(`dist/view/${menuName}`, { recursive: true });

      /** 子菜单 */
      if (menu.children) {
        menu.children.map(async (item) => {
          const itemName = item.id.substring(1);
          temp = getTemp(itemName);
          /** 写入组件文件 */
          await fs.promises.writeFile(`dist/view/${menuName}/${itemName}.vue`, temp);
        });
      } else {
        temp = getTemp(menuName);
        await fs.promises.writeFile(`dist/view/${menuName}/index.vue`, temp);
      }
    });
    console.log("File has been created and saved!");
  } catch (error) {
    console.log(error);
  }
}

deleteFolder("dist/view");
console.log("-----------------------------------------------");
createView(menus);
