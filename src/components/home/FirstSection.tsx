import BgHero from "../../assets/imgs/home/bgHero.webp";
import Macbook from "../../assets/imgs/home/hero_sticker_mba__b0ht7774wpaq_small_2x.png";
import Airpad from "../../assets/imgs/home/hero_sticker_ipadair__bk6ffplndvte_small_2x.png";
import { Link } from "react-router";

export default function FirstSection() {
  return (
    <section
      style={{
        backgroundImage: `url(${BgHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col justify-center items-center gap-3 py-20 lg:py-10">
      <div className="flex flex-col justify-center items-center gap-1 leamsi-1">
        <h2 className="flex flex-col justify-center items-center relative text-black">
          <svg
            className="relative bubble-svg fill-[#007aff] w-2/3 lg:w-[90%]
    "
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            height="100%"
            viewBox="0 0 600 376"
            preserveAspectRatio="none">
            <path d="M598.332,110.48c-0.024-3.949-.07-7.9-0.177-11.845a171.642,171.642,0,0,0-2.271-25.778,86.9,86.9,0,0,0-8.092-24.517,82.511,82.511,0,0,0-36.1-36.036,87.243,87.243,0,0,0-24.547-8.075A172.489,172.489,0,0,0,501.312,1.96c-3.954-.107-7.91-0.152-11.865-0.176-4.7-.029-9.393-0.027-14.089-0.027H124c-4.7,0-9.392,0-14.088.027-3.956.024-7.911,0.07-11.866,0.176A172.5,172.5,0,0,0,72.215,4.228,87.239,87.239,0,0,0,47.668,12.3a82.5,82.5,0,0,0-36.1,36.036A86.892,86.892,0,0,0,3.476,72.856,171.772,171.772,0,0,0,1.2,98.635c-0.107,3.947-.153,7.9-0.177,11.845C1,115.168,1,119.856,1,124.545V251.8c0,4.689,0,9.377.026,14.064,0.024,3.95.07,7.9,0.177,11.846A171.789,171.789,0,0,0,3.476,303.49a86.884,86.884,0,0,0,8.093,24.517,82.5,82.5,0,0,0,36.1,36.035,87.2,87.2,0,0,0,24.547,8.075,172.365,172.365,0,0,0,25.833,2.269c3.955,0.107,7.91.152,11.866,0.177,4.7,0.028,9.392.027,14.088,0.027H475.358c4.7,0,9.392,0,14.089-.027,3.955-.025,7.911-0.07,11.865-0.177a172.358,172.358,0,0,0,25.833-2.269,87.207,87.207,0,0,0,24.547-8.075,82.5,82.5,0,0,0,36.1-36.035,86.893,86.893,0,0,0,8.092-24.517,171.659,171.659,0,0,0,2.271-25.779c0.107-3.948.153-7.9,0.177-11.846,0.029-4.687.026-9.375,0.026-14.064V124.545C598.358,119.856,598.361,115.168,598.332,110.48Z"></path>
            <foreignObject x="54" y="28" width="100%" height="100%">
              <p className="bubble-copy bubble-copy-1 text-white font-apple text-[4.5rem] font-semibold leading-20 w-2/3 ">
                Compre um Mac ou iPad para a faculdade
              </p>
            </foreignObject>
          </svg>
          <figure className="absolute top-0 right-0 icon icon-mba unit-image unit-image-bts-2025-hero-sticker-mba -translate-y-1/2 z-20 lg:-right-10 lg:top-10">
            <img
              className="h-[4.7rem] w-[6.375rem] lg:w-[8rem] lg:h-auto"
              src={Macbook}
              alt=""
            />
          </figure>
          <figure className=" absolute top-6 right-8 icon icon-ipadair unit-image unit-image-bts-2025-hero-sticker-ipadair z-10 lg:-right-4 lg:top-16 ">
            <img
              className="h-[4,4375rem] w-[3.625rem] lg:w-[5rem] lg:h-auto"
              src={Airpad}
              alt=""
            />
          </figure>
        </h2>
        <div className="flex flex-col justify-center items-center">
          <svg
            viewBox="0 0 614 94"
            className="w-2/3 h-auto fill-[#007aff] lg:w-[90%] lg:mt-5"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M598.708,68.2V46.847l-0.009.007A44.66,44.66,0,0,0,554.255,2.041L45.484,1.957a44.85,44.85,0,0,0-.052,89.7L554.2,91.739a44.091,44.091,0,0,0,29.025-10.847c0.054,0.063.1,0.127,0.157,0.192,13.2,15.237,27.881,9.657,27.881,9.657C603.816,89.025,598.708,78.722,598.708,68.2Z"></path>
            <foreignObject x="0" y="15" width="100%" height="100%">
              <p className="flex items-center px-8 text-white font-apple font-semibold text-[2.5rem]">
                Com desconto para educação.
              </p>
            </foreignObject>
          </svg>
        </div>
        <svg
          viewBox="0 0 628 480"
          className="w-2/3 h-auto fill-[#007aff] mt-3 lg:w-[90%]"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M597.967,425.7V358.788c0.01-1.075.025-2.15,0.031-3.225,0.032-5.247.03-10.493.03-15.74v-201.4c0-5.247,0-10.493-.03-15.74-0.027-4.42-.078-8.838-.2-13.257a192.469,192.469,0,0,0-2.541-28.85,97.261,97.261,0,0,0-9.052-27.439A92.311,92.311,0,0,0,545.827,12.8a97.567,97.567,0,0,0-27.458-9.037,193.015,193.015,0,0,0-28.9-2.539c-4.424-.119-8.848-.17-13.273-.2C470.947,1,465.694,1,460.44,1H138.588c-5.253,0-10.506,0-15.76.03-4.425.027-8.849.078-13.273.2a193.021,193.021,0,0,0-28.9,2.539A97.567,97.567,0,0,0,53.2,12.8,92.313,92.313,0,0,0,12.82,53.135,97.291,97.291,0,0,0,3.768,80.574a192.414,192.414,0,0,0-2.54,28.85c-0.119,4.419-.171,8.837-.2,13.257C1,127.928,1,133.174,1,138.421v201.4c0,5.247,0,10.493.029,15.74.027,4.42.078,8.838.2,13.257a192.405,192.405,0,0,0,2.54,28.85,97.291,97.291,0,0,0,9.052,27.439A92.307,92.307,0,0,0,53.2,465.439a97.573,97.573,0,0,0,27.458,9.037,192.94,192.94,0,0,0,28.9,2.539c4.424.119,8.848.17,13.273.2,5.254.031,10.507.029,15.76.029H460.44c5.254,0,10.507,0,15.76-.029,4.425-.028,8.849-.079,13.273-.2a192.934,192.934,0,0,0,28.9-2.539,97.573,97.573,0,0,0,27.458-9.037A92.356,92.356,0,0,0,563.751,453.5c0.111.132.212.271.326.4,29.183,33.379,61.661,21.155,61.661,21.155C609.264,471.3,597.967,448.731,597.967,425.7Z" />
          <foreignObject x="30" y="45" width="90%" height="100%">
            <p className="flex items-center px-8 text-white font-apple font-semibold text-[5rem] leading-20">
              E escolha: AirPods ou um acessório qualificado*
            </p>
          </foreignObject>
        </svg>
      </div>
      <Link
        to="#"
        className="py-1.5 px-6 border border-azulClaro rounded-full shadow font-apple text-[0.875rem] text-azulClaro lg:text-[1.1rem] lg:mt-7">
        Comprar
      </Link>
    </section>
  );
}
