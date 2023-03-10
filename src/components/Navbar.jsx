import React from 'react'
import logo from '../assets/logo.png'
import { AiOutlineUser } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineShopping } from 'react-icons/ai'
const Navbar = () => {
  return (
    <nav>
      <header>
        <div className='bg-dark-white flex flex-col'>
          <div className='flex justify-center items-center relative mt-[10px]'>
            <div className='absolute left-[300px] '>
            <input class="bg-dark-white focus:bg-transparent outline-none py-2 px-4 block w-full appearance-none leading-normal mb-[10px]"  type="text"/>
            <div className='flex absolute left-[0px] mt-[10px] inset-y-0 right-0 pr-3 pointer-events-none '> 
             <BiSearch size={20} /> 
             </div>
            </div>
        
            <img src={logo} alt="my profile" className="w-[150px]" />
            <div className='flex space-x-1 absolute left-[1000px] '>
              <AiOutlineUser size={20} />
              <span>Account</span>
            </div>
            <div className='flex space-x-1 absolute left-[1100px]'>
              <AiOutlineShopping size={20} />
              <span>Shoping</span>
            </div>
          </div>
          <div class="inline-flex items-center justify-center w-full">
            <hr class="w-64 h-px my-8 bg-gray border-0 dark:bg-gray-700" />
            <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">shop</span>
          </div>
          <div className='flex justify-center items-center space-x-20 text-[20px]'>
            <a href='home'>Home</a>
            <a href='home'>Products</a>
            <a href='home'>Collections</a>
            <a href='home'>Contact</a>
          </div>
          
        </div>
      </header>
    </nav>

  )
}

export default Navbar
