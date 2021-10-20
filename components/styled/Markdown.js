import tw, { css } from 'twin.macro'

const MarkdownStyles = css`
  color: ${({ theme }) => theme.typeography.textPrimary};
  .markdown {
    ${tw`text-lg leading-relaxed`};
    text-align: justify;
    color: ${({ theme }) => theme.typeography.textPrimary};
  }

  .markdown p,
  .markdown ul,
  .markdown ol,
  .markdown blockquote {
    ${tw`my-12`};
    color: ${({ theme }) => theme.typeography.textPrimary};
  }

  .markdown p {
    text-align: justify;
    color: ${({ theme }) => theme.typeography.textPrimary};
  }

  .markdown ul {
    list-style: disc;
    margin-left: 2rem;
    margin-top: 3rem;
    color: ${({ theme }) => theme.typeography.textPrimary};
  }

  .markdown h2 {
    ${tw`mt-12 mb-4 text-3xl leading-snug `};
    color: ${({ theme }) => theme.typeography.textPrimary};
  }

  .markdown h3 {
    ${tw`mt-8 mb-4 text-2xl leading-snug`};
    color: ${({ theme }) => theme.typeography.textPrimary};
  }
`

export default MarkdownStyles
