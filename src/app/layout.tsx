import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js + Supabase Gallery',
  description: 'Simple Gallery app built with Next.js and Supabase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-slate-200 text-gray-800 w-full md:max-w-screen-md md:mx-auto")}>
        <Header />
        {children}
      </body>
    </html>
  )
}
