import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './theme-provider'

const workSans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JUBAIR AHMED',
  description: 'Graphic designer. Visual thinker. Detail lover. Turning ideas into bold, beautiful designs one pixel at a time.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={workSans.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
