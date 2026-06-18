import type { ReactNode } from "react";
import { FaLightbulb, FaRobot } from "react-icons/fa";
import { SiMakerbot } from "react-icons/si";
import { MdEngineering } from "react-icons/md";

const categories = [
  {
    title: "MINI MAKERS",
    description: "Where Creativity Meets Logic.",
    icon: <SiMakerbot />,
  },
  {
    title: "JUNIOR INNOVATORS",
    description: "Engineering & Strategy Fundamentals.",
    icon: <FaLightbulb />,
  },
  {
    title: "YOUNG ENGINEERS",
    description: "Advanced Wireless & Autonomous Control.",
    icon: <MdEngineering />,
  },
  {
    title: "ROBO MINDS",
    description: "Elite Professional Sports & Robotics.",
    icon: <FaRobot />,
  },
];

type CategoryCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

const CategoryCard = ({ title, description, icon }: CategoryCardProps) => {
  return (
    <article
      className={`flex h-full min-h-76.25 flex-col justify-between rounded-[18px] border px-6 py-7 transition-transform duration-300 hover:-translate-y-0.5 hover:border-[#FFC400] hover:bg-[linear-gradient(180deg,rgba(255,196,0,0.14),rgba(255,196,0,0.05))] border-[#5A5A5A] bg-[#2A2A2A] cursor-pointer`}
    >
      <div>
        <div className="mb-5 text-[#FFC400] text-[4rem] leading-none">
          {icon}
        </div>
        <h3 className="max-w-[12ch] text-[2.2rem] leading-[0.95] font-semibold uppercase tracking-wide text-white font-orbitron">
          {title}
        </h3>
        <p className="mt-4 max-w-[18ch] text-[1.05rem] leading-snug text-[#A8A8A8] font-roboto">
          {description}
        </p>
      </div>

      <div className="pt-6 text-[1rem] font-semibold uppercase tracking-[0.08em] text-[#FF4C4C]">
        Learn More{" "}
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </article>
  );
};

const Categories = () => {
  return (
    <section className="w-full bg-[#1A1A1A] py-12 text-white h-full snap-start">
      <div className="mx-auto p-8 px-22 max-w-420">
        <h2 className="mb-10 font-orbitron text-[calc(1.5rem+2vw)] font-extrabold uppercase tracking-[0.03em] text-white">
          Categories
        </h2>

        <div className="grid gap-6 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
