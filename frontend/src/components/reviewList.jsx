import { useEffect, useState } from "react";
import { fetchReviews } from "../utils/api";

const ReviewList = ({ productId, refreshFlag }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchReviews(productId)
      .then(data => { if (mounted) setReviews(data); })
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, [productId, refreshFlag]);

  if (loading) return <div>Loading reviews...</div>;
  if (!reviews.length) return <div>No reviews yet.</div>;

  return (
    <div>
      <h4 className="font-semibold mb-2">Reviews:</h4>
      <ul>
        {reviews.map((r, idx) => (
          <li key={idx} className="mb-2 border-b pb-2">
            <div className="flex items-center gap-2">
              <span className="font-bold">{r.email}</span>
              <span className="text-yellow-500">{"★".repeat(r.rating)}</span>
            </div>
            <div>{r.review}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;