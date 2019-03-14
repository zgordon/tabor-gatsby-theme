import React from "react"
import { graphql } from "gatsby"
import PostEntryTitle from "./PostEntryTitle"
import PostEntryMeta from "./PostEntryMeta"

const PostEntry = ({ post }) => (
  <article>
    <header className="entry-header">
      <PostEntryTitle post={post} location="blog" titleClass="entry-title" />
      <PostEntryMeta post={post} />
    </header>
    <div
      className="entry-content"
      dangerouslySetInnerHTML={{ __html: post.excerpt }}
    />
  </article>
)

export default PostEntry

export const query = graphql`
  fragment PostEntryFragment on WPGraphQL_Post {
    id
    title
    uri
    slug
    date
    featuredImage {
      sourceUrl
      title
    }
    content
    excerpt
    author {
      name
      slug
      avatar(size: 100) {
        url
      }
    }
  }
`
