import React from "react";

export default function OrderModal({ order, onClose }) {
    return (
        <div style={{
            position: "fixed",
            top: 0, left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{
                width: "400px",
                background: "white",
                padding: "20px",
                borderRadius: "12px"
            }}>
                <h2>{order.cake}</h2>
                <p><b>Flavor:</b> {order.flavor}</p>
                <p><b>Delivery:</b> {order.delivery}</p>
                <p><b>Customer:</b> {order.customer}</p>
                <p><b>Phone:</b> {order.phone}</p>
                <p><b>Status:</b> {order.status}</p>

                {order.notes && <p><b>Notes:</b> {order.notes}</p>}
                {order.review && <p><b>Review:</b> {order.review}</p>}

                <button
                    onClick={onClose}
                    style={{
                        marginTop: "10px",
                        padding: "10px",
                        background: "#4f46e5",
                        color: "white",
                        border: "none",
                        borderRadius: "8px"
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    );
}
