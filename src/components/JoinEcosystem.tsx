
const roles = ["BECOME IN JUDGE", "VOLUNTEER", "COMMUNITY MEMBER"];

type JoinCardProps = {
  title: string;
};

const JoinCard = ({ title }: JoinCardProps) => {
  return (
    <div className="rounded-2xl border border-[#3A3A3A] bg-[#0F1012] p-6 pt-12 pb-4">
      <h3 className="font-orbitron text-3xl text-white tracking-wide mb-8">
        {title}
      </h3>

      <form className="space-y-4 px-2">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-xl border border-[#52565F] bg-[#1E1E1E] px-4 py-3 text-2xl text-white placeholder:text-[#A8A8A8] font-roboto outline-none"
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full rounded-xl border border-[#52565F] bg-[#1E1E1E] px-4 py-3 text-2xl text-white placeholder:text-[#A8A8A8] font-roboto outline-none"
        />
        <input
          type="text"
          placeholder="Enroll"
          className="w-full rounded-xl border border-[#52565F] bg-[#1E1E1E] px-4 py-3 text-2xl text-white placeholder:text-[#A8A8A8] font-roboto outline-none"
        />

        <button
          type="button"
          className="w-full rounded-xl bg-[#FF4C4C] py-3 text-4xl font-semibold tracking-wide text-white font-roboto mt-4 hover:bg-[#FA3A3A] transition-colors duration-200 cursor-pointer"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
};

const JoinEcosystem = () => {
  return (
    <section className="w-full snap-start bg-[#090A0C] text-white h-full">
      <div className="mx-auto p-8 px-22">
        <h2 className="font-orbitron text-5xl font-semibold tracking-wide mb-10">
          JOIN THE ECOSYSTEM
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {roles.map((role) => (
            <JoinCard key={role} title={role} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinEcosystem;
