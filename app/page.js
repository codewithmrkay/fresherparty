import Copyright from "@/component/copywrite";
import HomePageBg from "@/component/homepagebg";
import HomePage from "@/component/homepagebg";
import HomePageText from "@/component/homePageText";
import WaveBorder from "@/component/waveBorder";
import WaveBorderBlack from "@/component/waveBorderBlack";
import WaveBorderBlue from "@/component/waveBorderBlue";
import WaveBorderGreen from "@/component/waveBorderGreen";
import WaveBorderPink from "@/component/waveBorderPink";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
      <div className="bg-black w-full">
        <HomePageBg className='absolute inset-0 z-10' />
      </div>
      <div className="absolute top-0 left-0">
        <HomePageText />
      </div>
      <div className="w-full bg-transparent">
        <WaveBorder />
      </div>
      <div className="bg-pink-500 w-full h-screen flex flex-col items-center justify-center">
        <WaveBorderPink />
      </div>
      <div className="bg-lime-400 w-full h-screen flex flex-col items-center justify-center">
        <WaveBorderGreen />
      </div>
      <div className="bg-blue-400 w-full h-screen flex flex-col items-center justify-center">
        <WaveBorderBlue />
      </div>
      <div className="bg-blue-400 w-full flex flex-col items-center justify-center">
        <WaveBorderBlack />
      </div>
      <div className="w-full bg-black">
        <Copyright />
      </div>
    </div>
  );
}
