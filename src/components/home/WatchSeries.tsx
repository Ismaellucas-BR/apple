import { Link } from "react-router";
import BgWatch from "../../assets/imgs/hero_apple_watch_ny__c8f1tzaoa72a_small_2x.jpg";
import LogoWhatch from "../../assets/imgs/hero_logo_watch_series_11__f2ctjn8ul926_small_2x.png";

export default function WatchSeries() {
  return (
    <section
      className="flex flex-col justify-start items-center bg-cinzaClaro bg-[center_top] bg-no-repeat bg-cover h-[31.25rem]"
      style={{
        backgroundImage: `url(${BgWatch})`,
      }}>
      <div className="flex flex-col justify-center items-center w-full gap-2 pt-10">
        <div className="flex justify-center items-center gap-2 w-[60%]">
          <img src={LogoWhatch} alt="" />
        </div>
        <p className="font-apple font-normal text-[1.1875rem] text-center leading-6 w-[85%]">
          Pratique suas promessas de Ano Novo. Desista de desistir das metas de
          exercício.
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
