import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

const solutions = [
  { name: 'Videovigilancia', href: '#', icon: ChartPieIcon },
  { name: 'Acceso & Asistencia', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Alarmas & Intrusión', href: '#', icon: FingerPrintIcon },
  { name: 'Incendio', href: '#', icon: SquaresPlusIcon },
  { name: 'Almacenamiento', href: '#', icon: ArrowPathIcon },
  { name: 'Redes', href: '#', icon: FingerPrintIcon },
  { name: 'Cableado Estructurado', href: '#', icon: SquaresPlusIcon },
  { name: 'Audio & Video', href: '#', icon: ArrowPathIcon },
  { name: 'Fuentes de Energia', href: '#', icon: FingerPrintIcon },
  { name: 'Varios', href: '#', icon: SquaresPlusIcon },
]

const ButtonCategories = () => {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center py-2 gap-x-1 text-sm font-semibold leading-6 text-white hover:text-gray-900">
        <span>Solutions</span>
        <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            {solutions.map((item) => (
              <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex h-6 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                </div>
                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </PopoverPanel>
    </Popover>
  )
}

export default ButtonCategories;
