import React from "react";
import SummaryCard from "./SummaryCard";
import CalendarView from "./CalendarView";
import LowStockAlerts from "./LowStockAlerts";
import MotivationBox from "./MotivationBox";

export default function Dashboard() {
    return (
        <>
            {/* TOP 4 BOXES */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px"
            }}>
                <SummaryCard title="Total Orders" value="128" subValue="18 this month" />
                <SummaryCard title="Total Profit" value="₹42,500" subValue="₹8,300 this month" />
                <SummaryCard title="Total Expenses" value="₹21,400" subValue="₹4,900 this month" />
                <SummaryCard title="Total Assets" value="₹1,20,000" subValue="Current Value" />
            </div>

            {/* CALENDAR + LOW STOCK */}
            <div style={{
                marginTop: "20px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px"
            }}>
                <CalendarView />
                <LowStockAlerts />
            </div>

            {/* MOTIVATION BOX */}
            <div style={{ marginTop: "20px" }}>
                <MotivationBox />
            </div>
        </>
    )
}