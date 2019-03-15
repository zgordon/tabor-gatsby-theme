import React from "react"
import Layout from "../../components/layout"
import PostEntry from "../../components/PostEntry"
import HeaderArchive from "../../components/HeaderArchive"
import SEO from "../../components/seo"

const SingleTag = props => {
  const {
    pageContext: { name, posts },
  } = props

  return (
    <Layout>
      <SEO
        title={`Tag - ${name}`}
        description={`A collection of posts from the ${name} tag.`}
      />
      <HeaderArchive name={name} />

      {posts.nodes &&
        posts.nodes.map(post => {
          return <PostEntry key={post.id} post={post} />
        })}
    </Layout>
  )
}

export default SingleTag
