import Features from "../components/landing/Features";
import { HeroBanner } from "../components/landing/HeroBanner";
import MoreMoney from "../components/landing/MoreMoney";
import Testimonial from "../components/landing/Testimonial";
import UnlimitedInvestment from "../components/landing/UnlimitedInvestment";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <HeroBanner />
      <Features />
      <MoreMoney />
      <UnlimitedInvestment />
      <Testimonial />
    </div>
  );
};

export default Home;
