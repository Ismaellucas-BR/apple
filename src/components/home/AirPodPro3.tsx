import { Link } from "react-router";
import BgAirPodPro3 from "../../assets/imgs/home/promo_airpodspro_3__f6xmza7bglei_small_2x.jpg";

export default function AirPodPro3() {
  return (
    <section
      className="flex flex-col justify-start items-center bg-cinzaClaro bg-[center_top] bg-no-repeat bg-cover h-[31.25rem]"
      style={{
        backgroundImage: `url(${BgAirPodPro3})`,
      }}>
      <div className="flex flex-col justify-center items-center w-full pt-10">
        <div className="flex justify-center items-center w-[80%]">
          <h2 className="font-apple font-semibold text-black text-[2rem] tracking-tight lg:text-[2.5rem]">
            AirPods Pro 3
          </h2>
        </div>
        <p className="font-apple font-normal text-[1.1875rem] text-center text-black leading-6 w-[85%] mb-2">
          O melhor Cancelamento Ativo de Ruído do mundo em fones
          intra‑auriculares
        </p>
        <div className="flex gap-3 mt-2">
          <Link
            to="#"
            className="py-1.5 px-4 border border-azulClaro rounded-full shadow font-apple text-[0.875rem] bg-azulClaro text-white">
            Saiba mais
          </Link>
          <Link
            to="#"
            className="py-1.5 px-4 border border-azulClaro rounded-full shadow font-apple text-[0.875rem] text-azulClaro">
            Comprar
          </Link>
        </div>
      </div>
    </section>
  );
}
