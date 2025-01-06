import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/baicha-blog/",
  title: "baiCha's Project",
  description: "个人笔记",
  // header标签里面插入的内容
  head: [["link", { rel: "icon", href: "/baicha-blog/fireFly.png" }]], // 将 favicon.ico 放在公共目录中，如果设置了 base，则使用 /base/favicon.ico
  themeConfig: {
    // 网站的logo
    logo: "/fireFly.png",
    // 文章右侧大纲目录
    outline: {
      level: [2, 6],
      label: "目录",
    },
    //自定义上下页名
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    // 主题
    darkModeSwitchLabel: "深浅模式",
    // 返回顶部label
    returnToTopLabel: "返回顶部",
    // 搜索
    search: {
      provider: "local",
    },
    // 页脚
    footer: {
      message: "祝我暴富 🤑",
      copyright: "希望在旅途的终点,每个人都能抵达向往的结局 😝",
    },
    // 文档的最后更新时间
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "笔记",
        items: [
          {
            text: "个人笔记",
            items: [{ text: "常用代码", link: "/noteBook/git" }],
          },
        ],
      },
    ],

    sidebar: [
      {
        text: "git",
        items: [{ text: "git命令", link: "/noteBook/git" }],
      },
      {
        text: "ElementPlus",
        items: [{ text: "ElementPlus组件样式", link: "/noteBook/ElementPlus" }],
      },
      {
        text: "Vue",
        items: [{ text: "vue相关", link: "/noteBook/vue" }],
      },
    ],
    // 社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/baichaya?tab=repositories" },
    ],
    // 部署的时候需要注意该参数避免样式丢失
  },
});
