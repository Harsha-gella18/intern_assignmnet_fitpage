import { useState, useEffect } from "react";
import ReviewModal from "./reviewModal";
import ReviewList from "./reviewList";
import { fetchReviews } from "../utils/api";

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const [userReviewed, setUserReviewed] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(0);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    fetchReviews(product.id).then(reviews => {
      setUserReviewed(reviews.some(r => r.email === email));
    });
  }, [product.id, refreshFlag]);

  const handleReviewSubmitted = () => {
    setRefreshFlag(f => f + 1);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col">
      <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      {!userReviewed && (
        <button
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={() => setShowModal(true)}
        >
          Leave a Review
        </button>
      )}
      <ReviewModal
        open={showModal}
        onClose={() => setShowModal(false)}
        product={product}
        onReviewSubmitted={handleReviewSubmitted}
      />
      <div className="mt-4">
        <ReviewList productId={product.id} refreshFlag={refreshFlag} />
      </div>
    </div>
  );
};

export default ProductCard;