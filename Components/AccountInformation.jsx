import Link from "next/link";
import React from "react";
import {UserOutlined, MailOutlined, EditOutlined} from '@ant-design/icons'

function AccountInformation() {
  return (
    <div className="rounded-lg bg-white my-3 px-[2rem] py-[1.4rem]">
     <div>
    <div className="flex items-center justify-between">
    <h1 className="font-[700] text-[24px] text-black">Account information</h1>
    <Link href="#" className="py-3 px-3 rounded-full text-[#367560] hover:text-black hover:bg-[#d4efe6be]"><EditOutlined style={{fontSize: "20px"}} /></Link>
    </div>
     <div className="mt-2">
        <div className="flex text-[17px] items-center">
        <UserOutlined className="mr-2" style={{color: "#82898F"}} />
        <p className="text-black">Matt</p>
        </div>
        <div className="flex text-[17px] items-center mt-2">
        <MailOutlined className="mr-2" style={{color: "#82898F"}} />
        <p className="text-black">contact@immattunsworth.com</p>
        </div>
     </div>

</div>
    </div>
  );
}

export default AccountInformation;
