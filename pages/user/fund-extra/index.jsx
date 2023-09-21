import React from 'react'

const Third = () => {
    const data = [
        {
            id: 1,
            title: 'Rewilding a Former Mining Site',
            desc: 'This project aims to transform an abandoned quarry into a biodiverse habitat. Show more support through this campaign.',
            price: '£5 ',
            img: '/cardd1.avif',
        },
        {
            id: 1,
            title: 'Rewilding a Former Mining Site',
            desc: 'This project aims to transform an abandoned quarry into a biodiverse habitat. Show more support through this campaign.',
            price: '£5 ',
            img: '/cardd1.avif',
        },
        {
            id: 1,
            title: 'Rewilding a Former Mining Site',
            desc: 'This project aims to transform an abandoned quarry into a biodiverse habitat. Show more support through this campaign.',
            price: '£5 ',
            img: '/cardd1.avif',
        },
        {
            id: 1,
            title: 'Rewilding a Former Mining Site',
            desc: 'This project aims to transform an abandoned quarry into a biodiverse habitat. Show more support through this campaign.',
            price: '£5 ',
            img: '/cardd1.avif',
        },
    ]
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='text-[32px] font-[700]  pt-20'>
                    Fund extra campaigns 💚
                </h1>
                <p className='py-5'>
                    Here you can put extra money towards a particular campaign,
                    <a href="
            " className='underline'>
                        or click here for a page to share with others to contribute to your impact
                    </a>
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                    {
                        data.map((item, i) => (
                            <div key={i} className='flex flex-col justify-start items-start gap-4 text-left w-[600px] rounded-lg shadow '>
                                <img src={item.img} alt="" className='md:w-[600px] md:h-[300px] object-cover rounded-t-lg' />
                                 <div className='p-5 flex flex-col gap-4'>

                                <h1 className='text-[24px] font-[700]'>
                                    {item.title}
                                </h1>
                                <p>
                                    {item.desc}
                                </p>
                                <p>
                                Price: <span>  {item.price} </span>   increments
                                </p>
                                <button className='bg-[#1a401f] py-3 px-6 text-white rounded-md w-[140px]'>
                                    Contribute
                                </button>

                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default Third