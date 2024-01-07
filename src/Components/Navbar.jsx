import React from 'react'
import { useState } from 'react'

import {logo, arrow_down, arrow_up } from '../images/index'

const Navbar = () => {
    const [navToggleF, setNavtoggleF] = useState(false)
    const [navToggleC, setNavtoggleC] = useState(false)

    return (
        <div className='w-full flex justify-between items-center text-MGray text-[0.8rem]'>
            <div className='flex justify-start items-start flex-1'>
                <div className='w-[150px]'>
                    <img src={logo} />
                </div>

                <div>
                    <ul className='flex justify-start items-center cursor-pointer '>
                        <li className='mr-[20px] flex justify-center items-center hover:text-ABlack hover:font-bold'>
                            <a href='#'>Features</a>
                            <img    src={navToggleF ? arrow_up : arrow_down} 
                                    className='w-[10px] h-[10px] ml-[5px]'
                                    onClick={() => setNavtoggleF ((prev) => !prev)}/>
                        </li>

                        <li className='mr-[20px] flex justify-center items-center hover:text-ABlack hover:font-bold'>
                            <a href='#'>Company</a>
                            <img    src={navToggleC ? arrow_up : arrow_down} 
                                    className='w-[10px] h-[10px] ml-[5px]'
                                    onClick={() => setNavtoggleC ((prev) => !prev)}/>
                        </li>

                        <li className='mr-[20px] hover:text-ABlack hover:font-bold'><a href='#'>Careers</a></li>
                        <li className='mr-[20px] hover:text-ABlack hover:font-bold'><a href='#'>About</a></li>
                    </ul>
                </div>
            </div>
            

            <div className='flex justify-between items-center'>
                <div className='mr-[25px] hover:text-ABlack hover:font-bold' >
                    <a href='#'>Login</a>
                </div>

                <div className='border-[1px] border-MGray rounded-[12px] px-[10px] py-[5px] hover:text-ABlack hover:border-ABlack hover:font-bold'>
                    <a href='#'>Register</a>
                </div>
            </div>
        </div>
    )
}


export default Navbar