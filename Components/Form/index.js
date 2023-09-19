import React from 'react'
import { Collapse } from 'antd';
const text = (
    <p
        style={{
            paddingLeft: 24,
        }}
    >
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
        as a welcome guest in many households across the world.
    </p>
);
const items = [
    {
        key: '1',
        label: 'HOW DO I BECOME A MEMBER?',
        children: 'You can become a member by sponsoring land with us! Click here to get started.',
    },
    {
        key: '2',
        label: 'HOW DO I KNOW WHERE MY MONEY HAS GONE?  ',
        children: text,
    },
    {
        key: '3',
        label: 'CAN I GIFT A MEMBERSHIP TO A LOVED ONE?',
        children: text,
    },
];


const index = () => {


    return (
        <div className='bg-[#fff]'>
            <div className=' flex flex-col md:flex-row justify-between items-start gap-x-4  px-6 max-w-[1300px] mx-auto py-[50px] md:py-[100px]'>
                <div
                    class="block  rounded-lg max-w-[100%] md:max-w-[500px] w-full md:w-[50%]  p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[#000000]">
                    <h1 className='Open text-[24px] lg:text-[40px] font-bold   mb-[20px] '>Get in touch</h1>

                    <form>
                        <div className='flex gap-x-2 justify-between items-center'>
                            <div class="relative bg-[#fff] rounded-[5px] text-[#fff] mb-6" data-te-input-wrapper-init>
                                <input
                                    type="text"
                                    class="peer placeholder-[#000] block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear "
                                    id="exampleInput7"
                                    placeholder="Name" />

                            </div>

                            <div class="relative bg-[#fff] rounded-[5px] text-[#fff] mb-6" data-te-input-wrapper-init>
                                <input
                                    type="email"
                                    class="peer placeholder-[#000] block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear "
                                    id="exampleInput8"
                                    placeholder="Email address" />

                            </div>
                        </div>
                        <div class="relative bg-[#fff] rounded-[5px] text-[#fff] mb-6" data-te-input-wrapper-init>
                            <textarea
                                class=" peer placeholder-[#000] block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  "
                                id="exampleFormControlTextarea13"
                                rows="3"
                                placeholder="Message"></textarea>

                        </div>



                        <button
                            type="submit"
                            class=" px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out bg-[#1A401F] rounded-[66px]"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Submit
                        </button>
                    </form>
                </div>


                <div className='w-full md:w-[50%]'>
                    <h1 className='Open text-[24px] lg:text-[40px] font-bold  text-[#000] mb-[20px] '>Our FAQs</h1>

                    <Collapse expandIconPosition='end' items={items} className='w-full' bordered={false} defaultActiveKey={['1']} />
                </div>
            </div>
        </div>
    )
}

export default index