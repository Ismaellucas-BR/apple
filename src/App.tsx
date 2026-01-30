import EmblaCarousel from "./components/emblaCenterMode/EmblaCarousel";
import AirPodPro3 from "./components/home/AirPodPro3";
import FirstSection from "./components/home/FirstSection";
import IPadAir from "./components/home/IPadAir";
import IPhoneSection from "./components/home/IPhoneSection";
import MacBookAir from "./components/home/MacBookAir";
import MacbookPro from "./components/home/MacbookPro";
import WatchSeries from "./components/home/WatchSeries";
import WhatchUltra from "./components/home/WhatchUltra";

function App() {
  return (
    <main className="flex flex-col gap-3">
      <FirstSection />
      <WatchSeries />
      <section className="md:grid md:grid-cols-2 gap-3 md:p-2">
        <IPhoneSection hiddenSection="" />
        <IPadAir />
        <MacbookPro />
        <WhatchUltra />
        <AirPodPro3 />
        <MacBookAir />
      </section>
      <EmblaCarousel />
    </main>
  );
}

export default App;
