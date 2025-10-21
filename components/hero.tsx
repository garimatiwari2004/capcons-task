import Image from "next/image";
import hero from "@/public/assets/landingPage/hero.png";
import Carousel from "./bestAirCarousel";

export default function Hero() {
  return (
    <div className="container flex flex-col mx-auto">
      <div className="px-0 md:px-10 ">
        <Image src={hero} alt="hero image" className="w-full" />
      </div>
      <div className="text-center text-[#111111] space-y-4 my-8 px-8">
        <h3 className="font-bold">First look</h3>
        <h1 className="text-5xl font-semibold">NIKE AIR MAX PULSE</h1>
        <p className="text-[#111111] text-sm">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse — <br />
          designed to push you past your limits and help you go to the
          max.
        </p>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center ">
            <button className="bg-black rounded-2xl text-white font-semibold px-5 py-2">Notify me</button>
            <button className="bg-black rounded-2xl text-white font-semibold px-5 py-2">Shop Air Max</button>
        </div>
      </div>
      <div className=" bg-white px-2 md:px-10 ">
        <div className="flex fle justify-between p-4 items-center text-black font-bold">
            <div>Best of Air Max</div>
            
        </div>
        <div>
            <Carousel/>
        </div>
      </div>
    </div>
  );
}
