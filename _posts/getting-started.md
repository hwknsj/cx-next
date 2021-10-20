---
title: 'I. Getting Started with Emotion'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/getting-started/cover.jpg'
date: '2021-10-20T05:00:00.000Z'
author:
  name: joél
  picture: '/assets/blog/authors/air.jpg'
ogImage:
  url: '/assets/blog/getting-started/cover.jpg'
---

# Getting Started

## Outline

1. *how do i get started?*
2. *how do i migrate / use existing styles?*
3. *how do i make a new component?*
4. *how do i add styles (modify) an existing component?*
5. *how do i theme / use variables / global style?*

### get started

install `@emotion/react` & `@emotion/styled`

1. react provides `css`, theme-related stuff
2. `styled` is how we created "styled components"

#### `css` - fn & prop
**FASTEST CHEAPEST WAY TO USE EMOTION**

```javascript
import { css } from '@emotion/react'

const danger = css`
  color: red;
`

const base = css`
  background-color: darkgreen;
  color: turquoise;
`

render(
  <div>
    <div css={base}>This will be turquoise</div>
    <div css={[danger, base]}>
      This will be also be turquoise since the base styles
      overwrite the danger styles.
    </div>
    <div css={[base, danger]}>This will be red</div>
  </div>
)
```

```sh
stylus --compress styles/normalize.styl --out styles/normalize.css
# in globalStyles.js
# import normalize from 'normalize.css'
```