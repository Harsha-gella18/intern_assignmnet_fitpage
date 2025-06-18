import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Products from "./pages/products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;