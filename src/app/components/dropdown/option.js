import { ListboxOption } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';

export default function Option ({ value, children }) {
    return (
        <ListboxOption
            value={ value }
            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-pink-600 data-[focus]:text-white data-[focus]:outline-none"
        >
            { children }
            
            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-pink-600 group-[&:not([data-user])]:hidden group-data-[focus]:text-white">
            <CheckIcon aria-hidden="true" className="size-5" />
            </span>
        </ListboxOption>
    );
}