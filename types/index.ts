export type Settings = {
  themeToggleEnabled: boolean;
};

export type SiteConfig = {
  name: string;
  author: string;
  description: string;
  keywords: Array<string>;
  url: {
    base: string;
    author: string;
  };
  ogImage: string;
};

export type ContactConfig = {
  email: string;
};

export type NavLink = {
  name: string;
  path: string;
  description: string;
};

export interface SidebarLinks {
  title: string;
  route: string;
}
