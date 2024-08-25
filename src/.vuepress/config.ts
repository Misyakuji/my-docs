import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/my-docs/",

  lang: "zh-CN",
  title: "梦夕笔谈",
  description: "Misyakuji的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
