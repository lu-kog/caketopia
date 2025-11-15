import React, { useState } from "react";

export default function AddOrderForm({ onClose }) {
    const [form, setForm] = useState({
        cake: "",
        flavor: "",
        delivery: "",
        customer: "",
        phone: "",
        notes: ""
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit() {
        console.log("New Order:", form);
        alert("Order Added!");
        onClose();
    }

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
                width: "420px",
                background: "white",
                padding: "20px",
                borderRadius: "12px"
            }}>

                <h2>Add New Order</h2>

                <input name="cake" placeholder="Cake Type"
                    onChange={handleChange}
                    style={inputStyle} />

                <input name="flavor" placeholder="Flavor"
                    onChange={handleChange}
                    style={inputStyle} />

                <input name="delivery" type="date"
                    onChange={handleChange}
                    style={inputStyle} />

                <input name="customer" placeholder="Customer Name"
                    onChange={handleChange}
                    style={inputStyle} />

                <input name="phone" placeholder="Phone Number"
                    onChange={handleChange}
                    style={inputStyle} />

                <textarea name="notes" placeholder="Notes"
                    onChange={handleChange}
                    style={{ ...inputStyle, height: "80px" }} />

                <button
                    onClick={handleSubmit}
                    style={{
                        padding: "10px",
                        width: "100%",
                        marginTop: "10px",
                        background: "#4f46e5",
                        color: "white",
                        border: "none",
                        borderRadius: "8px"
                    }}
                >
                    Submit
                </button>

                <button
                    onClick={onClose}
                    style={{
                        marginTop: "10px",
                        padding: "8px",
                        width: "100%",
                        border: "1px solid #aaa",
                        borderRadius: "8px"
                    }}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc"
};
