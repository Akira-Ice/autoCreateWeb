/*
 * @Author: Akira
 * @Date: 2023-04-20 18:44:12
 * @LastEditTime: 2023-06-28 16:53:33
 */
const fs = require("fs");
const menus = require("./config/menus");
const deleteFolder = require("./utils/deleteFolder");

async function createView(menus) {
  try {
    await fs.promises.mkdir("dist/view", { recursive: true });
    menus.map(async (menu) => {
      const menuName = menu.id.substring(1);
      await fs.promises.mkdir(`dist/view/${menuName}`, { recursive: true });
      if (menu.children) {
        menu.children.map(async (item) => {
          const itemName = item.id.substring(1);
          await fs.promises.writeFile(
            `dist/view/${menuName}/${itemName}.vue`,
            ""
          );
        });
      } else {
        await fs.promises.writeFile(`dist/view/${menuName}/index.vue`, "");
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
