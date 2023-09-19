import React from 'react'

const Team = () => {
    const data = [
        {
            id: 1,
            img: "/man.png",
            name: "Matt Unsworth",
            occupation: "CO-FOUNDER",
        },
        {
            id: 2,
            img: "/man2.png",
            name: "Bethan Unsworth",
            occupation: "CO-FOUNDER",
        },
        {
            id: 3,
            img: "/man3.png",
            name: "Lorem Ipsum",
            occupation: "LOREM ",
        },
        {
            id: 4,
            img: "/man3.png",
            name: "Lorem Ipsum",
            occupation: "LOREM ",
        },
    ]
    const data1 = [
        {
            id: 1,
            img: "/man4.png",
            name: "DAVID J CLEMENS BSC",
            occupation: "Herpetology",
            desc: " with a focus on non-native species in the UK, population dynamics, and disease.",
        },
        {
            id: 2,
            img: "/man3.png",
            name: "Lorem Ipsum",
            occupation: "LOREM ",
            desc: " with a focus on non-native species in the UK, population dynamics, and disease.",
        },
        {
            id: 3,
            img: "/man3.png",
            name: "Lorem Ipsum",
            occupation: "LOREM ",
            desc: " with a focus on non-native species in the UK, population dynamics, and disease.",
        },
        {
            id: 4,
            img: "/man3.png",
            name: "Lorem Ipsum",
            occupation: "LOREM ",
            desc: " with a focus on non-native species in the UK, population dynamics, and disease.",
        },
    ]
    return (
        <div className=' flex flex-col justify-center items-center py-16'>
            <h1 className='font-[700] text-[40px] text-white'>
                Our Team
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 py-16">
                {
                    data.map((items, index) => (
                        <div key={index} className='flex flex-col justify-center items-center text-center text-black bg-white w-[294px] p-4'>
                            <img src={items.img} alt='' className='w-[253px] object-cover mb-3' />
                            <p className='text-[24px] font-[600] '>{items.name}</p>
                            <p className='text-[16px] font-[400]'>{items.occupation}</p>

                        </div>
                    ))
                }

            </div>
            <h1 className='font-[700] text-[40px] text-white pt-10'>
               Advisory Team
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 py-16">
                {
                    data1.map((items, index) => (
                        <div key={index} className='flex flex-col justify-center items-center text-center text-black bg-white w-[294px] p-4'>
                            <img src={items.img} alt='' className='w-[253px] object-cover mb-3' />
                            <p className='text-[24px] font-[600] '>{items.name}</p>
                            <p className='text-[16px] font-[400]'>{items.occupation}</p>
                            <p className='text-[16px] font-[400]'>{items.desc}</p>

                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Team