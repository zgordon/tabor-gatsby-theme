import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Headroom from "react-headroom"
import ShareIcons from "./ShareIcons"

const POSTS_QUERY = graphql`
  query GET_POSTS {
    wpgraphql {
      posts(first: 10000000) {
        nodes {
          title
          id
          uri
          featuredImage {
            sourceUrl
          }
        }
      }
    }
  }
`

const findNextPost = (post, data) => {
  const posts = data.wpgraphql.posts.nodes
  const currentPostIndex = posts.findIndex(item => item.id === post.id)
  return posts[currentPostIndex + 1]
}

const EngagementBar = ({ post }) => (
  <StaticQuery
    query={POSTS_QUERY}
    render={data => {
      const nextPost = findNextPost(post, data)
      return (
        <div
          id="engagement-bar"
          className="bar drop-in drop-in--from-bottom drop-in-style-2 drop-in--js drop-in--pinned drop-in--top"
        >
          <div className="container max-width flex justify-between">
            <ShareIcons />

            <div className="flex items-center justify-end relative">
              {nextPost.featuredImage && (
                <div className="thumbnail">
                  <img
                    src={nextPost.featuredImage.sourceUrl}
                    alt={nextPost.title}
                    className="attachment-tabor-featured-image-xsm size-tabor-featured-image-xsm wp-post-image initial loaded"
                  />
                </div>
              )}
              <div className="site-minibar__right-content justify-end">
                <span className="up-next h6 header-font medium smooth gray">
                  Up Next
                </span>
                <h4 className="title h5 medium-bold">{nextPost.title}</h4>
                <Link
                  to={`/blog/${nextPost.uri}`}
                  rel="bookmark"
                  title={nextPost.title}
                >
                  <span className="screen-reader-text">{nextPost.title}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  />
)

export default EngagementBar
