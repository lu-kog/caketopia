import React, { useEffect, useState, useRef } from "react";
import { getInventory } from "../../services/inventoryApi";
import InventoryTable from "./InventoryTable";
import Pagination from "./Pagination";
import "./Inventory.css";

export default function InventoryPage() {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");
    const [showLowStock, setShowLowStock] = useState(false);
    const [adding, setAdding] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const tableRef = useRef(null);

    useEffect(() => {
        loadItems();
        calculateRowsPerPage();
        window.addEventListener("resize", calculateRowsPerPage);

        return () => window.removeEventListener("resize", calculateRowsPerPage);
    }, []);

    async function loadItems() {
        const data = await getInventory();
        setItems(data);
    }

    function calculateRowsPerPage() {
        setRowsPerPage(9);
    }

    // FILTER ITEMS
    const filteredItems = items.filter((item) => {
        const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
        const matchLow =
            showLowStock ? item.stock < item.low_stock_threshold : true;
        return matchSearch && matchLow;
    });

    // PAGINATION
    const indexOfLast = currentPage * rowsPerPage;
    const indexOfFirst = indexOfLast - rowsPerPage;
    const paginatedItems = filteredItems.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(filteredItems.length / rowsPerPage);

    const totalWorth = items.reduce(
        (sum, item) => sum + item.stock * item.price_per_unit,
        0
    );

    return (
        
        <div className="inv-page">
            <h1>Inventory</h1>
            {/* Stats */}
            <div className="inv-stats-container">
                <div className="inv-stat-box">
                    <p className="inv-stat-label">Number of Items</p>
                    <p className="inv-stat-value">{items.length}</p>
                </div>

                <div className="inv-stat-box">
                    <p className="inv-stat-label">Inventory Worth</p>
                    <p className="inv-stat-value">₹{totalWorth.toFixed(2)}</p>
                </div>
            </div>

            {/* Search + Filter */}
            <div className="inv-toolbar">
                <div className="inv-search-wrapper">
                    <span className="material-symbols-outlined inv-search-icon">search</span>
                    <input
                        type="text"
                        placeholder="Search items..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setCurrentPage(1); // reset page on search
                        }}
                        className="inv-search-input"
                    />
                </div>

                <label className="inv-checkbox-label">
                    <input
                        type="checkbox"
                        checked={showLowStock}
                        onChange={() => {
                            setShowLowStock(!showLowStock);
                            setCurrentPage(1);
                        }}
                        className="inv-checkbox"
                    />
                    Show low stock items only
                </label>

                <button
                    className="inv-add-btn"
                    onClick={() => setAdding(true)}
                >
                    + Add New Item
                </button>
            </div>

            {/* Table */}
            <div className="inv-table-container" ref={tableRef}>
                <InventoryTable
                    items={paginatedItems}
                    adding={adding}
                    cancelAdd={() => setAdding(false)}
                    saveNew={(item) => {
                        setAdding(false);
                        loadItems(); // reload DB
                    }}
                />

            </div>

            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}
