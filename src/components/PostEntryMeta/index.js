import React from "react"
import moment from "moment/moment"
import { Link } from "gatsby"

const PostEntryMeta = ({ post }) => (
  <div className="entry-meta flex items-center medium header-font gray">
    <span className="posted-on">
      <span class="screen-reader-text">Posted on</span>
      <Link to={`/blog/${post.uri}`} className="posted-on--published">
        <span>Published</span>
        <time className="updated" datetime={post.date}>
          {" "}
          {moment(post.date).format(`MMMM D, YYYY`)}
        </time>
        <time className="entry-date published" datetime={post.date}>
          {" "}
          {moment(post.date).format(`MMMM D, YYYY`)}
        </time>
      </Link>
    </span>
    <span className="byline">
      <span>
        by
        <span className="author vcard">
          <Link to={`/author/${post.author.slug}`} className="url fn n">
            {` ${post.author.name}`}
          </Link>
        </span>
      </span>
    </span>
  </div>
)

export default PostEntryMeta
