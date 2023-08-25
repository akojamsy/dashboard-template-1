import React, { useState } from "react";
import { SideBar, Topnav } from "../../components";
import { Outlet } from "react-router-dom";

const Main = () => {
  const [collapse, setCollapse] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <section className='w-screen h-screen overflow-hidden bg-[#FAF8F8]'>
      <main className='md:flex gap-0 '>
        <SideBar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          collapse={collapse}
          setCollapse={setCollapse}
        />
        <section
          className={`${
            collapse
              ? "md:w-[calc(100vw_-_4rem)] lg:w-[calc(100vw_-_4rem)]"
              : "md:w-[calc(100vw_-_14rem)] lg:w-[calc(100vw_-_16rem)] duration-500 transition-all"
          }`}
        >
          <Topnav setShowSidebar={setShowSidebar} collapse={collapse} />
          <div className='p-5 pt-20 lg:pt-24 h-[100vh] w-full overflow-y-scroll'>
            <Outlet />
          </div>
        </section>
      </main>
    </section>
  );
};

export default Main;
