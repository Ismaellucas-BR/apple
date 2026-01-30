import { Link } from "react-router";
import BgWatchUltra from "../../assets/imgs/home/promo_apple_watch_ultra3__bwvslhbxx99e_small_2x.jpg";
import LogoWatchUltra from "../../assets/imgs/home/promo_logo_apple_watch_ultra3_preorder__cjjbcy4rmg76_small_2x.png";

export default function WhatchUltra() {
  return (
    <section
      className="flex flex-col justify-start items-center bg-cinzaClaro bg-[center_top] bg-no-repeat bg-cover h-[34rem]"
      style={{
        backgroundImage: `url(${BgWatchUltra})`,
      }}>
      <div className="flex flex-col justify-center items-center w-full gap-2 pt-10">
        <div className="flex justify-center items-center gap-2 w-[60%]">
          <img src={LogoWatchUltra} alt="" />
        </div>
        <p className="font-apple font-normal text-[1.1875rem] text-center text-white leading-6 w-[85%]">
          Imparável.
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
