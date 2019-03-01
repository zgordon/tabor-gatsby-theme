import React from "react"
import { Link, graphql } from "gatsby"
import config from "../../../config"
import PostEntryMeta from "../PostEntryMeta"
import PostEntryTitle from "../PostEntryTitle"
import PostEntryMedia from "../PostEntryMedia"

const PostEntry = ({ post }) => {
  return (
    <article className="post type-post">
      <div className="post-wrapper">
        <header className="entry-header top-spacer bottom-spacer">
          <PostEntryTitle
            post={post}
            location="blog"
            titleClass="entry-title h1"
          />
          <PostEntryMeta post={post} location="blog" />
        </header>
        {post.featuredImage && <PostEntryMedia post={post} />}
        <div
          className="entry-content"
          dangerouslySetInnerHTML={{
            __html: post.content.replace(config.wordPressUrl, ``),
          }}
        />
      </div>
    </article>
  )
}

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
    content: excerpt
    author {
      name
      slug
      avatar(size: 100) {
        url
      }
    }
  }
`
