import Mac from "../../assets/imgs/store/HeroSection/store-card-13-mac-nav-202510.png";
import IPad from "../../assets/imgs/store/HeroSection/store-card-13-ipad-nav-202405.png";
import IPhone from "../../assets/imgs/store/HeroSection/store-card-13-iphone-nav-202509.png";
import Watch from "../../assets/imgs/store/HeroSection/store-card-13-watch-nav-202509_GEO_BR.png";
import AirPods from "../../assets/imgs/store/HeroSection/store-card-13-airpods-nav-202509.png";
import AirTags from "../../assets/imgs/store/HeroSection/store-card-13-airtags-nav-202601.png";
import AppleTv from "../../assets/imgs/store/HeroSection/store-card-13-appletv-nav-202210.png";
import Acessorios from "../../assets/imgs/store/HeroSection/store-card-13-accessories-nav-202509.png";
export default function HeroSection() {
  const SlidesItems = [
    {
      id: 0,
      urlImg: Mac,
      content: "Mac",
    },
    {
      id: 1,
      urlImg: IPad,
      content: "iPad",
    },
    {
      id: 2,
      urlImg: IPhone,
      content: "iPhone",
    },
    {
      id: 3,
      urlImg: Watch,
      content: "Apple Watch",
    },
    {
      id: 4,
      urlImg: AirPods,
      content: "AirPods",
    },
    {
      id: 5,
      urlImg: AirTags,
      content: "AirTag",
    },
    {
      id: 6,
      urlImg: AppleTv,
      content: "Apple TV",
    },
    {
      id: 7,
      urlImg: Acessorios,
      content: "Acessórios",
    },
  ];

  return (
    <section className="flex flex-col justify-center w-[90%] md:pt-10">
      <div className="flex flex-col gap-6">
        <h1 className="font-apple font-semibold text-verdeClaro text-[3rem] leading-12 w-[90%] md:text-[5rem] md:leading-20 md:w-5/6 lg:w-2/3">
          Apple Store para Educação
        </h1>
        <span className="font-apple font-semibold text-[1.375rem] text-CinzaEscuro leading-5">
          As ferramentas mais poderosas para aprender.
        </span>
      </div>
      <div>
        <div className="mt-10 scrollbar-hide">
          <div
            className="
      flex gap-4
      overflow-x-auto
      scrollbar-hide
      snap-x snap-mandatory
      px-1
    ">
            {SlidesItems.map((item) => (
              <div
                key={item.id}
                className="
          shrink-0
          w-[25%]
          snap-start
          flex flex-col items-center lg:w-[15%]
        ">
                <img
                  src={item.urlImg}
                  alt={item.content}
                  className="h-16 w-auto object-contain md:h-[5rem]"
                />

                <span className="mt-2 font-apple text-sm font-medium text-CinzaEscuro text-center">
                  {item.content}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
