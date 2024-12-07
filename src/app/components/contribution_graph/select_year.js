'use client'

import { Listbox } from "@headlessui/react";
import years from '@/data/datasets/years.json';
import { useGlobalContext } from '@/app/context/context'
import SelectedOption from '../dropdown/selected_option';
import ShowAllOptions from '../dropdown/show_all_options';
import Option from '../dropdown/option';

export default function SelectYear() {
  const { year, setYear } = useGlobalContext();

  return (
    <Listbox value={year} onChange={setYear}>
      <div className="block">
        <SelectedOption>
          <div>{year}</div>
        </SelectedOption>

        <ShowAllOptions>
          {years.data.map((year, index) => (
            <Option key={index} value={year}>
              <span className="block truncate font-normal group-data-[year]:font-semibold">{year}</span>
            </Option>
          ))}
        </ShowAllOptions>
      </div>
    </Listbox>
  );
}
