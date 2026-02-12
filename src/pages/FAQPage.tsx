import React from 'react'
import faq from '@/assests/Help.png'
export default function FAQPage() {
  return (
    <div className='container mx-auto px-5 md:px-32  py-[62px] '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/*  */}
      <div className='flex flex-col  md:justify-end items-center'>
        <div className='flex  items-center py-[32px]'>
        <img src={faq} alt="faq" className='w-[32px] h-[32px]' />
      <h2 className="font-helvetica px-[20px] text-[24px] font-bold text-white leading-none tracking-normal">
  Who will be handling my account boost?
</h2>

        </div>
        <p className="font-helvetica block md:hidden text-white px-2 text-[16px] font-light leading-none tracking-normal">
        A skilled, top-tier player will boost your account. Our team consists primarily of elite players who have passed rigorous evaluations. This includes a careful review of their past gaming records. We maintain strict standards of conduct and do not tolerate any negative behavior, either towards customers or in-game.
</p>
      </div>
        {/*  */}
      <div>
        <div className='flex  items-center py-[32px]'>
        <img src={faq} alt="faq" className='w-[32px] h-[32px]' />
      <h2 className="font-helvetica px-[20px] text-[24px] font-bold text-white leading-none tracking-normal">
      What happens next once I place an order?
</h2>

        </div>
        <p className="font-helvetica text-white px-2 text-[16px] font-light leading-none tracking-normal">
        Once you place an order, you'll be guided to our website to quickly create an account. This process takes about 1-2 minutes. Next, you'll need to provide the login information for your game account. Your order will then be processed by our team, and we'll start working on it right away. This typically takes 5-10 minutes.
</p>
      </div>
        {/*  */}
      <div>
        <div className='flex  items-center py-[32px]'>
        <img src={faq} alt="faq" className='w-[32px] h-[32px]' />
      <h2 className="font-helvetica px-[20px] text-[24px] font-bold text-white leading-none tracking-normal">
      Is there a chance my account could be banned?
</h2>

        </div>
        <p className="font-helvetica text-white px-2 text-[16px] font-light leading-none tracking-normal">
        We've not observed any bans resulting from level boosting services. For the present, it's generally considered safe.
</p>
      </div>
        {/*  */}
      <div>
        <div className='flex  items-center py-[32px]'>
        <img src={faq} alt="faq" className='w-[32px] h-[32px]' />
      <h2 className="font-helvetica px-[20px] text-[24px] font-bold text-white leading-none tracking-normal">
      Is it possible to watch a live stream of the boosting process?
</h2>

        </div>
        <p className="font-helvetica text-white px-2 text-[16px] font-light leading-none tracking-normal">
        Absolutely! To watch your account boost live, simply select the streaming option when placing your order.
</p>
      </div>
      </div>
    </div>
  )
}
