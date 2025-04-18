
import ButtonCategories from "./ButtonCategories"

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-center py-2 space-x-2 flex-nowrap bg-sky-500">
      <section className="flex flex-row justify-center w-2/3 space-x-4">
        <ButtonCategories />
        <button className="btn-nav">Ofertas</button>
        <button className="btn-nav">Marcas</button>
        <button className="btn-nav">Nosotros</button>
        <button className="btn-nav">Contactanos</button>

      </section>
      <section className="flex flex-row justify-center w-1/3 h-10 space-x-4">
        <button className="btn-nav">Creta tu cuenta</button>
        <button className="w-full h-full text-sm font-semibold text-white bg-indigo-600 rounded-lg max-w-24 max-h-10">Ingresa</button>
      </section>
    </nav>
  )
}

export default Navbar