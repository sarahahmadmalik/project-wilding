import Link from "next/link";
import React from "react";

function AccountSettingsCard() {
  return (
    <div className="rounded-lg bg-white my-3 px-[2rem] py-[1.4rem]">
     <div>
     <h1 className="font-[700] text-[24px] text-black">App</h1>
     <p className="text-[#2F3542] font-[500] mt-2 mb-5">You can install your Project Wilding account as an app.
This enables you to more easily follow along with updates, see when you've had new impact, contribute to extra funding for projects, and more!
</p>
</div>
<Link href='#' className="font-[500]  hover:text-white text-white bg-[#255143] rounded-md px-4 py-2 transition hover:bg-[#152e26] ">Install as App</Link>
    </div>
  );
}

export default AccountSettingsCard;
