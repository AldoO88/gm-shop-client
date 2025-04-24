import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
const Example = () => {
  return (
    <div>
      <div className="relative m-2 shadow-sm unded-md ">
        <input
          id="price"
          name="price"
          type="text"
          placeholder="¿Qué estas buscando?"
          className="block w-full py-2 pr-20 text-gray-900 border-0 rounded-md pl-7 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
        />
        <div className="absolute inset-y-0 right-0 flex items-center justify-items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <button
            id="currency"
            name="currency"
            className="h-full py-2 pl-2 pr-10 text-gray-500 bg-transparent border-0 rounded-md sm:text-sm"
          >
            <MagnifyingGlassIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Example
