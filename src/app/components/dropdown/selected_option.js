import { ListboxButton } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';

export default function SelectedOption ({ children }) {
    return (
        <ListboxButton className="grid cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink-600 text-xs lg:text-sm/6">
            <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                { children }
            </span>

            <ChevronUpDownIcon
                aria-hidden="true"
                className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
        </ListboxButton>
    );
}