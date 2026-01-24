import { Link } from "react-router";
import BgIPhone from "../../assets/imgs/hero_iphone_family__fuz5j2v5xx6y_small_2x.jpg";

export default function IPhoneSection() {
  return (
    <section
      className="flex flex-col justify-start items-center bg-cinzaClaro bg-[center_top] bg-no-repeat bg-cover h-[31.25rem]"
      style={{
        backgroundImage: `url(${BgIPhone})`,
      }}>
      <div className="flex flex-col justify-center items-center w-full gap-2 pt-10">
        <h2 className="font-apple font-semibold text-[2rem] leading-6">
          iPhone
        </h2>
        <p className="font-apple font-normal text-[1.1875rem] text-center leading-6 w-1/2">
          Conheça a nova geração do iPhone.
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
            Comprar iPhone
          </Link>
        </div>
      </div>
    </section>
  );
}
