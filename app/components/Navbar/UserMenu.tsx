'use client';

import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { SafeUser } from "@/app/types";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import NewsModal from '../Modals/NewsModal';
import useNewsModal from '@/app/hooks/useNewsModal';


interface UserMenuProps {
    currentUser?: SafeUser | null
  }

  const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
  }) => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const [isOpen, setIsOpen] = useState(false);
    const newsModal = useNewsModal();
    const [IsVisible, setIsVisible] = useState(false);
    const loginModal = useLoginModal();


    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, [])
    return ( 
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div onClick={toggleOpen} className="p-4 md:py-2 md:px-6 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md tranistion">
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                    <Avatar src={currentUser?.image} />
                    </div>
                </div>
                <div onClick={newsModal.onOpen} className="block text-sm font-semibold bg-[#3B414F] text-white py-3 px-5 rounded-full cursor-pointer">
                    הירשם לניזילטור
                </div>
            </div>

            {isOpen && (
                <div className='absolute rounded-xl shadow-md text-right w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                    <>
                {currentUser ? (
              <>
                    <div className='block xl:hidden'>
                        <MenuItem
                        onClick={() => router.push('/')}
                        label='דף הבית'
                        med
                        login
                        />
                        <MenuItem
                        onClick={() => router.push('/content')}
                        label='תוכן'
                        med
                        login
                        />
                        <MenuItem
                        onClick={() => router.push('/tolls')}
                        label='כלים'
                        med
                        login
                        />
                        <MenuItem
                        onClick={() => router.push('/about')}
                        label='אודות'
                        med
                        login
                        />
                        <MenuItem
                        onClick={() => router.push('/blog')}
                        label='בלוג'
                        med
                        login
                        />      
                        <MenuItem
                        onClick={() => router.push('/events')}
                        label='אירועים'
                        med
                        login
                        />    
                        <MenuItem
                        onClick={() => router.push('/contact')}
                        label='צור קשר'
                        med
                        login
                        />
                    
  
                    </div>
                <hr />
                <MenuItem
                        onClick={() => {}}
                        label='אזור אישי'
                        />
                <MenuItem 
                  label="התנתק" 
                  onClick={() => signOut()}
                />
              </>
            ) : (
              <>
                <MenuItem 
                  label="התחבר" 
                  onClick={loginModal.onOpen}
                />
                <MenuItem 
                  label="הירשם" 
                  onClick={registerModal.onOpen}
                />
              </>
            )}
                    </>
                    </div>
                </div>
            )}
        </div>
    );
}
  
export default UserMenu;