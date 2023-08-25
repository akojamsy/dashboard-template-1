import { marketplaceIcon, menuIcon, notificationIcon } from "../../assets";
import { BiChevronDown } from "../../assets/icons";

const Topnav = ({ setShowSidebar, collapse }) => {
  return (
    <header
      className={`fixed w-screen  ${
        collapse
          ? "md:w-[calc(100vw_-_4rem)] lg:w-[calc(100vw_-_4rem)]"
          : "md:w-[calc(100vw_-_14rem)] lg:w-[calc(100vw_-_16rem)]"
      } flex justify-between items-center bg-white p-4 z-10 transition-all duration-500`}
    >
      <div className='flex items-start gap-x-2 '>
        <img
          src={menuIcon}
          className='md:hidden'
          alt=''
          onClick={() => setShowSidebar(true)}
        />
        <div className='flex flex-col gap-x-3'>
          <h3 className='text-sm text-primaryVariantOne font-bold'>
            Your Address
          </h3>
          <div className='flex gap-x-1 items-center'>
            <span className='text-grayVariantOne text-sm'>
              17 Shomolu Street
            </span>
            <span>
              <BiChevronDown className='' />
            </span>
          </div>
        </div>
      </div>
      <div className='flex'>
        {/* <div>
                <input type='text' className='bg-gray-100 p-1 rounded-md ' />
              </div> */}
        <div className='flex gap-x-3 items-center'>
          <div className='flex gap-x-1'>
            <div className='relative flex items-center'>
              <img src={marketplaceIcon} alt='cart' className='w-6' />
              <span className='absolute  w-3 h-3 bottom-0 right-0 bg-white  rounded-full text-[10px] text-primaryVariantOne shadow-md grid place-content-center font-semibold'>
                0
              </span>
            </div>
            <span className='text-grayVariantOne'>Cart</span>
          </div>
          <div className='relative flex items-center'>
            <img src={notificationIcon} alt='cart' className='w-6' />
            <span className='absolute  w-3 h-3 bottom-0 right-0 bg-white  rounded-full text-[10px] text-primaryVariantOne shadow-md grid place-content-center font-semibold'>
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topnav;
