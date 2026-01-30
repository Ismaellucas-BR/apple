import { Link } from "react-router";
import BgMacbookPro from "../../assets/imgs/home/promo_macbook_pro_m5__gnwzdhijhm6a_small_2x.jpg";

export default function MacbookPro() {
  return (
    <section
      className="flex flex-col justify-start items-center bg-cinzaClaro bg-[center_top] bg-no-repeat bg-cover h-[34rem]"
      style={{
        backgroundImage: `url(${BgMacbookPro})`,
      }}>
      <div className="flex flex-col justify-center items-center w-full pt-10">
        <div className="flex justify-center items-center w-[80%] lg:w-[90%]">
          <h2 className="font-apple font-semibold text-white text-[2rem] tracking-tight md:hidden lg:text-[2.5rem] lg:flex">
            MacBook Pro de 14 pol.
          </h2>
          <h2 className="hidden font-apple font-semibold text-white text-[2rem] tracking-tight md:flex text-center leading-9 lg:hidden">
            MacBook Pro<br></br> de 14 pol.
          </h2>
        </div>
        <p className="font-apple font-normal text-[1.1875rem] text-center text-white leading-6 w-[85%] mb-2">
          Com a potência do M5.
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
