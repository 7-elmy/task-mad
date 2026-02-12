import React from 'react'
import logo from '@/assests/logo.png'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet'
import { Menu } from 'lucide-react'
export default function Header() {
  return (
    <div className='bg-[#1E1814] text-[#EFE9E4]'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-[96px]'>
          <div className='flex items-center justify-between gap-4 w-full '>
            <img src={logo} alt='logo'  className='h-[85px] w-[176px]' />

            <div className='hidden md:flex items-center gap-4 text-white'>
              <Link to='/' className='font-helvetica text-base font-bold leading-none tracking-normal'>Games</Link>
              <Link to='/products' className='font-helvetica text-base font-bold leading-none tracking-normal'>Boosters</Link>
              <Link to='/about' className='font-helvetica text-base font-bold leading-none tracking-normal'>Last Orders</Link>
              <Link to='/contact' className='font-helvetica text-base font-bold leading-none tracking-normal'>Blog</Link>
              <Link to='/contact' className='font-helvetica text-base font-bold leading-none tracking-normal'> How We Work</Link>
            </div>
            <div className='hidden md:flex items-center gap-4'>
              <Button
                variant='outline'
                className={`w-[124px] bg-transparent  text-base font-semibold leading-none tracking-normal text-[#EFE9E4] h-[48px] border-[3px] border-[#F36E3F] rounded-[32px] py-4 px-6 opacity-100 font-sharp`}
              >
                Sign up
              </Button>
              <Button
                className={`w-[109px] h-[48px] bg-[#F36E3F] rounded-[32px] hover:bg-[#332A27] hover:!border-[#F36E3F] py-4 px-6 opacity-100 font-sharp`}
              >
                Log in
              </Button>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <button
                 
                 
                  className='md:hidden text-[#EFE9E4]  hover:text-[#EFE9E4]'
                >
                  <Menu className='h-[48px] w-[56px]' />
                  <span className='sr-only'>Open menu</span>
                </button>
              </SheetTrigger>

              <SheetContent
                side='right'
                className='md:hidden w-[280px] bg-[#332A27] text-[#EFE9E4] border-l border-l-[#F36E3F]/30 p-0'
              >
                {/* Logo at top */}
                <div className='flex items-center h-[96px] px-6 border-b border-white/10'>
                  <img src={logo} alt='logo' className='h-8' />
                </div>

                {/* Navigation links */}
                <nav className='flex flex-col py-4'>
                  <SheetClose asChild>
                    <Link to='/' className='font-helvetica text-base font-bold leading-none tracking-normal px-6 py-3.5 hover:bg-white/5 transition-colors'>
                      Games
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to='/products' className='font-helvetica text-base font-bold leading-none tracking-normal px-6 py-3.5 hover:bg-white/5 transition-colors'>
                      Boosters
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to='/about' className='font-helvetica text-base font-bold leading-none tracking-normal px-6 py-3.5 hover:bg-white/5 transition-colors'>
                      Last Orders
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to='/contact' className='font-helvetica text-base font-bold leading-none tracking-normal px-6 py-3.5 hover:bg-white/5 transition-colors'>
                      Blog
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to='/contact' className='font-helvetica text-base font-bold leading-none tracking-normal px-6 py-3.5 hover:bg-white/5 transition-colors'>
                      How We Work
                    </Link>
                  </SheetClose>
                </nav>

                {/* Divider */}
                <div className='mx-6 border-t border-white/10' />

                {/* Buttons */}
                <div className='flex flex-col gap-3 px-6 pt-6'>
                  <Button
                    variant='outline'
                    className='w-full bg-transparent text-base font-semibold leading-none tracking-normal text-[#EFE9E4] h-[48px] border-[3px] border-[#F36E3F] rounded-[32px] py-4 px-6 font-sharp hover:bg-[#F36E3F]/10 transition-colors'
                  >
                    Sign up
                  </Button>
                  <Button className='w-full h-[48px] bg-[#F36E3F] rounded-[32px] hover:bg-[#F36E3F]/80 py-4 px-6 font-sharp transition-colors'>
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
