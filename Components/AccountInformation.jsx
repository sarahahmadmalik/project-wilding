import Link from "next/link";
import React,{useState} from "react";
import { UserOutlined, MailOutlined, EditOutlined, ShareAltOutlined  } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';

function AccountInformation() {
  const bioText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae erat non ligula gravida vulputate. Phasellus hendrerit arcu at justo fringilla, id tincidunt turpis vestibulum.";
  const squareFeetSponsored = "1000 sq. ft."; 


  return (
    <div className="rounded-lg bg-white my-3 overflow-hidden">
      <div className="bg-[#D5DCDC] px-[2rem] py-[1.4rem]">
        <div className="flex items-center justify-between">
          <h1 className="font-[700] text-[24px] text-black">Account information</h1>
          <div className="flex space-x-3">
          <Link href="/user/account/information" className="py-3 px-3 rounded-full text-[#367560] hover:text-black hover:bg-[#d4efe6be]"><EditOutlined style={{ fontSize: "20px" }} /></Link>
          <Link href="/user/account/information" className="py-3 px-3 rounded-full text-[#367560] hover:text-black hover:bg-[#d4efe6be]"><ShareAltOutlined style={{ fontSize: "20px" }} /></Link>
          </div>
        </div>
        <div className="">
          <div className="flex text-[17px] items-center">
            <UserOutlined className="mr-2" style={{ color: "#82898F" }} />
            <p className="text-black">Matt</p>
          </div>
          <div className="flex text-[17px] items-center mt-2">
            <MailOutlined className="mr-2" style={{ color: "#82898F" }} />
            <p className="text-black">contact@immattunsworth.com</p>
          </div>
          <div className="flex text-[17px] items-center mt-2">
            <FontAwesomeIcon icon={faTree} className="mr-2 text-[#82898F]" />
            <p className="text-black">Square Feet Sponsored: {squareFeetSponsored}</p>
          </div>
        </div>

        <div>
        </div>
      </div>
      <div className="px-[2rem] pb-[1.4rem]">
      <p className="text-[17px] mt-3 text-black">{bioText}</p>
      </div>

   
    </div>
  );
}

export default AccountInformation;
