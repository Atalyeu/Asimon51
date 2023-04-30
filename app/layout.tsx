import LoginModal from './components/Modals/LoginModal'
import RegisterModal from './components/Modals/RegisterModal'
import Navbar from './components/Navbar/Navbar'
import './globals.css'
import { Noto_Sans_Hebrew } from 'next/font/google'
import getCurrentUser from './actions/getCurrentUser';
import ToasterProvider from '@/app/providers/ToasterProvider';
import NewsModal from './components/Modals/NewsModal'


const noto = Noto_Sans_Hebrew({ subsets: ['hebrew'] })

export const metadata = {
  title: 'Asimon',
  dir: "rtl",
  description: 'Your login platform to the crypto world',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body dir='rtl' className={noto.className}>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal  />
          <NewsModal />
          <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
