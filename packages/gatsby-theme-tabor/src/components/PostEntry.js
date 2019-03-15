import React from "react"
import { graphql } from "gatsby"
import PostEntryTitle from "./PostEntryTitle"
import PostEntryMeta from "./PostEntryMeta"
import PostEntryMedia from "./PostEntryMedia"

const PostEntry = ({ post }) => {
  const excerpt = post.excerpt
    ? post.excerpt
    : `${post.content &&
        post.content
          .split(" ")
          .slice(0, 30)
          .join(" ")} ...`

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
        {post.featuredImage && <PostEntryMedia post={post} location="blog" />}
        <div
          className="entry-content"
          dangerouslySetInnerHTML={{
            __html: excerpt,
          }}
        />
      </div>
    </article>
  )
}

export default PostEntry
