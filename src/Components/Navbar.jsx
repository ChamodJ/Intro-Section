import React from 'react'
import { useState } from 'react'

import {logo, arrow_down, arrow_up, todo, calender, reminders, planning } from '../images/index'

const Navbar = () => {
    const [navToggleF, setNavtoggleF] = useState(false)
    const [navToggleC, setNavtoggleC] = useState(false)

    return (
        //Navbar Main
        <div className='w-full flex justify-between text-center items-start text-MGray text-[0.8rem]'>

            {/* Logo Section */}
            <div className='flex justify-start items-start flex-1'>
                <div className='w-[150px]'>
                    <img src={logo} />
                </div>

            {/* Nav links */}
                <div>
                    <ul className='flex justify-start items-start cursor-pointer '>

                        {/* Features */}
                        <li className='mr-[20px]' onClick={() => {setNavtoggleF ((prev) => !prev); ((prev) => !prev)}}>
                            <div className=' flex justify-center items-center hover:text-ABlack hover:font-bold'>
                                <a href='#'>Features</a>
                                <img    src={navToggleF ? arrow_up : arrow_down} 
                                        className='w-[10px] h-[10px] ml-[5px]'
                                />
                            </div>

                            {/* Features hidden compartment */}
                            <div className={`${navToggleF ? 'absolute' : 'hidden'} py-[15px] px-[25px] leading-[2rem] left-[90px] top-[40px] shadow-2xl rounded-md outline-none border-none`}>
    
                                {/* Features-Todo */}
                                <div className='flex justify-start items-center'>
                                    <img src={todo} className='w-[15px] h-[15px] mr-[10px]' />
                                    <p className='hover:text-ABlack hover:font-bold'>
                                        <a href='#'>Todo List</a>
                                    </p>
                                </div>

                                {/* Features-Calender */}
                                <div className='flex justify-start items-center'>
                                    <img src={calender} className='w-[15px] h-[15px] mr-[10px]'/>
                                    <p className='hover:text-ABlack hover:font-bold'><a href='#'>Calender</a></p>
                                </div>

                                {/* Features-Reminders */}
                                <div className='flex justify-start items-center'>
                                    <img src={reminders} className='w-[15px] h-[15px] mr-[10px]' />
                                    <p className='hover:text-ABlack hover:font-bold'><a href='#'>Reminders</a></p>
                                </div>

                                {/* Features-Planning */}
                                <div className='flex justify-start items-center'>
                                    <img src={planning} className='w-[15px] h-[15px] mr-[10px]' />
                                    <p className='hover:text-ABlack hover:font-bold'><a href='#'>Planning</a></p>
                                </div>
                            </div>
                        </li>

                        {/* Company */}
                        <li className='mr-[20px] flex justify-center items-center ' onClick={() => { setNavtoggleC ((prev) => !prev) ;  ((prev) => !prev)}}>
                            <div className=' flex justify-center items-center hover:text-ABlack hover:font-bold'>
                                <p><a href='#'>Company</a></p>
                                <img    src={navToggleC ? arrow_up : arrow_down} 
                                        className='w-[10px] h-[10px] ml-[5px]'
                                />
                            </div>
                        
                            {/* Company hidden compartment */}
                            <div className={`${navToggleC ? 'absolute' : 'hidden'} py-[15px] px-[25px] leading-[2rem] left-[290px] top-[40px] shadow-2xl rounded-md outline-none border-none`}>
                                <p className='hover:text-ABlack hover:font-bold'><a href='#'>Histrory</a></p>
                                <p className='hover:text-ABlack hover:font-bold'><a href='#'>Our Team</a></p>
                                <p className='hover:text-ABlack hover:font-bold'><a href='#'>Blog</a></p>
                            </div>
                        </li>

                        {/* Careers */}
                        <li className='mr-[20px] hover:text-ABlack hover:font-bold'><a href='#'>Careers</a></li>

                        {/* About */}
                        <li className='mr-[20px] hover:text-ABlack hover:font-bold'><a href='#'>About</a></li>
                    </ul>
                </div>
            </div>
            

            {/* Button Section */}
            <div className='flex justify-between items-center'>

                {/* Login Link */}
                <div className='mr-[25px] hover:text-ABlack hover:font-bold' >
                    <a href='#'>Login</a>
                </div>

                {/* Register Link */}
                <div className='border-[1px] border-MGray rounded-[12px] px-[10px] py-[5px] hover:text-ABlack hover:border-ABlack hover:font-bold'>
                    <a href='#'>Register</a>
                </div>
            </div>
        </div>
    )
}


export default Navbar