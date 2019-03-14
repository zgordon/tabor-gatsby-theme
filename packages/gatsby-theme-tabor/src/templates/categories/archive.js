import React from "react"
import Layout from "../../components/layout"
import PostEntry from "../../components/PostEntry"
import SEO from "../../components/seo"

const SingleCategory = props => {
  const {
    pageContext: { name, posts },
  } = props

  return (
    <Layout classNames="archive">
      <SEO
        title={`Category - ${name}`}
        description={`A collection of posts from the ${name} category.`}
      />
      <header className="page-header">
        <h1 className="page-title">
          Category Archives: <span className="page-description">{name}</span>
        </h1>
      </header>

      {posts.nodes &&
        posts.nodes.map(post => {
          return <PostEntry key={post.id} post={post} />
        })}
    </Layout>
  )
}

export default SingleCategory
