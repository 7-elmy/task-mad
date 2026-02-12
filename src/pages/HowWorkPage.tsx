import React from 'react'
import main from '@/assests/main.png'
import main2 from '@/assests/image.png'
import InteractiveDemo from '@/components/howwork/InteractiveDemo'

export default function HowWorkPage() {
  return (
    <div className='container mx-auto px-4 sm:px-6 md:px-16 lg:px-28'>
      <div className='py-10 sm:py-14 md:py-[76px]'>
        <div className='grid grid-cols-1 gap-4 px-0 sm:px-4 md:px-6'>
          <h1 className='text-white font-sharp text-2xl sm:text-4xl md:text-5xl lg:text-[64px] mb-8 sm:mb-12 md:mb-[64px] font-semibold leading-none tracking-normal'>
            How We Work
          </h1>
          <img src={main} alt='how-work-1' className='w-full h-auto object-cover rounded-lg' />
        </div>
      </div>

     

      <div className='relative overflow-hidden rounded-lg mb-10'>
        <img src={main2} alt='how-work-2' className='w-full h-auto object-cover' />
        <div className='absolute inset-0 px-4 sm:px-8 md:px-12 flex flex-col items-start justify-center'>
          <p className='font-sharp text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-semibold leading-none tracking-normal text-[#F36E3F]'>
            MadBoost.gg
          </p>
          <p className='font-sharp text-xl sm:text-2xl md:text-[32px] lg:text-[40px] pt-1 sm:pt-2 font-semibold leading-none tracking-normal text-white'>
            Essential FAQs
          </p>
        </div>
      </div>
    </div>
  )
}
