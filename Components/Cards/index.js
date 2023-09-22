

import React from 'react'

const index = () => {
    const data = [
        {
            id: 1,
            img: '/nature.svg',
            title: 'Protecting Land',
            desc: 'Gifting land back to nature, to reverse biodiversity loss, help to prevent natural disasters and bring nature back into balance. By purchasing, protecting and caring for land, we’re able to return it to its rightful owner and bring more balance back. Let’s let nature bloom.',
        },
        {
            id: 2,
            img: '/bird.svg',
            title: 'Restoring Biodiversity',
            desc: 'Regenerating land for wildlife means carefully restoring natural habitats. As we embrace vibrant biodiversity we can bring the balance of nature back to spaces it’s missing and nurture balanced ecosystems. We’re on a mission to make sure green space counts',
        },
        {
            id: 3,
            img: '/gather.svg',
            title: 'Education and Inspiring',
            desc: 'Empowered people, empower people and there’s no time to waste! By educating, inpiring and empowering people we hope to connect them back to their wild roots so they feel passionately about protecting the planet that we’re a part of.',

        }
    ]
    return (<div className='bg-[white]  w-full h-full flex flex-col justify-center items-center py-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>
            {
                data.map((item, i) => (
                    <div key={i} className={`${item.id == 2 ? 'md:-translate-y-8' : '' } cursor-pointer group flex flex-col relative justify-start overflow-hidden gap-3 pb-4 items-start w-[320px] md:w-[380px] shadow-lg rounded-[10px] `}>
                        <img
                            className="rounded-t-[10px] overflow-hidden max-h-[285px] w-[320px] md:w-[380px] object-cover group-hover:scale-105 ease-in duration-300 transition-all "
                            src={item.img}
                            alt=""
                             />
                             <div className='bg-[#1A401F] rounded-[5px] flex justify-center items-center h-[50px] w-[50px] absolute top-[40%] md:top-[47%] left-[5%] z-50'>0{item.id}</div>
                            <div className='px-6 pt-[1.4rem] pb-3 space-y-2'>
                        <p className='text-[24px] font-[700] text-black mt-2'>
                            {item.title}
                        </p>
                        <p className='text-[16px] text-black font-[400]'>
                            {item.desc}
                        </p>

                            </div>


                    </div>
                ))
            }

        </div>
      
    </div>
    )
}
export default index