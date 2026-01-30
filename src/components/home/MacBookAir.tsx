import { Link } from "react-router";
import BgMacBookAir from "../../assets/imgs/home/promo_macbook_air__fqowrtnxewqe_small_2x.jpg";

export default function MacBookAir() {
  return (
    <section
      className="flex flex-col justify-start items-center bg-cinzaClaro bg-[center_top] bg-no-repeat bg-cover h-[31.25rem]"
      style={{
        backgroundImage: `url(${BgMacBookAir})`,
      }}>
      <div className="flex flex-col justify-center items-center w-full pt-10">
        <div className="flex justify-center items-center w-[80%]">
          <h2 className="font-apple font-semibold text-black text-[2rem] tracking-tight lg:text-[2.5rem]">
            MacBook Air
          </h2>
        </div>
        <p className="font-apple font-normal text-[1.1875rem] text-center text-black leading-6 w-[85%] mb-2">
          Tudo azul. <br></br>
          Na cor e no desempenho do M4.
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
