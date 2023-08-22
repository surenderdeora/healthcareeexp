import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRing, faTable, faTableCells } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(1);

    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath === '/') {
            setActiveTab(1);
        } else if (currentPath === '/user-profile') {
            setActiveTab(4);
        } else {
            setActiveTab(0);
        }
    }, [location]);

    const tabs = [
        { label: 'Home', icon: faHome, path: '/', index: 1 },
        { label: 'Product', icon: faTable, path: '/product', index: 2 },
        // { label: 'Draw', icon: faRing, path: '/draw', index: 3 },
        { label: 'Me', icon: faHome, path: '/user-profile', index: 4 },
    ];

    const handleTabSwitch = (tabIdx, path) => {
        setActiveTab(tabIdx);
        navigate(path);
    };

    return (
        <div className='flex justify-around gap-8 max-w-[1300px] mx-auto shadow-black rounded-2xl shadow-lg bg-white py-4 sticky bottom-2'>
            {tabs.map((tab) => (
                <div
                    key={tab.index}
                    className={`cursor-pointer w-[260px] flex flex-col justify-center items-center ${activeTab === tab.index  ? 'text-[#0f5ece]' : ''}`}
                    onClick={() => handleTabSwitch(tab.index, tab.path)}
                >
                    <FontAwesomeIcon icon={tab.icon} className='text-3xl hover:text-[#0f5ece] duration-150 text-gray-300' />
                    <span className='text-base text-gray-400 hover:text-[#0f5ece] duration-150 font-medium'>{tab.label}</span>
                </div>
            ))}
        </div>
    );
};

export default Navbar;
