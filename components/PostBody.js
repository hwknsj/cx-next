import markdownStyles from './markdown-styles.module.css'

const PostBody = ({ content }) => {
  return (
    <article
      className={`${markdownStyles.markdown} mx-auto text-justify`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default PostBody
