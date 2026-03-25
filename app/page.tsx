import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Rooms from '@/components/Rooms';
import Dining from '@/components/Dining';
import Experiences from '@/components/Experiences';
import Events from '@/components/Events';
import Location from '@/components/Location';
import IHGRewards from '@/components/IHGRewards';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Introduction />
        <Rooms />
        <Dining />
        <Experiences />
        <Events />
        <Location />
        <IHGRewards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
