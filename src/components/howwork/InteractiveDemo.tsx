import React, { useState } from 'react'
import { Send, Pause, ChevronRight, Shield, User } from 'lucide-react'
import man from '@/assests/man.png'
import shield from '@/assests/shield.png'
import shield2 from '@/assests/shield2.png'
import shield3 from '@/assests/shield3.png'
import { Button } from '../ui/button';
/* ── tiny avatar helper ── */
const Avatar = ({ src, alt, size = 40 }: { src?: string; alt: string; size?: number }) => (
  <div
    className='rounded-full overflow-hidden bg-[#4A3F3B] flex-shrink-0'
    style={{ width: size, height: size }}
  >
    {src ? (
      <img src={src} alt={alt} className='w-full h-full object-cover' />
    ) : (
      <div className='w-full h-full flex items-center justify-center text-white/60 text-sm font-bold'>
        {alt.charAt(0)}
      </div>
    )}
  </div>
)

/* ── chat bubble ── */
const ChatBubble = ({
  message,
  time,
  isOwn,
  variant = 'default',
}: {
  message: string
  time: string
  isOwn?: boolean
  variant?: 'default' | 'tip'
}) => {
  if (variant === 'tip') {
    return (
      <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-3`}>
        <div className='bg-[#172924] border border-[#2E7D32]/40 rounded-xl px-3 py-2 max-w-[80%] sm:max-w-[70%]'>
          <p className='text-[#66BB6A] font-light text-[16px] leading-[1] tracking-[0] font-helvetica flex items-center gap-1'>
            <span className='text-[#66BB6A]'>◎</span> {message}
            <span className='text-[#F36E3F] ml-1'>▶</span>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-3`}>
      <div
        className={`rounded-xl font-light text-[16px] leading-[1] tracking-[0] font-helvetica px-3 py-2 max-w-[80%] sm:max-w-[70%] ${
          isOwn
            ? 'bg-[#F26E3E] border border-[#F36E3F]/30'
            : 'bg-[#3D3330] border border-white/5'
        }`}
      >
        <p className='text-white/90 font-light text-[16px] leading-[1] tracking-[0] font-helvetica '>{message}</p>
        <p className='text-white/30 text-[10px] mt-1 text-right'>{time}</p>
      </div>
    </div>
  )
}

