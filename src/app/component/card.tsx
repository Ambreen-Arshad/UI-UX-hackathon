import { FaEllipsisH } from "react-icons/fa";
import { FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { LiaStarHalf } from "react-icons/lia";


interface ICardProps{
    heading : string,
    paragraph : string,
    date : string|number
}
const Card = (props :ICardProps) =>{
    const {heading , paragraph ,date} = props
    return(
        <>
        <div className="flex flex-col justify-around items-start w-[610px] h-[242px] rounded-[20px] py-[28px] px-[32px] border border-myblack/10">
         <div className="flex flex-row justify-between w-[546px] h-[139px] ">
            <div className="flex flex-col justify-between w-[522px] h-[139px] ">
                {/* left-side div */}
                <div>
                    {/* stars */}
                     <span className="flex justify-between w-[127px] h-[22px]  ">
                                <IoStar className="w-[22.5px] h-[22.5px] text-[#FFC633]" />
                                <IoStar className="w-[22.5px] h-[22.5px] text-[#FFC633]" />
                                <IoStar className="w-[22.5px] h-[22.5px] text-[#FFC633]" />
                                <IoStar className="w-[22.5px] h-[22.5px] text-[#FFC633]" />
                                <LiaStarHalf className="w-6 h-6 text-[#FFC633]" />
                      </span>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg leading-[22px]">{heading}</h3>
                    <p className="font-normal text-base leading-[22px]">{paragraph}</p>
                </div>
            </div>
            <div className="w-6 h-6 text-myblack/40 ">
                {/* right-side div fo menu icon */}
                <FaEllipsisH />
            </div>
         </div>
         <div className="'date section'">
            <h5 className="font-medium text-base text-myblack/60">
            {date}
            </h5>
         </div>
        </div>
        </>
    );
}
export default Card;