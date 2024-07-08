import { Link } from "react-router-dom";
import Button from "../common/CustomBtn";
import { BsSend } from "react-icons/bs";
import { Fade } from "react-reveal";
import {
  DibIcon,
  DreamIcon,
  GritIcon,
  VaultIcon,
} from "../../assets/svgs/icons";

const data = [
  {
    title: "Dream",
    desc: "Helping you make your dreams a reality is important to us. We have helped so many others. We can help you as well.",
    icon: DreamIcon,
    bg: "bg-[#E8356D]",
  },
  {
    title: "DIB",
    desc: "Nothing beats an emergency quite like an emergency fund. With Ardilla you can get started building that emergency fund.",
    icon: DibIcon,
    bg: "bg-yellow-500",
  },
  {
    title: "Vault",
    desc: "Lock away excess funds you don't know what to do with. We can help you safeguard it till you are ready. It definitely beats spending it and wondering where all that money went to.",
    icon: VaultIcon,
    bg: "bg-primary",
  },

  {
    title: "Grit",
    desc: "Become a VIP when you save more money with us. Enjoy better benefit.",
    icon: GritIcon,
    bg: "bg-green-500",
  },
];
const MoreMoney = () => {
  return (
    <section className="w-full relative text-white backdrop-blur-lg bg-[#1B0132] flex flex-col justify-center items-center">
      <div className="maxContainer w-full px-[5%] pt-16 md:pt-20 flex flex-col  ">
        <div className="mb-20">
          <Fade>
            <h1 className="text-lg md:text-xl cabinetBd mb-2">
              Access More With Your Money
            </h1>
          </Fade>
          <p className="text-[15px] max-w-[836px]  font-medium leading-[32px] mb-8">
            Earn, learn, parlay, and grow financially. With Ardilla, you have
            more opportunities than ever at your finger tips. Why not take
            advantage today?
          </p>

          <div className="mb-5">
            <Button
              background="bg-none"
              color="white"
              border="border"
              width="max-w-[257px]"
            >
              Learn more about savings
              <div className="p-1 bg-white rounded-full ml-5 text-[15px]">
                <BsSend color="#8807F7" />
              </div>
            </Button>
          </div>
        </div>
        <div className="w-full pt-16  pb-20 md:pb-28 px-[8%] shadow-glassy sm:backdrop-blur-sm bg-[#29014B] border border-secondary ">
          <div className="grid grid-cols-1 gap-[30px] sm:gap-[8%] sm:grid-cols-2">
            {" "}
            {data.map((item, index) => (
              <Fade up duration="2000">
                <div
                  key={index}
                  className="max-w-[358px] w-full px-5 sm:px-8 py-7 hover:rounded-3xl hover:bg-[#43027E] transition duration-300 ease-in-out"
                >
                  <div
                    className={`rounded-full w-[50px] h-[50px] ${item.bg} flex items-center justify-center shadow-glassy sm:backdrop-blur-sm mb-8`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-[26px] font-bold mb-5">{item.title}</h3>
                  <p className="max-w-[298px] mb-5">{item.desc}</p>
                  <Link to="#" className="max-w-[298px] font-bold">
                    Learn More
                  </Link>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreMoney;
