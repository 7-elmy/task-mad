import React from 'react'
import logo from '@/assests/logo.png'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <div className='bg-[#1E1814] text-[#EFE9E4]'>
      <div className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12'>
        <div className='flex items-center justify-between h-16 sm:h-20 md:h-[88px] lg:h-[96px]'>
          <div className='flex items-center justify-between gap-2 sm:gap-4 w-full'>
            <Link to='/' className='flex-shrink-0'>
              <img
                src={logo}
                alt='logo'
                className='h-10 w-auto sm:h-14 md:h-[72px] md:w-[150px] lg:h-[85px] lg:w-[176px] object-contain'
              />
            </Link>

            <div className='hidden md:flex items-center gap-6 lg:gap-8 xl:gap-[40px] text-white'>
              <Link to='/' className='font-helvetica text-sm md:text-[15px] lg:text-base font-bold leading-none tracking-normal hover:text-[#F36E3F] transition-colors'>
                Games
              </Link>
              <Link to='/products' className='font-helvetica text-sm md:text-[15px] lg:text-base font-bold leading-none tracking-normal hover:text-[#F36E3F] transition-colors'>
                Boosters
              </Link>
              <Link to='/about' className='font-helvetica text-sm md:text-[15px] lg:text-base font-bold leading-none tracking-normal hover:text-[#F36E3F] transition-colors'>
                Last Orders
              </Link>
              <Link to='/contact' className='font-helvetica text-sm md:text-[15px] lg:text-base font-bold leading-none tracking-normal hover:text-[#F36E3F] transition-colors'>
                Blog
              </Link>
              <Link to='/contact' className='font-helvetica text-sm md:text-[15px] lg:text-base font-bold leading-none tracking-normal hover:text-[#F36E3F] transition-colors'>
                How We Work
              </Link>
            </div>

            <div className='hidden md:flex items-center gap-2 sm:gap-3 lg:gap-4'>
              <Button
                variant='outline'
                className='w-[100px] sm:w-[110px] lg:w-[124px] bg-transparent text-sm lg:text-base font-semibold leading-none tracking-normal text-[#EFE9E4] h-10 sm:h-11 lg:h-[48px] border-2 lg:border-[3px] border-[#F36E3F] rounded-[24px] lg:rounded-[32px] py-2 px-4 lg:py-4 lg:px-6 opacity-100 font-sharp hover:bg-[#F36E3F]/10 transition-colors'
              >
                Sign up
              </Button>
              <Button className='w-[90px] sm:w-[100px] lg:w-[109px] h-10 sm:h-11 lg:h-[48px] bg-[#F36E3F] rounded-[24px] lg:rounded-[32px] hover:bg-[#F36E3F]/90 hover:border-[#F36E3F] py-2 px-4 lg:py-4 lg:px-6 opacity-100 font-sharp transition-colors'>
                Log in
              </Button>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <button
                  type='button'
                  className='md:hidden p-2 -m-2 text-[#EFE9E4] hover:bg-white/5 rounded-lg transition-colors'
                  aria-label='Open menu'
                >
                  <Menu className='h-8 w-8 sm:h-9 sm:w-9' />
                </button>
              </SheetTrigger>

              <SheetContent
                side='right'
                className='md:hidden w-[85vw] max-w-[320px] sm:w-[280px] bg-[#332A27] text-[#EFE9E4] border-l border-l-[#F36E3F]/30 p-0'
              >
                <div className='flex items-center h-16 sm:h-20 px-4 sm:px-6 border-b border-white/10'>
                  <img src={logo} alt='logo' className='h-6 sm:h-8 w-auto object-contain' />
                </div>

                <nav className='flex flex-col py-3 sm:py-4'>
                  <SheetClose asChild>
                    <Link to='/' className='font-helvetica text-sm sm:text-base font-bold leading-none tracking-normal px-4 sm:px-6 py-3 sm:py-3.5 hover:bg-white/5 transition-colors'>
                      Games
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to='/products' className='font-helvetica text-sm sm:text-base font-bold leading-none tracking-normal px-4 sm:px-6 py-3 sm:py-3.5 hover:bg-white/5 transition-colors'>
                      Boosters
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to='/about' className='font-helvetica text-sm sm:text-base font-bold leading-none tracking-normal px-4 sm:px-6 py-3 sm:py-3.5 hover:bg-white/5 transition-colors'>
                      Last Orders
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to='/contact' className='font-helvetica text-sm sm:text-base font-bold leading-none tracking-normal px-4 sm:px-6 py-3 sm:py-3.5 hover:bg-white/5 transition-colors'>
                      Blog
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to='/contact' className='font-helvetica text-sm sm:text-base font-bold leading-none tracking-normal px-4 sm:px-6 py-3 sm:py-3.5 hover:bg-white/5 transition-colors'>
                      How We Work
                    </Link>
                  </SheetClose>
                </nav>

                <div className='mx-4 sm:mx-6 border-t border-white/10' />

                <div className='flex flex-col gap-2 sm:gap-3 px-4 sm:px-6 pt-4 sm:pt-6 pb-6'>
                  <Button
                    variant='outline'
                    className='w-full bg-transparent text-sm sm:text-base font-semibold leading-none tracking-normal text-[#EFE9E4] h-11 sm:h-[48px] border-2 sm:border-[3px] border-[#F36E3F] rounded-[24px] sm:rounded-[32px] py-3 sm:py-4 px-4 sm:px-6 font-sharp hover:bg-[#F36E3F]/10 transition-colors'
                  >
                    Sign up
                  </Button>
                  <Button className='w-full h-11 sm:h-[48px] bg-[#F36E3F] rounded-[24px] sm:rounded-[32px] hover:bg-[#F36E3F]/80 py-3 sm:py-4 px-4 sm:px-6 font-sharp transition-colors'>
                    Log in
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  )
}
