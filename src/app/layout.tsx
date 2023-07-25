import { NextAuthProvider } from '@/provider/auth'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Header } from '../components/header/Header'
import { Footer } from './components/footer/Footer'
import ToastProvider from '@/provider/toast'

const poppins = Poppins({
  subsets: ['latin'], weight: [
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ]
})

export const metadata: Metadata = {
  title: 'Full Stack Trips',
  description: 'Sistema de Reserva de Viagens!',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
          <ToastProvider >
            <Header />
            {children}
            <Footer />
          </ToastProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
