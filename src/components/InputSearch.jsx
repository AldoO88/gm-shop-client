import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
const Example = () => {
  return (
    <div>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          id="price"
          name="price"
          type="text"
          placeholder="¿Qué estas buscando?"
          className="block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
        />
        <div className="flex absolute inset-y-0 right-0 items-center justify-items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <button
            id="currency"
            name="currency"
            className="py-2 h-full rounded-md border-0 bg-transparent pl-2 pr-10 text-gray-500 sm:text-sm"
          >
            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Example
