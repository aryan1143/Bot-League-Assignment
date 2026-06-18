import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const sponsors = [
  { title: "NIT DELHI", logo: "/nit-delhi.png" },
  { title: "INDIAN BIT", logo: "/indian-bit.png"},
  { title: "NIT SILCHAR", logo: "/nit-silchar.png" },
  { title: "ROBO COMPANY", logo: "/robo-company.png" },
  { title: "IIT BOMBAY", logo: "/iit-bombay.png" },
  { title: "ROBO COMPANY", logo: "/robo-company-1.png" },
];

const quickLinksLeft = [
  "The Arena",
  "Episodes",
  "National Rankings",
  "Programs",
  "Rulebooks",
];

const quickLinksRight = [
  "Join the Team",
  "Sponsorships",
  "Help Center",
  "Contact Us",
  "Legal",
];

type SponsorItemProps = {
  title: string;
  logo: string;
  featured?: boolean;
};

const SponsorItem = ({ title, logo, featured }: SponsorItemProps) => {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`flex h-20 w-20 items-center justify-center overflow-hidden`}
      >
        <img
          src={logo}
          alt={title}
          className="h-24 w-24 object-contain opacity-80"
        />
      </div>
      <p className="font-roboto text-2xl text-[#A6A6A6] font-semibold leading-none">
        {title}
      </p>
    </div>
  );
};

const FooterSection = () => {
  return (
    <footer className="w-full snap-start bg-[#050608] text-white h-full">
      <div className="mx-auto p-8 px-22">
        <h2 className="font-orbitron text-3xl font-semibold tracking-wide mb-8">
          SPONSORS
        </h2>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {sponsors.map((sponsor, index) => (
            <SponsorItem key={`${sponsor.title}-${index}`} {...sponsor} />
          ))}
        </div>

        <div className="my-10 h-px bg-[#2D2D2D]" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <h3 className="font-roboto text-2xl mb-5">QUICK LINKS</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-14 max-w-4xl">
              <div className="space-y-2">
                {quickLinksLeft.map((item) => (
                  <p
                    key={item}
                    className="font-roboto text-xl text-[#8D8D8D] hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="space-y-2">
                {quickLinksRight.map((item) => (
                  <p
                    key={item}
                    className="font-roboto text-xl text-[#8D8D8D] hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:pt-1">
            <h3 className="font-roboto text-2xl mb-6">SOCIAL MEDIA</h3>
            <div className="flex items-center gap-6 text-[#9EA1A8] text-5xl">
              <FaYoutube className="cursor-pointer hover:text-white transition-colors duration-200" />
              <FaInstagram className="cursor-pointer hover:text-white transition-colors duration-200" />
              <FaFacebookF className="cursor-pointer hover:text-white transition-colors duration-200" />
              <FaTwitter className="cursor-pointer hover:text-white transition-colors duration-200" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
