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

    <div className=' grid grid-cols-12 gap-4 py-4 md:w-[90%] w-full mx-auto '>
      <div className='container mx-auto px-4 md:col-span-2  col-span-12'>
        <img src={logo} alt='logo' className='h-[85px] w-[176px]' />
      </div>
      <div className='md:col-span-10 col-span-12 px-2 md:px-0'>
        <p className='font-light text-white/30 text-[16px] leading-relaxed tracking-[0]  font-helvetica'>
        MadBoost is an independent entity and is not endorsed or affiliated with Activision Blizzard, Riot Games, Electronic Arts, Amazon Games, or
Respawn Entertainment. The views and opinions expressed by Boosting Factory do not necessarily reflect those of the individuals officially involved
in producing or managing Heroes of the Storm, Valorant, Overwatch, Call of Duty, New World, and League of Legends. All trademarks and logos are
the property of their respective owners. All submitted art content remains the copyright of its original copyright holder.
        </p>
      </div>
      
    </div>

    <div className='bg-[#171313] py-5'>
      <div className='container mx-auto px-5'>
        <div className='grid grid-cols-12 gap-4 px-5'>
          <div className='md:col-span-9  col-span-12 flex flex-col md:flex-row  gap-8 md:gap-[64px] md:items-center  '>
            <Link className='text-white/50 font-helvetica font-bold text-[18px] leading-[1] tracking-[0]' to='/'>
            Contact us
            </Link>
            <Link className='text-white/50 font-helvetica font-bold text-[18px] leading-[1] tracking-[0]' to='/'>
            Report
            </Link>
            <Link className='text-white/50 font-helvetica font-bold text-[18px] leading-[1] tracking-[0]' to='/'>
            Terms of Service
            </Link>
            <Link className='text-white/50 font-helvetica font-bold text-[18px] leading-[1] tracking-[0]' to='/'>
            Privacy Policy
            </Link>
          </div>
          <div className='md:col-span-3 col-span-12  flex items-center gap-4  '>
            <img src={facebook} alt="facebook" className='w-[40px] h-[40px] cursor-pointer' />
            <img src={instagram} alt="instagram" className='w-[40px] h-[40px] cursor-pointer' />
            <img src={twitter} alt="twitter" className='w-[40px] h-[40px] cursor-pointer' />
            <img src={youtube} alt="youtube" className='w-[40px] h-[40px] cursor-pointer' />
            <img src={tiktok} alt="tiktok" className='w-[40px] h-[40px] cursor-pointer' />
          </div>
        </div>
        <div className="text-white/50 mt-[24px] px-5 font-helvetica font-light text-[16px] leading-[1] tracking-[0]"
        > © 2024 MadBoost - All Rights Reserved</div>
      </div>
    </div>

    </div>
  )
}
