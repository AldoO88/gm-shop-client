import { useCallback, useEffect, useState } from "react"
import { allProducts } from "../services/products"

export function useProducts() {

const [products, setProducts] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)

const loadProducts = useCallback( async () => {
  try {
    setLoading(true)
    setError(null)
    const newProducts = await allProducts()
    setProducts(newProducts)
  } catch (e) {
    setError(e.message)
  } finally {
    setLoading(false)
  }
}, [])

useEffect(() => {
  loadProducts()
}, [loadProducts]);
  
  return { products, loading, error }
}
