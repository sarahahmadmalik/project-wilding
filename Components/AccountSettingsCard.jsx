import Link from "next/link";
import React from "react";
import {
  PauseCircleOutlined,
  CloseCircleOutlined,
  PoundCircleOutlined,
  AimOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

function AccountSettingsCard() {
  return (
    <div className="rounded-lg bg-white my-3 px-[2rem] py-[1.4rem]">
      <div className="flex flex-col">
        <h1 className="font-[700] text-[24px] text-black">Your Membership</h1>
        <div className="flex flex-col space-y-4 mt-3 text-[17px]">
          <div className="flex space-x-2 text-[17px] items-center">
            <h4 className="text-[#979AA0] flex items-center">
              <AimOutlined className="mr-2" />
              Status:
            </h4>
            <p className="text-black">Active</p>
          </div>
          <div className="flex space-x-2 items-center">
            <h4 className="text-[#979AA0] flex items-center">
              <PoundCircleOutlined className="mr-2" />
              Monthly:
            </h4>
            <p className="text-black">£5</p>
          </div>
          <div className="flex space-x-2 items-center">
            <h4 className="text-[#979AA0] flex items-center">
              <InfoCircleOutlined className="mr-2" />
              Next billing date:
            </h4>
            <p className="text-black">October 1, 2023</p>
          </div>
        </div>
        <div className="w-full flex justify-center mt-6">
          <Link
            href="/user/account/membership"
            className="font-[500] transition text-[18px] text-white bg-[#255143] rounded-md px-4 py-2 hover:bg-[#152e26] hover:text-white"
          >
            Change your Contribution
          </Link>
        </div>

        <div className="flex justify-center mt-7 mb-3 w-full space-x-5">
          <div className="flex items-center underline transition underline-offset-4  hover:no-underline">
            <PauseCircleOutlined size={18} style={{ color: "#255143" }} />
            <Link
              href="#"
              className="text-[#255143] ml-2 font-[500]   hover:text-[#255143] "
            >
              Pause membership
            </Link>
          </div>
          <div className="flex items-center underline transition underline-offset-4  hover:no-underline">
            <CloseCircleOutlined size={18} style={{ color: "#255143" }} />
            <Link
              href="#"
              className="text-[#255143] ml-2 font-[500]  hover:text-[#255143] "
            >
              Cancel membership
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSettingsCard;
