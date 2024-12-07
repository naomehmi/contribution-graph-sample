'use client'

import { Listbox } from '@headlessui/react'
import users from '@/data/datasets/users.json';
import { useGlobalContext } from '@/app/context/context'
import SelectedOption from '../dropdown/selected_option';
import ShowAllOptions from '../dropdown/show_all_options';
import Option from '../dropdown/option';

export default function SelectAccount() {
  const allUsers = users.data;

  const { user, setUser } = useGlobalContext();

  return (
    <Listbox value={user} onChange={setUser}>
      <div className="relative">
        <SelectedOption>
            <img alt="profile_picture" src={user.profile_picture} className="size-3 lg:size-5 shrink-0 rounded-full" />
            <span className="block truncate">{user.username}</span>
        </SelectedOption>
        
        <ShowAllOptions>
          {allUsers.map((user) => (
            <Option key={user.id} value={user}>
              <div className="flex items-center">
                <img alt="profile_picture" src={user.profile_picture} className="size-5 shrink-0 rounded-full" />
                <span className="ml-3 w-auto block truncate font-normal group-data-[user]:font-semibold">
                  {user.username}
                </span>
              </div>
            </Option>
          ))}
        </ShowAllOptions>
      </div>
    </Listbox>
  )
}
