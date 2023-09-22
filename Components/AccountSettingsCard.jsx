import Link from "next/link";
import React,{useState} from "react";
import {
  PauseCircleOutlined,
  CloseCircleOutlined,
  PoundCircleOutlined,
  AimOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import PauseMembershipModal from '@/Components/PauseMembershipModal'
import CancelMembershipModal from '@/Components/CancelMembership';

function AccountSettingsCard() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCancelModalVisible, setIsCancelModalVisible] = useState(false);

// Function to show the modal
const showCancelModal = () => {
  setIsCancelModalVisible(true);
};

// Function to handle the "No" action
const handleCancelCancel = () => {
  setIsCancelModalVisible(false);
};

// Function to handle the "Yes" action
const handleCancelConfirm = (check1, check2) => {
  // Your logic for confirming the cancel
  console.log('Checkbox 1:', check1);
  console.log('Checkbox 2:', check2);

  // Close the modal
  setIsCancelModalVisible(false);
};


  // Function to show the modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Function to handle the "No" action
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleConfirm = (check1, check2) => {
    // Your logic for confirming the pause
    console.log('Checkbox 1:', check1);
    console.log('Checkbox 2:', check2);

    // Close the modal
    setIsModalVisible(false);
  };

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
        <div  className="flex items-center underline  text-[#255143]  transition underline-offset-4  hover:no-underline">
            <PauseCircleOutlined size={18} style={{ color: "#255143" }} />
            <p onClick={showModal}
              
              className="text-[#255143] cursor-pointer ml-2 font-[500]  hover:text-[#255143] "
            >
              Pause membership
            </p>
          </div>
          <div  className="flex items-center underline  text-[#255143]  transition underline-offset-4  hover:no-underline">
            <CloseCircleOutlined size={18} style={{ color: "#255143" }} />
            <p
             
              onClick={showCancelModal}
              className="text-[#255143] cursor-pointer ml-2 font-[500]  hover:text-[#255143] "
            >
              Cancel membership
            </p>
          </div>
        </div>
      </div>
      <PauseMembershipModal
        visible={isModalVisible}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
      <CancelMembershipModal
  visible={isCancelModalVisible}
  onCancel={handleCancelCancel}
  onConfirm={handleCancelConfirm}
/>

    </div>
  );
}

export default AccountSettingsCard;
