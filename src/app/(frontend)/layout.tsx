import { Manrope } from 'next/font/google'
import PageHeader from '@/app/(frontend)/components/PageHeader'
import Footer from '@/app/(frontend)/components/Footer'

export const metadata = {
  title: 'Setorix',
  description: '',
}

const manrope = Manrope({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <PageHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
