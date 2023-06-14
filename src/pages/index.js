import { useState } from 'react'
import AppHeader from '@/components/Header/Header'
import SearchBanner from '@/components/SearchBanner/SearchBanner'
import HowItWorks from '@/components/HowItWorks/HowItWorks'
import BecomeMember from '@/components/BecomeMember.jsx/BecomeMember'
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
  <BecomeMember/>
    
    </div>
  )
}
