import React from "react"
import Layout from "../../components/Layout"
import PostEntry from "../../components/PostEntry"
import HeaderArchive from "../../components/HeaderArchive"
import SEO from "../../components/seo"

const SingleCategory = props => {
  const {
    pageContext: { name, posts },
  } = props

  return (
    <Layout>
      <SEO
        title={`Category - ${name}`}
        description={`A collection of posts from the ${name} category.`}
      />
      <HeaderArchive name={name} />

      {posts.nodes &&
        posts.nodes.map(post => {
          return <PostEntry key={post.id} post={post} />
        })}
    </Layout>
  )
}

export default SingleCategory