export default function InteractiveDemo() {
  const [activeChat, setActiveChat] = useState<'booster' | 'manager'>('booster')

  return (
    <section className='container mx-auto px-5 md:px-28  py-[62px] '>
      {/* ── Section title ── */}
      <div className='text-center mb-8 sm:mb-12 md:mb-16'>
       
      <h1 className="font-sharp text-[24px] md:text-[48px] font-semibold leading-none tracking-normal flex flex-col md:flex-row items-center justify-center gap-2">
          <span className='text-[#F36E3F] '>MadBoost.gg</span>

          <span className='text-white'>Interactive Demo</span>
      {/* MadBoost.gg */}
</h1>
      </div>

      <div className='border-[#F36E3F] flex-col   md:flex-row border-2 w-full mb-[32px] rounded-[16px] p-8 cursor-pointer flex items-center justify-between'>
        <div className='flex items-center gap-4 mb-4 '>
          <img src={man} alt="men" className='w-[32px] h-[32px]' />
          <div>
          <p className="font-sharp text-white text-[16px] font-semibold leading-none tracking-normal">
 MoSameh
</p>
<p className="font-sharp flex items-center pt-2 text-white/50 gap-2 text-[12px] font-light leading-none tracking-normal">
 
  <span className='w-2 h-2 rounded-full bg-red-500 inline-block' /> 
  Last seen 5 minutes ago
</p>


          </div>

        </div>
        <div className='flex p-2   justify-between items-center gap-4'>
        <Button className=" w-[100px] md:w-[200px]    text-[8px] md:text-[16px] text-[#1E1814] hover:bg-[#FFC439]/80 h-[40px] bg-[#FFC439] rounded-[48px] py-2 px-6 ">
        Available to Play
</Button>
        <Button className="  text-[8px] md:text-[16px] bg-[#1E1814] h-[40px] text-white rounded-[48px] py-2 px-6 opacity-100">
        Extend Order
</Button>
<Button className=" w-[95px] md:w-[105px]  text-[8px] md:text-[16px] text-[#3FBA6E] hover:bg-[#172924]/80 h-[40px] bg-[#172924] rounded-[48px] py-2 px-6 opacity-100">
       Tip
</Button>
<Button className=" w-[100px] text-[16px] text-white hidden md:block h-[40px] bg-[#EE3E3E] rounded-[48px] py-2 px-6 opacity-100">
        Report
</Button>

        </div>
      </div>

      {/* ── Main wrapper ── */}
      <div className=' rounded-2xl   overflow-hidden'>
        

        {/* ── Content area ── */}
        <div className='flex  flex-col gap-4 lg:flex-row'>
          {/* ── Left sidebar ── */}
          {/* background: 'linear-gradient(180deg, #E7C25B 0%, #B48420 52.5%, #5A3505 100%)' */}
          <div className='w-full md:w-[384px] flex-shrink-0 space-y-4  rounded-[16px] '>
            {/* Progress Tracker */}
            <div style ={{background: 'linear-gradient(180deg, #E7C25B 0%, #433733 45.27%)'}} className=' rounded-xl p-4 '>
              <h3 className='font-helvetica  font-bold text-[16px] leading-[100%] tracking-[0%] text-white mb-4'>Progress Tracker</h3>


<div className='bg-[#201914] rounded-[8px] flex items-center gap-2'>
  <div className='flex items-center gap-2 p-3 rounded-[16px]'>
    <img src={shield2} alt="shield" className='w-[32px] h-[32px]' />
    <p className='font-helvetica text-[16px] font-light leading-none tracking-normal text-white'>Silver II</p>
    </div>
    <ChevronRight className='w-8 h-8 text-red-500 flex-shrink-0' />
    <div className='flex items-center gap-2 p-3 rounded-[16px]'>
    <img src={shield} alt="shield" className='w-[32px] h-[32px]' />
    <p className='font-helvetica text-[16px] font-light leading-none tracking-normal text-white'>Silver II</p>
    </div>

</div>
              

              {/* Current Rank */}
              <div  className='text-center mt-4'>
                <p className='font-helvetica text-[16px] font-bold leading-none tracking-normal text-center text-white mb-3'>Current Rank</p>
                <div className='flex justify-center mb-3'>
                  <div className='w-24 h-24 sm:w-28 sm:h-28 relative'>
                    <div className='absolute inset-0  ' />
                    <div className='w-full h-full flex items-center justify-center'>
                      <div className='text-center'>
                        <img src={shield3} alt="shield" className='w-full h-full' />
                        <div className='w-8 h-8 sm:w-10 sm:h-10 bg-[#FFD54F]/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10' />
                      </div>
                    </div>
                  </div>
                </div>
                <p className='font-helvetica text-[16px] font-light leading-none tracking-normal text-center text-white/80 mb-4'>Gold II</p>
              </div>

              {/* Pause button */}
              <button className='w-full py-3 bg-[#F36E3F] hover:bg-[#F36E3F]/80 rounded-full text-white  font-semibold text-sm flex font-sharp text-[24px]  leading-none tracking-normal items-center justify-center gap-2 transition-colors'>
                <Pause className='w-4 h-4' fill='currentColor' />
                Pause
              </button>
              <p className='text-white/30 text-center font-helvetica text-[8px] font-light leading-none tracking-normaltext-center mt-2'>
               if you want to save the increase
              </p>
            </div>
               
            {/* Account Details */}
            <div className='bg-[#433733] rounded-xl p-4 border border-white/5'>
              <h3 className='text-white font-sharp font-semibold text-sm mb-4'>Account Details</h3>

              <div className='space-y-3'>
                {[
                  { label: 'In Game Name:', value: 'Game Name' },
                  { label: 'Server:', value: 'Europe' },
                  { label: 'Username:', value: 'Username' },
                  { label: 'Password:', value: 'Password' },
                ].map((item) => (
                  <div key={item.label} className='flex items-center justify-between'>
                    <span className='text-[#FFFFFF80] font-helvetica font-light text-[16px] leading-[100%] tracking-[0%]'>{item.label}</span>
                    <span className='text-white font-helvetica font-light text-[16px] leading-[1] tracking-[0]'>{item.value}</span>
                  </div>
                ))}
              </div>

              <button  className='w-full  font-normal border mt-4 border-[#F26E3E] rounded-[16px] px-4 py-2 text-[12px] leading-[1] tracking-[0] text-center text-white'>
                Update Details
              </button>
            </div>
          </div>

          {/* ── Chat section ── */}
          <div className='flex-1 rounded-[16px]  bg-[#332A27]    flex flex-col min-h-[400px] sm:min-h-[500px]'>

            <div className='p-5'>
            {/* Chat tabs */}
            <div className='flex p-1 rounded-full     w-full items-center bg-[#1E1814] border-white/10'>
              <button
                onClick={() => setActiveChat('booster')}
                className={` w-1/2 sm:flex-none px-4 sm:px-6 py-3  font-helvetica  font-light text-[16px] leading-[1] tracking-[0] text-center ${
                  activeChat === 'booster'
                    ? 'text-white border-2 bg-[#433733]  rounded-full border-[#F36E3F]'
                    : 'text-white/40 hover:text-white/60'
                }`}
              >
                Chat with the booster
              </button>
              <button
                onClick={() => setActiveChat('manager')}
                className={` w-1/2 sm:flex-none px-4  sm:px-6 py-3 font-helvetica  font-light text-[16px] leading-[1] tracking-[0] text-center ${
                  activeChat === 'manager'
                    ? 'text-white bg-[#433733]  flex items-center justify-center rounded-full border-[#F36E3F]'
                    : 'text-white/40 hover:text-white/60'
                }`}
              >
                <span className='flex items-center gap-1.5'>
                  <User className='w-3.5 h-3.5' />
                  Chat with the manager
                </span>
              </button>
            </div>

            {/* Chat header */}
            
            <div className='flex items-center py-3 px-2 gap-4 mb-4 '>
          <img src={man} alt="men" className='w-[32px] h-[32px]' />
          <div>
          <p className="font-sharp text-white text-[16px] font-semibold leading-none tracking-normal">
 MoSameh
</p>
<p className="font-sharp flex items-center pt-2 text-white/50 gap-2 text-[12px] font-light leading-none tracking-normal">
 
  <span className='w-2 h-2 rounded-full bg-red-500 inline-block' /> 
  Last seen 5 minutes ago
</p>


          </div>

        </div>
            </div>


            {/* Chat messages */}
            <div className='flex-1 bg-[#433733] overflow-y-auto   py-4 space-y-1'>
              <p className='text-white/20 text-[10px] text-center mb-4'>Today</p>

              <ChatBubble
                message='Hello, Finally found the time to write to you. I want to give you a little tip as a gift for your efforts.'
                time='02:01 PM'
                isOwn={true}
                
              />

              <ChatBubble message='Can I send it?' time='02:01 PM' isOwn />

              <div className='flex   gap-2 p-1 mb-3'>
                {/* <Avatar alt='M' size={28} /> */}
                <img src={man} alt="men" className='w-[32px] h-[32px]' />
                <ChatBubble message='Hello Gemy! Yes you can.' time='02:02 PM' isOwn={false} />
              </div>

              <ChatBubble
                message='You Sent a tip of 5$, Thank you!'
                time=''
                isOwn
                variant='tip'
              />

              <div className='flex items-start gap-2 mb-3'>
                <div className='w-7 h-7 rounded-full bg-[#F36E3F]/20 flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <span className='text-[10px]'>🔥</span>
                </div>
                <ChatBubble
                  message='Hello! Thanks for the tip, it means a lot for us.'
                  time='02:03 PM'
                  isOwn={false}
                />
              </div>
            </div>

            {/* Chat input */}
            <div className='px-4 sm:px-6 py-3 border-t border-white/10'>
              <div className='flex items-center gap-2 bg-[#2A2118] rounded-full ps-3 pe-1 py-1'>
                <input
                  type='text'
                  placeholder='Type your message..'
                  className='flex-1 bg-transparent text-white/80 text-sm placeholder:text-white/30 placeholder:font-light placeholder:text-[16px]  placeholder:leading-[1]  placeholder:tracking-[0]  placeholder:font-helvetica outline-none py-2'
                />
                <button style={{background: "#F26E3E80"}} className='font-helvetica p-2 rounded-full px-6 font-light text-[16px] leading-[1] tracking-[0] text-center'>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
