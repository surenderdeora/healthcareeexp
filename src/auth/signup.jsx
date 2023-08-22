import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { login } from '../context/AuthActions';

const signupForm = () => {
  const [phoneNo, setPhoneNo] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();
  const [formMsg, setFormMsg] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const validateStates = () => {
    // regex pattern
    const phoneNoPattern = /^\+?[1-9][0-9]{7,14}$/;

    let errorMsg = {};

    if (phoneNo === 0) {
      errorMsg.phoneNo = "Phone No is required!";
    } else if (!phoneNoPattern.test(phoneNo)) {
      errorMsg.phoneNo = 'Phone number is not valid!';
    }
    if (password === '') {
      errorMsg.password = "Password is required!";
    }
    if (confirmPassword === '') {
      errorMsg.confirmPassword = "Confirm password is required!";
    }
    if (confirmPassword !== password) {
      errorMsg.confirmPassword = "Passwords do not match!";
    }

    return errorMsg;
  };

  const handlePasswordFormSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    const errorMsg = validateStates();
    if (Object.keys(errorMsg).length !== 0) {
      setFormMsg(errorMsg);
      setTimeout(() => {
        setFormMsg({});
      }, 5000);
      return;
    }

    // Submission logic here
    const passwordUserDetail = {
      phoneNo,
      password,
    };
    try {
      setLoading(true);
      console.log("dTA", passwordUserDetail);
      const response = await axios.post(
        "http://localhost:8888/auth/register",
        passwordUserDetail
      );
      const responseData = response.data;
      // Handle response data as needed

      // Dispatch the user data
      const user = { id: responseData.userId, name: responseData.userName }; // Replace with actual user data
      dispatch(login(user));

      setLoading(false);
      navigate('/login'); // Redirect to dashboard or another appropriate page after successful signup
    } catch (err) {
      console.log("Error:", err);
      setLoading(false);
    }
  };

  return (
    <div className='w-screen h-screen  bg-[#dbdbdb] p-12'>
      <div className='w-full h-[calc(100vh-240px)]  rounded-[45px] rounded-br-[0px]  shadow-xl relative bg-[url(./images/lofinbgImg.png)] '>
        <div className='absolute right-0 top-[99.5%] z-0'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="945"
            height="147"
            viewBox="0 0 945 147"
            fill="none"
          >
            <path
              d="M0 4.16214C4.33474 2.11395 12.2303 1.28965 23.2964 4.06154L945 0.0810547V116.392C939.31 135.165 921.629 144.619 913.5 147H653.371H232.694C191.235 143.735 172.742 130.676 168.677 124.554C145.916 108.23 115.161 73.5405 102.629 58.2365C68.6653 23.1163 41.6297 8.65374 23.2964 4.06154L0 4.16214Z"
              fill="#ecb9db"
            />
          </svg>
        </div>
        <div className='flex justify-between  px-20 '>
          <div>
            {/* Your image or content */}
          </div>
          <div className='bg-white rounded-[35px] shadow-2xl  h-full mt-14 relative z-10'>
            <div className='w-[600px]  py-[55px] rounded-[35px] '>
              <div>
                {/* <p className='text-red-800 font-bold text-3xl text-center'>{errMsg}</p> */}
                <h2 className='text-5xl text-[#042F6F] text-center font-semibold'>
                  Register Now
                </h2>
                <p className='text-[20px text-[#848282] font-medium text-center mt-[15px]'>
                  Please enter your details and create an account
                </p>
              </div>
              <div className='flex flex-col items-center justify-center gap-5  my-[44px]'>
                <div className='w-[400px]  rounded-[20px] relative'>
                  <input
                    onChange={(e) => setPhoneNo(e.target.value)}
                    type="number"
                    placeholder="Phone no."
                    className='w-full rounded-[20px] text-2xl py-[25px] px-[20px] border-2 border-[#848282] text-gray-700'
                  />
                  <p className='absolute top-[50%] right-5 translate-y-[-50%] text-2xl text-[#717171]'>&#64;</p>
                  {formMsg.phoneNo !== '' && (
                    <p className='text-red-700 font-bold mt-0.5 ml-4'>{formMsg.phoneNo}</p>
                  )}
                </div>

                <div className='w-[400px]  rounded-[20px] relative'>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className='w-[400px] rounded-[20px] text-2xl  py-[25px] px-[20px] border-2 border-[#848282] text-gray-700'
                  />
                  <p className='absolute top-[50%] right-5 translate-y-[-50%] text-2xl text-[#717171]'>&#128065;</p>
                  {formMsg.password !== '' && (
                    <p className='text-red-700 font-bold mt-0.5 ml-4'>{formMsg.password}</p>
                  )}
                </div>

                <div className='w-[400px]  rounded-[20px] relative'>
                  <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    placeholder="Confirm Password"
                    className='w-[400px] rounded-[20px] text-2xl  py-[25px] px-[20px] border-2 border-[#848282] text-gray-700'
                  />
                  <p className='absolute top-[50%] right-5 translate-y-[-50%] text-2xl text-[#717171]'>&#128065;</p>
                  {formMsg.confirmPassword !== '' && (
                    <p className='text-red-700 font-bold mt-0.5 ml-4'>{formMsg.confirmPassword}</p>
                  )}
                </div>
                <p className='text-[17.5px] font-medium text-[#848282] mt-[5px]  text-center'>
                  By registering, you agree to our{' '}
                  <span className='font-semibold text-[#042F6F]'>Terms & Conditions</span>
                </p>
              </div>

              <div className='flex justify-center items-center '>
                <div>
                  <button
                    onClick={(e) => {
                      handlePasswordFormSubmit(e);
                      setLoading(true);
                    }}
                    className={` ${
                      loading === true ? `hidden` : ``
                    } w-[218px] rounded-[20px] py-[12px] text-[25px] font-black text-white bg-gradient-to-b from-[#5B81FD] to-[#042F6F]`}
                  >
                    Signup {'-->'}
                  </button>
                  <button
                    disabled
                    type="button"
                    className={` ${
                      loading === true ? `block ` : `hidden`
                    } w-[218px] rounded-[20px] py-[12px] text-[25px] font-black text-gray-500 bg-gradient-to-b from-[#464646] to-[#202020]`}
                  >
                    Loading...
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className='py-[15px] text-[17.5px] text-center text-[#848282]  border-t-[1px] border-[#dad9d9]'>
                Already have an account?{' '}
                <span
                  onClick={() => navigate('/login')}
                  className='text-[#042F6F] hover:underline cursor-pointer '
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signupForm;
