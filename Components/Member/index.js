import React from 'react'
import Image from 'next/image'
const index = () => {
    return (
        <div className='h-[30vh] md:h-auto relative'>
            <img src="/green.svg" alt="Background Image" class="w-full h-auto hidden md:block" />
            <div class="absolute inset-0 bg-[#1A401FC9] p-10 md:py-8 md:px-8"></div>
            <div className=' flex flex-col  absolute inset-0  md:flex-row justify-center gap-x-10   items-center px-6 max-w-[1300px] mx-auto py-[60px] '>
                <div className='max-w-[438px] text-center'>
                    <h5 class=" text-[22px] px-2 py-2 font-semibold  text-[#fff]">Become a Member</h5>
                    <p class="mb-3 font-normal text-[#fff]">Join us in our rewilding and stay up to date our progress!</p>
                </div>

                <button className='bg-transparent border-solid border-[#fff] border-[1px] hover:bg-[#1A401F] hover:border-transparent mt-3 mb-2 flex justify-center max-w-[290px] items-center rounded-[66px]  py-3 px-8'>
                    Join us on our mission
                </button>
            </div>
        </div>
    )
}

export default index