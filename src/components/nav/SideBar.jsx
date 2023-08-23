import { logo, logoutIcon, upgradeStar, upgradeStarLight } from "../../assets";
import { Link } from "react-router-dom";
import { overviewLinks } from "./../../utils/data/index";
import useWindowSize from "../../utils/hooks/useWindowSize";
import { useEffect } from "react";

const SideBar = ({ showSidebar, setShowSidebar }) => {
  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 768) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }, [width]);

  return (
    <>
      {showSidebar && width < 768 && (
        <div
          className='absolute left-0 w-screen h-screen bg-black/5 z-20'
          onClick={() => setShowSidebar(!showSidebar)}
        ></div>
      )}
      <nav
        className={`fixed h-screen top-0 left-0 bg-white p-4 w-[14rem] transition-all duration-500 ease-in-out md:relative lg:w-[16rem] z-30 ${
          showSidebar
            ? "translate-x-0"
            : width < 768
            ? "-translate-x-full"
            : "translate-x-0"
        }`}
      >
        <div>
          <img src={logo} alt='logo' />
        </div>
        <section className='flex flex-col h-[83vh] justify-between mt-10 '>
          <ul className='h-[20rem] overflow-hidden hover:overflow-y-scroll mb-7'>
            {overviewLinks?.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className='flex items-center gap-x-2.5 mt-6'
                >
                  <img src={link.icon} alt='icon' />
                  <span className='pl-3'>{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className=''>
            <div className='bg-primaryVariantOne px-5 py-5 rounded-md'>
              <div className='flex gap-x-2'>
                <span className='text-white font-semibold'>
                  Upgrade To Business
                </span>
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

            {/* profile */}
            <div className='flex gap-x-2 mt-7'>
              <div>
                <img
                  src='https://randomuser.me/api/portraits/men/94.jpg'
                  alt=''
                  className='w-12 h-12 rounded-full'
                />
              </div>
              <div className='flex flex-col gap-y-0.5 justify-center'>
                <h3 className='text-sm font-bold'>Obiajulu Anayo</h3>
                <span className='text-xs'>ID:289378953</span>
              </div>
              <div></div>
            </div>
            <div className='flex gap-x-5 mt-5'>
              <img src={logoutIcon} alt='logout-icon' />
              <span className='text-sm text-primaryVariantOne font-bold'>
                Logout
              </span>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
};

export default SideBar;
