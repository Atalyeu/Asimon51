'use client';

import { BiSearch } from 'react-icons/bi'
import MenuItem from './MenuItem';
import { useRouter } from "next/navigation";

const Search = () => {
    const router = useRouter();

    return ( 
        <div className="hidden xl:block ">
            <div className="flex flex-row items-center justify-between text-md text-[#3B414F] gap-12">
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
        </div>
     );
}
 
export default Search;