import Image from 'next/image';
import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';


const index = () => {
    return (
        <div className='bg-[white]'>
            <div className=' flex flex-col justify-center md:justify-between flex-wrap gap-y-6  gap-x-3 items-center px-6 max-w-[1300px] mx-auto py-[80px]'>
                <figure class="max-w-screen-md mx-auto text-center">

                    <blockquote className='flex flex-col justify-center items-start'>
                        <ImQuotesLeft color='#1B243052' size={80} />
                        <p class="text-[18px] lowercase Carme font-medium text-[#1B2430]">WE NEED TO TAKE DRASTIC ACTION IF WE&apos;RE TO MAKE AMENDS FOR THE DAMAGE THAT WE&apos;VE CAUSED TO THIS PLANET. SO THAT&apos;S WHAT WE AIM TO DO. BUILDING BACK LANDSCAPES, VITAL HABITATS AND SUSTAINABLE ECO-SYSTEMS FOR OUR BEAUTIFUL PLANET, ALL ITS INHABITANTS AND FUTURE GENERATIONS.</p>
                        <ImQuotesRight color='#1B243052' className='self-end' size={80} />

                    </blockquote>
                    <div class="flex items-center justify-center mt-6 space-x-3">

                        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <cite class="pr-3 font-medium text-[#000000]">– Co-founder Bethan Unsworth</cite>
                        </div>
                    </div>

                </figure>
                <button className='bg-[#1A401F] mt-6 flex justify-center max-w-[290px] items-center self-center rounded-[66px]  py-3 px-8'>
                    Meet the Team <Image className='mt-2 ml-2' src={'/arrow.svg'} width={15} height={15} />
                </button>
            </div>
        </div>
    )
};
export default index