import React from 'react'
import DashboardLayout from "@/layout/DashboardLayout";
import {useRouter} from 'next/router'

const Third = () => {
    const router = useRouter();
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
        <DashboardLayout>
        <div className="fontFamily">
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='text-[24px] font-[700] text-[#2F3542]  '>
                    Fund extra campaigns 💚
                </h1>
                <p className=' text-[#2F3542]'>
                    Here you can put extra money towards a particular campaign,
                    <a href="
            " className='underline text-[#2F3542]'>
                        or click here for a page to share with others to contribute to your impact
                    </a>
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-16 space-x-3 my-5'>
                    {
                        data.map((item, i) => (
                            <div key={i} className='flex text-black flex-col bg-white justify-start items-start gap-4 text-left w-[500px] rounded-lg shadow '>
                                <img src={item.img} alt="" className='md:w-[600px] md:h-[300px] object-cover rounded-t-lg' />
                                 <div className='p-5 flex flex-col gap-4 bg-white overflow-hidden rounded-lg'>

                                <h1 className='text-[24px] font-[700]'>
                                    {item.title}
                                </h1>
                                <p>
                                    {item.desc}
                                </p>
                                <p>
                                Price: <span>  {item.price} </span>   increments
                                </p>
                                <button onClick={() => router.push("/user/fund-extra/id?")} className='bg-[#1a401f] py-3 px-6 text-white rounded-md w-[140px]'>
                                    Contribute
                                </button>

                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
        </DashboardLayout>
    )
}

export default Third