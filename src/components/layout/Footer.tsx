import React from 'react'
import logo from '@/assests/logo.png'
import facebook from '@/assests/Social Media Icon.png'
import instagram from '@/assests/Social Media Icon (1).png'
import twitter from '@/assests/Social Media Icon (2).png'
import youtube from '@/assests/Social Media Icon (3).png'
import tiktok from '@/assests/Social Media Icon (4).png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-[#201B15]'>
      {/* Top section: logo + disclaimer */}
      <div className='grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 py-6 sm:py-8 md:py-10 w-full max-w-[90%] md:max-w-[95%] lg:max-w-[90%] mx-auto px-4 sm:px-6 md:px-8'>
        <div className='md:col-span-2 flex items-start md:justify-center'>
          <Link to='/'>
            <img
              src={logo}
              alt='logo'
              className='h-12 w-auto sm:h-16 md:h-[72px] md:w-[150px] lg:h-[85px] lg:w-[176px] object-contain'
            />
          </Link>
        </div>
        <div className='md:col-span-10'>
          <p className='font-helvetica font-light text-white/30 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed tracking-[0]'>
            MadBoost is an independent entity and is not endorsed or affiliated with Activision Blizzard, Riot Games, Electronic Arts, Amazon Games, or
            Respawn Entertainment. The views and opinions expressed by Boosting Factory do not necessarily reflect those of the individuals officially involved
            in producing or managing Heroes of the Storm, Valorant, Overwatch, Call of Duty, New World, and League of Legends. All trademarks and logos are
            the property of their respective owners. All submitted art content remains the copyright of its original copyright holder.
          </p>
        </div>
      </div>

      {/* Bottom section: links + social + copyright */}
      <div className='bg-[#171313] py-5 sm:py-6 md:py-7'>
        <div className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>
          <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 md:items-center'>
            <div className='md:col-span-9 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-[64px]'>
              <Link to='/' className='text-white/50 font-helvetica font-bold text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1] tracking-[0] hover:text-white/70 transition-colors'>
                Contact us
              </Link>
              <Link to='/' className='text-white/50 font-helvetica font-bold text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1] tracking-[0] hover:text-white/70 transition-colors'>
                Report
              </Link>
              <Link to='/' className='text-white/50 font-helvetica font-bold text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1] tracking-[0] hover:text-white/70 transition-colors'>
                Terms of Service
              </Link>
              <Link to='/' className='text-white/50 font-helvetica font-bold text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1] tracking-[0] hover:text-white/70 transition-colors'>
                Privacy Policy
              </Link>
            </div>
            <div className='md:col-span-3 flex items-center justify-start md:justify-end gap-3 sm:gap-4'>
              <a href='#' aria-label='Facebook' className='opacity-80 hover:opacity-100 transition-opacity'>
                <img src={facebook} alt='Facebook' className='w-8 h-8 sm:w-9 sm:h-9 md:w-[40px] md:h-[40px] cursor-pointer object-contain' />
              </a>
              <a href='#' aria-label='Instagram' className='opacity-80 hover:opacity-100 transition-opacity'>
                <img src={instagram} alt='Instagram' className='w-8 h-8 sm:w-9 sm:h-9 md:w-[40px] md:h-[40px] cursor-pointer object-contain' />
              </a>
              <a href='#' aria-label='Twitter' className='opacity-80 hover:opacity-100 transition-opacity'>
                <img src={twitter} alt='Twitter' className='w-8 h-8 sm:w-9 sm:h-9 md:w-[40px] md:h-[40px] cursor-pointer object-contain' />
              </a>
              <a href='#' aria-label='YouTube' className='opacity-80 hover:opacity-100 transition-opacity'>
                <img src={youtube} alt='YouTube' className='w-8 h-8 sm:w-9 sm:h-9 md:w-[40px] md:h-[40px] cursor-pointer object-contain' />
              </a>
              <a href='#' aria-label='TikTok' className='opacity-80 hover:opacity-100 transition-opacity'>
                <img src={tiktok} alt='TikTok' className='w-8 h-8 sm:w-9 sm:h-9 md:w-[40px] md:h-[40px] cursor-pointer object-contain' />
              </a>
            </div>
          </div>
          <p className='text-white/50 mt-6 sm:mt-8 font-helvetica font-light text-[12px] sm:text-[14px] md:text-[16px] leading-[1] tracking-[0]'>
            © 2024 MadBoost - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}
