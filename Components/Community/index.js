import React from 'react'
import Image from 'next/image'
const index = () => {
    return (
        <div>
            <div className=' flex flex-col md:flex-row justify-center md:justify-between  gap-y-6 md:gap-y-0 gap-x-3 items-center px-6 max-w-[1300px] mx-auto py-[50px] md:py-[100px]'>
                {/* Left part */}
                <div className='flex flex-col justify-center max-w-full md:max-w-[720px] items-center md:items-start '>
                    <h1 className='Open  leading-[54.87px] text-[24px] lg:text-[40px] font-bold max-w-ful md:max-w-[598px]'>BRITAIN: A GREEN AND PLEASANT LAND…RIGHT?</h1>
                    <h3 className='Carme leading-[24.19px] mt-1 text-[12px] lg:text-[16px] font-normal  max-w-ful md:max-w-[526px] text-center md:text-left'>
                        Britain has lost almost half of its biodiversity since the Industrial Revolution.<br /><br />
                        All the UK countries are currently placed in the lowest 12% of global countries and territories for biodiversity intactness. With statistics like this, it&apos;s clear that drastic action is needed and the below is what we do.
                    </h3>

                    {/* Menu */}
                    <div className='flex flex-wrap  items-center justify-center md:justify-start mt-10 gap-x-4 gap-y-8 start-center '>

                        <div className='flex gap-x-3 justify-center justify-center '>
                            <div className='bg-[#1A401F] self-center rounded-[5px] text-[white] flex justify-center items-center h-[50px] w-[50px]  text-[24px] font-bold '>02</div>
                            <div className='flex flex-col justify-center justify-center '>
                                <h2 className='Carme text-[12px] lg:text-[18px] font-medium  text-left'>RESTORE & REGENERATE</h2>
                                <h3 className='Carme text-[10px] mt-1 lg:text-[13px] font-normal  max-w-[290px] text-left'>
                                    We use your sponsorship money to buy marginal and low quality land and give it back to nature.                                </h3>
                            </div>
                        </div>

                        <div className='flex gap-x-3 justify-center justify-center '>
                            <div className='bg-[#1A401F] self-center rounded-[5px] text-[white] flex justify-center items-center h-[50px] w-[50px]  text-[24px] font-bold '>01</div>
                            <div className='flex flex-col justify-center justify-center '>
                                <h2 className='Carme text-[12px] lg:text-[18px] font-medium  text-left'>EDUCATE & INSPIRE</h2>
                                <h3 className='Carme text-[10px] mt-1 lg:text-[13px] font-normal  max-w-[290px] text-left'>
                                    We use your sponsorship money to buy marginal and low quality land and give it back to nature.                                </h3>
                            </div>
                        </div>

                        <div className='flex gap-x-3 justify-center justify-center '>
                            <div className='bg-[#1A401F] self-center rounded-[5px] text-[white] flex justify-center items-center h-[50px] w-[50px]  text-[24px] font-bold '>01</div>
                            <div className='flex flex-col justify-center justify-center '>
                                <h2 className='Carme text-[12px] lg:text-[18px] font-medium  text-left'>BUY LAND & GIFT IT TO NATURE</h2>
                                <h3 className='Carme text-[10px] mt-1 lg:text-[13px] font-normal  max-w-[290px] text-left'>
                                    We use your sponsorship money to buy marginal and low quality land and give it back to nature.
                                </h3>
                            </div>
                        </div>
                    </div>


                    <button className='bg-[#1A401F] mt-6 flex justify-center max-w-[290px] items-center rounded-[66px]  py-3 px-8'>
                        Join the community today <Image className='mt-2 ml-2' src={'/arrow.svg'} width={15} height={15} />
                    </button>

                </div>


                {/* Right part */}
                <div className='flex flex-col justify-center  items-center'>
                    <div className='flex  justify-center gap-x-6 items-center'>
                        <div>
                            <Image src={'/1.svg'} width={227} height={334} />
                        </div>
                        <div>
                            <Image src={'/2.svg'} width={227} height={334} />
                        </div>
                    </div>
                    <div className='flex  justify-center mt-6 gap-x-6 items-center'>
                        <div>
                            <Image src={'/3.svg'} width={227} height={182} />
                        </div>
                        <div>
                            <Image src={'/4.svg'} width={227} height={182} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index