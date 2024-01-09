import React from 'react'
import { c_audiophile, c_databiz, c_maker, c_meet, image_hero_dec } from '../images'

const Intro = () => {
  return (
    <div className='w-full flex justify-between items-start px-[100px] pt-[50px] max-sm:flex-col-reverse max-sm:px-[0px] max-sm:pt-[0px]'>
      {/* Text Side */}
      <div className='w-1/2 py-[80px] max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-center'>
        <h1 className='text-[4rem] font-bold text-ABlack leading-[4rem] max-sm:text-[2.5rem] max-sm:leading[2rem]'>Make <br className='max-sm:hidden'/>remote work</h1>

        <p className='text-MGray w-[350px] leading-5 my-[25px] max-sm:text-center max-sm:leading-7 max-sm:text-[1.2rem]'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>

        {/* Learn More Btn */}
        <div className='w-[140px] border-[2px] border-ABlack  rounded-[12px] px-[15px] py-[10px] bg-ABlack text-AWhite font-bold text-center hover:bg-AWhite hover:text-ABlack '>
          <p><a href=''>Learn More</a></p>
        </div>

        {/* Brands Div */}
        <div className='flex justify-between items-center w-[400px] mt-[50px] max-sm:w-full max-sm:px-[12px]'>
          <div className='w-[80px]'><img src={c_databiz} /></div>
          <div className='w-[80px] max-sm:w-[60px]'><img src={c_audiophile} /></div>
          <div className='w-[80px] max-sm:w-[70px]'><img src={c_meet} /></div>
          <div className='w-[80px] max-sm:w-[70px]'><img src={c_maker} /></div>
        </div>
      </div>

      {/* Image */}
      <div className='flex justify-center w-1/2 max-sm:w-full max-sm:block'>
        <div className=''>
          <img src={image_hero_dec} className='w-[350px] h-[450px] max-sm:w-full max-sm:min-h-[350px]'/>
        </div>
      </div>
    </div>
  )
}

export default Intro