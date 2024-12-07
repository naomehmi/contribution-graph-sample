import { ListboxOptions } from '@headlessui/react'

export default function ShowAllOptions ({ children }) {
    return (
        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
            { children }
        </ListboxOptions>
    );
}