import tw, { css } from 'twin.macro'

const markdownStyles = css`
  .markdown {
    ${tw`text-lg leading-relaxed`};
    text-align: justify;
  }

  .markdown p,
  .markdown ul,
  .markdown ol,
  .markdown blockquote {
    ${tw`my-12`};
  }

  .markdown p {
    text-align: justify;
  }

  .markdown ul {
    list-style: disc;
    margin-left: 2rem;
    margin-top: 3rem;
  }

  .markdown h2 {
    ${tw`mt-12 mb-4 text-3xl leading-snug `};
  }

  .markdown h3 {
    ${tw`mt-8 mb-4 text-2xl leading-snug`};
  }
`

export default markdownStyles
