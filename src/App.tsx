import FirstSection from "./components/home/FirstSection";
import IPhoneSection from "./components/home/IPhoneSection";
import WatchSeries from "./components/home/WatchSeries";

function App() {
  return (
    <main className="flex flex-col gap-3">
      <FirstSection />
      <IPhoneSection />
      <WatchSeries />
    </main>
  );
}

export default App;
