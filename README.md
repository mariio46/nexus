# NextJs 14 Starterkit

Simple Starterkit for NextJS (App Router / Dir) Application using Shadcn/UI, TailwindCSS

## Features

-   Refactoring Shadcn into plugin and preset
-   Easy to change or add more theme
-   Setting up the dark mode
-   Login and Register Page
-   Using the best Icon from Tabler (Components from Shadcn/UI are modified using Tabler Icons too)
-   Setting up prettier from Prettier Plugin Tailwindcss
-   Setting up Tailwind Merge and CLSX
-   Using Geist Font from NextJS
-   Provide some custom hooks for Loading
-   Provide some custom hooks for handle Dialog from Shadcn/UI
-   Add TanStack Query for fetching data on client

## Installation

```bash
git clone

cd project

npm install && npm run dev
```

## Techs

This starterkit uses a number of open source projects to work properly:

-   [NextJs](https://nextjs.org/) - The React Framework for the Web
-   [Shadcn/UI](https://ui.shadcn.com/) - Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
-   [TailwindCSS](https://tailwindcss.com) - A utility-first CSS framework packed with classes
-   [Tabler Icons](https://tabler.io/icons) - Free and open source icons designed to make your website or app attractive, visually consistent and simply beautiful.
-   [Tailwind Prettier](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
-   [Geist Font](https://vercel.com/font) - Geist truly represents the coding and design spirit within Vercel's creative community.
-   [TanStack](https://tanstack.com/) - Headless, type-safe, & powerful utilities for State Management, Routing, Data Visualization, Charts, Tables, and more.

## Customize Theme

-   Go to [Shadcn Themes](https://ui.shadcn.com/themes) and chose theme
-   Open file `./lib/shadcn/plugin.ts` add or customize the thme
-   Restart the server
