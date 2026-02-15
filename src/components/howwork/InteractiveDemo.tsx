import React, { useState } from 'react'
import { Send, Pause, ChevronRight, Shield, User } from 'lucide-react'
import man from '@/assests/man.png'
import shield from '@/assests/shield.png'
import shield2 from '@/assests/shield2.png'
import shield3 from '@/assests/shield3.png'
import { Button } from '../ui/button';
import logolite from "@/assests/logolite.png"

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
        <div className='bg-[#172924] border border-[#2E7D32]/40 rounded-xl px-3 py-2 max-w-[92%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[70%]'>
          <p className='text-[#66BB6A] font-light text-[14px] sm:text-[15px] md:text-[16px] leading-[1.3] sm:leading-[1.2] md:leading-[1] tracking-[0] font-helvetica flex items-center gap-1'>
            <span className='text-[#66BB6A]'>◎</span> {message}
            <span className='text-[#F36E3F] ml-1'>▶</span>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`rounded-xl font-light text-[14px] sm:text-[15px] md:text-[16px] leading-[1.3] sm:leading-[1.2] md:leading-[1] tracking-[0] font-helvetica px-3 py-2 max-w-[92%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[70%] ${
          isOwn
            ? 'bg-[#F26E3E] border border-[#F36E3F]/30 mb-2'
            : 'bg-[#3D3330] border border-white/5'
        }`}
      >
        <p className='text-white/90 font-helvetica'>{message}</p>
        <p className='text-white/30 text-[10px] mt-1 text-right'>{time}</p>
      </div>
    </div>
  )
}

