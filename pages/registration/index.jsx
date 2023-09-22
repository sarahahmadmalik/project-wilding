import React, { useEffect, useRef, useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io"
const index = () => {
    const [count, setCount] = useState(5);

    const handleIncrement = () => {
        setCount(count + 5);
    };

    const handleDecrement = () => {
        if (count > 5) {
            setCount(count - 5);
        }
    };
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState('£ (GBP)');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
        setIsOpen(false); // Close the dropdown after selecting a currency
    };
    const dropdownRef = useRef(null);

    useEffect(() => {
        // Function to close the dropdown when clicking outside of it
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        // Add the event listener when the  is open
        if (isOpen) {
            window.addEventListener('click', handleClickOutside);
        }

        // Clean up the event listener when the component unmounts or the  closes
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);
    const [selectedOption, setSelectedOption] = useState('monthly');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    return (
        <div className='flex flex-col justify-start py-20 items-center   w-full '>
            <img src="/logo.png" alt="" className="w-[200px]" />
            <div className='flex flex-col justify-center items-center pt-20'>
                <h1 className='text-[32px] font-[700] text-center'>Sign up for membership</h1>

            </div>
            <div className="relative pt-10" ref={dropdownRef} >
                <p className='pb-3'>Payment Currency</p>
                <button
                    onClick={toggleDropdown}
                    className="inline-flex  justify-between items-center w-[300px] md:w-[600px] px-3 py-4  font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                >
                    {selectedCurrency}{' '}
                    <IoMdArrowDropdown size={20} />
                </button>
                {isOpen && (
                    <div className="absolute z-10 w-[300px] md:w-[600px] mt-2 bg-white text-black border border-gray-300 shadow-lg ">
                        <ul>
                            <li
                                onClick={() => handleCurrencyChange('£ (GBP)')}
                                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            >
                                £ (GBP)
                            </li>

                        </ul>
                    </div>
                )}
            </div>
            <div className='flex flex-col justify-center items-center pt-5'>
                <p className='text-[18px] font-[400]'>
                    Choose how much you want to contribute
                </p>
                <p className='text-[18px] font-[500] text-center text-white pt-3'>
                    No ongoing commitment. <br />
                    You can cancel, pause, or update the membership at any time.
                </p>
                <div className="flex justify-center items-center gap-10 pt-10">
                    <button
                        className="text-[24px] font-[700] px-10 md:px-20 py-2 bg-[#1a401f] rounded-md"
                        onClick={handleDecrement}
                        disabled={count === 5}
                    >
                        -
                    </button>
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-[700] text-[24px]">£{count}</p>
                        <p className="text-[16px]">/month</p>
                    </div>
                    <button
                        className="text-[24px] font-[700] px-10 md:px-20 py-2 bg-[#1a401f] rounded-md"
                        onClick={handleIncrement}
                    >
                        +
                    </button>
                </div>

            </div>
            <div className='flex flex-col justify-center items-center pt-10'>
                <form class="w-[300px] md:w-[600px]">
                    <div class="mb-3 relative">
                        <input type="email" id="email" class="border  focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full  px-3 h-12" placeholder="First Name" autocomplete="off" />
                        <label for="email" class="absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out ">First Name</label>
                    </div>
                    <div class=" mb-3 relative">
                        <input type="password" id="password" class="border  focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-12" placeholder="Enter Email" autocomplete="off" />
                        <label for="password" class="absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out ">Email</label>
                    </div>
                </form>


            </div>
            <div className="flex flex-col items-center pt-10">

                <div className="flex flex-col md:flex-row gap-4">
                    <div className={`flex flex-col items-center gap-2 border w-[300px] py-5 text-center rounded ${selectedOption === 'monthly' ? 'border-green-500' : 'border-gray-300'}`}>
                        <input
                            type="radio"
                            id="monthly"
                            name="paymentOption"
                            value="monthly"
                            checked={selectedOption === 'monthly'}
                            onChange={() => handleOptionChange('monthly')}
                        />
                        <label htmlFor="monthly">Pay Monthly <br />
                            £{count}/month
                        </label>
                    </div>
                    <div className={`flex flex-col items-center gap-2 border w-[300px] py-5 text-center rounded ${selectedOption === 'yearly' ? 'border-green-500' : 'border-gray-300'}`}>
                        <input
                            type="radio"
                            id="yearly"
                            name="paymentOption"
                            value="yearly"
                            checked={selectedOption === 'yearly'}
                            onChange={() => handleOptionChange('yearly')}
                        />
                        <label htmlFor="yearly">Pay Yearly <br /> £{count}/year</label>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-3 py-5'>
                <input type="checkbox" name="" id="" />
                <p>Agree to Terms & Conditions</p>

            </div>
            <button class="w-[80%] md:w-[40%]  md:mx-auto bg-[#1a401f] hover:bg-[#0e2612] ease-in duration-200 transition-all text-white py-2 text-[18px] rounded-md ">Proceed to payment</button>


        </div>
    )
}

export default index