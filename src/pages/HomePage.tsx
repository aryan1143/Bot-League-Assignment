import Hero from "../components/Hero";
import Events from "../components/Events";
import Jurney from "../components/Jurney";
import BotLeagueInfo from "../components/BotLeagueInfo";
import Categories from "../components/Categories";
import Disciplines from "../components/Disciplines";
import LeagueAdvantage from "../components/LeagueAdvantage";
import JoinEcosystem from "../components/JoinEcosystem";
import FooterSection from "../components/FooterSection";

const HomePage = () => {
  return (
    <div className="HomePage w-full h-full bg-[#0D0D0D]">
      <Hero />
      <Events />
      <Jurney />
      <BotLeagueInfo />
      <Categories />
      <Disciplines />
      <LeagueAdvantage />
      <JoinEcosystem />
      <FooterSection />
    </div>
  );
};

export default HomePage;
