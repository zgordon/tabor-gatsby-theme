import React from "react"
import { Link } from "gatsby"

const Pagination = ({ pageNumber, hasNextPage, allPosts, itemsPerPage }) => (
  <div className="pagination">
    <h3>Pagination</h3>
    {pageNumber > 1 && (
      <button>
        <Link to={pageNumber > 2 ? `/page/${pageNumber - 1}` : `/`}>
          Previous Posts
        </Link>
      </button>
    )}

    {Array.from({ length: allPosts.length / itemsPerPage }, (_, i) => (
      <Link
        key={`pagination-number${i + 1}`}
        to={i === 0 ? "/" : `/page/${i + 1}`}
      >
        {i + 1}
      </Link>
    ))}
    {hasNextPage && (
      <button>
        <Link to={`page/${pageNumber + 1}`}>Next Posts</Link>
      </button>
    )}
  </div>
)

export default Pagination
