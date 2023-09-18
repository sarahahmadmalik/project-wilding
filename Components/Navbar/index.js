import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <div className='flex h-full max-w-[1500px] mx-auto py-4 px-6 justify-between items-center'>
            <div >
                <Image src={'/logo.svg'} width={200} height={46} />
            </div>
            <div className='flex justify-center gap-x-4 items-center'>
                <Link href={"/"} >Home</Link>
                <Link href={"/mission"}>Our Mission</Link>
                <Link href={"#"}>About US</Link>
                <Link href={"/contact"}>Contact US</Link>
            </div>
            <div >
                <Image src={'/profile.svg'} width={20} height={20} />
            </div>
        </div>
    )
}

export default index