import img1 from "../../assets/testimonial1.png";
import img2 from "../../assets/testimonial2.png";
import img3 from "../../assets/testimonial3.png";
import { Fade, Zoom } from "react-reveal";
const Testimonial = () => {
  return (
    <>
      {" "}
      <section className="w-full relative text-black bg-[#F3F4F6] flex flex-col justify-center items-center">
        <div className="maxContainer relative w-full pl-[5%] pr-[2%] pt-12 sm:pt-16 md:pt-28 pb-24 flex flex-col">
          <Fade left duration="2000">
            {" "}
            <div className="relative mb-12">
              <h1 className="text-lg text-primary leading-tight md:text-xl cabinetBd mb-8">
                Don’t Take Our <span className="text-[#E8356D]">Word </span>For
                It
              </h1>
              <p className="max-w-[789px] text-primary leading-10 font-medium  mb-8">
                Listen to testimonials from Ardilla users building wealth
              </p>{" "}
            </div>
          </Fade>
          <div className="flex justify-between items-center gap-5 sm:gap-8">
            <Zoom duration="2500">
              <div className="relative ">
                <img src={img1} alt="testimonial-img" />
              </div>
            </Zoom>
            <Zoom duration="3000">
              <div className="relative ">
                <img src={img2} alt="testimonial-img" />
              </div>
            </Zoom>
            <Zoom duration="3500">
              <div className="relative ">
                <img src={img3} alt="testimonial-img" />
              </div>
            </Zoom>
          </div>
        </div>
      </section>
      <section className="w-full py-10 sm:py-20 relative bg-white flex flex-col justify-center items-center"></section>
    </>
  );
};

export default Testimonial;
