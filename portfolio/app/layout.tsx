import './globals.css'
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/themeSwitch';
import ThemeContextProvider from '@/context/theme-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Emma Cameron',
  description: 'Emma Cameron, portfolio website, full-stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className}
      bg-indigo-50 text-indigo-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-violet-100 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-violet-900"></div>
        <div className="bg-sky-100 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-sky-950"></div>
        
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
          <Header />
         {children}
          <Footer />
          <Toaster position='top-right'/>
          <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>

        <div className="bg-violet-100 absolute bottom-[6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-violet-900"></div>
        <div className="bg-sky-100 absolute bottom-[1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-sky-950"></div>
        </body>
    </html>
  )
}
