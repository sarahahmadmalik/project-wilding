import React from "react";
import {  YoutubeOutlined, InstagramOutlined } from '@ant-design/icons';
import Link from 'next/link'
import Image from 'next/image'
function FollowUsCard() {
  return (
    <div className="rounded-lg bg-white my-3 px-[2rem] py-[1.4rem]">
      <div>
        <h1 className="font-[700] text-[24px] text-black">Follow Us</h1>
        <ul className="text-[#2F3542] font-[500] mt-2 mb-5">
          <li className="mb-2">
            Join our community on Discord to chat with us and fellow members.
          </li>
          <li className="mb-2">
            Stay up to date with projects and other rewilding topics on YouTube.
          </li>
          <li className="mb-2">
            Stay up to date with everything we are doing across our socials.
          </li>
          <li>
            Connect with us on LinkedIn.
          </li>
        </ul>
      </div>
      {/* Social Media Icons */}
      <div className="flex space-x-4 items-center text-[#367560]">
        <Link href="#" target="_blank" rel="noopener noreferrer">
        <Image
            src="/images/discord.svg" // Replace with your YouTube logo image path
            alt="YouTube"
           width={150}
           height={150}
          />
        </Link>
        <Link href="#" classame="flex items-center" target="_blank" rel="noopener noreferrer">
          <YoutubeOutlined style={{ fontSize: '35px' }} />
          YouTube
        </Link>
        <Link href="#" classame="flex items-center" target="_blank" rel="noopener noreferrer">
          <InstagramOutlined style={{ fontSize: '35px' }} />
          <p>Instagram</p>
        </Link>
          <Image
            src="/images/link.png" // Replace with your YouTube logo image path
            alt="YouTube"
           width={130}
           height={100}
          />
      
      </div>
    </div>
  );
}

export default FollowUsCard;
