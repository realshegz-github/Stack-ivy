import { Link } from "react-router-dom";
import footerBg from "../../assets/footer-bg.png";
import phone from "../../assets/footer-phone.png";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import { Zoom } from "react-reveal";
import Button from "../common/CustomBtn";
const Footer = () => {
  return (
    <footer className="bg-secondary text-white relative">
      <div
        className="max-w-[941px] absolute -top-40 left-1/2 transform -translate-x-1/2 w-full max-h-[550px] sm:max-h-full rounded-2xl px-[5%] pt-12 sm:pt-16 md:pt-20"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col relative sm:flex-row items-center  sm:items-start sm:justify-between gap-5 sm:gap-8">
          <div className="pb-5 sm:pb-10 md:pb-16">
            <h2 className="max-w-[323px] leading-tight mb-10 text-[36px] font-bold .cabinentBd">
              Download for free Start saving Today
            </h2>

            <div className="flex justify-center sm:justify-normal">
              <Button
                width="w-[142px]"
                hoverBackground="hover:bg-secondary"
                borderRadius="rounded-[8px]"
                color="text-primary"
              >
                Download for free
              </Button>
            </div>
          </div>
          <Zoom>
            <div className="relative ">
              <img src={phone} alt="phone" />
            </div>
          </Zoom>
        </div>
      </div>

      <div className="w-full pt-20 px-[5%] maxContainer">
        <div className="pt-72 sm:pt-32 pb-10">
          <div className="grid grid-cols-2 gap-5 sm:gap-6 ss:grid-cols-4 sm:grid-cols-5">
            <div>
              <h2 className="mb-8 font-extrabold text-[13px] cabinetBd">
                Products
              </h2>
              <ul className="text-[13px]">
                <li className="pb-2">
                  <Link to="#" className="hover:text-[#ccc]">
                    Savings
                  </Link>
                </li>

                <li className="pb-2">
                  <Link to="#" className="hover:text-[#ccc]">
                    Dilla
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="#" className="hover:text-[#ccc]">
                    Financial Coach
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="/core-values" className="hover:text-[#ccc]">
                    Halal
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="#" className="hover:text-[#ccc]">
                    Budgetting
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="#" className="hover:text-[#ccc]">
                    Investment
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="#" className="hover:text-[#ccc]">
                    Insurance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-8 font-extrabold text-[13px] cabinetBd">
                Company
              </h2>
              <ul className="text-[13px]">
                <li className="pb-2">
                  <Link to="#" className="hover:text-[#ccc]">
                    About Us
                  </Link>
                </li>

                <li className="pb-2">
                  <Link to="#" className="hover:text-[#ccc]">
                    Careers
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="#" className="hover:text-[#ccc]">
                    FAQs
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="/core-values" className="hover:text-[#ccc]">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-8 font-extrabold text-[13px] cabinetBd">
                Transparency
              </h2>
              <ul className="text-[13px]">
                <li className="pb-2">
                  <Link to="#" className="hover:text-[#ccc]">
                    Terms & conditions
                  </Link>
                </li>

                <li className="pb-2">
                  <Link to="#" className="hover:text-[#ccc]">
                    Information security policy
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="#" className="hover:text-[#ccc]">
                    Privacy policy
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="/core-values" className="hover:text-[#ccc]">
                    Interest Tool
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-8 font-extrabold text-[13px] cabinetBd">
                Developer
              </h2>
              <ul className="text-[13px]">
                <li className="pb-2">
                  <Link to="#" className="hover:text-[#ccc]">
                    Connect API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-8 font-extrabold text-[13px] cabinetBd">
                Address
              </h2>
              <ul className="text-[13px] mb-5">
                <li className="">
                  <Link to="#" className="hover:text-[#ccc]">
                    33B, Ogundana street, Allen, Ikeja.
                  </Link>
                </li>
              </ul>

              <h2 className="mb-5 font-extrabold text-[13px] cabinetBd">
                Contact
              </h2>
              <ul className="text-[13px]">
                <li className="pb-2">
                  <Link to="#" className="hover:text-[#ccc]">
                    33B, Ogundana street, Allen, Ikeja.
                  </Link>
                </li>
                <li className="">
                  <Link to="#" className="hover:text-[#ccc]">
                    +(234)801 000 1234
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full pb-[50px] pt-5 sm:pb-10 border-t">
          <div className="flex flex-col gap-5 sm:flex-row items-center justify-between ">
            <div>
              <span className="text-[14px]">
                © 2023 Ardilla. All right reserved
              </span>
              <p className="text-[13px] mt-2">
                Ardilla operates under the coorperative license of Ardilla
                Multipurpose Cooperative Society, LSC 18245, We provide Savings
                and Fixed deposit services to our users
              </p>
            </div>

            <div className="flex items-center gap-8 mt-4 lg:gap-5 justify-center sm:mt-0">
              <Link
                to="#"
                className="rounded-full hover:bg-primary p-1 border transform transition-transform duration-300 hover:scale-105"
              >
                <FaInstagram fontSize="14px" />
              </Link>
              <Link
                to="#"
                className="rounded-full hover:bg-primary p-1 transform transition-transform duration-300 hover:scale-105 border"
              >
                <FaFacebookF fontSize="14px" />
              </Link>
              <Link
                to="#"
                className="rounded-full hover:bg-primary transform transition-transform duration-300 hover:scale-105 p-1 border"
              >
                <FaLinkedinIn fontSize="14px" />
              </Link>
              <Link
                to="#"
                className="rounded-full hover:bg-primary transform transition-transform duration-300 hover:scale-105 p-1 border"
              >
                <FaTwitter fontSize="14px" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
