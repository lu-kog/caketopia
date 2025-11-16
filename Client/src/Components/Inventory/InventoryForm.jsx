import React from "react";

// Stub: Modal or panel for add/edit
function InventoryForm({ visible, onClose, onSubmit, initialData }) {
  if (!visible) return null;

  // TODO: Implement modal form with inputs for name, qty, unit, price/unit, etc.
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded shadow-lg w-full max-w-md">
        <h3 className="text-lg font-bold mb-4">Add/Edit Inventory Item</h3>
        {/* Form goes here */}
        <button onClick={onClose} className="mt-4 px-4 py-2 rounded bg-primary text-white">Close</button>
      </div>
    </div>
  );
}

export default InventoryForm;