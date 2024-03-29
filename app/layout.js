import Navbar from '@/Components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '@/store/Providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Agrimart',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className='app'>
          <Providers><Navbar /></Providers>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}
