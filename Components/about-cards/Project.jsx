import React from 'react'

const Project = () => {
    return (
        <div className='flex md:flex-row flex-col justify-start  md:h-[566px] items-center '>
            <div className='w-full md:w-1/2'>
                <img src='/bg-about.jpeg' alt='' className='w-full h-[566px]  object-cover' />
            </div>
            <div className='w-full md:w-1/2 flex flex-col justify-start items-start px-10 py-10 text-left text-white'>
                <h1 className='text-[28px] md:text-[40px] font-[700] text-left truncate'>
                    About Project Wilding
                </h1>
                <p className='text-[16px] font-[400] text-left pt-6'>
                    Sometimes you’ve just got to do things yourself. Project Wilding was established in 2023 by a small team of environmentalists that are passionate about not only combatting climate change but restoring and nurturing our nature as well.
                    <p className='text-[16px] font-[400] text-left pt-4'>
                        We believe that by taking a ground-up approach, we can fight climate change, reverse biodiversity loss and get humans back to nature.
                    </p>
                    <p className='text-[16px] font-[400] text-left pt-4'>
                        The Project Wildling team is excited to embark on this journey of radical action, because drastic times call for dedicated action.
                    </p>
                </p>

            </div>

        </div>
    )
}

export default Project