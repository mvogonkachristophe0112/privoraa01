import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privora10',
  description: 'Secure Multi-User Encrypted File Transfer Web Application',
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}