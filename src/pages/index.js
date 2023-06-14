import { useState } from 'react'
import AppHeader from '@/components/Header/Header'
import SearchBanner from '@/components/Header/SearchBanner'
import HowItWorks from '@/components/Header/HowItWorks'
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>

      <AppHeader />

  <SearchBanner/>
  <HowItWorks />
    
    </div>
  )
}
