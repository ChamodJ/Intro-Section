import React from 'react'
import { useState } from 'react'

import {logo, arrow_down, arrow_up, todo, calender, reminders, planning } from '../images/index'
import Dropdown from './Dropdown'

const Navbar = () => {
    const [navToggleF, setNavtoggleF] = useState(false)
    const [navToggleC, setNavtoggleC] = useState(false)

    const featuresList = [
        {lable: "Todo List" , link: '#', image: todo},
        {lable:"Calender" , link: '#' , image: calender},
        {lable:"Reminders" , link: '#' , image: reminders},
        {lable:"Planning" , link: '#' , image: planning}
    ]

    const companyList = [
        {lable: "History" , link: '#'},
        {lable: "Our Team" , link: '#'},
        {lable: "Blog" , link: '#'}
    ]

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
                        <li className='mr-[20px]' onClick={() => setNavtoggleF ((prev) => !prev)}>
                            <div className=' flex justify-center items-center hover:text-ABlack hover:font-bold'>
                                <a href='#'>Features</a>
                                <img    src={navToggleF ? arrow_up : arrow_down} 
                                        className='w-[10px] h-[10px] ml-[5px]'
                                />
                            </div>

                            <Dropdown isOpen={navToggleF} items={featuresList} compartment="F"/>

                        </li>

                        {/* Company */}
                        <li className='mr-[20px] flex justify-center items-center ' onClick={() => setNavtoggleC ((prev) => !prev)}>
                            <div className=' flex justify-center items-center hover:text-ABlack hover:font-bold'>
                                <p><a href='#'>Company</a></p>
                                <img    src={navToggleC ? arrow_up : arrow_down} 
                                        className='w-[10px] h-[10px] ml-[5px]'
                                />
                            </div>

                            <Dropdown isOpen={navToggleC} items={companyList} />
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