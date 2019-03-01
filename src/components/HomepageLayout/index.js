import React from "react"
import SiteHeader from "../../components/SiteHeader"

const HomepageLayout = ({ pageNumber, location, children }) => (
  <>
    <SiteHeader location={location} />

    <div className="content">{children}</div>
  </>
)

export default HomepageLayout
