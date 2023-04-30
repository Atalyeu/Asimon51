'use client';

import Image from "next/image";
import { SafeUser } from "@/app/types";


interface AvatarProps {
  src: string | null | undefined;
  currentUser?: SafeUser | null
}


const Avatar: React.FC<AvatarProps> = ({ src, currentUser}) => {
  return ( 
    <Image 
      className="rounded-full" 
      height="30" 
      width="30" 
      alt="Avatar" 
      src={src || '/images/logo.png'}
    />
   );
}
 
export default Avatar;