
import ButtonCategories from "./ButtonCategories"

const Navbar = () => {
  return (
    <nav className="flex flex-row flex-nowrap justify-center space-x-2 py-2 bg-sky-500">
      <section className="flex flex-row justify-center space-x-4 w-2/3">
        <ButtonCategories />
        <button className="btn-nav">Ofertas</button>
        <button className="btn-nav">Marcas</button>
        <button className="btn-nav">Nosotros</button>
        <button className="btn-nav">Contactanos</button>

      </section>
      <section className="flex flex-row justify-center space-x-4 w-1/3 h-10">
        <button className="btn-nav">Creta tu cuenta</button>
        <button className="font-semibold text-sm bg-indigo-600 rounded-lg text-white w-full max-w-24 h-full max-h-10">Ingresa</button>
      </section>
    </nav>
  )
}

export default Navbar