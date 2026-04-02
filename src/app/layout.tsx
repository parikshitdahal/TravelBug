import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import 'react-day-picker/dist/style.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TravelBug Sikkim | Explore Sikkim',
  description: 'Best tour packages and travel experiences in Sikkim.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-gray-900`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
