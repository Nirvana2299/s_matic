import Image from "next/image";

import CarouselSlider from "./components/carousel";
import ImpPoints from "./components/impPoints";
import Intro from "./components/intro";
import ProductCarousel from "./components/productCarousel";
import WhatWeDoSection from "./components/whatWeDoSection";
import ContactUs from "./components/contactUs";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <CarouselSlider />
      <Intro />
      <ImpPoints />
      <ProductCarousel />
      <WhatWeDoSection />
      <ContactUs />
      {/* <h1 className="text-[#1da1f2]" >Home Page</h1> */}
    </main>
  );
}
