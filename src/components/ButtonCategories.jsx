import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

const categories = [
  { name: 'Videovigilancia', href: '#', icon: ChartPieIcon },
  { name: 'Acceso & Asistencia', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Alarmas & Intrusión', href: '#', icon: FingerPrintIcon },
  { name: 'Incendio', href: '#', icon: SquaresPlusIcon },
  { name: 'Almacenamiento', href: '#', icon: ArrowPathIcon },
  { name: 'Redes', href: '#', icon: FingerPrintIcon },
  { name: 'Cableado Estructurado', href: '#', icon: SquaresPlusIcon },
  { name: 'Audio & Video', href: '#', icon: ArrowPathIcon },
  { name: 'Fuentes de Energia', href: '#', icon: FingerPrintIcon },
  { name: 'Energía Solar', href: '#', icon: FingerPrintIcon },
  { name: 'Varios', href: '#', icon: SquaresPlusIcon },
]

const ButtonCategories = () => {
  return (
    <div className="relative group">
      <button
        className="inline-flex items-center justify-center text-sm font-semibold leading-6 text-white gap-x-1 w-40 h-8 rounded-md hover:bg-[#578FCA] transition-colors"
        onMouseEnter={(e) => {
          // Forzar la apertura del popover al hacer hover
          e.currentTarget.click()
        }}
      >
        <span>Categorias</span>
        <ChevronDownIcon 
          aria-hidden="true" 
          className="w-5 h-5 transition-transform duration-200 group-hover:rotate-180" 
        />
      </button>

      <div className="absolute left-0 z-10 w-64 transition-all duration-200 ease-out transform -translate-y-2 opacity-0 pointer-events-none top-full group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
        <div className="overflow-hidden text-sm leading-6 bg-white shadow-lg rounded-3xl ring-1 ring-gray-900/5">
          <div className="p-4">
            {categories.map((item) => (
              <div key={item.name} className="relative flex p-4 rounded-lg hover:bg-gray-50 gap-x-6">
                <div className="flex flex-row items-center justify-center flex-none h-6 mt-1 rounded-lg w-11 bg-gray-50 group-hover:bg-white">
                  <item.icon aria-hidden="true" className="w-6 h-6 text-gray-600 group-hover:text-indigo-600" />
                </div>
                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonCategories