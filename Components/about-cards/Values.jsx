import React from 'react'

const Values = () => {
    const data = [
        {
            img: '/values1.png',
            title: 'Nature-First',
        },
        {
            img: '/values2.png',
            title: 'People Friendly',
        },
        {
            img: '/values3.png',
            title: 'Sustainability',
        },
        {
            img: '/values4.png',
            title: 'Honesty & Integrity',
        }
    ]
    return (
        <div>
            <div className='flex flex-col justify-center items-center md:h-[80vh] bg-white py-32'>
                <div className='max-w-screen-xl'>
                    <h1 className='text-[40px] font-[700] text-black text-center'>
                        Our Values
                    </h1>
                    <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-10 mt-10'>
                        {
                            data.map((items, i) => (
                                <div className='flex flex-col justify-center items-center gap-6'>
                                    <div className='bg-white shadow-xl rounded-full w-[201px] h-[201px] flex justify-center items-center'>
                                        <img src={items.img} alt='' className='w-[90px]' />
                                    </div>
                                    <p className='text-[24px] font-[600] text-black'>{items.title}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Values