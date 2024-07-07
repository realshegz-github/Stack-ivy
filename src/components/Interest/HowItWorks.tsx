import frame1 from "../../assets/phone-frame1.png";
import frame2 from "../../assets/phone-frame2.png";
import frame3 from "../../assets/phone-frame3.png";

const data = [
  {
    id: 1,
    title: "CREATE A PLAN",
    img: frame1,
    bgIcon: "bg-[#E8356D]",
    bg: "bg-[#FDEDF2]",
  },
  {
    id: 2,
    title: "Set your target amount",
    img: frame2,
    bgIcon: "bg-[#8807F7]",
    bg: "bg-[#FAF5FF]",
  },
  {
    id: 3,
    title: "Get Your interest",
    img: frame3,
    bgIcon: "bg-[#2563EB]",
    bg: "bg-[#F1F5FE]",
  },
];
const HowItWorks = () => {
  return (
    <section className="w-full relative min-h-screen text-black backdrop-blur-lg flex flex-col justify-center items-center">
      <div className="maxContainer w-full px-[5%] pt-12 sm:pt-16 md:pt-20 flex flex-col">
        <h2 className=" text-lg md:text-[50px] font-bold mb-8 sm:mb-16 text-primary cabinetBd">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className={`max-w-[364px] w-full px-8 pt-[30px] rounded-2xl flex justify-center ${item.bg}`}
            >
              <div className="Hiw-card">
                <div className="space-x-4 mb-10">
                  <span
                    className={`${item.bgIcon} text-white py-1 px-1.5 rounded-3xl font-bold cabinetBd`}
                  >
                    {item.id}
                  </span>
                  <span className="text-[14px] font-bold cabinetBd">
                    {item.title}
                  </span>
                </div>
                <div className="relative">
                  <img src={item.img} alt="phone" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
