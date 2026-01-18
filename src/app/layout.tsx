import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: '导航站 - 精选优质网站资源',
    template: '%s | 导航站'
  },
  description: '整理优质网站资源，包括搜索引擎、社交媒体、开发工具、设计资源等各类实用网站。',
  keywords: ['网站导航', '资源导航', '网址导航', '实用网站', '在线工具'],
  authors: [{ name: '导航站' }],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: '导航站',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
