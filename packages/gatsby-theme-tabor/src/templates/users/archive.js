import React from "react"
import Layout from "../../components/layout"
import PostEntry from "../../components/PostEntry"
import SEO from "../../components/seo"

const AuthorArchive = props => {
  const {
    pageContext: { name, posts },
  } = props
  return (
    <Layout>
      <SEO
        title={`Author - ${name}`}
        description={`A collection of posts written by ${name}.`}
      />
      <header class="page-header page-header__archive container bottom-spacer">
        <h2 class="page-title h2">
          <span class="vcard">{name}</span>
        </h2>
      </header>

      {posts.nodes &&
        posts.nodes.map(post => {
          return <PostEntry key={post.id} post={post} />
        })}
    </Layout>
  )
}

export default AuthorArchive
