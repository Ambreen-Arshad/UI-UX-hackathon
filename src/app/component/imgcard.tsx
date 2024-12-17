// import { IoStar } from "react-icons/io5";

// interface ImgCardProps{
//     ImageSrc: string;
//     heading : string,
//     discountedAmount : string,
//     actualAmount? : string,
//     discount? : string
// }

// const ImgCard :React.FC<ImgCardProps> = (props : ImgCardProps)=>{
//     const {ImageSrc,heading,discountedAmount,actualAmount,discount} = props;
//     return(
//         <>
//         <div className="flex flex-col w-[295px] h-[298px] rounded-[20px] bg-[#F0EEED]">
//             {ImageSrc}
//         </div>
//         <div>
//             <div className="font-bold text-xl mt-2">
//                 {/* heading */}
//                 <h3>{heading}</h3>
//             </div>
//             <div className="flex gap-5 mt-2">
//                 {/* stars */}
//                 <span className="flex justify-between w-[89px] h-[18px]  ">
//                      <IoStar className="w-[22.5px] h-[22.5px] text-[#FFC633]" />
//                      <IoStar className="w-[22.5px] h-[22.5px] text-[#FFC633]" />
//                      <IoStar className="w-[22.5px] h-[22.5px] text-[#FFC633]" />
//                      <IoStar className="w-[22.5px] h-[22.5px] text-[#FFC633]" />
//                 </span>
//                 <span className="w-[35px] h-[19px] font-normal text-sm text-myblack">
//                       4.0/
//                       <span className="text-myblack/">5</span>
//                 </span>
//             </div>
//             <div className="flex gap-5 mt-1">
//                 {/* text */}
//                 <span className="w-[53px] h-[32px] font-bold text-2xl text-myblack">
//                     <h3>
//                         {discountedAmount }
//                     </h3>
//                 </span>
//                 <span className="w-[58px] h-[32px] font-bold text-2xl text-myblack/60 line-through">
//                     {actualAmount}
//                 </span>
//                 <span className="w-[58px] h-[28px] py-[6px] px-[14px] bg-[#FF33331A] rounded-full">
//                     <h5 className="w-[31px] h-4 font-medium text-xs text-[#ff3333]">{discount}</h5>
//                 </span>
//             </div>
//         </div>
//         </>
//     )
// }
// export default ImgCard;
import Image from "next/image";
import { IoStar } from "react-icons/io5";

interface ImgCardProps {
  imageSrc: string;
  heading: string;
  discountedAmount?: string;
  actualAmount?: string;
  discount?: string;
}

const ImgCard: React.FC<ImgCardProps> = ({
  imageSrc,
  heading,
  discountedAmount,
  actualAmount,
  discount,
}) => {
  return (
    <div className="flex flex-col items-start w-[295px] h-[298px] rounded-[20px] p-4">
      {/* Image */}
      <Image
        src={imageSrc}
        alt={heading}
        width={295}
        height={298}
        className="rounded-[20px] bg-[#F0EEED] "
      />

      {/* Heading */}
      <div className="font-bold text-xl mt-2 text-nowrap">
        <h3>{heading}</h3>
      </div>

      {/* Ratings */}
      <div className="flex gap-5 mt-2">
        <span className="flex justify-between w-[89px] h-[18px]">
          <IoStar className="w-[22.5px] h-[22.5px] text-[#FFC633]" />
          <IoStar className="w-[22.5px] h-[22.5px] text-[#FFC633]" />
          <IoStar className="w-[22.5px] h-[22.5px] text-[#FFC633]" />
          <IoStar className ="w-[22.5px] h-[22.5px] text-[#FFC633]" />
          <IoStar className ="w-[22.5px] h-[22.5px] text-[#FFC633]" />
        </span>
        <span className="w-[35px] h-[19px] font-normal text-sm text-myblack">
          4.0/<span className="text-myblack">5</span>
        </span>
      </div>

      {/* Pricing */}
      <div className="flex gap-5 mt-1">
        <span className="w-[53px] h-[32px] font-bold text-2xl text-myblack">
          {discountedAmount}
        </span>
        {actualAmount && (
          <span className="w-[58px] h-[32px] font-bold text-2xl text-myblack/60 line-through">
            {actualAmount}
          </span>
        )}
        {discount && (
          <span className="w-[58px] h-[28px] py-[6px] px-[14px] bg-[#FF33331A] rounded-full">
            <h5 className="w-[31px] h-4 font-medium text-xs text-[#ff3333]">{discount}</h5>
          </span>
        )}
      </div>
    </div>
  );
};

export default ImgCard;
