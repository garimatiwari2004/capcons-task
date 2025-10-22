import Image from "next/image";
import hero from "@/public/assets/landingPage/hero.png";
import featured from "@/public/assets/landingPage/featured.png";
import Carousel from "./bestAirCarousel";
import "../app/globals.css";
import FeaturedCarousel from "./featuredCarousel";
import CarouselWomen from "./carouselWomen";
import abother from "@/public/assets/landingPage/abother.png";
import essential1 from "@/public/assets/landingPage/essential1.png";
import essential2 from "@/public/assets/landingPage/essential2.png";
import essential3 from "@/public/assets/landingPage/essential3.png";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="container flex flex-col mx-auto pt-24">
      <div className="hidden md:flex flex-col w-full text-center space-y-2 py-1 bg-[#f5f5f5]">
          <h3 className="text-md">Hello Nike App</h3>
          <p className="text-xs ">Download the app to access everything Nike  <a href="" className=" cursor-pointer underline text-blue-600">Get your great</a></p>
      </div>
      <div className="px-0 md:px-10 ">
        <Image src={hero} alt="hero image" className="w-full" />
      </div>
      <div className="text-center text-[#111111] space-y-4 my-8 px-8">
        <h3 className="font-bold">First look</h3>
        <h1 className="text-5xl font-semibold">NIKE AIR MAX PULSE</h1>
        <p className="text-[#111111] text-sm">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse — <br />
          designed to push you past your limits and help you go to the max.
        </p>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center ">
          <button className="bg-black rounded-2xl text-white font-semibold px-5 py-2">
            Notify me
          </button>
          <Link href={"/products"}>
          <button className="bg-black rounded-2xl text-white font-semibold px-5 py-2">
            Shop Air Max
          </button>
          </Link>
        </div>
      </div>
      <div className=" bg-white px-2 md:px-10 ">
        <div className="flex  justify-between p-4 items-center text-black font-bold">
          <div className="">Best of Air Max</div>
        </div>
        <div>
          <Carousel />
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-between p-0 md:p-4 items-center text-black ">
          <div className="text-left w-full p-4 font-bold">Featured</div>
          <div>
            <Image src={featured} alt="featuredImage"></Image>
          </div>
          <div className="mt-9">
            <h3 className="text-3xl md:text-5xl font-md text-center px-4">
              STEP INTO WHAT FEELS GOOD
            </h3>
          </div>
          <div>
            <p className="text-xs text-center px-4">
              Cause everyone should know the feeling of running in that perfect
              pair.
            </p>
          </div>
          <div className="mt-2 flex justify-center">
            <button className="text-white bg-black rounded-4xl px-4 font-md py-1">
              Find Your Shoe
            </button>
          </div>
        </div>
      </div>
      <div className="font-md text-black mt-10">
        <div className="px-10">Gear up</div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 p-4 auto-rows-fr">
          <div className="pl-0 md:pl-10">
            <h1 className="text-center  w-full">Shop Men's</h1>
            <FeaturedCarousel />
          </div>
          <div className="pr-0 md:pr-10">
            <h1 className="text-center w-full">Shop Women's</h1>
            <CarouselWomen />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between p-0 md:p-4 items-center text-black">
        <div className="font-bold text-left w-full p-10">Dont Miss</div>
        <div>
            <Image src={abother} alt="newImage"></Image>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center my-10 px-4 md:px-10">
        <div className="text-center space-y-2   ">
            <h1 className="font-bold text-3xl md:text-5xl text-black">FLIGHT ESSENTIALS</h1>
            <p className="text-xs text-black">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
            <button className="bg-black text-white font-md px-4 py-1 rounded-3xl">Shop</button>
        </div>
      </div>
      <div className="px-10 pb-10">
        <div className="font-semibold text-black py-5">The essentials</div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-2">
            <div>
                <Image src={essential1} alt="essential1"></Image>
            </div>
            <div>
                <Image src={essential2} alt="essential1"></Image>
            </div>
            <div>
                <Image src={essential3} alt="essential1"></Image>
            </div>
        </div>
      </div>
    </div>
  );
}
