import AccountSettingsCard from '@/components/AccountSettingsCard';
import React from 'react';
import BillingInformation from '@/components/BillingInformation'
import App from '@/components/App'
import AccountInformation from '@/components/AccountInformation'
import DashboardLayout from '@/layout/DashboardLayout'
function Index() {
  return (
    <DashboardLayout>
    <div className="w-full fontFamily h-full px-[2.3rem] py-[1rem]">
      <div className='flex w-full justify-between items-center'>
        <h1 className='font-[800] text-[26px] text-black'>Account Settings</h1>
        <button className='text-[#367560] rounded-md font-[500] text-[18px] transition bg-transparent hover:bg-[#d4efe6be]  py-2 px-4 '>
          Logout
        </button>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-6">
  <AccountSettingsCard />
  <BillingInformation />
  <App/>
  <AccountInformation/>
</div>

    </div>
</DashboardLayout>
  
  );
}

export default Index;
