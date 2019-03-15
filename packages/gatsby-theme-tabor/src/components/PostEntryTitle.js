import React from "react"
import { Link } from "gatsby"

const PostEntryTitle = ({ post, location, titleClass }) => (
  <>
    {location === "single" ? (
      <h1 className={titleClass}>{post.title}</h1>
    ) : (
      <h2 className={titleClass}>
        <Link to={`/blog/${post.uri}`}>{post.title}</Link>
      </h2>
    )}
  </>
)

export default PostEntryTitle
