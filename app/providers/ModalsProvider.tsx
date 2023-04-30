'use client';

import LoginModal from "../components/Modals/LoginModal";
import NewsModal from "../components/Modals/NewsModal";
import RegisterModal from "../components/Modals/RegisterModal";

const ModalsProvider = () => {
  return ( 
    <>
      <LoginModal />
      <RegisterModal />
      <NewsModal />
    </>
   );
}
 
export default ModalsProvider;