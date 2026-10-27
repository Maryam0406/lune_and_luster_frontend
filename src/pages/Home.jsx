import Hero from '../components/ui/home/Hero';
import About from '../components/ui/home/About';
import Categories from '../components/ui/home/Categories';
import GiftsSection from '../components/ui/home/GiftsSection';
import Pillars from '../components/ui/home/Pillars';
import Banner from '../components/ui/home/Banner';

export default function Home() {
  return (
  <>
    <Hero />
    <About />
    <Categories />
    <GiftsSection />
    <Pillars />
    <Banner />
  </>
  );
}