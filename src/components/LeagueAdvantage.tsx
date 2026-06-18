import { FaBolt, FaBriefcase, FaGavel, FaMedal, FaUser } from "react-icons/fa";

const points = [
  {
    title: "NATIONAL RECOGNITION",
    text: "Benchmark your skills on India's official robotics leaderboard.",
    icon: FaMedal,
  },
  {
    title: "FAIR JUDGING",
    text: "Compete with confidence under standardized, expert-led evaluation.",
    icon: FaGavel,
  },
  {
    title: "CAREER OPS",
    text: "Bridge the gap between arena victories and top-tier tech placements.",
    icon: FaBriefcase,
  },
  {
    title: "HIGH-ENERGY ECOSYSTEM",
    text: "Join a nationwide community of elite innovators and robotics athletes.",
    icon: FaBolt,
  },
];

const demoLeaderboard = [
  { name: "Player Name", score: 508754, color: "bg-[#facc15]" },
  { name: "Player Name", score: 22000, color: "bg-[#38bdf8]" },
  { name: "Player Name", score: 20030, color: "bg-[#38bdf8]" },
  { name: "Player Name", score: 19500, color: "bg-[#ec4899]" },
  { name: "Player Name", score: 15050, color: "bg-[#ec4899]" },
  { name: "Player Name", score: 13865, color: "bg-[#ec4899]" },
  { name: "Player Name", score: 10954, color: "bg-[#ec4899]" },
  { name: "Player Name", score: 9057, color: "bg-[#ec4899]" },
];

const LeagueAdvantage = () => {
  return (
    <section className="w-full snap-start bg-[#1A1A1A] text-white h-full overflow-hidden">
      <div className="mx-auto p-8 px-22">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <p className="font-orbitron text-[#ff4c4c] text-2xl leading-none tracking-wide">
              WHY REGISTER ?
            </p>
            <h2 className="font-orbitron font-semibold text-4xl leading-none mt-1">
              THE LEAGUE ADVANTAGE
            </h2>

            <div className="mt-10 space-y-8">
              {points.map((point) => {
                const Icon = point.icon;

                return (
                  <div key={point.title} className="flex items-start gap-5">
                    <Icon className="text-[#ff4c4c] text-4xl mt-1 shrink-0" />

                    <div>
                      <h3 className={`font-roboto text-2xl leading-none`}>
                        {point.title}
                      </h3>
                      <p className="font-roboto text-[#9E9E9E] text-xl leading-snug mt-1 max-w-[38ch]">
                        "{point.text}"
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="overflow-hidden rounded-none border border-gray-400 p-5 bg-[#232020] w-7/10 font-roboto"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0,0, 0.2), rgba(0, 0,0, 0.2)), url('/tech-bg.png')",
              backgroundPosition: "center",
            }}
          >
            <div className="z-10">
              <h3 className="font-orbitron text-3xl text-center text-white mb-4 font-semibold">
                LEADERBOARD
              </h3>

              <div className="flex flex-col mb-2 justify-center items-center">
                <div className="relative p-3 bg-linear-135 from-amber-200 to-amber-500 text-black text-4xl rounded-xsm shadow-md flex items-center gap-3 font-orbitron">
                  <FaUser />
                  <span className="absolute -top-3 -right-3 bg-amber-50 rounded-full p-1 text-xs border border-amber-300">
                    <img src="/sheild.png" alt="shield" className="w-6 h-6" />
                  </span>
                </div>
                <span className="font-roboto text-sm text-white/90 mt-1">
                  #01- Player Name
                </span>
                <span className="font-orbitron tracking-widest text-xl text-white font-semibold">
                  508754
                </span>
                <div></div>
              </div>

              <div className="space-y-2">
                {demoLeaderboard.slice(1).map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="rounded-md border border-gray-400 bg-linear-90 from-gray-900 via-gray-800 to-gray-900 px-3 py-1.5 flex items-center justify-between text-white"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-orbitron text-[#d1d5db] text-xl w-8">
                        {String(index + 2).padStart(2, "0")}
                      </span>
                      <div
                        className={`relative p-1 bg-linear-135 ${index < 2 ? "from-blue-200 to-blue-500" : "from-pink-200 to-pink-500"} text-black text-xl rounded-xsm shadow-md flex items-center gap-3 font-orbitron`}
                      >
                        <FaUser />
                      </div>
                      <span className="font-roboto text-xl">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-orbitron  text-sm">
                        {item.score}
                      </span>
                      {index < 2 ? (
                        <img
                          src="/sheild-blue.png"
                          alt="shield"
                          className="w-6 h-6"
                        />
                      ) : (
                        <img
                          src="/sheild-pink.png"
                          alt="shield"
                          className="w-6 h-6"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeagueAdvantage;
