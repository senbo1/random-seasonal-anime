import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { sql } from '@vercel/postgres'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Random Seasonal Anime',
  description: 'This apps tests nextjs\'s new partial prerendering',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { rowCount } = await sql`SELECT * FROM anime`

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='flex flex-col items-center justify-between min-h-screen pt-6 pb-4 bg-neutral-950'>
          <h1 className='text-2xl font-bold text-violet-500'>Partial prerendering with server components</h1>
          {children}
          <p className='text-zinc-500 text-sm max-w-2xl text-center'>This site returns a random anime from {rowCount} currently airing anime shows.
          It performs SQL Queries in the component to fetch the data and leverages partial prerendering for static loading shell. 
          </p>
        </main>
        </body>
    </html>
  )
}
