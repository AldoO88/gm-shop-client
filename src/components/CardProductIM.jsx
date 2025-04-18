import { ShoppingCartIcon } from '@heroicons/react/20/solid' 


const CardProductIM = ( { product } ) => {

  return (
    <>
    <div className="card" key={product.ingramPartNumber}>
      <div className="h-[8rem] w-[6rem]">
      <img 
        className="object-cover w-full h-full"
        alt={product.vendorName}
        src={product.image}
      />
      </div>
      <div className="flex flex-col gap-2 p-1">
        <div className="flex flex-col items-center gap-2">
          <div className='h-24'>
            <h2 className="product-title">
              {product.description}
            </h2>
          </div>
          <div className='flex flex-row gap-1'>
            <span className="badge">Disponible</span>
            <span className="badge">{product.stock}</span>
          </div>
          
          <div className="flex flex-row items-center gap-1 py-2 mt-1">
            <span className="mb-1 text-xs line-through opacity-50">MXN</span>
            <span className="text-sm line-through opacity-50"> 
              {}
            </span>
            <span className="discount-percent">
              20% OFF
            </span>
          </div>
          <div>
            <span className="text-sm font-bold">MXN </span>
            <span className="text-xl font-bold">
              {}
          </span>
          </div>
          
        </div>

        <div className="flex justify-center gap-1 mt-2">
        <button className="button-add-cart">
          <span>Agregar</span> <ShoppingCartIcon className="w-4 h-4" />
        </button>

        </div>

      </div>
    </div>

  </>
  )
}

export default CardProductIM