export default function InteractiveDemo() {
  const [activeChat, setActiveChat] = useState<'booster' | 'manager'>('booster')

  return (
    <section className='container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-8 sm:py-10 md:py-14 lg:py-[62px] xl:py-[72px] md:pb-[76px]'>
      {/* ── Section title ── */}
      <div className='text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16'>
        <h1 className="font-sharp text-[22px] sm:text-[28px] md:text-[40px] lg:text-[48px] xl:text-[52px] font-semibold leading-tight sm:leading-tight lg:leading-none tracking-normal flex flex-col lg:flex-row items-center justify-center gap-1 sm:gap-2 lg:gap-3">
          <span className='text-[#F36E3F]'>MadBoost.gg</span>
          <span className='text-white'>Interactive Demo</span>
        </h1>
      </div>

      <div className='border-[#F36E3F] flex-col md:flex-row border-2 w-full mb-6 sm:mb-8 md:mb-[32px] rounded-[12px] sm:rounded-[14px] md:rounded-[16px] p-4 sm:p-5 md:p-6 lg:p-8 cursor-pointer flex items-center justify-between gap-4 sm:gap-5'>
        <div className='flex items-center gap-3 sm:gap-4 w-full min-w-0'>
          <img src={man} alt="men" className='w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-[32px] lg:h-[32px] flex-shrink-0 rounded object-cover' />
          <div className='min-w-0'>
            <p className="font-sharp text-white text-[14px] sm:text-[15px] md:text-[16px] font-semibold leading-none tracking-normal truncate">MoSameh</p>
            <p className="font-sharp flex items-center pt-1.5 sm:pt-2 text-white/50 gap-1.5 sm:gap-2 text-[11px] sm:text-[12px] font-light leading-none tracking-normal">
              <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 inline-block flex-shrink-0' />
              <span className='truncate'>Last seen 5 minutes ago</span>
            </p>
          </div>
        </div>
        <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-end items-center gap-2 sm:gap-3 md:gap-4 w-full'>
          <Button variant='default' className="min-w-0 w-[calc(50%-4px)]  md:w-auto md:min-w-0 md:flex-shrink-0 text-[10px] sm:text-[11px] md:text-[14px] lg:text-[16px] text-[#1E1814] hover:bg-[#FFC439]/80 h-9 sm:h-[38px] md:h-[40px] bg-[#FFC439] rounded-[48px] py-2 px-3 sm:px-4 md:px-6 md:whitespace-nowrap">
            Available to Play
          </Button>
          <Button className="min-w-0 w-[calc(50%-4px)] sm:w-auto text-[10px] sm:text-[11px] md:text-[14px] lg:text-[16px] bg-[#1E1814] h-9 sm:h-[38px] md:h-[40px] text-white rounded-[48px] py-2 px-3 sm:px-4 md:px-6 opacity-100 md:whitespace-nowrap">
            Extend Order
          </Button>
          <Button className="min-w-0 w-[calc(50%-4px)] sm:w-[95px] md:w-auto md:min-w-0 md:flex-shrink-0 text-[10px] sm:text-[11px] md:text-[14px] lg:text-[16px] text-[#3FBA6E] hover:bg-[#172924]/80 h-9 sm:h-[38px] md:h-[40px] bg-[#172924] rounded-[48px] py-2 px-3 sm:px-4 md:px-6 opacity-100 md:whitespace-nowrap">
            Tip
          </Button>
          <Button className="hidden lg:flex w-auto min-w-0 flex-shrink-0 text-[14px] lg:text-[16px] text-white h-[40px] bg-[#EE3E3E] rounded-[48px] py-2 px-5 lg:px-6 opacity-100 whitespace-nowrap">
            Report
          </Button>
        </div>
      </div>

      {/* ── Main wrapper ── */}
      <div className='rounded-xl sm:rounded-2xl overflow-hidden'>
        {/* ── Content area ── */}
        <div className='flex flex-col gap-4 md:flex-row md:gap-4 lg:gap-6'>
          {/* ── Left sidebar ── */}
          <div className='w-full md:w-[340px] lg:w-[360px] xl:w-[384px] flex-shrink-0 space-y-4 rounded-[12px] sm:rounded-[14px] md:rounded-[16px]'>
            {/* Progress Tracker */}
            <div style={{ background: 'linear-gradient(180deg, #E7C25B 0%, #433733 45.27%)' }} className='rounded-xl p-3 sm:p-4 md:p-5'>
              <h3 className='font-helvetica font-bold text-[14px] sm:text-[15px] md:text-[16px] leading-[100%] tracking-[0%] text-white mb-3 sm:mb-4'>Progress Tracker</h3>
              <div className='bg-[#201914] rounded-[8px] flex justify-center items-center gap-1 sm:gap-2 overflow-hidden'>
                <div className='flex items-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-[16px] min-w-0'>
                  <img src={shield2} alt="shield" className='w-6 h-6 sm:w-7 sm:h-7 md:w-[32px] md:h-[32px] flex-shrink-0' />
                  <p className='font-helvetica text-[12px] sm:text-[14px] md:text-[16px] font-light leading-none tracking-normal text-white truncate'>Silver II</p>
                </div>
                <ChevronRight className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-red-500 flex-shrink-0' />
                <div className='flex items-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-[16px] min-w-0'>
                  <img src={shield} alt="shield" className='w-6 h-6 sm:w-7 sm:h-7 md:w-[32px] md:h-[32px] flex-shrink-0' />
                  <p className='font-helvetica text-[12px] sm:text-[14px] md:text-[16px] font-light leading-none tracking-normal text-white truncate'>Silver II</p>
                </div>
              </div>
              {/* Current Rank */}
              <div className='text-center mt-3 sm:mt-4'>
                <p className='font-helvetica text-[14px] sm:text-[15px] md:text-[16px] font-bold leading-none tracking-normal text-center text-white mb-2 sm:mb-3'>Current Rank</p>
                <div className='flex justify-center mb-2 sm:mb-3'>
                  <div className='w-20 h-20 sm:w-24 sm:h-24 md:w-[7rem] md:h-[7rem] lg:w-28 lg:h-28 relative'>
                    <div className='absolute inset-0  ' />
                    <div className='w-full h-full flex items-center justify-center'>
                      <div className='text-center'>
                        <img src={shield3} alt="shield" className='w-full h-full' />
                        <div className='w-8 h-8 sm:w-10 sm:h-10 bg-[#FFD54F]/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10' />
                      </div>
                    </div>
                  </div>
                </div>
                <p className='font-helvetica text-[14px] sm:text-[15px] md:text-[16px] font-light leading-none tracking-normal text-center text-white/80 mb-3 sm:mb-4'>Gold II</p>
              </div>
              {/* Pause button */}
              <button className='w-full py-2.5 sm:py-3 bg-[#F36E3F] hover:bg-[#F36E3F]/80 rounded-full text-white font-semibold text-sm sm:text-[15px] md:text-base font-sharp leading-none tracking-normal flex items-center justify-center gap-2 transition-colors'>
                <Pause className='w-4 h-4' fill='currentColor' />
                Pause
              </button>
              <p className='text-white/30 text-center font-helvetica text-[8px] font-light leading-none tracking-normal mt-2'>
                if you want to save the increase
              </p>
            </div>
            {/* Account Details */}
            <div className='bg-[#433733] rounded-xl p-3 sm:p-4 md:p-5 border border-white/5'>
              <h3 className='text-white font-sharp font-semibold text-[13px] sm:text-[14px] md:text-base mb-3 sm:mb-4'>Account Details</h3>
              <div className='space-y-2 sm:space-y-3'>
                {[
                  { label: 'In Game Name:', value: 'Game Name' },
                  { label: 'Server:', value: 'Europe' },
                  { label: 'Username:', value: 'Username' },
                  { label: 'Password:', value: 'Password' },
                ].map((item) => (
                  <div key={item.label} className='flex items-center justify-between gap-2 mb-3 border-b border-[#201914]/30 pb-3 text-[13px] sm:text-[14px] md:text-[16px]'>
                    <span className='text-[#FFFFFF80] font-helvetica font-light leading-[100%] tracking-[0%] shrink-0'>{item.label}</span>
                    <span className='text-white font-helvetica font-light leading-[1] tracking-[0] truncate text-right'>{item.value}</span>
                  </div>
                ))}
              </div>
              <button className='w-full font-normal border mt-3 sm:mt-4 border-[#F26E3E] rounded-[12px] sm:rounded-[16px] px-4 py-2 text-[11px] sm:text-[12px] leading-[1] tracking-[0] text-center text-white hover:bg-[#F26E3E]/10 transition-colors'>
                Update Details
              </button>
            </div>
          </div>

          {/* ── Chat section ── */}
          <div className='flex-1 min-w-0 rounded-[12px] sm:rounded-[14px] md:rounded-[16px] bg-[#332A27] flex flex-col min-h-[340px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[500px] xl:min-h-[540px]'>
            <div className='p-3 sm:p-4 md:p-5'>
              {/* Chat tabs */}
              <div className='flex p-1 rounded-full w-full items-center bg-[#1E1814] border border-white/10'>
                <button
                  onClick={() => setActiveChat('booster')}
                  className={`w-1/2 min-w-0 px-2 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 font-helvetica font-light text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] leading-[1.2] tracking-[0] text-center rounded-full transition-colors ${
                    activeChat === 'booster'
                      ? 'text-white border-2 bg-[#433733] border-[#F36E3F]'
                      : 'text-white/40 hover:text-white/60'
                  }`}
                >
                  Chat with the booster
                </button>
                <button
                  onClick={() => setActiveChat('manager')}
                  className={`w-1/2 min-w-0 px-2 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 font-helvetica font-light text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] leading-[1.2] tracking-[0] text-center rounded-full transition-colors flex items-center justify-center gap-1 sm:gap-1.5 ${
                    activeChat === 'manager'
                      ? 'text-white bg-[#433733] border-2 border-[#F36E3F]'
                      : 'text-white/40 hover:text-white/60'
                  }`}
                >
                  <User className='w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0' />
                  <span className='truncate'>Chat with the manager</span>
                </button>
              </div>

              {/* Chat header */}
              <div className='flex items-center py-2.5 sm:py-3 px-1 sm:px-2 gap-3 sm:gap-4 mt-3 sm:mt-0'>
                <img src={man} alt="men" className='w-8 h-8 sm:w-9 sm:h-9 md:w-[32px] md:h-[32px] rounded object-cover flex-shrink-0' />
                <div className='min-w-0'>
                  <p className="font-sharp text-white text-[14px] sm:text-[15px] md:text-[16px] font-semibold leading-none tracking-normal">MoSameh</p>
                  <p className="font-sharp flex items-center pt-1 sm:pt-2 text-white/50 gap-1.5 sm:gap-2 text-[11px] sm:text-[12px] font-light leading-none tracking-normal">
                    <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 inline-block flex-shrink-0' />
                    Last seen 5 minutes ago
                  </p>
                </div>
              </div>
            </div>

            {/* Chat messages */}
            <div className='flex-1 bg-[#433733] overflow-y-auto py-3 sm:py-4 md:py-5 px-3 sm:px-4 md:px-5 lg:px-6 min-h-0'>
              <p className='text-white/20 font-helvetica text-center mb-3 sm:mb-4 font-light text-[16px] leading-[1] tracking-[0]'>Today</p>

              <ChatBubble
                message='Hello, Finally found the time to write to you. I want to give you a little tip as a gift for your efforts.'
                time='02:01 PM'
                isOwn={true}
                
              />

              <ChatBubble message='Can I send it?' time='02:01 PM' isOwn />

              <div className='flex gap-2 p-1 mb-3'>
                <img src={man} alt="men" className='w-7 h-7 sm:w-8 sm:h-8 md:w-[32px] md:h-[32px] rounded object-cover flex-shrink-0' />
                <ChatBubble message='Hello Gemy! Yes you can.' time='02:02 PM' isOwn={false} />
              </div>

              <ChatBubble
                message='You Sent a tip of 5$, Thank you!'
                time=''
                isOwn
                variant='tip'
              />

              <div className='flex items-start gap-2 mb-3'>
                <div className='w-7 h-7 sm:w-8 sm:h-8 md:w-[32px] md:h-[32px] rounded-[6px] sm:rounded-[8px] bg-[#201914] flex items-center justify-center flex-shrink-0 mt-0.5 overflow-hidden'>
                  <img src={logolite} alt="logolite" className='w-full h-full object-contain' />
                </div>
                <ChatBubble
                  message='Hello! Thanks for the tip, it means a lot for us.'
                  time='02:03 PM'
                  isOwn={false}
                />
              </div>
            </div>

            {/* Chat input */}
            <div className='px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 rounded-b-[12px] sm:rounded-b-[14px] md:rounded-b-[16px] bg-[#433733]'>
              <div className='flex items-center gap-1 sm:gap-2 bg-[#2A2118] rounded-full pl-3 pr-1 sm:pl-4 sm:pr-2 py-1'>
                <input
                  type='text'
                  placeholder='Type your message..'
                  className='flex-1 min-w-0 bg-transparent text-white/80 text-[13px] sm:text-[14px] md:text-sm placeholder:text-white/30 placeholder:font-light placeholder:text-[14px] md:placeholder:text-[16px] placeholder:leading-[1] placeholder:tracking-[0] placeholder:font-helvetica outline-none py-2'
                />
                <button style={{ background: '#F26E3E80' }} className='font-helvetica p-2 rounded-full px-4 sm:px-5 md:px-6 font-light text-[13px] sm:text-[14px] md:text-[16px] leading-[1] tracking-[0] text-center text-white shrink-0 hover:opacity-90 transition-opacity'>
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
