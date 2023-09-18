import Image from 'next/image';
import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';


const index = () => {
    return (
        <div className='bg-[white]'>
            <div className=' flex flex-col justify-center md:justify-between flex-wrap gap-y-6  gap-x-3 items-center px-6 max-w-[1300px] mx-auto py-[80px]'>
                <h2 className='Open text-[24px] max-w-[352px]  text-center text-[#000] lg:text-[40px] font-bold    '>
                    Get Involved        </h2>
                <figure class="max-w-screen-md mx-auto text-center">

                    <blockquote className='flex flex-col justify-center items-start'>

                        <p class="text-[18px] lowercase Carme font-medium text-[#1B2430]">Help us on our mission to bring nature back to balance and humans back to nature. Your membership will enable us to protect vital land as well as restoring and regenerating it.<br />
                            Stay tuned to learn more about what other membership perks you’ll get as well as recieving updates and exclusive news and content in your member area.</p>

                    </blockquote>

                </figure>
                <button className='bg-[#1A401F] mt-6 flex self-center justify-center items-center rounded-[66px]  py-3 px-8'>
                    Join the community today <Image className='mt-2 ml-2' src={'/arrow.svg'} width={15} height={15} />
                </button>
            </div>
        </div>
    )
};
export default index