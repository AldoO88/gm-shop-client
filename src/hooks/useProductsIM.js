import { useCallback, useEffect, useState } from "react";
import  productsIMService  from "../services/productsIngram.service";

export const useProductsIM = () => {

  const [productsIM, setProductsIM] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadProductsIM = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const newProductsIM = await productsIMService.getAllProductsIM();
      setProductsIM(newProductsIM.data.catalog);
    }
    catch (e) {
      setError(e.message);
    }
    finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProductsIM();
  }, [loadProductsIM]);

  return { productsIM, loading, error };
}
