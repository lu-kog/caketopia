const API_URL = "http://localhost:5000/api/inventory"; 
// change if your backend uses different port

export async function getInventory() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch inventory");
  return await res.json();
}

export async function addItem(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to add item");
  return await res.json();
}

export async function updateItem(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update item");
  return await res.json();
}

export async function deleteItem(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete item");
  return await res.json();
}
