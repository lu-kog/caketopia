import React from "react";

function InventoryHeader({ onAddNew }) {
  return (
    <header className="h-16 bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark flex items-center justify-between px-6 flex-shrink-0">
      <h2 className="text-2xl font-bold text-text-light-primary dark:text-dark-primary">
        Inventory
      </h2>
      <button
        onClick={onAddNew}
        className="bg-primary text-white font-medium py-2 px-4 rounded-lg flex items-center text-sm shadow-sm hover:opacity-90 transition-opacity"
      >
        <span className="material-symbols-outlined text-base mr-2">add</span>
        Add New Item
      </button>
    </header>
  );
}

export default InventoryHeader;