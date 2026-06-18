const infos = [
  {
    number: "1.",
    title: "STRUCTURED EVENTS",
    description: '"From one-off events to a year-round competitive season."',
  },
  {
    number: "2.",
    title: "DIGITAL IDENTITY",
    description: '"Your professional robotics legacy, tracked and verified."',
  },
  {
    number: "3.",
    title: "NATIONAL RANKING",
    description: '"Benchmark your skills against the best engineers in India."',
  },
  {
    number: "4.",
    title: "CAREER PATHWAY",
    description:
      '"Turning arena victories into real-world industry opportunities."',
  },
];

type CardProps = {
  number: string;
  title: string;
  description: string;
};

const Card = ({ number, title, description }: CardProps) => {
  return (
    <div className="max-w-80">
      <div className="text-[#FF4C4C] text-[30px] leading-none font-semibold mb-1">
        {number}
      </div>
      <h3 className="text-white text-3xl leading-[1.05] font-semibold tracking-wide uppercase mb-3">
        {title}
      </h3>
      <p className="text-[#9E9E9E] text-[20px] leading-tight font-roboto">
        {description}
      </p>
    </div>
  );
};

const BotLeagueInfo = () => {
  return (
    <section className="w-full bg-[#1A1A1A] text-white py-8 h-full snap-start">
      <div className="mx-auto p-8 px-22 max-w-420">
        <h2 className="font-orbitron text-[calc(1.5rem+2.5vw)] leading-none font-extrabold uppercase tracking-wider">
          What is BotLeague?
        </h2>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-14">
            {infos.map((item) => (
              <Card key={item.number} {...item} />
            ))}
          </div>

          <div className="relative ml-auto h-full">
            <img
              src="/techImage.png"
              alt="BotLeague"
              className="h-full object-contain -mr-10 -mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotLeagueInfo;
