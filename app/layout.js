import './globals.css'
import Header from '@/app/Components/Header'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header/>
        {children}</body>
    </html>
  )
}
