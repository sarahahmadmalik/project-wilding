import React, { useState } from 'react';
import Link from 'next/link';
import { LeftOutlined ,UploadOutlined} from '@ant-design/icons';
import { message, Upload, Button, Input } from 'antd';
import DashboardLayout from '@/layout/DashboardLayout';
import CustomInput from '@/Components/CustomInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
function Information() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleUpdateProfile = () => {
    // Handle updating profile information here
    // You can access firstName, email, bio, and profileImage
    // Perform the update logic and show a success message
    message.success('Profile updated successfully!');
  };

  const uploadProps = {
    beforeUpload: (file) => {
      const acceptedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
      if (acceptedTypes.includes(file.type)) {
        // The file type is acceptable
        setProfileImage(file);
      } else {
        message.error('Please upload a .png, .jpeg, or .jpg file.');
      }
      return false; // Returning false prevents automatic upload
    },
  };

  return (
    <DashboardLayout>
      <div className="fontFamily w-full h-full py-[1rem] px-[1rem] flex justify-center items-center">
        <div className="w-[550px]">
          <Link
            href="/user/account"
            className="inline-flex items-center text-[#367560] hover:bg-[#d4efe6be]  rounded-md py-2 px-3 transition hover:text-[#367560]"
          >
            <LeftOutlined className="mr-2" style={{ color: "#367560" }} />
            Back to account settings
          </Link>

          <div className="my-2">
            <h1 className="font-[700] text-[32px] text-black">Account information</h1>

            {/* Profile update form */}
            <div className="w-full mt-8 mb-4">
              <h1 className="font-[600] text-[24px] text-center mb-1 text-[#2F3542]">Update Profile</h1>
              <p className="text-center text-[#2F3542]">Update your profile information.</p>
              <div className="mt-3">
                <form className="flex flex-col px-4 py-3 w-full">
                  <CustomInput
                    label="First Name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <CustomInput
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="mb-3">
                    <textarea
                      id="bio"
                      rows="4"
                      placeholder="Write your Bio here.."
                      className="w-full rounded-md border border-grey-400 resize-none text-[#2F3542] p-3 focus:outline-none"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </div>
                  <Upload {...uploadProps} className="w-full "> 
  <Button  style={{width: "100% !important"}} icon={<FontAwesomeIcon icon={faCloudArrowUp} color="#367560" />}>Upload Profile Image</Button>
</Upload>
                </form>
              </div>
              <div className="w-full flex mt-4">
                <button
                  onClick={handleUpdateProfile}
                  className="font-[500] w-full hover:bg-[#152e26] text-center transition text-[14px] text-white bg-[#367560] rounded-md px-4 py-2 hover:text-white"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Information;
