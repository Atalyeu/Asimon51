'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return ( 
        <Image 
            alt="Logo"
            className="block cursor-pointer rounded-full"
            height="100"
            width="100"
            src="/images/asimon.png"
        />
        
     );
}
 
export default Logo;