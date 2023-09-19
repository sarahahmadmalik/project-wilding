import React from 'react'

const AboutCards = () => {
    const data = [
        {
            img: '/nature.svg',
            title: 'Protecting Land',
            desc: 'Gifting land back to nature, to reverse biodiversity loss, help to prevent natural disasters and bring nature back into balance. By purchasing, protecting and caring for land, we’re able to return it to its rightful owner and bring more balance back. Let’s let nature bloom.',
        },
        {
            img: '/bird.svg',
            title: 'Restoring Biodiversity',
            desc: 'Regenerating land for wildlife means carefully restoring natural habitats. As we embrace vibrant biodiversity we can bring the balance of nature back to spaces it’s missing and nurture balanced ecosystems. We’re on a mission to make sure green space counts',
        },
        {
            img: '/gather.svg',
            title: 'Education and Inspiring',
            desc: 'Empowered people, empower people and there’s no time to waste! By educating, inpiring and empowering people we hope to connect them back to their wild roots so they feel passionately about protecting the planet that we’re a part of.',

        }
    ]
    return (<div className='bg-[white]  w-full h-full flex flex-col justify-center items-center py-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
            {
                data.map((item, i) => (
                    <div key={i} className='flex flex-col justify-start gap-3 items-start max-w-[320px] md:max-w-[400px] shadow-lg rounded-b-[10px]'>
                        <img
                            className="rounded-t-[10px] h-[285px] w-[320px] md:w-[400px] object-cover"
                            src={item.img}
                            alt="" />
                            <div className='px-6 py-3 space-y-2'>
                        <p className='text-[24px] font-[700] text-black'>
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
export default AboutCards