import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function Home() {
  return (
    <div>
      <div className="max-md: flex h-[34px] max-h-[38px] min-w-[390px] items-center justify-center bg-[#000000]">
        {/* <!-- black bar --> */}
        <div className="left-[544px] top-[9px] h-[19px] w-[351px]">
          {/* <!-- text --> */}
          <p className="text-nowrap text-sm font-normal leading-[18.9px] text-[#ffffff]">
            Sign up and get 20% off to your first order.
            <span className="font-medium underline underline-offset-4">
              Sign Up Now
            </span>
          </p>
        </div>
        <div className="absolute right-3 hidden text-[#fff] md:flex">
          {/* <!-- hidden close icon --> */}x
        </div>
      </div>
      <div className="flex justify-between gap-4">
        {/* <!-- white bar --> */}
        <div className="absolute left-4 top-[54px] flex h-6 w-6 items-center justify-center  text-[#000000] md:hidden">
          {/* <!-- hamburger icon hidden--> */}
          <GiHamburgerMenu size={24} />
        </div>
        {/* Shop.Co,links and searchbar icon, searchbar, and react-icons div */}
        <div className="flex justify-around items-center w-[1240px] h-[41px] top-[62px] left-[100px] gap-10">
          <div className="absolute left-[56px] top-[52px] flex h-[18px] w-[126px] md:w-[160px] md:h-[22px] text-[25.2px] md:text-[32px] md:leading-[38.4px] font-bold text-[#000]">
            {/* <!-- Shop.Co --> */}
            SHOP.CO
          </div>
          <div className="  hidden md:w-[321px] md:h-[22px] absolute top-[63px] left-[281px] gap-24 md:flex md:items-center md:justify-center ">
            {/* <!-- links --> */}
            <ul className="flex gap-4 font-normal text-base leading-[21.6px]  text-[#000000]">
              <li className=" flex w-[57px] h-[22px] text-nowrap">
                Shop{" "}
                <span>
                  <RiArrowDropDownLine size={24} />
                </span>
              </li>
              <li className="w-14 h-[22px] text-nowrap">On Sale</li>
              <li className="w-[87px] h-[22px]">New Arrival</li>
              <li className="w-[49px] h-[22px]">Brands</li>
            </ul>
          </div>

          <div className="justify-between items-center text-nowrap hidden h-12 w-[577px] gap-3 rounded-[62px] md:ml-[848px] bg-[#F0F0F0] px-4 py-3 md:flex md:justify-center md:items-center md:mt-8 ">
            <IoSearch size={24} />
            <input
              className="bg-transparent rounded"
              placeholder="Search..."
              type="search"
            />
            {/* <!-- searchbar --> */}
          </div>
        </div>
        <div className="mt-4 top-[54px] flex h-6 w-[96px] items-center justify-between gap-3  text-[#000000] md:w-[62px] md:gap-[14px]">
          <span className="h-6 w-6 md:hidden">
            <IoSearch size={24} />
          </span>
          <span className="h-6 w-6">
            <LuShoppingCart size={24} />
          </span>
          <span>
            <CgProfile size={24} />
          </span>
        </div>
      </div>
    </div>
  );
}
