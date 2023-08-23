import React, { useState } from "react";
import { SideBar, Topnav } from "../../components";
import { Outlet } from "react-router-dom";

const Main = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <section className='w-screen h-screen overflow-hidden bg-[#FAF8F8]'>
      <main className='md:flex gap-0 '>
        <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <section className='md:w-[calc(100vw_-_14rem)] lg:w-[calc(100vw_-_16rem)]'>
          <Topnav setShowSidebar={setShowSidebar} />
          <div className='p-5 pt-20 lg:pt-24 '>
            <Outlet />
          </div>
        </section>
      </main>
    </section>
  );
};

export default Main;
