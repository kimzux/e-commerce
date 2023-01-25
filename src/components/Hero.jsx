import React from 'react'
import image from '../assets/image-product.png';
import vector from '../assets/Vector.png';
import { AiOutlineShopping } from 'react-icons/ai'
const Hero = ()=> {
  return (
    <div className='bg-dark-white flex flex-col'>
    <div className='flex  mt-[120px]'>
            <div className='flex flex-col'>
            <img src={vector} alt=" profile" className="w-[200px] "/>
          <img src={vector} alt=" profile" className="w-[200px] ]"/>
          <img src={vector} alt=" profile" className="w-[200px] ]"/>
          <img src={vector} alt=" profile" className="w-[200px] ]"/>
            </div>
          
            <div className='flex flex-col ml-[200px] mt-[50px]'>
              <h2 className='text-[50px] font-light'>Collections</h2>
              <p className='mt-[32px] text-[20px] mr-[20px] font-normal'>you can explore Kernel shop many different collections
                from various brands here.</p>
              <div className='flex mt-[30px]'>
                <button className='text-white w-fix px-8 my-2 flex items-center rounded-md bg-orange cursor-pointer active:scale-[.98] active:duration-50 transition-all hover:scale-[1.01]  ease-in-out  transform py-4  '><div className='flex space-x-1'>
                  <AiOutlineShopping size={30} />
                  <span className='text-[20px]'>Shoping</span>
                </div></button>
              </div>
              
            </div>
            
            <img src={image} alt=" profile" className="w-[500px] h-[500px] mr-[200px]"/>
            <div className='flex flex-col'>
            <img src={vector} alt=" profile" className="w-[200px] mr-[50px]"/>
            <img src={vector} alt=" profile" className="w-[200px] mr-[50px]"/>
            <img src={vector} alt=" profile" className="w-[200px] mr-[50px]"/>
            </div>
           
          </div>
    </div>
  )
}

export default Hero
