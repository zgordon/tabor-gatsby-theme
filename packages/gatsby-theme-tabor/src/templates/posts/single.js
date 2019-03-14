import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import PostEntryTitle from "../../components/PostEntryTitle"

const SinglePost = props => {
  const {
    data: {
      wpgraphql: { post },
    },
  } = props
  const { id, postId, title, content } = post

  return (
    <Layout>
      <article
        data-id={id}
        id={`post-${postId}`}
        className={`post-${postId} post type-post status-publish format-standard hentry category-react tag-accessibility tag-gatsby entry`}
      >
        <header className="entry-header">
          <PostEntryTitle
            post={post}
            location="single"
            titleClass="entry-title"
          />
          <div className="entry-meta" />
          {/* .meta-info */}
        </header>

        <div
          className="entry-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {/* .entry-content */}

        <footer className="entry-footer" />
      </article>
      {/* #post-${ID} */}
    </Layout>
  )
}

export default SinglePost

export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        id
        postId
        content
        uri
        featuredImage {
          sourceUrl
          title
        }
        author {
          name
          slug
        }
        tags {
          nodes {
            name
            slug
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`
