import Image from "next/image";
import MotionSlider from "../components/template/Slider";
import ProductSlider from "../components/template/Productcard";
import Banner from "../components/template/Banner";
import VideoShowcase from "../components/module/VideoGalerry";
import Treyler from "../components/module/Treyler";
import TrailerGrid from "../components/module/card";

export default function Home() {
  return (
    <div>
      {/* <main className="bg-g\ay-50 dark:bg-gray-950  dark:text-white transition-colors duration-300"> */}
      <MotionSlider />
      <ProductSlider />
      <Banner />
      <VideoShowcase />
      {/* </main> */}
      <Treyler />
      <TrailerGrid />
    </div>
  );
}
