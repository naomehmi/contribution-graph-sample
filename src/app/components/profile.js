'use client';

import { useGlobalContext } from "../context/context";
import X from '../../../public/social_media/x.svg';
import LinkedIn from '../../../public/social_media/linkedin.svg';
import SocialMedia from "./profile/social_media";

export default function Profile() {
    const { user } = useGlobalContext();

    return (
        <div className="rounded-2xl min-w-80 bg-white px-8 py-20 lg:py-11 list-none drop-shadow-sm">

            <img alt="profile_picture" src={user.profile_picture} className="mx-auto size-48 rounded-full lg:size-56 object-cover" />
            
            <h3 className="mt-6 text-base/7 font-semibold text-center tracking-tight">{user.username}</h3>
            <p className="text-sm/6 mx-auto text-center text-gray-400 w-1/2 truncate text-ellipsis overflow-hidden">{user.full_name}</p>
            
            <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <SocialMedia LogoComponent={X} name="X" />
                <SocialMedia LogoComponent={LinkedIn} name="linkedin" />
            </ul>
        </div>
    );
}