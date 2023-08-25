import {
  logo,
  logoMini,
  logoutIcon,
  upgradeStar,
  upgradeStarLight,
} from "../../assets";
import { Link, useMatch } from "react-router-dom";
import { overviewLinks } from "./../../utils/data/index";
import useWindowSize from "../../utils/hooks/useWindowSize";
import { useEffect, useState } from "react";
import { BiChevronsLeft, BsFillRocketTakeoffFill } from "../../assets/icons";

const SideBar = ({ showSidebar, setShowSidebar, setCollapse, collapse }) => {
  const { width } = useWindowSize();

  function isActive(path) {
    const match = useMatch(path);
    return match ? true : false;
  }

  useEffect(() => {
    if (width < 768) {
      setShowSidebar(false);
      if (collapse) {
        setCollapse(false);
      }
    } else {
      setShowSidebar(true);
    }
  }, [width]);

  return (
    <>
      {showSidebar && width < 768 && (
        <div
          className='absolute left-0 w-screen h-screen bg-black/5 z-20'
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
        ></div>
      )}
      <nav
        className={`fixed h-screen top-0 left-0 bg-white p-4 w-[14rem] transition-all duration-500 ease-in-out md:relative ${
          collapse ? "md:w-16 lg:w-16" : "lg:w-[16rem]"
        }  z-30 ${
          showSidebar
            ? "translate-x-0"
            : width < 768
            ? "-translate-x-full"
            : "translate-x-0"
        }`}
      >
        <div className='relative flex items-center justify-between w-full'>
          {!collapse ? (
            <img src={logo} alt='logo' />
          ) : (
            <img
              src={logoMini}
              alt='logo-mini'
              className={`w-7 h-7 justify-center items-cente`}
            />
          )}

          <BiChevronsLeft
            className={`hidden md:block absolute w-6 h-6 text-primaryVariantOne cursor-pointer transition-all ${
              collapse ? "-right-[25px] rotate-180 duration-300" : "right-0"
            }`}
            onClick={() => setCollapse(!collapse)}
          />
        </div>
        <section className='flex flex-col h-[83vh] justify-between mt-10 '>
          <ul className='h-[20rem] overflow-hidden hover:overflow-y-scroll mb-7'>
            {overviewLinks?.map((link, i) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-x-2.5 mt-6 hover:text-primaryVariantOne hover:font-semibold group ${
                    isActive(link.path) &&
                    "text-primaryVariantOne font-semibold"
                  }`}
                >
                  {/* <img src={link.icon} alt='icon' /> */}
                  <div>{link.icon}</div>
                  <h3
                    style={{ transitionDelay: `${collapse && i + 1}00ms` }}
                    className={`pl-3 whitespace-pre duration-300 ${
                      collapse && "translate-x-28 opacity-0 overflow-auto"
                    }`}
                  >
                    {link.title}
                  </h3>
                  <h3
                    className={`${
                      !collapse && "hidden"
                    } absolute w-0 overflow-hidden left-38 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                  >
                    {link.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
          <div className=''>
            {collapse ? (
              <div className='relative group'>
                <div className='flex items-center justify-center rounded-lg w-6 h-6 bg-primaryVariantOne text-white cursor-pointer transition-all'>
                  <BsFillRocketTakeoffFill
                    style={{ transitionDelay: "200ms" }}
                  />
                </div>
                <h3
                  className={`absolute w-0 overflow-hidden left-38 bottom-0 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-10 group-hover:duration-300 group-hover:w-fit`}
                >
                  Upgrade To Business
                </h3>
              </div>
            ) : (
              <div className='bg-primaryVariantOne px-5 py-5 rounded-md'>
                <div className='flex gap-x-2'>
                  <h3 className='text-white font-semibold'>
                    Upgrade To Business
                  </h3>
                  <div className='relative'>
                    <img src={upgradeStar} alt='star' />
                    <img
                      src={upgradeStarLight}
                      alt='star'
                      className='absolute top-3 left-2'
                    />
                  </div>
                </div>
                <span className='block mt-2 text-white text-xs leading-3 '>
                  Sell products and make money
                </span>
                <button className='bg-white text-center w-20 rounded-md py-1 mt-3 hover:bg-neutral-200 transition-all duration-200 text-sm'>
                  Let&#39;s go
                </button>
              </div>
            )}
            {/* profile */}
            <div className='flex gap-x-2 mt-7'>
              <div>
                <img
                  src='https://randomuser.me/api/portraits/men/94.jpg'
                  alt=''
                  className={`${
                    collapse ? "w-8 h-8" : "w-12 h-12"
                  } rounded-full`}
                />
              </div>
              {!collapse && (
                <>
                  <div className='flex flex-col gap-y-0.5 justify-center'>
                    <h3 className='text-sm font-bold'>Obiajulu Anayo</h3>
                    <span className='text-xs'>ID:289378953</span>
                  </div>
                  <div></div>
                </>
              )}
            </div>
            <div className='group flex gap-x-5 mt-5'>
              <img
                src={logoutIcon}
                alt='logout-icon'
                className='cursor-pointer'
              />
              {/* <span className='text-sm text-primaryVariantOne font-bold'>
                Logout
              </span> */}
              <h3
                style={{
                  transitionDelay: `500ms`,
                }}
                className={`pl-3 whitespace-pre duration-300 ${
                  collapse && "translate-x-28 opacity-0 overflow-auto"
                }`}
              >
                Logout
              </h3>
              <h3
                className={`${
                  !collapse && "hidden"
                } absolute w-0 overflow-hidden left-38 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                Logout
              </h3>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
};

export default SideBar;
