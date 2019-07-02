import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination">
      <ul className="pagination-list">
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              className={`pagination-link ${
                currentPage === number ? "is-current" : ""
              }`}
              onClick={() => paginate(number)}
              aria-label={number}
              aria-current="page">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
