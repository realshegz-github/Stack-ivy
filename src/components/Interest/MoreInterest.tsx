import { FaCircleDot } from "react-icons/fa6";
const timelineData = [
  {
    id: 1,
    title: "More Interest",
    description:
      "Enjoy better interest rates than the average bank account when you save with any of the Ardilla savings plan.",
  },
  {
    id: 2,
    title: "Transparency",
    description:
      "No hidden charges and no vague deductions. Save with Ardilla and get your full interests.",
  },
  {
    id: 3,
    title: "Values",
    description:
      "Your values matter to us and we are 100% committed to upholding those. Whether it is with Halal or the Ardilla saving plans.",
  },
  {
    id: 4,
    title: "Complete Withdraws",
    description:
      "Withdraw your entire savings+ interest upon maturity. No minimum balance.",
  },
];

const MoreInterest = () => {
  const firstColumn = timelineData.slice(0, 2);
  const secondColumn = timelineData.slice(2);

  return (
    <section className="w-full relative min-h-screen text-black backdrop-blur-lg flex flex-col justify-center items-center">
      <div className="maxContainer w-full px-[5%] pt-16 sm:pt-20 md:pt-24 flex flex-col">
        <h2 className="text-lg md:text-[60px] font-bold mb-8 sm:mb-16 text-primary cabinetBd">
          Interest you can count on
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2  sm:gap-[5%]">
          <div className="relative">
            <div className="absolute w-1 bg-secondary h-[48%] ss:h-[45%] left-4 top-6" />
            {firstColumn.map((item) => (
              <div
                key={item.id}
                className="relative w-full flex items-center mb-5 sm:mb-12"
              >
                <div className="w-full ml-12">
                  <div className="text-primary mb-5 sm:mb-10">
                    <h3 className="text-[22px] font-bold mb-4">{item.title}</h3>
                    <p className="text-[14px] leading-[34px] max-w-[429px]">
                      {item.description}
                    </p>
                  </div>
                </div>
                {/* <div className="absolute w-8 h-8 bg-[#E8356D] rounded-full left-0 transform -translate-x-1/2 z-10" /> */}

                <div className="absolute text-[24px] text-secondary rounded-full left-0 top-0 transform translate-x-1/4 z-10">
                  <FaCircleDot />
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute w-1 bg-secondary h-[48%] ss:h-[45%] left-4 top-6" />
            {secondColumn.map((item) => (
              <div
                key={item.id}
                className="relative w-full flex items-center mb-5 sm:mb-12"
              >
                <div className="w-full ml-12">
                  <div className="text-primary mb-5 sm:mb-10">
                    <h3 className="text-[22px] font-bold mb-4">{item.title}</h3>
                    <p className="text-[14px] leading-[34px] max-w-[429px]">
                      {item.description}
                    </p>
                  </div>
                </div>
                {/* <div className="absolute w-6 h-6 bg-secondary rounded-full left-0 top-0 transform translate-x-1/4 z-10" /> */}
                <div className="absolute text-[24px] text-secondary rounded-full left-0 top-0 transform translate-x-1/4 z-10">
                  <FaCircleDot />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreInterest;
