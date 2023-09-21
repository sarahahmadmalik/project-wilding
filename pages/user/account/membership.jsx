import React, { useState } from 'react';
import Link from 'next/link';
import { LeftOutlined } from '@ant-design/icons';
import { PlusOutlined, MinusOutlined,CheckCircleFilled } from '@ant-design/icons';
import DashboardLayout from '@/layout/DashboardLayout';
import Image from 'next/image';
import {useRouter} from 'next/router'
function Membership() {
  const [paymentVisible, setPaymentVisible] = useState(false);
  const [monthlyContribution, setMonthlyContribution] = useState(5);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handlePaymentMethod = () => {
    setPaymentVisible(!paymentVisible);
  };

  const handleIncrement = () => {
    setMonthlyContribution(monthlyContribution + 5);
  };

  const handleDecrement = () => {
    if (monthlyContribution > 5) {
      setMonthlyContribution(monthlyContribution - 5);
    }
  };

  const handleConfirmChange = () => {
    // Simulate loading
    setLoading(true);

    // Assuming you have some logic to update the monthly contribution here
    // You can replace this with your actual logic
    // For demonstration purposes, we'll use a setTimeout to simulate the loading behavior
    setTimeout(() => {
      setLoading(false);
      setConfirmationVisible(true);
    }, 2000); // Simulate a 2-second delay for loading

    // You can remove the setTimeout and setLoading when integrating with your actual logic
  };

  return (
    <DashboardLayout>
      <div className="w-full fontFamily h-full py-[1rem] px-[1rem] flex justify-center items-center">
        <div className="w-[550px]">
          <Link
            href="/user/account"
            className="inline-flex items-center text-[#367560] hover:bg-[#d4efe6be] rounded-md py-2 px-3 transition hover:text-[#367560]"
          >
            <LeftOutlined className="mr-2" style={{ color: '#367560' }} />
            Back to account settings
          </Link>

          <div className="my-2">
            <h1 className="font-[700] text-center text-[32px] text-black my-5">
              Your Membership
            </h1>

            {!confirmationVisible && (
                <>
                <p className="text-center text-black text-[20px]">
              Choose how much you want to contribute
            </p>

            <div className="flex justify-center space-x-7 my-6">
              <button
                onClick={handleDecrement}
                className="rounded-md shadow-md bg-white py-3 px-4 flex items-center"
              >
                <MinusOutlined style={{ color: '#98B5A8', fontSize: '20px' }} />
              </button>
              <span className="flex flex-col items-center font-[600] text-[20px] text-black">
                £{monthlyContribution}
                <p className="text-[16px]">/month</p>
              </span>
              <button
                onClick={handleIncrement}
                className="rounded-md shadow-md bg-white py-3 px-4 flex items-center"
              >
                <PlusOutlined style={{ color: '#98B5A8', fontSize: '20px' }} />
              </button>
            </div>
            </>
            )}

            {loading ? (
              <div className="text-center text-[20px] text-black my-6">Loading...</div>
            ) : confirmationVisible ? (
              <div className="text-center text-[20px] text-black my-6">
                <CheckCircleFilled  style={{color: "#BDBDBD", fontSize: "56px"}} />
                <p className="text-center mt-4 text-[#367560] text-[24px] font-[600] mb-3">Your monthly contribution was successfully updated.</p>
                <p className="text-[16px]">
                  Thank you so much! This will be reflected in your next monthly
                  payment. Please note it may take a few minutes for this to
                  update on your account page.
                </p>
                <button
                  className="font-[500] w-full hover:bg-[#152e26] text-center transition my-6 text-[14px] text-white bg-[#367560] rounded-md px-4 py-2 hover:text-white"
                  onClick={() => router.push('/user/account')}
                >
                  Back to your account
                </button>
              </div>
            ) : (
              <div>
                <div className="relative w-[100%] h-[200px] mt-8 mb-4">
                  <Image src="/images/membership.png" fill objectFit="cover" alt="image" />
                </div>

                <div className="my-6">
                  <button
                    onClick={handleConfirmChange}
                    className="font-[500] w-full hover:bg-[#152e26] text-center transition text-[14px] text-white bg-[#367560] rounded-md px-4 py-2 hover:text-white"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Membership;
