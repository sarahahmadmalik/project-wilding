import React from 'react'

const index = () => {
    return (<div className='bg-[white]  w-full h-full'>
        <div className=' flex justify-center md:justify-between flex-wrap gap-y-6  gap-x-3 items-center px-6 max-w-[1300px] mx-auto py-[80px]'>
            <div className='relative self-start h-full transition ease-in-out delay-250 '>
                <div className='bg-[#1A401F] rounded-[5px] flex justify-center items-center h-[50px] w-[50px] absolute top-[40%] left-[5%] z-50'>01</div>
                <div
                    class="block rounded-[10px] max-w-[350px] w-full    bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div
                        class="relative overflow-hidden bg-cover z-0 bg-no-repeat w-full "
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <img
                            class="rounded-t-[10px] h-full"
                            src="/nature.svg"
                            alt="" />
                        <a href="#!">
                            <div
                                class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                        </a>
                    </div>

                    <div class="px-4 pb-2 pt-6 bg-[#ffffff] rounded-b-[10px]">
                        <h5
                            class="mb-2 text-xl mt-3 font-medium leading-tight text-[#1B2430]">
                            GIFTING LAND BACK TO NATURE                     </h5>
                        <p class="mb-4 text-base text-[#1B2430]">
                            Gifting land back to nature, to reverse biodiversity loss, help to prevent natural disasters, and foster a healthier planet, bringing nature back into balance, and preserving our Earth for future generations. By purchasing we're able to return it to its rightful owner and bring more balance back. Let's let nature bloom.
                        </p>

                    </div>
                </div>
            </div>

            <div className='relative  h-full transition ease-in-out delay-250 '>
                <div className='bg-[#1A401F] rounded-[5px] flex justify-center items-center h-[50px] w-[50px] absolute top-[40%] left-[5%] z-50'>02</div>
                <div
                    class="block rounded-[10px] max-w-[350px] w-full    bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div
                        class="relative overflow-hidden bg-cover z-0 bg-no-repeat w-full "
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <img
                            class="rounded-t-[10px] h-full"
                            src="/bird.svg"
                            alt="" />
                        <a href="#!">
                            <div
                                class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                        </a>
                    </div>
                    {/* <div
                        class="inline-block rounded max-w-[50px] w-full h-[50px] bg-primary  text-xs font-medium uppercase"
                    >
                        01
                    </div> */}
                    <div class="px-4 pb-2 pt-6 bg-[#FFFFFF] rounded-b-[10px]">
                        <h5
                            class="mb-2 text-xl mt-3 font-medium leading-tight text-[#1B2430]">
                            REGENERATING LAND FOR WILDLIFE                       </h5>
                        <p class="mb-4 text-base text-[#1B2430]">
                            Embrace the journey of regenerating land for wildlife. Regenerating land for wildlife means carefully restoring natural habitats. As we embrace vibrant biodiversity we can bring the balance of nature back to spaces it&apos;s missing. We&apos;re on a mission to make sure green space counts.
                        </p>

                    </div>
                </div>
            </div>

            <div className='relative  h-full transition ease-in-out delay-250 '>
                <div className='bg-[#1A401F] rounded-[5px] flex justify-center items-center h-[50px] w-[50px] absolute top-[40%] left-[5%] z-50'>03</div>
                <div
                    class="block rounded-[10px] max-w-[350px] w-full w-full  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div
                        class="relative overflow-hidden bg-cover z-0 bg-no-repeat w-full "
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <img
                            class="rounded-t-[10px] h-full"
                            src="/gather.svg"
                            alt="" />
                        <a href="#!">
                            <div
                                class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                        </a>
                    </div>
                    {/* <div
                        class="inline-block rounded max-w-[50px] w-full h-[50px] bg-primary  text-xs font-medium uppercase"
                    >
                        01
                    </div> */}
                    <div class="px-4 pb-2 pt-6 bg-[#FFFFFF] rounded-b-[10px]">
                        <h5
                            class="mb-2 text-xl mt-3 font-medium leading-tight text-[#1B2430]">
                            EDUCATING AND INSPIRING                        </h5>
                        <p class="mb-4 text-base text-[#1B2430]">
                            Igniting a passion for nature and empowering people to take action towards reversing biodiversity loss is a part of instilling a greater sense of balance back to nature. By creating a vibrant community of nature-connected humans, we aim to educate, inspire and empower people to make a difference.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default index