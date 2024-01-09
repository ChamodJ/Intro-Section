import React from 'react'
import { useState } from 'react'

import {logo, arrow_down, arrow_up, todo, calender, reminders, planning, menu, menu_close } from '../images/index'
import Dropdown from './Dropdown'

const Navbar = () => {
    //Feature Toggle
    const [navToggleF, setNavtoggleF] = useState(false)
    //Company Toggle
    const [navToggleC, setNavtoggleC] = useState(false)
    //Mobile View Menu Toggle
    const [menuToggleM, setmenuToggleM] = useState(false)

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
        <div className='p-[25px]'>
            {/*Navbar Main Desktop*/}
            <div className='w-full h-[50px] py-[5px] flex justify-between text-center items-center text-MGray hidden sm:flex'>

                {/* Logo Section */}
                <div className='flex justify-start items-start flex-1'>
                    <div className='w-[150px] h-full'>
                        <img src={logo} className='w-[100px] h-full'/>
                    </div>

                {/* Nav links */}
                    <div>
                        <ul className='flex justify-start items-start cursor-pointer '>

                            {/* Features */}
                            <li className='mr-[25px]' onClick={() => setNavtoggleF ((prev) => !prev)}>
                                <div className=' flex justify-center items-center hover:text-ABlack hover:font-bold'>
                                    <a href='#'>Features</a>
                                    <img    src={navToggleF ? arrow_up : arrow_down} 
                                            className='w-[10px] h-[10px] ml-[5px]'
                                    />
                                </div>

                                <Dropdown isOpen={navToggleF} items={featuresList} compartment="F"/>

                            </li>

                            {/* Company */}
                            <li className='mr-[25px] flex justify-center items-center ' onClick={() => setNavtoggleC ((prev) => !prev)}>
                                <div className=' flex justify-center items-center hover:text-ABlack hover:font-bold'>
                                    <p><a href='#'>Company</a></p>
                                    <img    src={navToggleC ? arrow_up : arrow_down} 
                                            className='w-[10px] h-[10px] ml-[5px]'
                                    />
                                </div>

                                <Dropdown isOpen={navToggleC} items={companyList} />
                            </li>

                            {/* Careers */}
                            <li className='mr-[25px] hover:text-ABlack hover:font-bold'><a href='#'>Careers</a></li>

                            {/* About */}
                            <li className='mr-[25px] hover:text-ABlack hover:font-bold'><a href='#'>About</a></li>
                        </ul>
                    </div>
                </div>
                

                {/* Button Section */}
                <div className='flex justify-between items-center'>

                    {/* Login Link */}
                    <div className='mr-[30px] hover:text-ABlack hover:font-bold' >
                        <a href='#'>Login</a>
                    </div>

                    {/* Register Link */}
                    <div className='border-[1px] border-MGray rounded-[12px] px-[10px] py-[5px] hover:text-ABlack hover:border-ABlack hover:font-bold text-center'>
                        <a href='#'>Register</a>
                    </div>
                </div>
            </div>

            {/*Navbar Main Mobile*/}
            <div className='sm:hidden flex justify-between items-start '>
                <div className='w-[150px]'>
                    <img src={logo} />
                </div>

                <div className='z-20 mr-[25px]' onClick={() => setmenuToggleM ((prev) => !prev)}>
                    <img src={menuToggleM ? menu_close : menu} className={`${setmenuToggleM ? 'fixed' : 'static'}`}/>
                </div>
                {/*Navbar Mobile*/}
                <div className={`${menuToggleM ? 'flex' : 'hidden'} fixed h-screen w-full right-0 top-0 bg-black bg-opacity-[0.6] z-0 flex `}>

                    <div className='w-1/4 '></div>

                    {/* Nav links */}
                    <div className='w-3/4 bg-white px-[30px] text-[1.1rem] text-MGray'>
                        <ul className='flex flex-col items-start  cursor-pointer mt-[70px]  '>

                            {/* Features */}
                            <li className='mb-[15px] w-full' onClick={() => setNavtoggleF ((prev) => !prev)}>
                                <div className=' flex justify-strat items-center hover:text-ABlack'>
                                    <a href='#'>Features</a>
                                    <img    src={navToggleF ? arrow_up : arrow_down} 
                                            className='w-[10px] h-[10px] ml-[5px]'
                                    />
                                </div>
                                
                                <div className={`${navToggleF ? 'block' : 'hidden'} ml-[20px]`}>
                                    <div className='flex justify-start items-center mt-[10px]'>
                                        <img src={todo} className={`w-[15px] h-[15px] mr-[10px]`} />
                                        <p className='hover:text-ABlack hover:font-bold'>
                                            <a href='#'>Todo List</a>
                                        </p>
                                    </div>

                                    <div className='flex justify-start items-center mt-[10px]'>
                                        <img src={calender} className={`w-[15px] h-[15px] mr-[10px]`} />
                                        <p className='hover:text-ABlack hover:font-bold'>
                                            <a href='#'>Calender</a>
                                        </p>
                                    </div>
                                    
                                    <div className='flex justify-start items-center mt-[10px]'>
                                        <img src={reminders} className={`w-[15px] h-[15px] mr-[10px]`} />
                                        <p className='hover:text-ABlack hover:font-bold'>
                                            <a href='#'>Reminders</a>
                                        </p>
                                    </div>

                                    <div className='flex justify-start items-center mt-[10px]'>
                                        <img src={planning} className={`w-[15px] h-[15px] mr-[10px]`} />
                                        <p className='hover:text-ABlack hover:font-bold'>
                                            <a href='#'>Planning</a>
                                        </p>
                                    </div>

                                </div>
                            </li>

                            {/* Company */}
                            <li className='mb-[15px] w-full' onClick={() => setNavtoggleC ((prev) => !prev)}>
                                <div className=' flex justify-strat items-center hover:text-ABlack'>
                                    <a href='#'>Company</a>
                                    <img    src={navToggleC ? arrow_up : arrow_down} 
                                            className='w-[10px] h-[10px] ml-[5px]'
                                    />
                                </div>
                                
                                <div className={`${navToggleC ? 'block' : 'hidden'} ml-[20px]`}>
                                    <div className='flex justify-start items-center mt-[10px]'>
                                        <p className='hover:text-ABlack hover:font-bold'>
                                            <a href='#'>History</a>
                                        </p>
                                    </div>

                                    <div className='flex justify-start items-center mt-[10px]'>
                                        <p className='hover:text-ABlack hover:font-bold'>
                                            <a href='#'>Our Team</a>
                                        </p>
                                    </div>

                                    <div className='flex justify-start items-center mt-[10px]'>
                                        <p className='hover:text-ABlack hover:font-bold'>
                                            <a href='#'>Blog</a>
                                        </p>
                                    </div>
                                </div>
                            </li>


                            {/* Careers */}
                            <li className='mb-[15px]  hover:text-ABlack'><a href='#'>Careers</a></li>

                            {/* About */}
                            <li className='mb-[15px]  hover:text-ABlack'><a href='#'>About</a></li>
                        </ul>

                        {/* Button Section */}
                        <div className='flex flex-col justify-center items-center text-center'>
                            {/* Login Link */}
                            <div className='mr-[30px] hover:text-ABlack hover:font-bold w-full mb-[20px] px-[10px] py-[5px]' >
                                <a href='#'>Login</a>
                            </div>

                            {/* Register Link */}
                            <div className='border-[1px] border-MGray rounded-[12px] px-[10px] py-[5px] hover:text-ABlack hover:border-ABlack hover:font-bold w-full'>
                                <a href='#'>Register</a>
                            </div>
                        </div>
                    </div>
                </div>

            
            </div>
        </div>
       
    )
}


export default Navbar