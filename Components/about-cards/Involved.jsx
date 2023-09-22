import Image from 'next/image';
import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';


const Involved = () => {
    return (
        <div className='bg-[white]'>
            <div className=' flex flex-col justify-center md:justify-between flex-wrap gap-y-6  gap-x-3 items-center px-6 max-w-[1300px] mx-auto pb-[80px] pt-[80px]'>
                <h2 className='Open text-[24px]  text-center text-[#000] lg:text-[40px] font-bold    '>
                    GET INVOLVED AND SUPPORT OUR WORK!        </h2>

                <button className='bg-[#1A401F]  flex self-center justify-center items-center rounded-[66px]  py-3 px-8'>
                    Join the community today <Image className='mt-1 ml-2' src={'/arrow.svg'} width={15} height={15} />
                </button>
            </div>
        </div>
    )
};
export default Involved