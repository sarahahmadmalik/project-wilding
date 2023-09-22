import React from 'react'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai';

const index = () => {
    return (
        <div className='bg-[white]'>
            <div className=' flex flex-col-reverse 	  lg:flex-row justify-center    items-center px-6 max-w-[1300px] mx-auto py-[50px] md:py-[100px]'>

                <div className='  h-full'>
                    <Image width={603} height={100} src={'/women.svg'} />
                </div>
                <div className='flex  flex-col h-[669px]  bg-[#000]  gap-y-3 w-full lg:w-[50%]  py-4 px-8 justify-center '>
                    <h1 className='Open  leading-[54.87px] text-[24px] lg:text-[40px] font-bold max-w-ful md:max-w-[598px]'>WHAT’S INCLUDED IN YOUR MEMBERSHIP</h1>
                    <h3 className='Carme leading-[24.19px] mt-1 text-[12px] lg:text-[16px] font-normal  max-w-ful md:max-w-[526px] text-center md:text-left'>
                        Our membership does the obvious first, it sponsors your desired sqft of land per month, but then you also get some perks as a thank you.
                    </h3>

                    <div className='flex flex-col justify-center items-start border-[1px] border-solid p-2 rounded-[10px]'>
                        <h2 className='Carme text-[12px] lg:text-[18px] font-medium  text-left'>X SQUARE FEET OF LAND</h2>
                        <h3 className='Carme text-[10px] mt-1 lg:text-[13px] font-normal  max-w-[290px] text-left'>
                            As a member you sponsor a minimum of 5 sqft of land per month, this means that your contribution enables us to buy a minimum of 60 sqft of land per year to gift to nature.                             </h3>
                    </div>
                    <div className='flex justify-between items-center border-[1px] border-solid p-2 rounded-[10px]'>
                        <h2 className='Carme text-[12px] lg:text-[18px] font-medium  text-left'>SHOP dISSCOUNT </h2>
                        <AiOutlineArrowRight color='#1A401F' size={20} />
                    </div>
                    <div className='flex justify-between items-center border-[1px] border-solid p-2 rounded-[10px]'>
                        <h2 className='Carme text-[12px] lg:text-[18px] font-medium  text-left'>eVENTS iNVITE & dISCOUNTS</h2>
                        <AiOutlineArrowRight color='#1A401F' size={20} />

                    </div>
                    <div className='flex justify-between items-center border-[1px] border-solid p-2 rounded-[10px]'>
                        <h2 className='Carme text-[12px] lg:text-[18px] font-medium  text-left'>ACCESS TO BEHIND THE SCENES CONTENT</h2>
                        <AiOutlineArrowRight color='#1A401F' size={20} />

                    </div>


                    <a href='/' className='bg-[#1A401F] mt-8 flex justify-center max-w-[290px] items-center rounded-[66px]  py-3 px-8'>
                        Join us on our mission <Image className='mt-2 ml-2' src={'/arrow.svg'} width={15} height={15} />
                    </a>
                </div>


            </div>
        </div>
    )
}

export default index