import React from "react"
import moment from "moment/moment"
import { Link } from "gatsby"

const PostEntryMeta = ({ post }) => (
  <div className="entry-meta">
    <span className="posted-on">
      <Link to={`/blog/${post.uri}`}>
        <time className="entry-date" datetime={post.date}>
          {moment(post.date).format(`MMMM D, YYYY`)}
        </time>
      </Link>
    </span>
    <span className="byline">
      <span>
        by
        <span className="author">
          <Link to={`/blog/author/${post.author.slug}`}>
            {`  ${post.author.name}`}
          </Link>
        </span>
      </span>
    </span>
  </div>
)

export default PostEntryMeta
