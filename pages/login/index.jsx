import React from 'react'

const index = () => {
    return (
        <div className='flex flex-col justify-start py-20 items-center gap-24 h-screen w-full'>
            <img src="/logo.png" alt="" className="w-[200px]" />
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-[32px] font-[700]'>Hello,</h1>
                <p className='text-[16px] font-[400] mb-10'>
                    Login to your account </p>
                <form class="w-full">
                    <div class="floating-input mb-5 relative">
                        <input type="email" id="email" class="border  focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-[340px]  px-3 h-12" placeholder="name@example.com" autocomplete="off" />
                        <label for="email" class="absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out ">Email address</label>
                    </div>
                    <div class="floating-input mb-5  relative">
                        <input type="password" id="password" class="border  focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-12" placeholder="password" autocomplete="off" />
                        <label for="password" class="absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out ">Password</label>
                    </div>
                    <button class="w-full bg-[#1a401f] hover:bg-[#0e2612] ease-in duration-200 transition-all text-white py-2 text-[18px] rounded-md ">Login</button>
                </form>


                <a href="/reset-password" className='text-[#1a401f] text-[20px] py-3 font-[500] hover:underline tracking-tighter'>Forget password?</a>
            </div>
            <div className='flex flex-col justify-end items-center '>
                <p className='text-[20px]  font-[500]'>Don't have an account yet?</p>
                <a href="/registration" className='text-[#1a401f] text-[20px]  font-[500] tracking-tighter hover:underline'>Become a member</a>

            </div>

        </div>
    )
}

export default index