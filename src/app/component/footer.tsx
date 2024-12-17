import { TiMail } from "react-icons/ti";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import Image from 'next/image';
import paypal from "@/app/assets/paypal.png";
import Apay from "@/app/assets/Apay.png";
import visa from "@/app/assets/visa.png";
import pay from "@/app/assets/pay.png";
import circle from "@/app/assets/circle.png";


const Footer =()=>{
    return(
        <div className="flex flex-col justify-start relative">
            <div className="flex justify-around items-center z-10 bg-myblack w-[1240px] h-[180px] absolute top-[2447px] left-[70px] rounded-[20px]">
                <div className="w-[551px] h-[94px] font-bold text-[40px] leading-[45px] text-[#FFFFFF]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
                <div className="flex flex-col justify-between w-[394px] h-[108px] gap-[14px]">
                    <div className="flex justify-start items-center w-[394px] h-12 rounded-[62px] py-3 px-4 gap-2 bg-[#FFFFFF] text-myblack/40">
                     <TiMail size={24} />
                     <input type="email" placeholder="Enter your email address" className=""/>
                    </div>
                    <div className="flex justify-center w-[394px] h-12 rounded-[62px] py-3 px-4 bg-[#FFFFFF] font-medium text-base leading-[21.6px] text-myblack">
                    Subscribe to Newsletter
                    </div>
                </div>
            </div>
            <div className="w-[1345px] h-[499px] absolute top-[2537px] bg-[#F0F0F0]">
                <div className="flex justify-between items-center w-[1240px] h-[117px]] absolute top-[150px] left-[70px]">
                    <div className="flex flex-col">
                     <div className="flex flex-col w-[248px] h-[114px] gap-3 ">
                      <h3 className="font-bold text-[33.45px] leading-[40px] text-myblack">SHOP.CO</h3>
                      <p className="font-normal text-sm text-myblack/60">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                     </div>
                     <div className="flex justify-start items-center w-[px] h-[px] gap-5">
                        {/* icons div */}
                        <span className="flex justify-center items-center w-7 h-7 bg-white rounded-full">
                        <FaTwitter size={16} />
                         </span>
                        <span className="flex justify-center items-center w-7 h-7 bg-myblack rounded-full">
                        <GrFacebookOption size={16} color="white"/>
                        </span>
                        <span className="flex justify-center items-center w-7 h-7 bg-white rounded-full">
                        <FaInstagram size={16} />
                       </span>
                        <span className="flex justify-center items-center w-7 h-7 bg-white rounded-full">
                        <FaGithub size={16} />
                        </span>
                       </div>
                    </div>
                    <div className="flex justify-between items-start h-[117px]">
                        <ul>
                            <li className="font-medium mb-2 texte-base leading-[18px] tracking-[1px] text-myblack" >Company</li>
                            <li className="font-normal mb-2 text-base leading-[19px] text-myblack/60">About </li>
                            <li className="font-normal mb-2 text-base leading-[19px] text-myblack/60">Features </li>
                            <li className="font-normal mb-2 text-base leading-[19px] text-myblack/60">Works </li>
                            <li className="font-normal mb-2 text-base leading-[19px] text-myblack/60">Career </li>
                        </ul>
                    </div>
                    <div className="flex justify-between items-start h-[117px]">
                        <ul>
                            <li className="font-medium mb-2 texte-base leading-[18px] tracking-[1px] text-myblack" >Help</li>
                            <li className="font-normal mb-2 text-base leading-[19px] text-myblack/60">Customer Support</li>
                            <li className="font-normal mb-2 text-base leading-[19px] text-myblack/60">Delivery Details</li>
                            <li className="font-normal mb-2 text-base leading-[19px] text-myblack/60">Terms & Conditions</li>
                            <li className="font-normal mb-2 text-base leading-[19px] text-myblack/60">Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="flex justify-between items-start h-[117px]">
                        <ul>
                            <li className="font-medium mb-2 texte-base leading-[18px] tracking-[1px] text-myblack" >FAQ</li>
                            <li className="font-normal mb-2 text-base leading-[19px] text-myblack/60">Account</li>
                            <li className="font-normal mb-2 text-base leading-[19px] text-myblack/60">Manage Deliveries</li>
                            <li className="font-normal mb-2 text-base leading-[19px] text-myblack/60">Orders</li>
                            <li className="font-normal mb-2 text-base leading-[19px] text-myblack/60">Payments</li>
                        </ul>
                    </div>
                    <div className="flex justify-between items-start h-[117px]">
                        <ul>
                            <li className="font-medium mb-2 texte-base leading-[18px] tracking-[1px] text-myblack" >Resources</li>
                            <li className="font-normal mb-2 text-base leading-[19px] text-myblack/60">Free eBooks</li>
                            <li className="font-normal mb-2 text-base leading-[19px] text-myblack/60">Development Tutorial</li>
                            <li className="font-normal mb-2 text-base leading-[19px] text-myblack/60">How to - Blog</li>
                            <li className="font-normal mb-2 text-base leading-[19px] text-myblack/60">Youtube Playlist</li>
                        </ul>
                    </div>
                </div>
                <div className="w-[1230px] h-0 absolute top-[330px] left-[70px] border border-myblack/10"></div>
                <div className="flex justify-around items-center gap-[684px] absolute top-[358px] left-[70px]">
                   <div className="font-normal text-sm text-[#00000099]">Shop.co © 2000-2023, All Rights Reserved</div>
                   <div className="flex justify-between items-center ">
                    <Image src={visa} alt="visa" width={47} height={30} />
                    <Image src={circle} alt="circle" width={47} height={30} />
                    <Image src={paypal} alt="paypal" width={47} height={30} />
                    <Image src={Apay} alt="Apay" width={47} height={30} />
                    <Image src={pay} alt="pay" width={47} height={30} />
                   </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;