import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data";
import ProductCard from "../components/productCard";

const Products = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (!storedEmail) {
      navigate("/");
    } else {
      setEmail(storedEmail);
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      {email && (
        <div className="absolute top-4 right-6 bg-white px-4 py-2 rounded shadow text-gray-700 font-semibold">
          {email}
        </div>
      )}
      <h1 className="text-3xl font-bold mb-6 text-center">Product Reviews</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;