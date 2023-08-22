import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { useAuth } from '../context/AuthContext'


const ReferralPage = () => {
    const { state } = useAuth();
    const [referralLink, setReferralLink] = useState(`http://www.plips.com/${state.user._id}`);


    const copyReferralLink = () => {
        const textField = document.createElement('textarea');
        textField.innerText = referralLink;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
        alert('Referral link copied to clipboard!');
    };

    return (
        <div className='w-screen h-screen bg-[#dbdbdb] p-12'>
            <div className='w-full h-[calc(100vh-240px)] rounded-[45px] rounded-br-[0px] relative bg-[url(./images/lofinbgImg.png)] flex justify-center items-start'>
                <div className='my-10 text-black flex flex-col justify-center items-center'>
                    <h2 className='text-5xl text-[#042F6F] text-center font-semibold mt-10'>
                        Your Referral Link
                    </h2>
                    <p className='text-[20px] text-[#848282] font-medium text-center mt-[15px]'>
                        Share this link with your friends:
                    </p>
                    <div className='flex items-center justify-center mt-4'>
                        <input
                            type='text'
                            value={referralLink}
                            readOnly
                            className='w-[400px] rounded-[20px] text-2xl py-[25px] px-[20px] border-2 border-[#848282] text-gray-700'
                        />
                        <button
                            onClick={copyReferralLink}
                            className='ml-4 px-4 py-2 bg-[#5B81FD] text-white rounded-md font-semibold hover:bg-[#042F6F] cursor-pointer'
                        >
                            Copy
                        </button>
                    </div>
                    <div className='text-center my-11 rounded-2xl'>
                        <QRCode value={referralLink} size={250} className='rounded-2xl' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferralPage;
