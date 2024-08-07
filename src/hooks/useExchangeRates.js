import { useCallback, useEffect, useState } from "react"
import { getExchangeRates } from "../services/exchangeRates.js"

export function useExchangeRates() {

const [price, setPrice] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)

const loadDollarPrice = useCallback (async () => {
  try {
    setLoading(true)
    setError(null)
    const dollarPrice = await getExchangeRates()
    setPrice(dollarPrice)
  } catch (e) {
    setError(e.message)
  } finally {
    setLoading(false)
  }
}, [])

useEffect(() => {
  loadDollarPrice()
}, [loadDollarPrice]);
  
  return { price, loading, error }
}
