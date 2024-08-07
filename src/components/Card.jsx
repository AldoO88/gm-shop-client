import { ShoppingCartIcon } from '@heroicons/react/20/solid' 

function formatCurrency(value) {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2
  }).format(value)
}

const Card = ( {product, price } ) => {

  return (
    <>
   
      
    <div className="card" key={product.id}>
      <div className=" h-[9rem] w-[8rem] ">
      <img 
        className="h-full w-full object-center "
        alt={product.name}
        src={product.image}
      />
      </div>
      <div className="p-1 flex flex-col gap-2">
        <div className="flex flex-col items-center gap-2">
          <div className='h-24'>
            <h2 className="product-title ...">
              {product.name}
            </h2>
          </div>
          <div className='flex flex-row gap-1'>
            <span className="badge">Disponible</span>
            <span className="badge">{product.stock}</span>
          </div>
          
          <div className="flex flex-row items-center gap-1 mt-1 py-2">
            <span className="text-xs line-through opacity-50 mb-1">MXN</span>
            <span className="text-sm line-through opacity-50"> 
              {formatCurrency(`${product.price * price.dollarPrice}`)}
            </span>
            <span className="discount-percent">
              20% OFF
            </span>
          </div>
          <div>
            <span className="text-sm font-bold">MXN </span>
            <span className="text-xl font-bold">
              {formatCurrency(`${product.distribuidor_price * price.dollarPrice}`)}
          </span>
          </div>
          
        </div>

        <div className="mt-2 flex justify-center gap-1">
        <button className="button-add-cart">
          <span>Agregar</span> <ShoppingCartIcon className="h-4 w-4" />
        </button>

        </div>

      </div>
    </div>

  </>
  )
}

export default Card