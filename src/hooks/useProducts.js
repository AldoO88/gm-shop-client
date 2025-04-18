import { useCallback, useEffect, useState } from "react"
import { allProducts } from "../services/products"

export function useProducts(categoryId) {

const [products, setProducts] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)

const loadProducts = useCallback( async (categoryId) => {
  try {
    setLoading(true)
    setError(null)
    const newProducts = await allProducts(categoryId)
    setProducts(newProducts)
  } catch (e) {
    setError(e.message)
  } finally {
    setLoading(false)
  }
}, [])

useEffect(() => {
  loadProducts(categoryId)
}, [categoryId, loadProducts]);
  
  return { products, loading, error }
}
