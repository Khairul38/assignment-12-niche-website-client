import { useEffect } from "react";
import { useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://assignment-12-niche-website-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);
  return { products, setProducts, loading };
};

export default useProducts;
