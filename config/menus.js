/*
 * @Author: Akira
 * @Date: 2023-06-28 14:34:52
 * @LastEditTime: 2023-06-28 15:24:42
 * @description: 菜单配置
 */
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
