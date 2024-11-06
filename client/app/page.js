import HeroSection from './components/HeroSection';
import ShopExcellence from './components/Excellence';
import Festival from './components/Festival';
import Testimonials from './components/Testimonials';
import MapComponent from './components/Map';
import InstagramPosts from './components/Instagram';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HomePage() {
  return (
    <div>
      
      <HeroSection />
      <ShopExcellence />
      <Festival />
      <InstagramPosts />
      <Testimonials />
      <MapComponent/>
    </div>
  );
}
