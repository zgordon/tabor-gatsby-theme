import React, { Fragment } from "react"
import { graphql } from "gatsby"
import SiteLayout from "../components/SiteLayout"
import CategoriesWidget from "../components/CategoriesWidget"
import RecentCommentsWidget from "../components/RecentCommentsWidget"
import RecentPostsWidget from "../components/RecentPostsWidget"
import PostEntryMeta from "../components/PostEntryMeta"
import Seo from "../components/Seo"

const renderTermNodes = (nodes, title) => (
  <div>
    {title}
    {` `}
    {nodes.map(term => (
      <div className="tag">{term.name}</div>
    ))}
  </div>
)

const renderTerms = (categoryNodes = [], tagNodes = []) => (
  <>
    {categoryNodes ? renderTermNodes(categoryNodes, `Categories: `) : null}
    {tagNodes && tagNodes.length ? renderTermNodes(tagNodes, `Tags: `) : null}
  </>
)

const Post = props => {
  const {
    location,
    data: {
      wpgraphql: { post },
    },
  } = props
  const { title, content } = post
  return (
    <SiteLayout location={location}>
      <Seo title={`${post.title}`} />
      <div className="content">
        <h1 style={{ wordBreak: `break-all` }}>{title}</h1>

        <PostEntryMeta post={post} />

        <div
          style={{ wordBreak: `break-all` }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {post.categories.nodes.length || post.tags.nodes.length
          ? renderTerms(post.categories.nodes, post.tags.nodes)
          : null}
      </div>
      <div className="sidebar">
        <RecentPostsWidget />
        <CategoriesWidget />
        <RecentCommentsWidget />
      </div>
    </SiteLayout>
  )
}

export default Post

export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
        uri
        author {
          name
          slug
          avatar {
            url
          }
        }
        tags {
          nodes {
            name
            link
          }
        }
        categories {
          nodes {
            name
            link
          }
        }
      }
    }
  }
`
