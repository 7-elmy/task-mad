import React from 'react'
import main from '@/assests/main.png'
import main2 from '@/assests/image.png'
import main3 from '@/assests/mobilescrren.png'


export default function HowWorkPage() {
  return (
    <div className='container mx-auto px-4 sm:px-6 md:px-16 lg:px-28'>
      <div className='py-[40px]   md:py-[76px] '>
        <div className='grid grid-cols-1 gap-4 px-0 sm:px-4 md:px-6'>
          <h1 className='text-white font-sharp text-[32px] pb-[24px] md:pb-[64px]  lg:text-[64px]   font-semibold leading-none tracking-normal'>
            How We Work
          </h1>
          <img src={main} alt='how-work-1' className='w-full h-auto object-cover rounded-lg' />
        </div>
      </div>

     

      <div className='hidden md:block relative overflow-hidden rounded-lg '>
        <img src={main2} alt='how-work-2' className='w-full h-auto object-cover' />
        <div className='absolute inset-0 px-4 sm:px-8 md:px-12 flex flex-col items-start justify-center'>
          <p className='font-sharp text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-semibold leading-relaxed tracking-normal text-[#F36E3F]'>
            MadBoost.gg
          </p>
          <p className='font-sharp text-xl sm:text-2xl md:text-[30px] lg:text-[39px] pt-1 mt-3 sm:pt-2 font-semibold leading-relaxed tracking-normal text-white'>
            Essential FAQs
          </p>
        </div>
      </div>

      <div className='block md:hidden relative overflow-hidden rounded-lg '>
        <img src={main3} alt='how-work-2' className='w-full h-auto object-cover' />
        <div   className='absolute inset-0  left-0 w-full'>
          <div style={{background:" linear-gradient(90deg, #433733 53.65%, rgba(106, 73, 36, 0.45) 74.28%)"}} className='flex flex-col   items-start justify-center px-4 h-full w-full '>

          <p className='font-sharp-bold  text-[32px] lg:text-[40px] font-semibold leading-relaxed tracking-normal text-[#F36E3F]'>
            MadBoost.gg
          </p>
          <p className='font-sharp-bold  text-[32px] lg:text-[40px] font-semibold leading-relaxed tracking-normal text-white'>
            Essential FAQs
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}
