import React, { useState } from 'react';
import { Modal, Checkbox, Button } from 'antd';

function PauseMembershipModal({ visible, onCancel, onConfirm }) {
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(true);

  const handleConfirm = () => {
    // Pass the checked states of the checkboxes to the parent component
    onConfirm(check1, check2);
  };

  return (
    <Modal
      title="Pause your Project Wilding Membership"
      visible={visible}
      onCancel={onCancel}
      className="fontFamily"
      footer={[
        <button key="no" onClick={onCancel} className="font-[500] mt-5 w-full text-center transition text-[14px] text-white bg-[#367560] rounded-md px-4 py-2 hover:bg-[#152e26] hover:text-white">
          No, Keep my membership
        </button>,
        <button key="yes" type="primary" className="font-[500] my-5 w-full text-center transition text-[14px] text-black shadow-md bg-white rounded-md px-4 py-2 hover:bg-[#367560] hover:text-white" onClick={handleConfirm}>
          Yes, Pause my membership
        </button>,
      ]}
    >
      <p className='font-[800] text-[32px] text-center'>Are you sure?</p>
      <p className="font-[700] text-[18px] text-center text-red-800 my-2">
        We are sad to see that you want to pause your membership, although have you seen that we now have a cheaper tier?
      </p>
      <p className="font-[400] text-[13px] text-center my-6">
        If you want to go ahead, we will be pausing your membership from: 10/1/2023
      </p>
      <Checkbox
        checked={check1}
        onChange={(e) => setCheck1(e.target.checked)}
        className="text-center font-[500] text-[15px] fontFamily"
      >
        You will no longer be supporting rewilding projects
      </Checkbox>
      <Checkbox
        checked={check2}
        onChange={(e) => setCheck2(e.target.checked)}
        className="text-center font-[500] text-[15px] fontFamily"

      >
        Past Membership data will remain
      </Checkbox>
    </Modal>
  );
}

export default PauseMembershipModal;
