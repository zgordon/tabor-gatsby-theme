import React from "react"
import { graphql } from "gatsby"
import SiteLayout from "../components/SiteLayout"
import CategoriesWidget from "../components/CategoriesWidget"
import RecentCommentsWidget from "../components/RecentCommentsWidget"
import RecentPostsWidget from "../components/RecentPostsWidget"
import Seo from "../components/Seo"

const Page = props => {
  const {
    location,
    data: {
      wpgraphql: { page },
    },
  } = props
  const { title, content } = page
  return (
    <SiteLayout location={location}>
      <Seo title={`${page.title}`} />
      <article>
        <div className="page-wrapper">
          <header className="entry-header top-spacer bottom-spacer">
            <h1 className="entry-title h1">{title}</h1>
          </header>

          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </article>
    </SiteLayout>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        uri
      }
    }
  }
`
