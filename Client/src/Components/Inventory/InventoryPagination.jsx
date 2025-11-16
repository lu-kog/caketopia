import React from "react";
import "./InventoryPagination.css";

function InventoryPagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;
  const pages = Array.from({length:totalPages},(_,i)=>i+1);
  return (
    <div className="pagination-row">
      <span>Showing { (page-1)*5 + 1 }-{ Math.min(page*5, totalPages*5) } of {totalPages*5}</span>
      <div>
        <button className="pagination-btn" disabled={page===1} onClick={()=>onPageChange(page-1)}>Previous</button>
        {pages.map(p=>(
          <button
            key={p}
            className={"pagination-btn" + (p===page ? " active" : "")}
            onClick={()=>onPageChange(p)}
          >{p}</button>
        ))}
        <button className="pagination-btn" disabled={page===totalPages} onClick={()=>onPageChange(page+1)}>Next</button>
      </div>
    </div>
  );
}
export default InventoryPagination;