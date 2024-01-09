import React from 'react'
import { image_hero_dec } from '../images'

const Intro = () => {
  return (
    <div className='w-full flex justify-between items-start px-[60px] py-[50px]'>
      {/* Text Side */}
      <div className='w-1/2 py-[80px]'>
        <h1 className='font-[2rem] text-[4rem] font-bold text-ABlack leading-[4rem]'>Make <br />remote work</h1>

        <p className='text-MGray w-[350px] leading-5 my-[25px]'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>

        <div className='w-[140px] border-[2px] border-ABlack  rounded-[12px] px-[15px] py-[10px] bg-ABlack text-AWhite font-bold text-center hover:bg-AWhite hover:text-ABlack'>
          <p><a href=''>Learn More</a></p>
        </div>
      </div>

      {/* Image */}
      <div className='flex justify-center w-1/2'>
        <div className=''>
          <img src={image_hero_dec} className='w-[350px] h-[450px]'/>
        </div>
      </div>
    </div>
  )
}

export default Intro