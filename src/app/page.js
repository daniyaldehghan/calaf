import Image from "next/image";
import MotionSlider from "../components/template/Slider";
import ProductSlider from "../components/template/Productcard";
import Banner from "../components/template/Banner";
import VideoShowcase from "../components/module/VideoGalerry";

export default function Home() {
  return (
    <div>
      <main className="container min-h-sreen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-white transition-colors duration-300">
        <MotionSlider />
        <ProductSlider />
        <Banner />
        <VideoShowcase />
      </main>
    </div>
  );
}
