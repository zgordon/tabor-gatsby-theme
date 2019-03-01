import React from "react"
import SiteLayout from "../components/SiteLayout"
import { graphql } from "gatsby"
import CategoriesWidget from "../components/CategoriesWidget"
import RecentCommentsWidget from "../components/RecentCommentsWidget"
import RecentPostsWidget from "../components/RecentPostsWidget"
import PostEntry from "../components/PostEntry"
import Seo from "../components/Seo"

const TagTemplate = props => {
  const {
    location,
    data: {
      wpgraphql: { tag },
    },
  } = props
  return (
    <SiteLayout location={location}>
      <Seo title={`${tag.title}`} />

      <h2>{tag.name}</h2>
      <div className="content">
        {tag.posts.nodes &&
          tag.posts.nodes.map(post => <PostEntry post={post} />)}
      </div>
      <div className="sidebar">
        <RecentPostsWidget />
        <CategoriesWidget />
        <RecentCommentsWidget />
      </div>
    </SiteLayout>
  )
}

export default TagTemplate

export const pageQuery = graphql`
  query GET_TAG($id: ID!) {
    wpgraphql {
      tag(id: $id) {
        id
        name
        slug
        posts(first: 100) {
          nodes {
            ...PostEntryFragment
          }
        }
      }
    }
  }
`
