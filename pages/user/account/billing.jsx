import React from 'react'
import Link from 'next/link'
import {LeftOutlined} from '@ant-design/icons'
import {useState} from 'react';
import DashboardLayout from '@/layout/DashboardLayout'
import CustomInput from '@/Components/CustomInput'
import {message} from 'antd'
function Billing() {
    const [paymentVisible, setPaymentVisible] = useState(false);
    const [accountNumber, setAccountNumber] = useState('');
    const [csv, setCSV] = useState('');
    const [expiry, setExpiry] = useState('');
    const [country, setCountry] = useState('');
  
    const handleConfirmChange = () => {
      
      message.success('Payment method updated successfully!');
      setPaymentVisible(false);
    };

    const handlePaymentmMethod = () => {
        setPaymentVisible((prevState => !prevState));
    }

  return (
    <DashboardLayout>
    <div className="fontFamily w-full h-full py-[1rem] px-[1rem] flex justify-center items-center">
        <div className="w-[550px]">
            <Link href="/user/account" className="inline-flex items-center text-[#367560] hover:bg-[#d4efe6be]  rounded-md py-2 px-3 transition hover:text-[#367560]">
            <LeftOutlined className="mr-2" style={{color: "#367560"}} />
            Back to account settings
            </Link>

            <div className="my-2">
            <h1 className="font-[700] text-[32px] text-black">Billing information</h1>

            <div className='rounded-lg w-full bg-white h-auto md:min-h-[300px]  mb-4 mt-6 px-[1.3rem] py-[.3rem]'>
            <div className="flex items-center justify-between my-3 w-full  ">
        <div>
            <h1 className="uppercase text-[#255143] text-[14px] ">Type</h1>
            <p className="font-[500] text-[17px] text-black">Card</p>
        </div>
        <div>
            <h1 className="uppercase text-[#255143] text-[14px] ">LAST 4 DIGITS</h1>
            <p className="flex items-center font-[500] text-[17px] text-black">••••••••0352</p>
        </div>
        <div>
            <h1 className="uppercase text-[#255143] text-[14px]  ">EXP DATE</h1>
            <p className="font-[500] text-[17px] text-black">7/2027</p>
        </div>
       </div>
       <div className="w-full flex mb-4 mt-4">
            <button onClick={handlePaymentmMethod}  className="font-[500] w-full text-center transition text-[14px] text-white bg-[#367560] rounded-md px-4 py-2 hover:bg-[#152e26] hover:text-white">Update payment method</button>
        </div>

        {paymentVisible && (
                <div className="w-full mt-8 mb-4">
                  <h1 className="font-[600] text-[24px] text-center mb-1 text-[#2F3542]">
                    Update payment method
                  </h1>
                  <p className="text-center text-[#2F3542]">
                    Your new payment method will be applied to your next billing cycle.
                  </p>
                  <div className="mt-3">
                    <form className="flex flex-col px-4 py-3">
                      {/* Custom inputs */}
                      <CustomInput
                        label="Account Number"
                        type="text"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                      />
                      <CustomInput
                        label="CSV"
                        type="text"
                        value={csv}
                        onChange={(e) => setCSV(e.target.value)}
                      />
                      <CustomInput
                        label="Expiration Date"
                        type="text"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                      />
                      <div className="relative bg-white rounded-md mb-3">
                        <select
                          id="country"
                          className="w-full text-black text-[16px] border border-grey-400 bg-white py-3 px-3 rounded-md focus:outline-none"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                        >
                          <option value="">Select Country</option>
                          <option value="usa">USA</option>
                          <option value="canada">Canada</option>
                          <option value="uk">UK</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="w-full flex mt-4">
                    <button
                      onClick={handleConfirmChange}
                      className="font-[500] w-full hover:bg-[#152e26] text-center transition text-[14px] text-white bg-[#367560] rounded-md px-4 py-2 hover:text-white"
                    >
                      Confirm Change
                    </button>
                  </div>
                </div>
              )}
            </div>
        </div>
        </div>
        
    </div>
    </DashboardLayout>
  )
}

export default Billing