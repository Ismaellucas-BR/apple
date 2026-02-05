import HeroSection from "../components/store/HeroSection";
import LimitedTimeOffer from "../components/store/LimitedTimeOffer";

export default function Store() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center max-w-[100rem] mx-auto w-full bg-cinzaClaro overflow-hidden">
        <HeroSection />
        <LimitedTimeOffer />
      </div>
    </main>
  );
}
