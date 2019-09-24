# 🥔 A Potato Theme for Gatsby

A blog theme for [Gatsby](https://www.gatsbyjs.org/). To see what it looks like, have a look at the [demo blog](https://demo-gatsby-theme-potato.netlify.com/) or my [personal blog](https://blog.castiel.me).

> **Warning!** I created this theme because I wanted to separate the content and the presentation of my personal blog. I tried to make it as clean as possible, but you shouldn’t consider it reusable as is. Still, feel free to fork it, hack it, submit issues, PRs, or to use it as you want 😉

## Features

- Write your articles in [Markdown](https://www.gatsbyjs.com/guides/markdown/)
- Add a language and a category to each post
- Add a cover image to your posts
- Display the [reading time](https://github.com/syntra/gatsby-remark-reading-time)
- Add infos for [Twitter Cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image)
- Add a newsletter subscription form to sidebar or post footer
- Add static pages

## Usage

The easiest way to boostrap a new blog with this theme is to clone the demo blog, for instance by downloading [a ZIP of the repo](https://github.com/scastiel/gatsby-theme-potato/archive/master.zip).

- `/content` contains posts, pages and assets.
- `/src` contains components you want to customize (see section [Customization](#customization) below).

## Options

Options are set in the _gatsby-config.js_ file:

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-potato`,
      options: {
        postsPrefix: 'posts'
      }
    },
// ...
```

Available options:

- `postsPrefix`: prefix for posts URL. If empty, the URL will be `/the-post-slug`; if you set it to `posts`, it will be `/posts/the-post-slug`

## Customization

Some parts of this theme were designed so you can customize them by [overriding source files](https://www.gatsbyjs.org/docs/theme-api/#overriding):

- [Menu items](https://github.com/scastiel/gatsby-theme-potato/blob/master/demo/src/gatsby-theme-potato/components/MenuItems.tsx)
- [Sidebar content](https://github.com/scastiel/gatsby-theme-potato/blob/master/demo/src/gatsby-theme-potato/components/SidebarContent.tsx)
- [Blog footer](https://github.com/scastiel/gatsby-theme-potato/blob/master/demo/src/gatsby-theme-potato/components/Footer.tsx)
- [Post footer](https://github.com/scastiel/gatsby-theme-potato/blob/master/demo/src/gatsby-theme-potato/components/PostFooter.tsx)
- [Colors and fonts](https://github.com/scastiel/new-blog/blob/master/src/gatsby-theme-potato/theme.tsx)
