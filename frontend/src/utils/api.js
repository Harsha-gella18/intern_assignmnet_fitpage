const API_BASE = `${import.meta.env.VITE_API_URL || ''}/api/reviews`;

export async function submitReview(data) {
  console.log("submitReview called with data:", data); 
  try {
    const res = await fetch(`${API_BASE}/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }
    const json = await res.json();
    return json;
  } catch (err) {
    console.error("fetch error in submitReview:", err); 
    throw err;
  }
}

export async function fetchReviews(productId) {
  const res = await fetch(`${API_BASE}/product/${productId}`);
  if (!res.ok) return [];
  console.log("HarshaGella");
  return res.json();
}