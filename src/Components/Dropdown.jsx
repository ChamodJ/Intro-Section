import React from 'react'

const Dropdown = ({items, isOpen, compartment}) => {
  return (
    <div>

      {/* Desktop */}
      <div className={`${isOpen ? 'sm:absolute' : 'hidden'} py-[15px] px-[25px] leading-[2rem]   ${compartment === 'F' ? 'left-[90px] top-[50px]' : 'left-[290px] top-[50px]'} shadow-2xl rounded-md outline-none border-none sm:absolute`}>
          {items.map((items , index) => (
              <div className='flex justify-start items-center'>
                  <img src={items.image} className={`${items.image ? 'block' : 'hidden'}w-[15px] h-[15px] mr-[10px]`} />
                  <p className='hover:text-ABlack hover:font-bold'>
                      <a href={items.link}>{items.lable}</a>
                  </p>
              </div>
          ))} 
      </div>

      {/* Mobile */}
      

    </div>

  )
}

export default Dropdown