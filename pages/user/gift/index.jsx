import React, { useState } from 'react';
import Link from 'next/link';
import { LeftOutlined, CheckCircleFilled } from '@ant-design/icons';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import DashboardLayout from '@/layout/DashboardLayout';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Index() {
  const [paymentVisible, setPaymentVisible] = useState(false);
  const [monthlyContribution, setMonthlyContribution] = useState(5);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState('GBP'); // Default currency
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
  });

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

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAgreeToTermsChange = (event) => {
    setAgreeToTerms(event.target.checked);
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
          <div className="my-2">
            <h1 className="font-[700] text-center text-[32px] text-black my-5">
              Gift a 1 year Project Wilding membership!
            </h1>

            {!confirmationVisible && (
              <>
                 <label htmlFor="currency" className="block text-black text-[20px] mb-2">
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


                <p className="text-center text-black text-[20px]">
                  Choose how much you want to gift
                </p>

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
              </>
            )}

           
              <div>
                <div className="relative w-[100%] h-[200px] mt-8 mb-4">
                  <Image
                    src="/images/membership.png"
                    fill
                    objectFit="cover"
                    alt="image"
                  />
                </div>

                <p className="text-black font-[600] text-[24px] text-center mt-6 mb-4">
                  Fill in your details below and we'll send you a gift
                  certificate to send onto the person you're buying the gift for:
                </p>

                <form>
              <div className="mb-4 text-black">
                <label
                  htmlFor="firstName"
                  className="block text-black text-[16px] mb-2"
                >
                  Your First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-md shadow-md focus:ring-[#367560] focus:border-[#367560] text-[16px] outline-none"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-black text-[16px] mb-2"
                >
                  Your Email (for confirmation):
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter First Name"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-md shadow-md focus:ring-[#367560] focus:border-[#367560] text-[16px] outline-none"
                />
              </div>
              <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={agreeToTerms}
                    onChange={handleAgreeToTermsChange}
                    className="w-5 h-5 mr-2 text-[#367560] border-[#367560] appearance-none rounded-md focus:ring-[#367560] focus:outline-none"
                  />
                  <label htmlFor="agreeToTerms" className="text-black text-[16px] flex items-center">
                    I agree to the <Link href="#" className="text-[#367560] ml-1">terms & conditions</Link>
                  </label>
                </div>

              <button
                type="button"
                onClick={handleConfirmChange}
                className="font-[500] w-full hover:bg-[#152e26] text-center transition my-6 text-[14px] text-white bg-[#367560] rounded-md px-4 py-2 hover:text-white"
              >
                Proceed to Payment
              </button>
            </form>
              </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Index;
