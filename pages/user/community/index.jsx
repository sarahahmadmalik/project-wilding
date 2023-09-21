import React from "react";
import DashboardLayout from "@/layout/DashboardLayout";
import { useRouter } from "next/router";
import { CopyOutlined, FacebookOutlined, TwitterOutlined, WhatsAppOutlined, MailOutlined } from '@ant-design/icons';
import App from '@/Components/AppCard'
import FollowUsCard from '@/Components/FollowUsCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme styles
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function Index() {
  const router = useRouter();
   // Function to copy the referral code to the clipboard
   const copyReferralCodeToClipboard = () => {
    const referralCode = 'MATBB2YZA3'; // Replace with your actual referral code
    navigator.clipboard.writeText(referralCode);
  };

  // Function to share via Facebook
  const shareOnFacebook = () => {
    // Implement your Facebook sharing logic here
  };

  // Function to share via Twitter
  const shareOnTwitter = () => {
    // Implement your Twitter sharing logic here
  };

  // Function to share via WhatsApp
  const shareOnWhatsApp = () => {
    // Implement your WhatsApp sharing logic here
  };

  // Function to share via email
  const shareViaEmail = () => {
    // Implement your email sharing logic here
  };

   // Custom previous arrow component using Ant Design's LeftOutlined
 const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="custom-prev-arrow"
        onClick={onClick}
      >
        <LeftOutlined />
      </div>
    );
  };

  // Custom next arrow component using Ant Design's RightOutlined
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="custom-next-arrow"
        onClick={onClick}
      >
        <RightOutlined />
      </div>
    );
  };


    const settings = {
      infinite: true,
      dots: true,
      speed: 500,
      slidesToShow: 3, // Show three images per slide
      slidesToScroll: 1,
      arrows: true, // Show arrows
      prevArrow: <CustomPrevArrow />, // Custom previous arrow component
      nextArrow: <CustomNextArrow />, // Custom next arrow component
      responsive: [
        {
          breakpoint: 768, // Adjust settings for smaller screens if needed
          settings: {
            slidesToShow: 1, // Show one image per slide on smaller screens
          },
        },
      ],
    };


  return (
    <DashboardLayout>
      <div className="w-full fontFamily h-full px-[2.3rem] py-[1rem]">
        <div className="flex w-full justify-between items-center">
          <h1 className="font-[800] text-[26px] text-black">
          Community
          </h1>
        </div>
        <div className="w-full">
            <div className="rounded-md bg-[#F4D54B] px-5 py-4 my-4">
                <h1 className="font-[700] text-[22px] text-[#2F3542] mb-5">Share The Love!</h1>
                <div className="mb-5 text-[#2F3542]">
                    <p className="font-[400] text-[17px]">The best way to increase your impact is to get more people to join. If every member referred at least one person, then we'd double in size! Imagine the extra impact we could have then.</p>
                </div>

                <div className="w-full text-black text-[16px] flex items-center">
                People you've signed up: <p className="font-[500]">0</p>
                </div>

                <div className="rounded-md flex bg-[#F7E281]  my-5">
                    <div className="rounded-md bg-white flex items-center font-[400] text-[17px] text-black px-2 py-2">
                    MATBB2YZA3
                    </div>
                    <div className="px-2 py-1 flex w-full justify-evenly">
                {/* Copy Button */}
                <button
                  onClick={copyReferralCodeToClipboard}
                  className="rounded-full bg-transparent hover:bg-[#367560] hover:bg-opacity-20 p-2 focus:outline-none"
                >
                  <CopyOutlined style={{ fontSize: '24px', color: '#367560' }} />
                </button>

                {/* Facebook Share Button */}
                <button
                  onClick={shareOnFacebook}
                  className="rounded-full bg-transparent hover:bg-[#367560] hover:bg-opacity-20 p-2 focus:outline-none"
                >
                  <FacebookOutlined style={{ fontSize: '24px', color: '#367560' }} />
                </button>

                {/* Twitter Share Button */}
                <button
                  onClick={shareOnTwitter}
                  className="rounded-full text-center  bg-transparent hover:bg-[#367560] hover:bg-opacity-20 p-2 focus:outline-none"
                >
                  <TwitterOutlined style={{ fontSize: '24px', color: '#367560' }} />
                </button>

                {/* WhatsApp Share Button */}
                <button
                  onClick={shareOnWhatsApp}
                  className="rounded-full text-center  bg-transparent hover:bg-[#367560] hover:bg-opacity-20 p-2 focus:outline-none"
                >
                  <WhatsAppOutlined style={{ fontSize: '24px', color: '#367560' }} />
                </button>

                {/* Email Share Button */}
                <button
                  onClick={shareViaEmail}
                  className="rounded-full bg-transparent hover:bg-[#367560] hover:bg-opacity-20 p-2 focus:outline-none"
                >
                  <MailOutlined style={{ fontSize: '24px', color: '#367560' }} />
                </button>
              </div>

                </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <App/>
                    <FollowUsCard/>
            </div>
            <div className="w-full rounded-lg bg-white my-3 px-[2rem] py-[1.4rem]">
            <h1 className="font-[700] text-[22px] text-[#2F3542] mb-2">Share your impact</h1>
            <p className="font-[400] text-[17px] text-black">Show your community the difference you're making by sharing these on your favourite platform.</p>
            <div className="w-full slider-container">
 <Slider {...settings}>
                <div className="slide">
                  <img src="/images/slider1.jpg" alt="Slider Image 1" className="w-full" />
                </div>
                <div className="mr-3">
                  <img src="/images/slider2.jpg" alt="Slider Image 2" className="w-full" />
                </div>
                <div>
                  <img src="/images/slider3.png" alt="Slider Image 3" className="w-full" />
                </div>
                <div>
                  <img src="/images/slider1.jpg" alt="Slider Image 1" className="w-full" />
                </div>
                <div>
                  <img src="/images/slider2.jpg" alt="Slider Image 2" className="w-full" />
                </div>
                <div>
                  <img src="/images/slider3.png" alt="Slider Image 3" className="w-full" />
                </div>
               
              </Slider>
            </div>
            </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Index;
