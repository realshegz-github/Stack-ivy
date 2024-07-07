import { Hero } from "../components/Interest/Hero";
import { Faqs } from "../components/Interest/FAQs";
import HowItWorks from "../components/Interest/HowItWorks";
import MoreInterest from "../components/Interest/MoreInterest";

const Interest = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <MoreInterest />
      <HowItWorks />
      <Faqs />
    </div>
  );
};

export default Interest;
