import MarkdownStyles from '@/components/styled/Markdown'

const PostBody = ({ content }) => (
  <article
    css={MarkdownStyles}
    className={`mx-auto text-justify`}
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

export default PostBody
