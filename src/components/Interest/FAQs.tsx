import { useState } from "react";
import { motion } from "framer-motion";
import { FiMinus, FiPlus } from "react-icons/fi";

const faqsData = [
  {
    question: "What are your interest rates?",
    answer:
      "Enjoy better interest rates than the average bank account when you save with any of the Ardilla savings plan.",
  },
  {
    question: "What happens to my interest when i switch to Halal?",
    answer:
      "Enjoy better interest rates than the average bank account when you save with any of the Ardilla savings plan.",
  },
  {
    question: "What is the minimum interest rate I am entitled to?",
    answer:
      "Enjoy better interest rates than the average bank account when you save with any of the Ardilla savings plan.",
  },
  {
    question: "What is Ardilla?",
    answer:
      "Ardilla helps you save and invest in achieving your financial goals, we have the most flexible and seamless way to grow your funds.",
  },
  {
    question: "What is Ardilla?",
    answer:
      "Ardilla helps you save and invest in achieving your financial goals, we have the most flexible and seamless way to grow your funds.",
  },
];

export const Faqs = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (index: number) => {
    setSelected(selected === index ? null : index);
  };
  return (
    <>
      <section className="w-full relative text-primary flex flex-col justify-center items-center">
        <div className="maxContainer relative w-full px-[5%] pt-16 md:pt-24 pb-40 flex flex-col">
          {" "}
          <h2 className="text-[30px] sm:text-lg text-center sm:text-start font-bold mb-8 sm:mb-16 cabinetBd">
            Questions We Have Been Asked
          </h2>
          <div className="space-y-8">
            {faqsData.map((faq, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center p-5 sm:p-8 shadow-sm bg-[#F9FAFB] rounded-md cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <h3 className="text-[16px] sm:font-bold text-secondary">
                    {faq.question}
                  </h3>
                  {selected === index ? (
                    <FiMinus className="text-base" />
                  ) : (
                    <FiPlus className="text-base" />
                  )}
                </div>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: selected === index ? "auto" : 0 }}
                  className="overflow-hidden"
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-8 bg-gray-100">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-10 sm:py-20 relative bg-white flex flex-col justify-center items-center"></section>
    </>
  );
};
