import React, { useEffect, useState } from 'react';

const Slider = () => {
  const [messages, setMessages] = useState([
    `suresh deposited ₹5000  john withdrew ₹1000  rohit deposite ₹15000   sonu deposite ₹10000   yuvraj deposite ₹1500   khushi whithdraw ₹2000   ajay whithdraw ₹20262   raman whithdraw ₹2000  aryan deposite 5679   joshi whithdraw 6000    himanshu whithdraw 900     hemu  whithdraw 8000  ruchika whithdraw 800   yuvi whithdraw 50036 `, 
    // Add more combined messages here
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000); // Change the interval as needed

    return () => clearInterval(interval);
  }, [messages]);

  return (
    <div className="bg-blue-200 p-4 w-full rounded-md">
      <div className="bg-[#928f8da4] p-2 rounded-lg shadow-md">
        <marquee className="text-xl text-green-700 font-medium" behavior="scroll" direction="left">
          {messages[currentIndex]}
        </marquee>
      </div>
    </div>
  );
};

export default Slider;
