
import Header from "./components/Header";
import Banner from "./components/Banner";
import Album from "./components/Album";
import Journey from './components/journey';
import Feelings from './components/Fellings';
import ScrollGridHero from './components/ScrollGridHero'
import Accordion from './components/Accordion'
import Footer from './components/Footer'
export default function Home() {
  return (
    <div className="bg-white font-[SpaceGrotesk]">
      <Header />
      <Banner />
      <Album />
      <Journey />
      <Feelings />
      <ScrollGridHero />
      <Accordion />
      <Footer/>
    </div>
  );
}
