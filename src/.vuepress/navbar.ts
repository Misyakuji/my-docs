import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "文章",
    icon: "book",
    link: "/posts/",
  },
  {
    text: "笔记",
    icon: "book",
    link: "/notes/",
  },
  "/demo/",
  {
    text: "技术栈",
    icon: "pen-to-square",
    prefix: "/notes/",
    children: [
      { text: "Docker运维", icon: "pen-to-square", link: "docker" },
      {
        text: "后端",
        icon: "pen-to-square",
        prefix: "backend/",
        children: [
          { text: "Spring框架", icon: "pen-to-square", link: "Spring" },
          { text: "SpringBoot框架", icon: "pen-to-square", link: "SpringBoot" },
          "SpringCloud",
          "Mybatis",
        ],
      },
      {
        text: "前端",
        icon: "pen-to-square",
        prefix: "fontend/",
        children: [
          {
            text: "Vue",
            icon: "pen-to-square",
            link: "Vue",
          },
          {
            text: "Angular",
            icon: "pen-to-square",
            link: "Angular",
          },
          "React",
        ],
      },
    ],
  },
]);
