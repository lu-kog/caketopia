import React, { useState } from "react";
import OrderModal from "./OrderModal";
import AddOrderForm from "./AddOrderForm";
import OrderCard from "./OrderCard";

export default function Orders() {
    const [activeTab, setActiveTab] = useState("upcoming");
    const [search, setSearch] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");
    const [filterCake, setFilterCake] = useState("All");
    const [filterDate, setFilterDate] = useState("");
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);

    // Temporary sample data
    const upcomingOrders = [
        {
            id: 1,
            cake: "Chocolate Truffle",
            flavor: "Dark Chocolate",
            delivery: "2025-11-20",
            customer: "Priya",
            phone: "9876543210",
            status: "Pending",
            notes: "Include birthday topper",
            review: ""
        },
        {
            id: 2,
            cake: "Red Velvet",
            flavor: "Cream Cheese",
            delivery: "2025-11-22",
            customer: "Arun",
            phone: "9090909090",
            status: "Pending",
            notes: "Write 'Happy Anniversary'",
            review: ""
        }
    ];

    const completedOrders = [
        {
            id: 10,
            cake: "Vanilla Classic",
            flavor: "Fresh Cream",
            delivery: "2025-11-10",
            customer: "Meena",
            phone: "8888888888",
            status: "Delivered",
            notes: "",
            review: "Amazing taste! ⭐⭐⭐⭐⭐"
        }
    ];

    const data = activeTab === "upcoming" ? upcomingOrders : completedOrders;

    // FILTER LOGIC
    const filteredData = data.filter(order => {
        const matchesSearch =
            order.cake.toLowerCase().includes(search.toLowerCase()) ||
            order.customer.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            filterStatus === "All" || order.status === filterStatus;

        const matchesCake =
            filterCake === "All" || order.cake === filterCake;

        const matchesDate =
            filterDate === "" || order.delivery === filterDate;

        return matchesSearch && matchesStatus && matchesCake && matchesDate;
    });

    return (
        <div style={{ padding: "20px" }}>

            {/* HEADER */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Orders</h2>

                <button
                    onClick={() => setShowAddForm(true)}
                    style={{
                        padding: "10px 14px",
                        background: "#4f46e5",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer"
                    }}
                >
                    + Add New Order
                </button>
            </div>

            {/* TABS */}
            <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                <button
                    onClick={() => setActiveTab("upcoming")}
                    style={{
                        padding: "10px 14px",
                        border: "none",
                        borderBottom:
                            activeTab === "upcoming" ? "3px solid #4f46e5" : "2px solid #ccc",
                        background: "none",
                        cursor: "pointer"
                    }}
                >
                    Upcoming
                </button>

                <button
                    onClick={() => setActiveTab("completed")}
                    style={{
                        padding: "10px 14px",
                        border: "none",
                        borderBottom:
                            activeTab === "completed" ? "3px solid #4f46e5" : "2px solid #ccc",
                        background: "none",
                        cursor: "pointer"
                    }}
                >
                    Completed
                </button>
            </div>

            {/* SEARCH & FILTERS */}
            <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        flex: 2,
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #ccc"
                    }}
                />

                <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    style={{
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #ccc"
                    }}
                >
                    <option value="All">Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Delivered">Delivered</option>
                </select>

                <select
                    value={filterCake}
                    onChange={(e) => setFilterCake(e.target.value)}
                    style={{
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #ccc"
                    }}
                >
                    <option value="All">Cake Type</option>
                    <option value="Chocolate Truffle">Chocolate Truffle</option>
                    <option value="Red Velvet">Red Velvet</option>
                    <option value="Vanilla Classic">Vanilla Classic</option>
                </select>

                <input
                    type="date"
                    value={filterDate}
                    onChange={(e) => setFilterDate(e.target.value)}
                    style={{
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #ccc"
                    }}
                />
            </div>

            {/* ORDER CARDS */}
            <div
                style={{
                    marginTop: "20px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "20px"
                }}
            >
                {filteredData.map(order => (
                    <div key={order.id}>
                        <OrderCard order={order} onView={(order) => setSelectedOrder(order)} />
                    </div>
                ))}
            </div>

            {/* MODAL */}
            {selectedOrder && (
                <OrderModal
                    order={selectedOrder}
                    onClose={() => setSelectedOrder(null)}
                />
            )}

            {/* ADD ORDER FORM */}
            {showAddForm && (
                <AddOrderForm onClose={() => setShowAddForm(false)} />
            )}
        </div>
    );
}
