import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import AppHeader from '@/components/Header/Header'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* <header className="absolute inset-x-0 top-0 z-50 ">
        <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto px-4" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={"/images/logo.png"}
                alt=""
              />
            </a>
          </div>
      
          <div className='lg:flex lg:gap-x-2'>
          <button className="bg-custom-blue hover:bg-blue-600 text-white font-poppins py-2 px-4 rounded lg:justify-end w-139 text-sm">
          LOGIN
    </button>

    <button className="bg-white border border-custom-blue text-blue-500 font-bold py-2 px-4 rounded w-139 text-sm">
        SIGN UP
      </button>
    </div>
       
        </nav>
       
      </header> */}
<AppHeader/>

   <div className="bg-gradient-to-r from-custom-grey-dark to-custom-grey-light ">
      {/* <div className="mx-auto mb-10 mt-10"> */}
        <div className="flex items-center max-w-[1800px] mx-auto px-8	">
          <div className="w-1/2">
            <div className="lg:p-4">
            {/* <div className="flex flex-row w-60">               */}
              <h1 className="text-5xl font-bold mb-4 font-poppins text-black">FIND A PRIVATE DENTIST <span className='text-5xl font-bold font-poppins text-custom-blue'>NEAR YOU</span> </h1>
              <p className="mb-4 w-3/5 text-black	">Hundreds of dentists and practices around the UK showcase their portfolio work on Dentfolio - the home to the UK's best private dentists</p>
            </div>
          </div>
          <div className='w-1/2'>
            <img src="/images/doctor-2.png" alt="Image" className="w-full max-w-[500px] mr-0 ml-auto" />
        </div>

        {/* <div className="lg:w-1/2"> */}
          {/* </div> */}
        </div>
      {/* </div> */}
    </div>
      {/* <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
     
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div> */}
    </div>
  )
}
