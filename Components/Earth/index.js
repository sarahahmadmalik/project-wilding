import Image from 'next/image'
import React from 'react'

const index = () => {
    return (
        <div className='bg-[#fff]'>
            <div className='  flex flex-col-reverse lg:flex-row justify-between items-center gap-x-10   px-6 max-w-[1300px] mx-auto py-[50px] md:py-[100px]'>
                <div className='w-full lg:w-[50%]'>
                    <Image src={'/sun.svg'} width={695} height={396} />
                </div>

                <div className='flex w-full lg:w-[50%] flex-col gap-y-4 justify-start items-center'>
                    <h2 className='Open text-[24px] self-start text-[#000000] lg:text-[40px] font-bold    '>
                        WHAT ON EARTH ARE WE UP TO?
                    </h2>
                    <p class="font-normal text-[#1B2430]">
                        Project Wildling is on a mission to bring nature back to balance and humans back to nature. By gifting land back to nature and carefully restoring it, we hope to increase the biodiversity on the land.
                    </p><br />
                    <p class="font-normal text-[#1B2430]">
                        Nearly half of Britain’s biodiversity has disappeared since the Industrial Revolution. This is something that we’re not okay with, and we don’t think you should be either.
                    </p>

                    <br />
                    <p class="font-normal text-[#1B2430]">
                        We’re on a mission to help nature back to a state of balance, regenerate landscapes, restore vital habitats and get humans back into the wild along the way.
                    </p>



                    <ol class="relative">
                        <div className='bg-[#1A401F] absolute -left-2.5 top-1 w-[10px] h-[300px] sm:h-[240px] lg:h-[250px]'></div>
                        <li class="mb-10 ml-4">
                            <div class="absolute w-[30px] h-[30px] flex justify-center items-center rounded-full  -left-5 border border-white  bg-[#1A401F]">1</div>
                            <h3 class="text-lg font-semibold text-[#000]">RETURN LAND TO NATURE</h3>
                            <p class="mb-4 text-base font-normal text-[#000]">Leverage our member’s support to buy marginal and low quality land to gift back to nature..</p>

                        </li>
                        <li class="mb-10 ml-4">
                            <div class="absolute w-[30px] h-[30px] flex justify-center items-center rounded-full mt-1.5 -left-5 border border-white  bg-[#1A401F]">2</div>
                            <h3 class="text-lg font-semibold text-[#000]">Restore & Regenerate</h3>
                            <p class="text-base font-normal text-[#000]">Once we purchase the land we’ll work with our team of expert advisors to ensure we restore land in a way that’ll boost local biodiverity the most.</p>
                        </li>
                        <li class="ml-4">
                            <div class="absolute w-[30px] h-[30px] flex justify-center items-center rounded-full sm:mt-1.5 -left-5 border border-white  bg-[#1A401F]">3</div>
                            <h3 class="text-lg font-semibold text-[#000]">Education & Inspire</h3>
                            <p class="text-base font-normal text-[#000]">We will use our platform to educate the public, and inspire others to do what they can to help nature where they are.</p>
                        </li>
                    </ol>

                    <button className='bg-[#1A401F] mt-6 flex self-start justify-center items-center rounded-[66px]  py-3 px-8'>
                        Join the community today <Image className='mt-2 ml-2' src={'/arrow.svg'} width={15} height={15} />
                    </button>


                </div>
            </div>
        </div>
    )
}

export default index