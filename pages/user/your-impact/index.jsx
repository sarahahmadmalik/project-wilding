import React from "react";
import DashboardLayout from "@/layout/DashboardLayout";
import { useRouter } from "next/router";
import { CopyOutlined, FacebookOutlined, TwitterOutlined, WhatsAppOutlined, MailOutlined } from '@ant-design/icons';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Image from 'next/image'
import Accordion from '@/Components/Accordion'
function Index() {
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

  const accordion = [ 
    {
      id: 1,
      title: "Ecuadorian Amazon Land Purchase Fees",
      para: "As a member this month you are contributing to the fees related to the purchase of land in the Amazon Rainforest. We are very thankful for your support which has allowed us to pursue this exciting opportunity in the most biodiverse region of the world. The land we bought borders the Yasuní National Park in Ecuador, a world renowned biodiversity hotspot. We are now planning a project to contribute to the protection and restoration of rainforest in the buffer zone of this special place. We will release further details in the coming months, but look out for a special feature on this purchase in the next issue of the field report.",
      img: "/images/acc1.avif"
    },
    {
      id: 2,
      title: "Mapping Intertidal Seagrass Beds",
      para: "As part of our efforts to restore a coastal seascape in Scotland, we have been mapping seagrass beds in the Cromarty Firth. The data collected will help us to build a better understanding of the seagrass beds present in the area to inform future restoration work. The team used drones and mapping software to map part of the firth for which project manager, Isla, shares details in the Updates feed.",
      img: "/images/acc2.avif"
    },
    {
      id: 3,
      title: "European ground squirrel translocation: project costs",
      para: "As a member, you have contributed to the cost of our project to translocate European ground squirrels in partnership with BROZ. Thanks to your support, we were able to save a large colony (718 squirrels) from a pending threat of a new development close to Bratislava airport. Learn all about this successful mission and how it is helping to improve the genetic diversity of this critically endangered animal in the Updates feed and on our project page below.",
      img: "/images/acc2.avif"
    },
  ]

  return (
    <DashboardLayout>
      <div className="w-full fontFamily h-full md:px-[2.3rem] py-[1rem]">
        <div className="w-full flex flex-col justify-center items-center">
            <div className="rounded-lg bg-[#F4F8FA] py-3 px-4 flex flex-col md:flex-row md:items-start md:justify-between w-full md:w-[70%]">
            <div className="grid grid-cols-1 md:grid-cols-2 self-center gap-4 text-center h-full w-full md:w-60%">
  <div className="rounded-md bg-white px-4 py-4 text-[18px] h-[70px]  font-[500] text-[#2F3542]">
    1 month of action!
  </div>
  <div className="rounded-md bg-white px-4 py-4 text-[18px] h-[70px] font-[500] text-[#2F3542]">
    4 projects
  </div>
  <div className="rounded-md bg-white px-4 py-4 text-[18px] h-[70px] font-[500] text-[#2F3542]">
    1 ecosystems
  </div>
  <div className="rounded-md bg-white px-4 py-4 text-[18px] h-[70px] font-[500] text-[#2F3542]">
    16 target species
  </div>
</div>

<div className="relative w-full md:w-[310px] rounded-lg overflow-hidden h-[180px] ">
              <Image
                src="/images/impact.png"
                fill
                objectFit="cover"
                alt="image"
              />
              <div className="absolute bottom-0 right-0 ">
                <p className="bg-white  rounded-md py-2 px-3 text-[18px] my-2 mr-2 font-[500] text-black  ">0 extra contributions</p>
                <p className="bg-white  rounded-md py-2 px-3 text-[18px] mb-2 mr-2 font-[500] text-black  "> 0 people referred</p>

              </div>
            </div>



            </div>
            <div className="md:px-[2.4rem] mx-[1.2rem] py-4 my-4 w-full h-full border-l border-grey-400">
              <p className="bg-[#F4D54B] rounded-md py-1 px-2 mb-8 text-black text-[18px] font-[600] inline-flex ">September 2023</p>
            {accordion.map((item) => (
            <Accordion key={item.id} title={item.title} content={item.para} imageSrc={item.img} />
          ))}
</div>
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
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Index;
