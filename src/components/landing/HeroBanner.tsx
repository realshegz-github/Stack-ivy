import Button from "../common/CustomBtn";
import phone from "../../assets/phone.png";
import { Fade, Zoom } from "react-reveal";
export const HeroBanner = () => {
  return (
    <section className="w-full relative h-full text-white backdrop-blur-lg bg-[#240053] flex flex-col justify-center items-center">
      <div className="maxContainer w-full px-[5%] mt-24 pt-12 sm:pt-16 md:pt-20 flex flex-col items-center justify-center ">
        <Fade up duration="1500">
          <h1 className="text-lg md:text-2xl mb-2 text-center">
            Your Access To More
          </h1>
          <p className="text-[15px] max-w-[712px] text-center font-medium leading-[32px] mb-8">
            Ardilla helps you save and invest in achieving your financial goals,
            we have the most flexible and seamless way to grow your funds.
          </p>
          <div className="mb-5">
            <Button
              hoverBackground="hover:bg-[#6005AE]"
              width="w-[169px]"
              color="text-[#3D0072]"
            >
              Get Started
            </Button>
          </div>
        </Fade>
        <Zoom>
          <div className="relative">
            <img src={phone} alt="phone" />
          </div>
        </Zoom>
      </div>
    </section>
  );
};
