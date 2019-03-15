import React from "react"
import { Link } from "gatsby"

//TODO: add svg icons and pages for screen readers

const Pagination = ({ pageNumber, hasNextPage, allPosts, itemsPerPage }) => (
  <nav className="pagination navigation" role="navigation">
    <h2 className="screen-reader-text">Posts navigation</h2>
    <div className="nav-links">
      {pageNumber > 1 && (
        <Link
          className="prev page-numbers"
          to={pageNumber > 2 ? `/page/${pageNumber - 1}` : `/`}
        >
          <span className="screen-reader-text">Previous page</span>
          Previous
        </Link>
      )}
      <span aria-current="page" className="page-numbers current">
        <span className="meta-nav screen-reader-text">Page </span>
        {pageNumber}
      </span>

      {hasNextPage && (
        <Link className="next page-numbers" to={`page/${pageNumber + 1}`}>
          <span className="screen-reader-text">Next page</span>
          Next
        </Link>
      )}
    </div>
  </nav>
)

export default Pagination
