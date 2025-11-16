import React, { useState, useEffect } from "react";
import "./InventoryPage.css";
import InventoryStats from "./InventoryStats";
import InventorySearchBar from "./InventorySearchBar";
import InventoryTable from "./InventoryTable";
import InventoryPagination from "./InventoryPagination";

function InventoryPage() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const itemsPerPage = 5;

  useEffect(() => {
    fetch("http://localhost:5000/api/inventory")
      .then(res => res.json())
      .then(setItems);
  }, []);

  // Filter and paginate
  const searchedItems = items.filter(item =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.max(1, Math.ceil(searchedItems.length / itemsPerPage));
  const displayedItems = searchedItems.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="inventory-page">
      <div className="page-top">
        <span className="page-title">Inventory</span>
        <button className="page-add-btn">
          <span className="material-symbols-outlined" style={{ marginRight: 7 }}>add</span>
          Add New Item
        </button>
      </div>
      <InventoryStats items={items} />
      <div className="inventory-table-box">
        <InventorySearchBar value={search} onChange={setSearch}/>
        <InventoryTable items={displayedItems}/>
        <InventoryPagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}

export default InventoryPage;