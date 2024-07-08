import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Fade } from "react-reveal";
import graph from "../../assets/graph.png";
import Button from "../common/CustomBtn";

export const Hero: React.FC = () => {
  const [frequency, setFrequency] = useState("Monthly");
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [errors, setErrors] = useState({ amount: "", duration: "" });

  const handleValidation = () => {
    let formIsValid = true;
    const errors = { amount: "", duration: "" };

    if (!amount || isNaN(Number(amount))) {
      formIsValid = false;
      errors.amount = "Please enter a valid amount";
    }

    if (!duration || isNaN(Number(duration))) {
      formIsValid = false;
      errors.duration = "Please enter a valid duration";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (handleValidation()) {
      // Perform the action when the form is valid
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className="w-full relative h-full text-white backdrop-blur-lg bg-[#10001F] flex flex-col justify-center items-center min-h-screen">
      <div className="maxContainer mt-24 w-full pl-[5%] pr-[5%] sm:pr-[3%] pt-12 sm:pt-16 md:pt-24 flex flex-col">
        <form
          className="flex flex-col relative sm:flex-row sm:justify-between gap-12 sm:gap-8"
          onSubmit={handleSubmit}
        >
          <Fade left duration="2000">
            <div className="pb-5 sm:pb-10 md:pb-32">
              <h2 className="mb-10 text-lg font-bold cabinentBd">
                Calculate Your Interests
              </h2>

              <div className="mb-8 sm:max-w-[377px]">
                <label className="block mb-2 text-[#9CA3AF]">
                  How often do you save?
                </label>
                <div className="relative">
                  <select
                    className="w-full p-5 bg-transparent border rounded-lg text-[14px] appearance-none"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                  >
                    <option className="p-2 bg-secondary">Monthly</option>
                    <option className="p-2 bg-secondary">Weekly</option>
                    <option className="p-2 bg-secondary">Daily</option>
                  </select>
                  <MdOutlineArrowDropDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[18px] pointer-events-none" />
                </div>
              </div>

              <div className="mb-8 sm:max-w-[377px]">
                <label className="block mb-2 text-[#9CA3AF]">
                  How much are you saving?
                </label>
                <input
                  type="text"
                  placeholder="2,000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full placeholder:text-white px-1 py-2 bg-transparent border-b border-white placeholder:text-[32px] text-[32px]"
                />
                {errors.amount && (
                  <span className="text-red-500">{errors.amount}</span>
                )}
              </div>

              <div className="sm:max-w-[377px]">
                <label className="block mb-2 text-[#9CA3AF]">
                  How long are you saving for?
                </label>
                <input
                  type="text"
                  placeholder="3"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full placeholder:text-white px-1 py-2 bg-transparent border-b border-white focus:border-white active:border-white placeholder:text-[32px] text-[32px]"
                />
                {errors.duration && (
                  <span className="text-red-500">{errors.duration}</span>
                )}
              </div>
            </div>
          </Fade>

          <Fade right duration="2000">
            <div className="relative flex flex-col justify-end">
              <div className="rounded-ss-2xl sm:max-w-[586px] w-full rounded-se-2xl bg-white text-[#6B7280] px-12 py-10">
                <div className="mb-5">
                  <span className="text-[12px] medium">Total Balance</span>
                  <p className="text-[24px] text-primary font-bold cabinet">
                    N6,600
                  </p>
                </div>

                <p className="text-[15px] mb-5">
                  Saving <span className="font-bold"> ₦2,000</span> monthly for
                  3 months will result in a balance of{" "}
                  <span className="font-bold"> ₦6,600</span>
                </p>

                <div className="mb-5">
                  <span className="text-[12px] medium">Interest</span>
                  <p className="text-[24px] text-primary font-bold cabinet">
                    N600 ( 2%)
                  </p>
                </div>
                <div className="relative mb-20 ss:mb-36">
                  <span className="text-[12px] medium">Total Savings</span>
                  <p className="text-[24px] text-primary font-bold cabinet">
                    N6000 ( 2%)
                  </p>
                  <div className="absolute top-0 right-0">
                    <img src={graph} alt="graph" />
                  </div>
                </div>
                <div className="">
                  <Button
                    background="bg-secondary"
                    hoverBackground="hover:bg-[#6005AE]"
                    color="text-white"
                    width="w-[159px]"
                    type="submit"
                  >
                    Start Saving Now
                  </Button>
                </div>
              </div>
            </div>
          </Fade>
        </form>
      </div>
    </section>
  );
};
