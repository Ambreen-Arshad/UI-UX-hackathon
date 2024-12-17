import Image from "next/image";
import HeroImg from "@/app/assets/Rectangle 2.png";
import Calvin from "@/app/assets/Cavin.png";
import Gucci from "@/app/assets/gucci.png";
import Prada from "@/app/assets/prada.png";
import Vector from "@/app/assets/Vector.png";
import Zara from "@/app/assets/zara.png";
import image7 from "@/app/assets/image7.png";
import Frame35 from "@/app/assets/Frame35.png";
import Frame58 from "@/app/assets/Frame58.png";
import Framejeans from "@/app/assets/Framejeans.png";
import Fram34 from "@/app/assets/Frame34.png";
import Frame40 from "@/app/assets/Frame40.png";
import Frame42 from "@/app/assets/Frame42.png";
import Price240 from "@/app/assets/Price240.png";
import Price260 from "@/app/assets/Price260.png";
import Frame38 from "@/app/assets/Frame38.png";
import Price130 from "@/app/assets/Price130.png";
import Price160 from "@/app/assets/Price160.png";
import Price180 from "@/app/assets/Price180.png";
import Frame39 from "@/app/assets/Frame39.png";
import Frame43 from "@/app/assets/Frame43.png";
import FadedJeans from "@/app/assets/FadedJeans.png";
import GreenShirt from "@/app/assets/GreenShirt.png";
import OrangeShirt from "@/app/assets/OrangeShirt.png";
import Bermuda from "@/app/assets/Bermuda.png";
import ImgCard from "./component/imgcard";
import Casual from "@/app/assets/Casual.png";
import Formal from "@/app/assets/Formal.png";
import Party from "@/app/assets/Party.png";
import Gym from "@/app/assets/Gym.png";
import RCard from "./component/retingcard";


