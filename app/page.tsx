'use client';

import Image from 'next/image'
import { Noto_Sans_Hebrew } from 'next/font/google'
import Button from './components/Button'
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { useRouter } from "next/navigation";



const noto = Noto_Sans_Hebrew({ subsets: ['hebrew'] })

export default function Home() {

  const registerModal = useRegisterModal();
  const router = useRouter();
  return (
    <>
    <div className='flex flex-row justify-center'>
    <div>
        <div className='flex items-center justify-center md:justify-normal gap-4 mt-20 md:mt-0'>
          <span className='font-semibold  text-[#3B414F]'>הכניסה שלך לעולם הקריפטו</span>
          <Image 
            className="" 
            alt="Arrow" 
            width="100"
            height="100"
            src={'/images/arrow.png'}
          />
        </div>
        <h1 className='md:text-[64px] text-[48px] text-[#3B414F] font-bold text-center md:text-start '>פלטפורמת הכניסה שלך <span className=' text-[#2CA668]'> <br />לעולם הקריפו.</span></h1>
        <p className='text-[#8B8176] text-center md:text-start mt-4'>ההזדמנות שלכם להתחיל ללמוד על תחום הקריפטו והNFT הכנסו או הירשמו לאתר    <br /> והחלו ללמוד יאללה בהצלחה ההזדמנות שלכם שלכם להתחיל ללמוד על     <br />תחום הקריפטו והNFT הכנסו לאתר </p>

        <div className='flex gap-4 items-center justify-center md:justify-normal mt-8'>
          <button className='
            p-4
            px-8
            bg-[#2CA668]
            rounded-lg
            text-white
            font-medium
            hover:bg-[#3DC17E]
            duration-150
            transition
            transform
          ' 
          onClick={registerModal.onOpen}>
          הירשם עכשיו
          </button>
          <button className='
           p-4
           px-8
           border-[1px]
           border-[#3B414F]
           rounded-lg
           text-[#3B414F]
           font-medium
          ' 
          onClick={() => {router.push('/about')}}>
          קרא עוד
          </button>
        </div>

      </div>  
    
    <div>
      <Image 
      className="hidden md:block" 
      alt="Arrow" 
      width="516"
      height="758"
      src={'/images/marketing.png'}
      />
    </div>
    </div>


      <div className='flex justify-center items-center'>
        <Image 
        className="block md:hidden absolute top-28 -z-10" 
        alt="Arrow" 
        width="516"
        height="758"
        src={'/images/smallmarketing.png'}
        />
      </div>
    

    <div className=''>
    

    </div>

    <>
      <div>
      

      </div>
    </>
    </>
  )


}
