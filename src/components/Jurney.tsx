import type { ReactNode } from "react";
import { VscTools } from "react-icons/vsc";
import { GiIndianPalace } from "react-icons/gi";
import { GiPodium } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";

type StepProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
};

const Step = ({ icon, title, subtitle }: StepProps) => {
  return (
    <div className="flex-1 flex flex-col items-center z-1">
      <div className="flex items-center justify-center">
        <div className="w-40 h-40 rounded-full bg-[#222] flex items-center justify-center shadow-2xl">
          <div className="w-32 h-32 rounded-full bg-[#111] flex items-center justify-center border-4 border-[#1820FF] text-white text-6xl">
            {icon}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center">
        <span className="border-[#ffffff] border-l-2 h-8 mb-6"></span>
        <span className="text-[#D94A4A] text-xl font-roboto">{title}</span>
        <span className="text-white font-semibold text-lg mt-2 text-balance w-9/10 font-roboto">
          {subtitle}
        </span>
      </div>
    </div>
  );
};

const Jurney = () => {
  return (
    <section className="w-full h-full py-20 bg-[#0D0D0D] font-orbitron snap-start">
      <div className="max-w-420 mx-auto px-22">
        <div className="text-center mb-12">
          <p className="text-[#D94A4A] tracking-widest font-roboto text-2xl">
            USER JOURNEY
          </p>
          <h2 className="text-white text-4xl font-extrabold tracking-wider mt-4">
            YOUR PATH TO THE LEAGUE
          </h2>
          <p className="text-gray-400 mt-1 font-roboto text-xl">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
        </div>

        <div className="flex items-start gap-6 relative">
          <span className="absolute top-28/100 left-1/2 w-8/10 h-1 bg-[#1820FF] -translate-1/2 z-0"></span>
          <Step icon={<VscTools />} title="STEP 1" subtitle="BUILD YOUR TEAM" />
          <Step
            icon={<GiIndianPalace />}
            title="STEP 2"
            subtitle="COMPETE ACROSS INDIA"
          />
          <Step
            icon={<GiPodium />}
            title="STEP 3"
            subtitle="EARN NATIONAL RANKING & VALUE"
          />
          <Step icon={<FaUsers />} title="STEP 4" subtitle="JOIN THE LEAGUE" />
        </div>
      </div>
    </section>
  );
};

export default Jurney;
