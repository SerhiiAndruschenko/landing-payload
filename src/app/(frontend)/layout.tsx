import { Manrope } from 'next/font/google'
import localFont from 'next/font/local'
import PageHeader from '@/app/(frontend)/components/PageHeader'
import Footer from '@/app/(frontend)/components/Footer'
import Preloader from '@/app/(frontend)/components/Preloader'

export const metadata = {
  title: 'Setorix',
  description: '',
}

const benzin = localFont({
  src: [
    {
      path: './fonts/benzin-medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/benzin-semibold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
})

const manrope = Manrope({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Preloader />
        <PageHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