export default function Home() {
  return (
    <>
      <div className="flex w-[390px] md:w-[1440px] h-auto mt-10 top-[503px] md:top-[134px] bg-[#F2F0F1]">
        <Image src={HeroImg} alt="Hero Image" width={1440} height={663} />

        <div className="flex flex-col justify-center  w-[390px] md:w-[1440px] h-[853px] md:h-[663px] bg-transparent font-bold text-3xl md:text-[64px] leading-[34px] md:leading-[64px] text-[#000000]">
          <h1 className="flex justify-center items-center w-[315px] md:w-[577px] h-[93px] md:h-[173px] absolute top-[138px] md:top-[237px] left-4 md:left-[100px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="flex justify-center items-center w-[358px] md:w-[545px] h-[50px] md:h-[33px] absolute top-[251px] md:top-[442px] left-4 md:left-[100px] font-normal md:font-normal text-sm md:text-xs leading-5 text-[#000000] text-opacity-[60%]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="flex items-center w-[358px] md:w-[201px] h-[52px] absolute top-[325px] md:top-[507px] left-4 md:left-[100px] rounded-full bg-[#000000] py-4 px-[54px] gap-3">
            <button className="w-[75px] h-[22px] font-medium text-base leading-[21.6px] text-[#FFFFFF] text-nowrap">
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-14 w-[390px] md:w-[1440px] h-[146px] md:h-[122px] absolute top-[951px] md:top-[664px] bg-[#000000]">
          <Image src={Vector} alt="vector" width={166.48} height={33.16} />
          <Image src={Zara} alt="zara" width={91} height={38} />
          <Image src={Gucci} alt="Gucci" width={156} height={32.29} />
          <Image src={Prada} alt="Prada" width={194} height={31.2} />
          <Image src={Calvin} alt="Calvin" width={206.8} height={33.3} />
        </div>
      </div>
      {/* new side */}
      <div className="flex justify-center items-center  w-[269px] md:w-[403px] h-[38px] md:h-[58px] absolute top-[1147px] md:top-[891px] left-[61px] md:left-[518px] font-bold text-2xl md:text-5xl leading-[38.4px] md:leading-[57.6px] text-[#000000]">
        NEW ARRIVALS
      </div>
      {/* Product Cards */}
      {/* This is parent-div */}
      <div className="flex justify-around items-center">
        {/* 1st card */}
        {/* This is a parent-div of my 1st card */}
        <div className="flex">
        <div className="flex flex-col ">
          <div className="flex  w-[198.67px] md:w-[295px] h-[200.01px] md:h-[298px] absolute top-[1217px] md:top-[1104px] left-4 md:left-[100px] rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED] ">
            <Image src={image7} alt="T-shirt" width={296} height={444} />
          </div>

          <div className="flex w-[180px] md:w-[225px] h-[22px] md:h-[27px] absolute top-[1427.01px] md:top-[1418px] left-4 md:left-[100px] font-bold text-xs md:text-sm leading-[21.6px] md:leading-[27px]">
            T-
            <span className="font-bold text-xs md:text-sm leading-[21.6px] md:leading-[27px]">
              SHIRT
            </span>{" "}
            WITH TAPE DETAILS
          </div>
          <div className="flex w-[150px] h-[19px] absolute top-[1453px] left-[100px] gap-[13px]">
            <Image src={Frame35} alt="stres" width={295} height={298} />{" "}
          </div>
          <div className="flex w-[55px] h-32px] absolute top-[1480px] left-[100px] gap-[10px]">
            <Image src={Frame58} alt="$120" width={46} height={27} />
          </div>
        </div>
        {/* 1st card ----> completed */}
        {/* 2nd card */}
        <div className="flex flex-col">
          <div className="flex w-[198px] md:w-[295px] h-[200.01px] md:h-[298px] absolute top-[1217px] md:top-[1104px] left-[230px] md:left-[415px] rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED]">
            <Image src={Framejeans} alt="jeans" width={268} height={402} />
          </div>
          <div className="flex w-[150px] h-27px] absolute top-[1418px] left-[415px] font-bold text-sm leading-[27px] text-[#000000]">
            SKINNY FIT JEANS
          </div>
          <div className="flex w-[126.2px] h-[19px] absolute top-[1453px] left-[415px] gap-[13px]">
            <Image src={Frame39} alt="stres" width={126.2} height={19} />{" "}
          </div>
          <div className="flex w-[200px] h-[32px] absolute top-[1480px] left-[415px] gap-[10px]">
            <Image src={Price240} alt="$240" width={61} height={32} />{" "}
            <Image src={Price260} alt="$260" width={61} height={32} />{" "}
            <Image src={Frame42} alt="Frame42" width={58} height={28} />{" "}
          </div>
        </div>
        {/* 2nd card ----> completed */}
        {/* 3rd card */}
        <div className="flex flex-col ">
          <div className="flex md:w-[295px] md:h-[298px] absolute md:top-[1104px] md:left-[730px] md:rounded-[20px] bg-[#F0EEED]">
            <Image src={Fram34} alt="shirt" width={296} height={444} />
          </div>
          <div className="flex w-[151px] h-[27px] absolute top-[1418px] left-[730px] font-bold text-sm leading-[27px] text-[#000000]">
            C
            <span className="flex font-bold text-sm leading-[27px]">
              HECKERED
            </span>
            <span className="flex font-bold text-sm leading-[27px]">SHIRT</span>
          </div>
          <div className="flex w-[150px] h-[19px] absolute top-[1453px] left-[730px] gap-[13px]">
            <Image src={Frame40} alt="stres" width={295} height={298} />{" "}
          </div>
          <div className="flex w-[56px] h-[32px] absolute top-[1480px] left-[730px] font-bold text-base leading-[32.4px] text-[#000000]">
            <Image src={Price180} alt="$180" width={46} height={27} />
          </div>
        </div>
        {/* 3rd card ----> completed */}
        {/* 4th card */}
        <div className="flex flex-col">
          <div className="flex md:w-[295px] md:h-[298px] absolute md:top-[1104px] md:left-[1045px] md:rounded-[20px] bg-[#F0EEED]">
            <Image src={Frame38} alt="shirt" width={296} height={444} />
            <div className="flex w-[150px] h-27px] absolute top-[318px] left-[15px] font-bold text-sm leading-[27px] text-[#000000] text-nowrap">
              SLEEVE STRIPED T-SHIRT
            </div>
            <div className="flex w-[126.2px] h-[19px] absolute top-[353px] left-[15px] gap-[13px]">
              <Image src={Frame40} alt="stars" width={126.2} height={19} />{" "}
            </div>
            <div className="flex w-[200px] h-[32px] absolute top-[380px] left-[15px] gap-[10px]">
              <Image src={Price130} alt="$130" width={61} height={32} />{" "}
              <Image src={Price160} alt="$160" width={61} height={32} />{" "}
              <Image src={Frame43} alt="Frame43" width={58} height={28} />{" "}
            </div>
          </div>
          </div>
          {/* 4th card ----> completed */}
          <div className="flex justify-center items-center w-[218px] h-[52px] absolute top-[1548px] left-[611px] mt-3 rounded-[62px] border py-4 px-[54px] gap-3 bg-myblack/10">
            <span className="flex w-[58px] h-[22px] font-medium text-base leading-[21.6px] text-[#000000] text-nowrap">
              View All
            </span>
          </div>
        </div>
        {/* parent-div has been closed (card's-parent) */}
        <div className="w-[1240] h-0 absolute top-[1664px] left-[100px] border border-myblack/10"></div>
        {/* start new-side */}
        <div className="flex justify-center items-center w-[346px] h-[58px] absolute top-[1728px] left-[516px] font-bold  text-5xl leading-[57.6px] text-[#000000]">
          TOP SELLING
        </div>
        <div className="flex justify-between absolute top-[1891px] left-[50px] gap-5">
          <div className="flex justify-around">
            <ImgCard
              imageSrc={GreenShirt.src}
              heading="VERTICAL STRIPED SHIRT"
              discountedAmount="$212"
              actualAmount="$232"
              discount="-20%"
            />
          </div>
          <div className="flex justify-around">
            <ImgCard
              imageSrc={OrangeShirt.src}
              heading="COURAGE GRAPHIC T-SHIRT"
              discountedAmount="$145"
            />
          </div>
          <div className="flex justify-around">
          <ImgCard
            imageSrc={Bermuda.src}
            heading="LOOSE FIT BERMUDA SHORTS"
           discountedAmount="$80"
          />
          </div>
       
        <div className="flex justify-around  h-">
         {/* className="flex w-[295px] h-[298px] absolute top-[1941px] left-[1045px] rounded-[20px]"> */}
          <ImgCard
            imageSrc={FadedJeans.src}
            heading="FADED SKINNY JEANS"
            discountedAmount="$210"
          />
        </div>
        </div>
        <button className="flex justify-center items-center w-[218px] h-[52px] absolute top-[2305px] left-[511px] rounded-[62px] border py-4 px-[54px] m-10 bg-myblack/10 ">
          <span  className="font-medium text-base leading-[21.6] text-myblack">
            View All
          </span>
        </button>
        <div className="flex flex-col justify-center items-center w-[1239px] h-[866px] absolute top-[2417px] left-[50px] rounded-[40px] bg-[#F0F0F0]">
          <div className="flex justify-center items-center w-[687px] h-[58px] absolute top-[70px] left-[276px] font-bold text-5xl leading-[58px] text-myblack">BROWSE BY DRESS STYLE</div>
           <div>
          <div className=" flex w-[407] h-[289px] absolute top-[192px] left-[64px] rounded-[20px] bg-[#FFFFFF]">
            <Image src = {Casual} alt = "casual" width ={407} height={289} />
          </div>
          <div className="flex w-[684px] h-[289px] absolute top-[192px] left-[491px] rounded-[20px] bg-[#FFFFFF]">
            
            <Image src = {Formal} alt = "Formal" width ={684} height={289} />
          </div>
          <div className="flex w-[684px] h-[289px] absolute top-[501px] left-16 rounded-[20px] bg-[#FFFFFF]">
          <Image src = {Party} alt = "Party" width ={684} height={289} />
          </div>
          <div className="flex w-[407px] h-[289px] absolute top-[501px] left-[768px] rounded-[20px] bg-[#FFFFFF]">
          <Image src = {Gym} alt = "Gym" width ={407} height={289} />
          </div>
          </div>
        </div>
        <div className="border-4 border-green-700 flex justify-center items-center w-[654px] h-[58px] absolute top-[3363px] left-[100px] font-bold text-5x1 leading-[58px] text-myblack">OUR HAPPY CUSTOMERS</div>
        <div className=" flex justify-between items-center h-[240px] absolute top-[3461px] left-[100px] py-7 px-7 border-4 border-blue-600">
        <RCard 
        heading = "Sarah M."
        paragraph = "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”" />
        <RCard 
        heading = "Alex K."
        paragraph="Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”"/>
        <RCard 
        heading="James L."
        paragraph="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”"/>
        </div>  
      </div>
    </>
  );
}
