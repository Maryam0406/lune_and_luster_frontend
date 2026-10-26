import Hero from '../components/ui/home/Hero';
import Navbar from '../components/ui/home/Navbar';
import About from '../components/ui/home/About';
import Categories from '../components/ui/home/Categories';
import GiftsSection from '../components/ui/home/GiftsSection';
import Pillars from '../components/ui/home/Pillars';

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