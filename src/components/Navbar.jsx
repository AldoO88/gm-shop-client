import ButtonCategories from './ButtonCategories'
import InputSearch from './InputSearch'
import { UserCircleIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <nav className='flex flex-col'>
      <div className='flex flex-row h-[14px] bg-[#578FCA]'>
        
      </div>
      <div className='flex flex-row h-full bg-[#3674B5]'>
        <section className='flex flex-row items-center justify-center w-1/3 p-0 m-0'>
            <ButtonCategories/>
          </section>
          <section className='w-1/3 p-0 m-0'>
            <InputSearch />
          </section>
          <section className='flex flex-row items-center justify-center w-1/3 gap-8 p-0 m-0'>
            <button className='flex flex-row items-center justify-center w-48 gap-2 rounded-md cursor-pointer hover:bg-[#578FCA]'>
              <UserCircleIcon className='h-8 text-white w-7' />
              <span className='text-xs text-white'>Iniciar Sesión</span>
            </button>
            <buton className='flex flex-row items-center justify-center w-28 gap-1 rounded-md cursor-pointer hover:bg-[#578FCA]'>
              <HeartIcon className='h-8 text-white w-7' />
              <div className='flex flex-col'>
                <strong className='text-[8px] text-gray-200'>Mi lista </strong>
                <span className='text-xs text-white'>de deseos</span>
              </div>
            </buton>
            <buton className='flex flex-row items-center justify-center w-32 gap-1 rounded-md cursor-pointer hover:bg-[#578FCA]'>
              <ShoppingBagIcon className='h-8 text-white w-7' />
              <div className='flex flex-col'>
                <strong className='text-[8px] text-gray-200'>Mi bolsa </strong>
                <span className='text-xs text-white'>de compras</span>
              </div>
            </buton>
          </section>
      </div>
     
    </nav>
  )
}

export default Navbar;