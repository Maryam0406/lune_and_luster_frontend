import Hero from '../components/ui/Hero';
import Navbar from '../components/ui/Navbar';
import About from '../components/ui/About';
import Categories from '../components/ui/Categories';
import GiftsSection from '../components/ui/GiftsSection';
import Pillars from '../components/ui/Pillars';

export default function Home() {
  return (
  <>
    <Navbar />
    <Hero />
    <About />
    <Categories />
    <GiftsSection />
    <Pillars />
  </>
  );
}