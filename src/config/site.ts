export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Главная",
      href: "/",
    },
    {
      label: "Статистика",
      href: "/statistic",
    },
  ],
  navMenuItems: [
    {
      label: "Главная",
      href: "/",
    },
    {
      label: "Статистика",
      href: "/statistic",
    },
  ],
  links: {
    githubFront: "https://github.com/DevAndr/github-issues-front",
    githubBack: "https://github.com/DevAndr/github-issues-back",
  },
};
