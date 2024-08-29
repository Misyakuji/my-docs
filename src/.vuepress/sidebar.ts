import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      link: "posts/",
      children: "structure",
    },
    {
      text: "笔记",
      icon: "book",
      prefix: "notes/",
      link: "notes/",
      children: "structure",
    },
    "intro",
  ],
});
