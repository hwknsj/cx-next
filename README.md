<h1>cx-next 💅</h1>
<h2><small><em>☞ a server-side rendered, statically generated site built with Next.js and styled with Emotion</em>&nbsp;👩‍🎤</small></h2>

<hr/>
<h4><small>by joél torres <br/>
joel.torres@nike.com <br/>
@jtor94_nike</small></h4>

<kbd>v0.0.1-a</kbd>
<hr/>

## Demo site

The dev instance is available at [next-dev.cx-platform-test.nikecloud.com](https://next-dev.cx-platform-test.nikecloud.com)

### What's all this?

The primary intention of this project is to demonstrate the powerful capabilities of [Emotion](https://emotion.sh/) as a performant "css-in-js" solution as well as showcase the versatility of [Next.js](https://nextjs.org) (see [Static Generation](https://nextjs.org/docs/basic-features/pages)) as well as its inherent performance advantages. In this example, pages (posts) can be written in Markdown (with frontmatter support), placed in `/_posts`, and the new post is generated on the front-end site.

> tl;dr – a pitch for why we should be using these tools (and show they're not that different)

#### A note on the use Markdown

Generating content from Markdown is not the focus of this demo; for the purposes of CX / internal Nike web applications, this is an unlikely scenario. It is ideal, however, for the purpose of creating a maintainable reference site to which anyone in CX can easily contribute. In this case, **Markdown acts as a simple, local CMS**, though content / information could be retrieved from any data source (e.g. a CMS such as Sanity, an API / database connection, or even Wordpress–but hopefully not) and statically generated _server-side_.

The blog posts in `/_posts/*.md` are parsed with [`remark`](https://github.com/remarkjs/remark) and converted to an HTML string using [`remark-html`](https://github.com/remarkjs/remark-html); this HTML string is passed as a `prop` to the page (somewhat inelegantly\*). The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

\* The keen observer may notice the use of `dangerouslySetInnerHtml` which is generally a terrible, terrible practice one should never do, but since this occurs _only_ server-side and _only_ during the build process, we are unlikely to unwittingly execute some prankster's fork bomb.

```sh
:(){:|:&};:
```

## Usage

If you're reading this, you likely know the drill: clone, `cd`, blah blah blah... BUT WAIT! Take note that this repository has a `yarn.lock` file! So before going to town with `npm`, ensure that `yarn` is installed: the preferred method of installation is to use `npm i -g yarn` though it may also be installed via `brew` on macOS (beware that this will also install Node v14 as a dependency, possibly interfering with `nvm`) or [insert your fave package manager] on Unix.

With `yarn` installed,

```sh
yarn # install dependencies
yarn run dev # start Next.js dev server on localhost:3000
```

**What's wrong with `npm`? Do you think you're better than us???** No. There are
benefits to `yarn` which are not obvious, but more on this later.

## Technologies & Tools

* [Next.js](https://nextjs.org/) - a derivative of React.js that includes a huge number of built-in optimizations, most notably *server-side rendering*
* [Emotion](https://emotion.sh/) – a JS styling library (conceptually similar to Styled-Components) with greater capabilities than, I dare say, any other option
* [Yarn](https://yarnpkg.com/) – alternative to `npm`
* [Tailwind CSS](https://tailwindcss.com/) - relatively new to me but provides an overwhelming amount of utility classes (much like that of Bootstrap without the opinionated styling)
  * here, the [`purge` option](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css) to remove unused CSS and minimize