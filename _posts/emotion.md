---
title: 'emotion'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/emotion/cover.jpg'
date: '2021-10-12T05:00:00.000Z'
author:
  name: joél torres
  picture: '/assets/images/acg-logo.jpg'
ogImage:
  url: '/assets/blog/emotion/cover.jpg'
---

# _emotion_ 👩‍🎤

<tt><em>&!\*¢^ you emotional, why you emotional</em></tt>


## NEED TO KNOW
*pick one way of doing things:* `styled` or `css`
1. how do i get started
2. how do i reuse styles
3. how do I style a new component
4. how do i add styles to an existing component
5. how do i theme / use variables / set base styles (global styles)
6. dark mode / localStorage of theme – show this!! (remembers dark mode)


## a css primer

<dl><dd><strong>CSS</strong></dd><dd><em>Cascading Style-Sheets</em></dd></dl>

### the problem with CSS: ...

> why are you trying to change the paradigm, do you think you're some hot-shot who can just come in
> here and show off? why should we believe you

yes. the paradigm ~~has changed~~ is changing _all the time_.

remember this: at the end of the day, <em>it's all objects</em>. css isn't going away

```css
.class {
  cssproperty: cssValue;
}
```

```js
const jsx = {
  key: value,
}
```

#### naming conventions

notes from Kathrin Holzmann (<em>CSS in JS - beware the Hype</em> @CSSConf via JSConf 2019)

- if you can't name it, you don't need it

#### paint (first paint, in particular)

1. download html
2. download css
3. render css

css is "render blocking" the **Time To First Paint**. users HATE waiting, so we as devs should crush
it with our fist (borat)

> Longer page load times have a severe effect on bounce rates. For example:
>
> - If page load time increases from 1 second to 3 seconds, bounce rate increases 32%
> - If page load time increases from 1 second to 6 seconds, bounce rate increases by 106%

src: https://support.google.com/webmasters/answer/9205520/core-web-vitals-report

> srsly? css files are small and http2 (starts html and css at the same time) and tcp connections
> and internet

`normalize.min.css` + `bootstrap.min.css` + `jquery.min.css` + `cool-google-font.css` + ... +
`index.css` = O(`MB`)? (<small>yes this is big-O notation, nerds</small>)

##### prioritize!

show users what they _need to see now_ (not a blank page), paint (i.e. style) later

##### purge css – use only what we need

why are we loading CSS for pages / elements / stuff the user hasn't seen and doesn't know exists

#### questions: what if i really like...

##### CSS processors: postCSS, stylus, etc. it's over

stylus may've been hot stuff in 2017 but we survived, javascript is what's on now: we got options:

- plain ass css
- jss
- styled-components
- css-in-js
- "csx" emotion

##### CSS Modules

- not messing with webpack, babel configs
  - ¯\_(ツ)\_/¯ ... write plain css
- css modules

well what if instead of `CoolComponent.module.css`

```
src/
  components/
    - CoolComponent.js
    - CoolComponent.module.css
```

pros:

- ability to scope styles (not everything global in `index.css`)
- no naming collisions (thanks to some CSS loader)
  - why we see things like `class='navbar__hsjd5bp'`

cons:

- requires webpack configuration
- no class <em>composition</em>
  - as react devs, we <em>love</em> (`<em>LOVE</em>`) composition
- not that hot anymore
- still writing LOTS of css

```
src/
  components/
    - CoolComponent.js
    - CoolComponentStyles.js
```

pretty much the same thing, right?

```css
.header {
  width: 100%;
  /* blah blah */
}
.header .header__nav {
  /* */
}
/* ... */
.header .header__logo .header__logo__img .header__logo__img__background {
  content: 'total nightmare';
}
```

not dynamic, incredibly verbose, **always global**

...but we all know why we don't write css

##### the thing we use already

quick points:

- css scope
- ***

### why css-in-js is amazing

```js
const Title = styled.h1`
  color: nikevolt;
  font-size: 2.4rem;
`
// ...
return <Title>This is weird</Title>
```

renders

```html
<h1 class="em-483osds">This is weird</h1>
```

#### props

> but we already have css variables (e.g. `var(...)`) and stylus makes it even easier!
> (`$link-color = 'blue'`) mixins! functions! `@import` / `@require`,

<strong>let's style a button</strong> requirements:

- a 'primary' button (e.g. `submit`, `save`, `login`)
- a 'secondary' button (e.g. `close`, `open`, `cancel`)
- a 'disabled' button
- `hover`, `focus`, `active`, `selected` states <strong>for each</strong>

<strong>with stylus (best case scenario):</strong> so we need to write a `class`

considerations:

1. where does this show up? nav? form? just anywhere?
2. what do i call it?
   - `.btn`? `.btn-nav`? `.nav-button`? `.nav-button-primary`? BEM?
     - Block Element Modifier
       - was invented by russians... (lemme finish) ... by _yandex_
3. nesting is cool, i should probably nest it
   - but what if i want to use it elsewhere?

```css
.button
  color $black
  background $white
  &.primary
    background $black
  &.secondary
    background $white
    color $black
  &:hover
    border 2px solid $black
    // dammit, hover states are different for primary and secondary and default
  &:focused
    // good luck
```

```js
const Card = styled.div`
  background: ${props => (props.darkMode ? '#111' : '#fff')};
  font-size: 2.4rem;
  .img {
    // can still next classNames, cool!
    object-fit: cover;
  }
`
// ...
return <Title>This is weird</Title>
```

renders

```html
<h1 class="em-483osds">This is weird</h1>
```

#### media queries

#### functions

#### nesting

### performance

### ssr

#### valid q: what if we need global css?

_see example_

### craco (a.k.a. 'crapo', ha ha ha) & babel setup

adjust craco.config b/c we need to adjust babel config
