import markdownStyles from '@/components/styled/Markdown'

const PostBody = ({ content }) => (
  <article
    className={`${markdownStyles.markdown} mx-auto text-justify`}
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

export default PostBody
