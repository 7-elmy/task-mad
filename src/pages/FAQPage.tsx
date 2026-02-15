import React from 'react'
import faq from '@/assests/Help.png'
export default function FAQPage() {
  return (
    <div className='container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 py-8 sm:py-10 md:py-12 lg:py-[62px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-4'>
        {/*  */}
      <div className='flex flex-col md:justify-center md:h-full md:items-center'>
        <div className='flex items-center py-5 sm:py-6 md:py-[24px] lg:py-[32px]'>
        <img src={faq} alt="faq" className='w-7 h-7 sm:w-8 sm:h-8 lg:w-[32px] lg:h-[32px] flex-shrink-0' />
      <h2 className="font-helvetica px-3 sm:px-4 lg:px-[20px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-white leading-none tracking-normal">
  Who will be handling my account boost?
</h2>

        </div>
        <p className="font-helvetica block lg:hidden text-white px-2 sm:px-4 text-[14px] sm:text-[15px] md:text-[16px] font-light leading-relaxed tracking-normal">
        A skilled, top-tier player will boost your account. Our team consists primarily of elite players who have passed rigorous evaluations. This includes a careful review of their past gaming records. We maintain strict standards of conduct and do not tolerate any negative behavior, either towards customers or in-game.
</p>
      </div>
        {/*  */}
      <div>
        <div className='flex items-center py-5 sm:py-6 md:py-8 lg:py-[32px]'>
        <img src={faq} alt="faq" className='w-7 h-7 sm:w-8 sm:h-8 lg:w-[32px] lg:h-[32px] flex-shrink-0' />
      <h2 className="font-helvetica px-3 sm:px-4 lg:px-[20px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-white leading-relaxed tracking-normal">
      What happens next once I place an order?
</h2>

        </div>
        <p className="font-helvetica text-white px-2 sm:px-4 lg:px-2 text-[14px] sm:text-[15px] md:text-[16px] font-light leading-relaxed tracking-normal">
        Once you place an order, you'll be guided to our website to quickly create an account. This process takes about 1-2 minutes. Next, you'll need to provide the login information for your game account. Your order will then be processed by our team, and we'll start working on it right away. This typically takes 5-10 minutes.
</p>
      </div>
        {/*  */}
      <div>
        <div className='flex items-center py-5 sm:py-6 md:py-8 lg:py-[32px]'>
        <img src={faq} alt="faq" className='w-7 h-7 sm:w-8 sm:h-8 lg:w-[32px] lg:h-[32px] flex-shrink-0' />
      <h2 className="font-helvetica px-3 sm:px-4 lg:px-[20px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-white leading-relaxed tracking-normal">
      Is there a chance my account could be banned?
</h2>

        </div>
        <p className="font-helvetica text-white px-2 sm:px-4 lg:px-2 text-[14px] sm:text-[15px] md:text-[16px] font-light leading-relaxed tracking-normal">
        We've not observed any bans resulting from level boosting services. For the present, it's generally considered safe.
</p>
      </div>
        {/*  */}
      <div>
        <div className='flex items-center py-5 sm:py-6 md:py-8 lg:py-[32px]'>
        <img src={faq} alt="faq" className='w-7 h-7 sm:w-8 sm:h-8 lg:w-[32px] lg:h-[32px] flex-shrink-0' />
      <h2 className="font-helvetica px-3 sm:px-4 lg:px-[20px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-white leading-relaxed tracking-normal">
      Is it possible to watch a live stream of the boosting process?
</h2>

        </div>
        <p className="font-helvetica text-white px-2 sm:px-4 lg:px-2 text-[14px] sm:text-[15px] md:text-[16px] font-light leading-relaxed tracking-normal">
        Absolutely! To watch your account boost live, simply select the streaming option when placing your order.
</p>
      </div>
      </div>
    </div>
  )
}
