import React, { useState } from "react";
import Calendar from "react-calendar";

export default function CalendarView() {
    const [value, setValue] = useState(new Date());

    return (
        <div style={{
            padding: "20px",
            borderRadius: "12px",
            background: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}>
            <h3 style={{ marginBottom: "10px" }}>Upcoming Orders</h3>

            <Calendar onChange={setValue} value={value} />

            <div style={{ marginTop: "10px", color: "#555" }}>
                <p><b>Selected Date:</b> {value.toDateString()}</p>
                {/* Later we will show orders here */}
            </div>
        </div>
    );
}
