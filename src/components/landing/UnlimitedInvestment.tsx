// import { Link } from "react-router-dom";
import Button from "../common/CustomBtn";
import { BsSend } from "react-icons/bs";
import arrow from "../../assets/arrow.png";
import { Fade, Zoom } from "react-reveal";
const UnlimitedInvestment = () => {
  return (
    <section className="w-full relative text-black bg-[#FFFDF2] flex flex-col justify-center items-center">
      <div className="maxContainer relative w-full px-[5%] pt-16 md:pt-24 pb-40 flex flex-col  ">
        <div className="relative">
          <Fade left duration="2000">
            {" "}
            <h1 className="text-lg leading-tight md:text-xl max-w-[1000px] cabinetBd  mb-3">
              Unlimited{" "}
              <span className="text-[#0D9488]">Investment Opportunities</span>
            </h1>
          </Fade>
          <p className="text-[16px] sm:text-[24px] max-w-[789px] text-primary sm:leading-10 font-medium  mb-8">
            Plan towards your future by investing with ardilla, Grow your money
            confidently and securely with the available investment
            oppurtuinities
          </p>

          <div className="">
            <Button
              background="bg-none"
              color="text-[#8807F7]"
              border="border border-[#8807F7]"
              width="w-[321px]"
              hoverColor="hover:text-[#8807F7]"
            >
              Invest with ardilla (Coming Soon)
              <div className="p-1 bg-secondary rounded-full ml-5 text-[15px]">
                <BsSend color="#fff" />
              </div>
            </Button>
          </div>
        </div>
        <Zoom duration="2000">
          <div className="absolute bottom-0 right-0 max-w-[300px] ss:max-w-[500px] md:max-w-[600px] lg:max-w-full">
            <img src={arrow} alt="arrow" />
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default UnlimitedInvestment;
