# Datenguide

This repository contains the source code for the [datengui.de web application](http://datengui.de). For general information about the Datenguide project, see the main [Datenguide repository](http://github.com/datenguide/datenguide).

This project uses a [JAMstack](https://jamstack.org/) approach: 

> #### JavaScript
> 
> Any dynamic programming during the request/response cycle is handled by JavaScript, running entirely on the client. This could be any frontend framework, library, or even vanilla JavaScript.
> 
> #### APIs
> 
> All server-side processes or database actions are abstracted into reusable APIs, accessed over HTTPS with JavaScript. These can be custom-built or leverage third-party services.
> 
> #### Markup
> 
> Templated markup should be prebuilt at deploy time, usually using a site generator for content sites, or a build tool for web apps.

*(explanation from [jamstack.org](jamstack.org))*

The Datenguide web application is created using client-side JavaScript and pulls data from the [Datenguide API](https://api.datengui.de/). At build time, the application queries the API and generates static HTML pages for all cities and districts in Germany.

## How to setup and run this project

This web application is built upon [React](https://reactjs.org/) and [Gatsby](https://www.gatsbyjs.org/). It uses [Yarn](https://github.com/yarnpkg/yarn) for managing dependencies.

### Prerequisites

1. Install the [Node.js runtime](https://nodejs.org/en/)
2. Install the [Yarn package manager](https://yarnpkg.com/lang/en/docs/install/#mac-stable)

*Note:* This web application uses [sharp](http://sharp.pixelplumbing.com) for image optimization. This requires `libvips`, which should come pre-installed on most UNIX-based systems. If not, look in your package manager for a package called `libvips-dev` and install it before installing the node dependencies in the next step.

### Install dependencies

`yarn install`

### Run in development

`yarn dev`

### Build for production

`yarn build`

### Serve production build

`yarn serve`

## What's in this repository

An overview of the files and directories you'll work with when contributing to this project:

```
     .
 (1) ├── gatsby-browser.js
 (2) ├── gatsby-config.js
 (3) ├── gatsby-node.js
 (4) ├── node_modules
 (5) ├── package.json
 (6) ├── public
 (7) ├── src
 (8) │   ├── html.js
 (9) │   ├── assets
     │   │   └── images
(10) │   ├── blog
     │   │   ├── 2018
     │   │   └── ...
(11) │   ├── components
     │   │   ├── Article.js
     │   │   └── ....
(12) │   ├── pages
     │   │   ├── 404.js
     │   │   ├── privacy.md
     │   │   └── ...
(13) │   ├── regions
     │   │   ├── ahrweiler.md
     │   │   └── ...
(14) │   ├── scss
(15) │   │   ├── _baseline.scss
(16) │   │   ├── _fonts.scss
(17) │   │   ├── _variables.scss
(18) │   │   ├── components
(19) │   │   └── main.scss
(20) │   └── templates
     │       ├── article.js
     │       └── ...
(21) ├── static
     │   └── images
(22) ├── yarn.lock
(23) ├── .editorconfig
(24) ├── .gitignore
(25) └── .prettierrc
```

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/). These allow customization/extension of default Gatsby settings affecting the browser.

2.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

3.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

4.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (external packages). It is automatically created and populated when you run `yarn install`.

5.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

6.  **`/public`**: This directory contains the generated files that we deploy to the web. It is automatically created and populated when you run `yarn build`.

7.  **`/src`**: This directory contains all of the code related to what you see in the browser, such as templates and styling.

8.  **`/src/html.js`**: This component is used to generate the wrapper for the individual HTML pages, including `<head>` and `<body>` tags.

9.  **`/src/assets`**: This directory contains any assets, such as images, etc. The content of this directory is processed through the [Webpack module bundler](https://webpack.js.org/).

10. **`/src/blog`**: This directory contains blog posts, ordered by year. Each blog post has its own directory which includes a markdown file and all images used in the blog post. The blog post's slug is based on the directory's path name.

11. **`/src/components`**: This directory contains individual UI components used in the web application. Typically, a UI component consists of a [React component](https://reactjs.org/docs/react-component.html) and an optional [GraphQL query](https://www.gatsbyjs.org/tutorial/part-four/).

12. **`/src/pages`**: This directory contains text and specific markup for generating individual content pages. Typically, a page is either a [React component](https://reactjs.org/docs/react-component.html) or a markdown file. Markdown files typically specify which template should be used for rendering them. React components should only be used for pages that do not contain much content.

13. **`/src/regions`**: This directory contains a markdown file for each district and city covered by Datenguide. The markdown files can be used to add specific information to be rendered in the regions pages on datengui.de.

14. **`/src/scss`**: This directory contains the styling information used in the Datenguide web application. It uses [SCSS](https://sass-lang.com/guide).

15. **`/src/scss/_baseline.scss`**: This file has the basic styling information used across the Datenguide web application.

16. **`/src/scss/_fonts.scss`**: This file imports the web fonts used in the Datenguide web application.

17. **`/src/scss/_variables.scss`**: This file specifies SCSS variables for colors, font stacks, and other visual properties of the web application. It also overrides the default Material Design styling.

18. **`/src/scss/components`**: This directory contains the styling information for UI components.

19. **`/src/scss/main.scss`**: This file is the main entry point for generating a single CSS file for the application. It imports variables, component styles, external dependencies, etc.

20. **`/src/templates`**: This directory contains templates for generating individual pages, written as [React components](https://reactjs.org/docs/react-component.html).

21. **`/src/static`**: Just like `/src/assets`, this directory contains assets, such as images. The main difference is that the content of `/src/static` is simply copied over to the final build and not processed through Webpack.

22. **`yarn.lock`**: This is an automatically generated file based on the exact versions of dependencies that were installed for your project based on `package.json` (see below). It is updated automatically by [Yarn](https://yarnpkg.com/), the package manager used in this Project. **You won’t change this file directly.**

23. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

24. **`.editorconfig`**: This is a configuration file used by [various text editors and IDEs](https://editorconfig.org/#download) to keep the file formatting consistent.

25. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.
