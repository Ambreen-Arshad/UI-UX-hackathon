import { IoStar } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
interface RCardProps {
  heading?: string;
  paragraph?: string;
}

const RCard = (Props: RCardProps) => {
  const {  heading, paragraph } = Props;
  return (
    <div className="flex flex-col justify-between items-center  w-[400px] h-[240px]  rounded-[20px] border py-7 px-8 gap-[342px] bg-myblack/10">
      <div className="flex flex-row border-2 border-green-600  w-[400px] h-[240px] ">
        <div className="flex flex-col justify-between w-[522px] h-[139px] ">
          {/* left-side div */}
          <div>
            {/* retingstars */}
            <span className="flex justify-between w-[138.84px] h-[22.58px]  ">
              <IoStar className="w-[22.5px] h-[22.5px] text-[#FFC633]" />
              <IoStar className="w-[22.5px] h-[22.5px] text-[#FFC633]" />
              <IoStar className="w-[22.5px] h-[22.5px] text-[#FFC633]" />
              <IoStar className="w-[22.5px] h-[22.5px] text-[#FFC633]" />
              <IoStarHalfOutline className="w-6 h-6 text-[#FFC633]" />
            </span>
          </div>
          <div className="flex w-[110px] h-6 gap-1">
            {/* right-side div fo menu icon */}
            <span>            
                {heading} 
            </span>

            <span className="flex w-6 h-6 rounded-full bg-green-600 text-white">
              <FaCheck />
            </span>
          </div>
          <div className="w-[336px] h-[124px] gap-3">{ paragraph}</div>
        </div>
      </div>
    </div>
  );
};
export default RCard;
