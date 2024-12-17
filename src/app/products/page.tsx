import Image from "next/image";
import Shirt1 from "@/app/assets/shirt1.png";
import Shirt2 from "@/app/assets/shirt2.png";
import Shirt3 from "@/app/assets/shirt3.png";
import Shirt4 from "@/app/assets/shirt4.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { LiaStarHalf } from "react-icons/lia";
import { TiTick } from "react-icons/ti";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbAdjustmentsSearch } from "react-icons/tb";
import Card from "@/app/component/card";
import ImgCard from "@/app/component/imgcard";
import Shirt5 from "@/app/assets/shirt5.png";
import Shirt6 from "@/app/assets/shirt6.png";
import Shirt7 from "@/app/assets/shirt7.png";
import Shirt8 from "@/app/assets/shirt8.png";

export default function Product() {
  return (
    <>
      <div className="w-[1240px] h-[0px] border-[1px] bg-black/10 absolute top-[134px] left-[90px]"></div>
      <div className="flex justify-between w-[259px] h-[22px] absolute top-[158px] left-[90px] gap-3">
        <span className="flex justify-center items-center h-4 gap-1">
          <h5 className="font-normal text-base text-myblack/60">Home</h5>
          <MdKeyboardArrowRight className="w-4 h-4" />
        </span>
        <span className="flex justify-center items-center h-4 gap-1">
          <h5 className="font-normal text-base text-myblack/60">Shop</h5>
          <MdKeyboardArrowRight className="w-4 h-4" />
        </span>
        <span className="flex justify-center items-center h-4 gap-1">
          <h5 className="font-normal text-base text-myblack/60">Men</h5>
          <MdKeyboardArrowRight className="w-4 h-4" />
        </span>
        <span className="w-[52px] h-[22px] font-normal text-base text-myblack text-nowrap">
          T-shirts
        </span>
      </div>
      <div>
        <div className="w-[152px] h-[167px] absolute top-[216px] left-[90px] rounded-[20px] bg-slate-700 border border-myblack">
          <Image src={Shirt1} alt="Shirt1" height={167} width={152} />
        </div>
        <div className="w-[152px] h-[167px] absolute top-[397px] left-[90px] rounded-[20px] bg-slate-700 border">
          <Image src={Shirt2} alt="Shirt2" height={167} width={152} />
        </div>
        <div className="w-[152px] h-[167px] absolute top-[579px] left-[90px] rounded-[20px] bg-slate-700 border">
          <Image src={Shirt3} alt="Shirt3" height={167} width={152} />
        </div>
      </div>
      <div className="absolute top-[216px] left-[266px] rounded-[20px]">
        <Image src={Shirt4} alt="Shirt4" height={530} width={444} />
      </div>
      <div>
        <div className="w-[600px] h-12 absolute top-[216px] left-[750px] ">
          <h1 className="font-extrabold text-4xl leading-[48px]">
            ONE LIFE GRAPHIC T-SHIRT
          </h1>
        </div>
        <div className=" flex justify-between w-[193px] h-[25px] absolute top-[278px] left-[750px] gap-4">
          <span className="flex justify-between w-[139px] h-[25px] ">
            <IoStar className="w-6 h-6 text-[#FFC633]" />
            <IoStar className="w-6 h-6 text-[#FFC633]" />
            <IoStar className="w-6 h-6 text-[#FFC633]" />
            <IoStar className="w-6 h-6 text-[#FFC633]" />
            <LiaStarHalf className="w-6 h-6 text-[#FFC633]" />
          </span>
          <span className="w-[38px] h-[22px] font-normal text-base leading-[21.6px]">
            4.5/5
          </span>
        </div>
        <div className=" flex justify-between w-[176px] h-[43px] absolute top-[317px] left-[750px] space-x-7">
          <span className="w-[81px] h-[43px] font-bold text-[32px] leading-[43.2px] text-myblack">
            $260
          </span>
          <span className="w-[81px] h-[43px] font-bold text-[32px] leading-[43.2px] text-myblack/30 line-through">
            $300
          </span>
          <div className=" flex justify-center items-center w-[72px] h-[34px] rounded-full py-6 px-14 text-[#FF3333] bg-[#FF33331A] font-medium text-base">
            <span>-40%</span>
          </div>
        </div>
        <p className="w-[590px] h-[33px] absolute top-[380px] left-[750px] font-normal text-base text-myblack/60">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
        <div className="w-[550px] h-0 absolute top-[437px] left-[750px] border border-myblack/10"></div>
        <div className="w-[93px] h-[11px] absolute top-[461px] left-[750px] font-normal text-base text-myblack/60">
          Select Colors
        </div>
        <div className="flex justify-between items-center w-[143px] h-[37px] absolute top-[488px] left-[750px] space-x-4">
          <span className="flex justify-center items-center w-[37px] h-[37px] bg-[#4F4631] rounded-full">
            <TiTick className="w-[22px] h-[18px] text-white" />
          </span>
          <span className="w-[37px] h-[37px] bg-[#314F4A] rounded-full"></span>
          <span className="w-[37px] h-[37px] bg-[#31344F] rounded-full"></span>
        </div>
        <div className="w-[550px] h-0 absolute top-[549px] left-[750px] border border-myblack/10"></div>
        <div className="w-[87px] h-[11px] absolute top-[573px] left-[750px] font-normal text-base text-myblack/60">
          Choose Size
        </div>
        <div className="flex justify-between items-center w-[420px] h-[46px] absolute top-[600px] left-[750px] gap-3">
          <button className="flex justify-center items-center w-[86] h-[46px] py-3 px-6 gap-3 rounded-full bg-[#F0F0F0]">
            <span className="h-[22px] font-normal text-base text-myblack/60">
              Small
            </span>
          </button>
          <button className="flex justify-center items-center w-[105] h-[46px] py-3 px-6 gap-3 rounded-full bg-[#F0F0F0]">
            <span className="h-[22px] font-normal text-base text-myblack/60">
              Medium
            </span>
          </button>
          <button className="flex justify-center items-center w-[89] h-[46px] py-3 px-6 gap-3 rounded-full bg-[#000000]">
            <span className="h-[22px] font-normal text-base text-[#F0F0F0]">
              Large
            </span>
          </button>
          <button className="flex justify-center items-center w-[104] h-[46px] py-3 px-6 gap-3 rounded-full bg-[#F0F0F0]">
            <span className="h-[22px] font-normal text-base text-myblack/60">
              X-Large
            </span>
          </button>
        </div>
        <div className="w-[550px] h-0 absolute top-[670px] left-[750px] border border-myblack/10"></div>
        <div className="flex justify-between items-center">
          <button className="flex justify-around w-[170px] h-[52px] absolute top-[694px] left-[750px] px-[20px] py-[16px] rounded-[62px] bg-[#F0F0F0]">
            <span className="flex justify-center items-center">
              <FiMinus className="text-myblack" />
            </span>
            <span className="text-myblack">1</span>
            <span className="flex justify-center items-center">
              <FiPlus className="text-myblack" />
            </span>
          </button>
          <button className="flex justify-center items-center w-[360px] h-[52px] absolute top-[694px] left-[940px] px-[54px] py-[16px] rounded-[62px] bg-myblack">
            <span className="text-white font-medium text-base">
              Add to Cart
            </span>
          </button>
        </div>
      </div>
      <div className="flex justify-around items-center space-x-14">
        <div className="w-[133px] h-[14px] absolute top-[826px] left-[240px] font-normal text-xl text-center text-myblack/60 text-nowrap hover:underline hover:underline-offset-[16px] ">
          Product Details
        </div>
        <div className="w-[154px] h-[14px] absolute top-[826px] left-[542px] font-normal text-xl text-center text-myblack hover:underline hover:underline-offset-[16px]">
          Rating & Reviews
        </div>
        <div className="w-[47px] h-[14px] absolute top-[826px] left-[926px] font-normal text-xl text-center text-myblack/60 hover:underline hover:underline-offset-[16px]">
          FAQs
        </div>
      </div>
      <div className="w-[1220px] h-0 absolute top-[864px] left-[90px] border border-myblack/10"></div>
      <div className="flex w-[354px] h-12 absolute top-[888px] left-[966px] gap-[10px]">
        <div className="flex justify-center items-center w-12 h-12 rounded-full py-4 px-[20px] bg-[#F0F0F0]">
          <TbAdjustmentsSearch className="text-myblack" />
        </div>
        <div className="flex justify-around items-center w-[120px] h-12 rounded-full py-4 px-[20px] bg-[#F0F0F0] text-myblack">
          <span className="w-[43px] h-[22px] font-medium font-base">
            Latest
          </span>
          <span className="w-5 h-5">
            <RiArrowDropDownLine size={20} />
          </span>
        </div>
        <div className="flex justify-center items-center w-[146px] h-12 rounded-full py-4 px-[20px] bg-[#000000] text-[#F0F0F0]">
          Write a Review
        </div>
      </div>
      <div className="w-[125px] h-8 absolute top-[896px] left-[100px] font-bold text-2xl text-myblack text-nowrap">
        All Reviews
      </div>
      <div className="w-[33px] h-[11px] absolute top-[900px] left-[233px] font-normal text-base">
        451
      </div>
      <div className="flex flex-col justify-around absolute top-[960px] left-10">
        <div className="flex justify-between items-center m-4 gap-9">
          <Card
            heading="Samantha D."
            paragraph="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
            date="Posted on August 14, 2023"
          />
          <Card
            heading="Alex M."
            paragraph="The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
            date="Posted on August 15, 2023"
          />
        </div>
        <div className="flex justify-between items-center m-4">
          <Card
            heading="Ethan R."
            paragraph="This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
            date="Posted on August 16, 2023"
          />
          <Card
            heading="Olivia P."
            paragraph="As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
            date="Posted on August 17, 2023"
          />
        </div>
        <div className="flex justify-between items-center m-4">
          <Card
            heading="Liam K."
            paragraph="This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
            date="Posted on August 18, 2023"
          />
          <Card
            heading="Ava H."
            paragraph="I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
            date="Posted on August 19, 2023"
          />
        </div>
      </div>
      <button className="flex justify-center items-center w-[230px] h-[52px] absolute top-[1762px] left-[575px] rounded-[62px] mt-8 border py-4 px-[54px] ">
        <h4 className="w-[140px] h-[22px] font-medium text-base leading-[22px] text-myblack text-nowrap">
          Load More Reviews
        </h4>
      </button>
      <div className="w-[579px] h-[58px] absolute top-[1878px] left-[431px] font-bold text-5xl">
        YOU MIGHT ALSO LIKE
      </div>
      <div className="flex justify-between absolute top-[1991px] left-[70px] gap-5">
        <div className=" justify-around ">
          <ImgCard
            imageSrc={Shirt5.src}
            heading="Polo with Contrast Trims"
            discountedAmount="$212"
            actualAmount="$242"
            discount="-20%"
          />
          </div>
          <div>
           <ImgCard
            imageSrc={Shirt6.src}
            heading="Gradient Graphic T-shirt"
            discountedAmount="$145"
          />
          </div>
          <div>
           <ImgCard
            imageSrc={Shirt7.src}
            heading="Polo with Tipping Details"
            discountedAmount="$180"
          />
          </div>
          <div>
           <ImgCard
            imageSrc={Shirt8.src}
            heading="Black Striped T-shirt"
            discountedAmount="$120"
            actualAmount="$150"
            discount="-30%"
          /> 
          </div>
         
      </div>
    </>
  );
}
