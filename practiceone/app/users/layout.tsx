'use client'
import List from '@/components/List';
export const metadata = {
  title: 'Users',
  description: 'Generated by create next app',
  keywords: 'junior proyects, web design, javascript, nextjs'
}

export default function RootLayout({children,}: {
  children: React.ReactNode
}) {

  return (
        <main className='container'>
           {children}
           
        </main>
      
  
  )
}
