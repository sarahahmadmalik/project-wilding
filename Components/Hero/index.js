import Image from 'next/image'
import React from 'react'

const index = ({ description, heading }) => {
    return (
        <div className='bg-[url(/grass.svg)] bg-center bg-cover bg-no-repeat w-full h-[90vh]'>
            <div className=' backdrop-brightness-[37%] flex flex-col justify-center items-center  h-full    w-full'>
                <h1 className='Open text-[24px] lg:text-[40px] font-bold     text-center'>{heading}</h1>
                <h6 className='Carme text-[12px] lg:text-[18px] font-normal px-4 md:px-0 max-w-[538px] text-center'>
                    {description}                </h6>
                <a href='/registration'  className='bg-[#1A401F] mt-6 flex justify-center items-center rounded-[66px]  py-3 px-8'>
                    Join the community today <Image className='mt-2 ml-2' src={'/arrow.svg'} width={15} height={15} />
                </a>
            </div>
        </div>
    )
}

export default index