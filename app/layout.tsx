import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/lib/providers'

export const metadata: Metadata = {
  title: 'MATAXO | 디지털 마케팅 전문가 포트폴리오',
  description: 'AI데이터 기반의 성장을 이끄는 디지털 마케팅 전문가의 포트폴리오입니다.',
  keywords: ['마케터', '포트폴리오', '디지털마케팅', 'Google Ads', 'Facebook Ads', '퍼포먼스마케팅'],
  authors: [{ name: 'MATAXO' }],
  openGraph: {
    title: 'MATAXO | 디지털 마케팅 전문가 포트폴리오',
    description: 'AI데이터 기반의 성장을 이끄는 디지털 마케팅 전문가의 포트폴리오입니다.',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MATAXO | 디지털 마케팅 전문가 포트폴리오',
    description: 'AI데이터 기반의 성장을 이끄는 디지털 마케팅 전문가의 포트폴리오입니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

