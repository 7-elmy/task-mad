import React from 'react'
import HowWorkPage from './HowWorkPage'
import FAQPage from './FAQPage'
import InteractiveDemo from './InteractiveDemo'


export default function Index() {
  return (
    <div className='!bg-[#1E1814]'>
        <HowWorkPage/>
        <FAQPage/>
        <InteractiveDemo />
    </div>
  )
}
