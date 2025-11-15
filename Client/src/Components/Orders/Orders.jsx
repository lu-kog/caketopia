import React, { useState } from "react";
import "./Orders.css";

const statusOptions = ["All", "Pending", "Costing", "Out for Delivery", "Delivered"];

const initialOrders = [
  {
    id: 101,
    orderDate: "2025-11-15",
    customer: "Alice",
    phone: "1234567890",
    deliveryDate: "2025-11-17",
    status: "Pending",
    notes: "Birthday cake, please add sprinkles.",
    review: "Delicious and beautiful!",
    items: [
      { name: "Vanilla Cake", qty: 1, price: null },
      { name: "Croissant", qty: 5, price: null }
    ]
  },
  {
    id: 102,
    orderDate: "2025-11-15",
    customer: "Bob",
    phone: "0987654321",
    deliveryDate: "2025-11-18",
    status: "Delivered",
    notes: "",
    review: "",
    items: [
      { name: "Baguette", qty: 2, price: 5 },
      { name: "Muffin", qty: 6, price: 2 }
    ]
  }
];

export default function Orders() {
  const [orders, setOrders] = useState(initialOrders);
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterDate, setFilterDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [editModeId, setEditModeId] = useState(null);

  const filteredOrders = orders.filter(order => {
    let matchesStatus = filterStatus === "All" || order.status === filterStatus;
    let matchesDate = !filterDate || order.orderDate === filterDate;
    let matchesSearch = !searchTerm || (
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toString().includes(searchTerm)
    );
    return matchesStatus && matchesDate && matchesSearch;
  });

  // For "Edit Mode", prepare controlled inputs and update logic
  const handleOrderEdit = (orderId, field, value) => {
    setOrders(orders => orders.map(o => (
      o.id === orderId
        ? { ...o, [field]: value }
        : o
    )));
  };

  const handleItemEdit = (orderId, idx, field, value) => {
    setOrders(orders => orders.map(o =>
      o.id === orderId
        ? {
            ...o,
            items: o.items.map((item, i) =>
              i === idx ? { ...item, [field]: value } : item
            )
          }
        : o
    ));
  };

  return (
    <div className="orders-container">
      {/* Filters Section */}
      <div className="orders-filters">
        <select
          className="orders-filter"
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value)}
        >
          {statusOptions.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
        <input
          type="date"
          className="orders-filter"
          value={filterDate}
          onChange={e => setFilterDate(e.target.value)}
        />
        <input
          type="text"
          className="orders-filter"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Quick search..."
        />
        <button className="orders-add-btn">+ Add New Order</button>
      </div>

      {/* Orders Table */}
      <table className="orders-table">
        <thead>
          <tr>
            <th></th>
            <th>Order ID</th>
            <th>Order Date</th>
            <th>Customer</th>
            <th>Phone</th>
            <th>Delivery Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => (
            <React.Fragment key={order.id}>
              <tr className="orders-row">
                <td
                  className="orders-expand-td"
                  onClick={() =>
                    setExpandedOrderId(expandedOrderId === order.id ? null : order.id)
                  }
                >
                  <span
                    className="orders-expand-icon"
                    title="Expand"
                    style={{
                      transform: expandedOrderId === order.id ? 'rotate(90deg)' : 'rotate(0deg)'
                    }}
                  >
                    ►
                  </span>
                </td>
                <td>{order.id}</td>
                <td>{order.orderDate}</td>
                <td>{order.customer}</td>
                <td>{order.phone}</td>
                <td>{order.deliveryDate}</td>
                <td>
                  <span className={`orders-status badge-${order.status.replace(/\s+/g, '').toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
              {expandedOrderId === order.id && (
                <tr>
                  <td colSpan={7} className="orders-expanded-container">
                    <div className="orders-expanded-content">
                      <div className="orders-expanded-header">
                        <span
                          className={`orders-toggle-mode${order.id === editModeId ? " selected" : ""}`}
                          onClick={() => setEditModeId(editModeId === order.id ? null : order.id)}
                        >
                          {editModeId === order.id ? "Edit Mode" : "View Mode"}
                        </span>
                      </div>

                      {/* Main Details */}
                      <div className="orders-expanded-main">
                        <div>
                          <span className="orders-label">Order Notes:</span>{" "}
                          {editModeId === order.id ? (
                            <textarea
                              rows={2}
                              value={order.notes}
                              onChange={e => handleOrderEdit(order.id, "notes", e.target.value)}
                              className="orders-input"
                            />
                          ) : (
                            order.notes || "None"
                          )}
                        </div>
                        <div>
                          <span className="orders-label">Review:</span>{" "}
                          {editModeId === order.id ? (
                            <textarea
                              rows={2}
                              value={order.review}
                              onChange={e => handleOrderEdit(order.id, "review", e.target.value)}
                              className="orders-input"
                            />
                          ) : (
                            order.review || "None"
                          )}
                        </div>
                      </div>

                      {/* Items Table */}
                      <div className="orders-items-table-wrap">
                        <table className="orders-items-table">
                          <thead>
                            <tr>
                              <th>Item Name</th>
                              <th>Qty</th>
                              <th>Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            {order.items.map((item, idx) => (
                              <tr key={`${item.name}${idx}`}>
                                <td>
                                  {editModeId === order.id ? (
                                    <input
                                      className="orders-input"
                                      type="text"
                                      value={item.name}
                                      onChange={e => handleItemEdit(order.id, idx, "name", e.target.value)}
                                    />
                                  ) : (
                                    item.name
                                  )}
                                </td>
                                <td>
                                  {editModeId === order.id ? (
                                    <input
                                      className="orders-input"
                                      type="number"
                                      value={item.qty}
                                      min={1}
                                      onChange={e => handleItemEdit(order.id, idx, "qty", parseInt(e.target.value) || 1)}
                                    />
                                  ) : (
                                    item.qty
                                  )}
                                </td>
                                <td>
                                  {editModeId === order.id ? (
                                    <input
                                      className="orders-input"
                                      type="number"
                                      value={item.price !== null ? item.price : ""}
                                      placeholder="NIL"
                                      min={0}
                                      onChange={e => handleItemEdit(order.id, idx, "price", e.target.value ? parseFloat(e.target.value) : null)}
                                    />
                                  ) : (
                                    item.price !== null ? `$${item.price}` : "NIL"
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="orders-actions-table">
                        <button
                          className="orders-btn orders-print-btn"
                          disabled={order.items.some(item => item.price === null)}
                        >
                          Print Bill
                        </button>
                        <button className="orders-btn orders-update-btn">Update Status</button>
                        {editModeId === order.id && (
                          <button className="orders-btn orders-save-btn" onClick={() => setEditModeId(null)}>
                            Save
                          </button>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
          {filteredOrders.length === 0 &&
            <tr>
              <td colSpan={7} className="orders-no-orders">No orders found.</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
}