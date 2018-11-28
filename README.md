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

### Install dependencies

`yarn install`

### Run in development

`yarn dev`

### Build for production

`yarn build`

### Serve production build

`yarn serve`
