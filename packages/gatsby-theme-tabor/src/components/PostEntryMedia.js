import React from "react"
import { Link } from "gatsby"

const WithLink = ({ post, location, children }) =>
  location === "single" ? (
    children
  ) : (
    <Link
      className="post-thumbnail"
      to={`/blog/${post.uri}`}
      aria-hidden="true"
    >
      {children}
    </Link>
  )

const PostEntryMedia = ({ post, location }) => (
  <div className="entry-media bottom-spacer center-align">
    <WithLink location={location} post={post}>
      <div
        className="entry-media__figure-wrapper margin-auto"
        style={{ maxWidth: 1736 }}
      >
        <figure>
          <img
            src={post.featuredImage.sourceUrl}
            alt={post.title}
            className="lazyload initial loaded"
            sizes="90vw, (min-width: 600px) 90vw, 60vw"
          />
        </figure>
      </div>
    </WithLink>
  </div>
)

export default PostEntryMedia
