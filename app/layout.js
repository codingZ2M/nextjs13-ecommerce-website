
import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import { CartProvider } from '@/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nextjs13 ECommerce Website',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className={inter.className}>
        <CartProvider>
          <NavBar/>
              {children}
        </CartProvider>
        <Footer/>
       </body>
    </html>
  )
}
