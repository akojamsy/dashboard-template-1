import React, { useState } from "react";
import { SideBar, Topnav } from "../../components";
import { Outlet } from "react-router-dom";

const Overview = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className='flex flex-col'>
      <h3 className='text-sm text-black font-bold'>Hi, Anayo</h3>
      <p className='text-sm'>What do you want to do today?</p>
    </div>
  );
};

export default Overview;
