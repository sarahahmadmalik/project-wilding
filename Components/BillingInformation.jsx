import Link from 'next/link'
import React from 'react'
import { PauseCircleOutlined, CloseCircleOutlined, PoundCircleOutlined, AimOutlined, InfoCircleOutlined,} from '@ant-design/icons';

function BillingInformation() {
  return (
    <div className='rounded-lg bg-white my-3 px-[2rem] py-[1.4rem]'>
       <div className="flex justify-between items-center w-full">
       <h1 className="font-[700] text-[24px] text-black">Billing Information</h1>
       <Link href='/user/account/billing' className="text-[#255143] ml-2 font-[500]   hover:text-[#255143]  underline transition underline-offset-4  bg-transparent hover:bg-[#d4efe6be] rounded-md py-2 px-3  hover:no-underline">See details</Link>
       </div>
       <div className="flex items-center justify-between my-3 w-auto ">
        <div>
            <h1 className="uppercase text-[#255143]">Type</h1>
            <p className="text-black">Card</p>
        </div>
        <div>
            <h1 className="uppercase text-[#255143] ">LAST 4 DIGITS</h1>
            <p className="flex items-center text-black">••••••••0352</p>
        </div>
        <div>
            <h1 className="uppercase text-[#255143]">EXP DATE</h1>
            <p className="text-black">7/2027</p>
        </div>
       </div>
    </div>
  )
}

export default BillingInformation