import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    localStorage.setItem("userEmail", email);
    navigate("/products");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Enter your Email</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="you@example.com"
            className="border rounded-lg px-4 py-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Landing;