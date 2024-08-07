import { useProducts } from "../hooks/useProducts.js";
import { useExchangeRates } from '../hooks/useExchangeRates.js'
import Card from "../components/Card.jsx";

const Products = () => {  
  const { products, loading, error } = useProducts()
  const { price } = useExchangeRates()

  return (
    <>
    <h2>Videovigilancia</h2>
    <main className="flex flex-row flex-wrap items-center justify-center">
      {
        error ? <p>{error}</p> :
        loading ? <p>Cargando...</p> : <Card  products={products} price={price}/> 
      }
    </main>
    </>
  )
}

export default Products;