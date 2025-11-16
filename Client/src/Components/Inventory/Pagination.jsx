import React from "react";
import "./Inventory.css";

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage
}) {
  return (
    <div className="inv-pagination">
      <button
        className="inv-page-btn"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>

      <span className="inv-page-info">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="inv-page-btn"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
