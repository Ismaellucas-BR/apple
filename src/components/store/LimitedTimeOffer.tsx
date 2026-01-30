import { HalfCarousel } from "./Carrossel/HalfCarousel";

import IpadAir from "../../assets/imgs/store/LimitedTimeSection/store-card-40-bts-ipad-air-202505_GEO_BR_FMT_WHH.jfif";

const products = [
  {
    id: 1,
    title: "iPad Air",
    subtitle: "Apple Intelligence",
    spanContent: "A partir de R$ 6.869 com desconto para educação",
    bgImage: IpadAir,
    validOffer: false,
  },
];
export default function LimitedTimeOffer() {
  return (
    <section className="defaultSection">
      <div className="flex flex-col justify-center items-start w-full">
        <div className="font-apple font-semibold text-[1.5rem] leading-8">
          <h2 className="text-CinzaEscuro">Oferta por tempo limitado.</h2>
          <span className="text-CinzaMedio">Possibilidades ilimitadas.</span>
        </div>
        <HalfCarousel items={products} key={0} />
      </div>
    </section>
  );
}
