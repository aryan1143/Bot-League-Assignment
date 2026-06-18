
type CardProps = {
  title: string;
  img: string;
};

const cards = [
  {
    title: "Robo Race",
    img: "/robo-race.jpg",
  },
  {
    title: "Line Follower",
    img: "/line-follower.jpg",
  },
  {
    title: "RC Racing",
    img: "/rc-racing.jpg",
  },
  {
    title: "FPV Drone Racing & Aeromodelling",
    img: "/fpv-drone.jpg",
  },
  {
    title: "Robo Hockey",
    img: "/robo-hockey.jpg",
  },
  {
    title: "Robo War",
    img: "/robo-war.jpg",
  },
];

const Card = ({ title, img }: CardProps) => (
  <div className="relative overflow-hidden rounded-xl border border-[#333] bg-[#111]">
    <div
      className="h-44 sm:h-52 md:h-56 lg:h-48 w-full bg-center bg-cover"
      style={{ backgroundImage: `url(${img})` }}
    />
    <div className="absolute left-0 -bottom-3 bg-linear-to-t from-black to-transparent rounded-b-lg px-6 py-6 w-full">
      <h4 className="text-white text-2xl font-semibold">{title}</h4>
    </div>
  </div>
);

const Disciplines = () => {
  return (
    <section
      className="w-full snap-start h-full text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0,0, 0.6), rgba(0, 0,0, 0.6)), url('/tech-bg.png')",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto p-8 px-22">
        <p className="text-[#FF4C4C] font-semibold mb-2 font-orbitron text-xl tracking-widest">
          SPORTS
        </p>
        <h2 className="font-orbitron text-[clamp(2rem,4vw,3.2rem)] font-extrabold mb-8">
          COMPETITION DISCIPLINES
        </h2>

        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
          {cards.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Disciplines;
