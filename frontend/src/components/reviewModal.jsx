import { useState } from "react";
import { submitReview } from "../utils/api";

const ReviewModal = ({ open, onClose, product, onReviewSubmitted }) => {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    try {
      const email = localStorage.getItem("userEmail");
      const res = await submitReview({
        product_id: product.id,
        email,
        rating,
        review,
      });
      setMsg(res.message || "Review submitted!");
      setReview("");
      if (onReviewSubmitted) onReviewSubmitted();
      onClose();
    } catch (err) {
      setMsg(err?.error || "Error submitting review");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">Leave a Review for {product.name}</h3>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Rating:
            <select
              className="ml-2 border rounded px-2 py-1"
              value={rating}
              onChange={e => setRating(Number(e.target.value))}
              required
            >
              {[5, 4, 3, 2, 1].map(val => (
                <option key={val} value={val}>{val}</option>
              ))}
            </select>
          </label>
          <label className="block mb-4">
            Review:
            <textarea
              className="w-full border rounded px-2 py-1 mt-1"
              value={review}
              onChange={e => setReview(e.target.value)}
              required
            />
          </label>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
        {msg && <div className="mt-2 text-center text-green-600">{msg}</div>}
      </div>
    </div>
  );
};

export default ReviewModal;