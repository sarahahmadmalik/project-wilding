import React, { useState } from 'react';
import DashboardLayout from '@/layout/DashboardLayout';
import Image from 'next/image';
import { LeftOutlined, CheckCircleFilled } from '@ant-design/icons';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
function Index() {
  const [monthlyContribution, setMonthlyContribution] = useState(5);
  const [currency, setCurrency] = useState('GBP'); // Default currency

  const handleIncrement = () => {
    setMonthlyContribution(monthlyContribution + 5);
  };

  const handleDecrement = () => {
    if (monthlyContribution > 5) {
      setMonthlyContribution(monthlyContribution - 5);
    }
  };

  const handleAddToMonthlyContribution = (amount) => {
    setMonthlyContribution(monthlyContribution + amount);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <DashboardLayout>
      <div className="w-full fontFamily h-full py-[1rem] md:px-[1rem] flex justify-center items-center">
        <div className="w-[600px]">
          <div className="my-2">
          <h1 className="font-[700] text-[22px] text-[#2F3542] text-center mb-5">Fund extra impact for Rewilding a Former Mining Site!</h1>
            <div className="relative w-[100%] rounded-lg overflow-hidden h-[300px] mt-8 mb-4">
              <Image
                src="/images/id.avif"
                fill
                objectFit="cover"
                alt="image"
              />
            </div>

            <p className="text-black font-[600] text-[24px] text-center mt-6 mb-4">
              Give more to help a diversity of wildlife at this former mining site!
            </p>
            <p className="text-black font-[400] text-[18px]  mt-6 mb-4">This old mine has become a haven for wildlife since it was abandoned over a decade ago. Over 122 species of bird have been recorded using the area, including important migratory birds, as well as amphibians, mammals and tons of invertebrates.

Along with our partners, Rewilding Portugal, we have been gradually reshaping this landscape to suit the return of more biodiversity through earthworks that connect different water bodies.
</p>
<p className="text-black font-[400] text-[18px]  mt-6 mb-8">Help accelerate this process by contributing more through this Fund Extra campaign.</p>

            <div className="flex justify-center space-x-7 my-6">
              <button
                onClick={handleDecrement}
                className="rounded-md shadow-md bg-white py-3 px-4 flex items-center"
              >
                <MinusOutlined
                  style={{ color: '#98B5A8', fontSize: '20px' }}
                />
              </button>
              <span className="flex flex-col items-center font-[600] text-[20px] text-black">
                £{monthlyContribution}
              </span>
              <button
                onClick={handleIncrement}
                className="rounded-md shadow-md bg-white py-3 px-4 flex items-center"
              >
                <PlusOutlined
                  style={{ color: '#98B5A8', fontSize: '20px' }}
                />
              </button>
            </div>

            <div className="flex justify-center space-x-3 my-6">
              <button
                onClick={() => handleAddToMonthlyContribution(25)}
                className="rounded-md shadow-md bg-white py-2 px-4 text-black font-[600] hover:bg-[#367560] hover:text-white"
              >
                +25
              </button>
              <button
                onClick={() => handleAddToMonthlyContribution(50)}
                className="rounded-md shadow-md bg-white py-2 px-4 text-black font-[600] hover:bg-[#367560] hover:text-white"
              >
                +50
              </button>
              <button
                onClick={() => handleAddToMonthlyContribution(250)}
                className="rounded-md shadow-md bg-white py-2 px-4 text-black font-[600] hover:bg-[#367560] hover:text-white"
              >
                +250
              </button>
              <button
                onClick={() => handleAddToMonthlyContribution(500)}
                className="rounded-md shadow-md bg-white py-2 px-4 text-black font-[600] hover:bg-[#367560] hover:text-white"
              >
                +500
              </button>
            </div>

            <label
              htmlFor="currency"
              className="block text-black text-[20px] mb-2"
            >
              Choose payment currency:
            </label>
            <div className="relative">
              <select
                id="currency"
                name="currency"
                value={currency}
                onChange={handleCurrencyChange}
                className="block w-full text-black px-4 py-2 mt-2 mb-6 focus:ring-[#367560] focus:outline-none focus:border-[#367560] bg-white border rounded-md shadow-md focus:ring-[#367560] focus:border-[#367560] text-[16px] appearance-none"
              >
                <option value="GBP">GBP</option>
                <option value="USD">USD</option>
                {/* Add more currency options as needed */}
              </select>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#367560]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.293 7.293a1 1 0 011.414 0L10 8.586l.293-.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L10 8.586l.293-.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="my-6">
                  <button
                
                    className="font-[500] w-full hover:bg-[#152e26] text-center transition text-[14px] text-white bg-[#367560] rounded-md px-4 py-2 hover:text-white"
                  >
                    Proceed to payment
                  </button>
                </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Index;
