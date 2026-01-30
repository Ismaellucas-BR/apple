import { Link } from "react-router";
import BgWatch from "../../assets/imgs/home/hero_apple_watch_ny__c8f1tzaoa72a_small_2x.jpg";
import LogoWhatch from "../../assets/imgs/home/hero_logo_watch_series_11__f2ctjn8ul926_small_2x.png";

export default function WatchSeries() {
  return (
    <section
      className="flex flex-col justify-start items-center bg-cinzaClaro bg-[center_top] bg-no-repeat bg-cover h-[31.25rem] lg:h-[35.625rem] lg:bg-[center]"
      style={{
        backgroundImage: `url(${BgWatch})`,
      }}>
      <div className="flex flex-col justify-center items-center w-full gap-2 pt-10">
        <div className="flex justify-center items-center gap-2 w-[60%]">
          <img src={LogoWhatch} alt="" className="md:w-[80%] lg:w-[60%]" />
        </div>
        <p className="font-apple font-normal text-[1.1875rem] text-center leading-6 w-[85%] md:text-2xl md:hidden">
          Pratique suas promessas de Ano Novo. Desista de desistir das metas de
          exercício.
        </p>
        <p className=" hidden justify-center items-center font-apple font-normal text-[1.1875rem] text-center leading-6 w-[85%] md:text-2xl md:flex">
          Pratique suas promessas de Ano Novo. <br></br>Desista de desistir das
          metas de exercício.
        </p>
        <div className="flex gap-3 mt-2">
          <Link
            to="#"
            className="py-1.5 px-4 border border-azulClaro rounded-full shadow font-apple text-[0.875rem] bg-azulClaro text-white md:text-[1.0625rem]">
            Saiba mais
          </Link>
          <Link
            to="#"
            className="py-1.5 px-4 border border-azulClaro rounded-full shadow font-apple text-[0.875rem] text-azulClaro md:text-[1.0625rem]">
            Comprar
          </Link>
        </div>
      </div>
    </section>
  );
}
