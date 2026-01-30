import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "@phosphor-icons/react";

import BgSuspeito from "../../assets/imgs/home/Slide/Sequestro548x1186.jpg";
import LogoSuspeito from "../../assets/imgs/home/Slide/LogoSequestro1096x160.png";
import BgSuspeitoTablet from "../../assets/imgs/home/Slide/tablet/SequestroTablet1378x774.jpg";
import BgGotasDivinas from "../../assets/imgs/home/Slide/GotasDivinas548x1186.jpg";
import LogoGotasDivinas from "../../assets/imgs/home/Slide/GotasDivinas1096x128.png";
import BgGotasDivinasTablet from "../../assets/imgs/home/Slide/tablet/gotasdivinasTablet1378x774.jpg";
import BgF1 from "../../assets/imgs/home/Slide/F1548x1186.jpg";
import LogoF1 from "../../assets/imgs/home/Slide/LogoF11096x628.png";
import BgF1Tablet from "../../assets/imgs/home/Slide/tablet/F1Tablet1378x774.jpg";
import BgOnibusPerdido from "../../assets/imgs/home/Slide/oOnibusPerdido548x1186.jpg";
import LogoOnibusPerdido from "../../assets/imgs/home/Slide/oOnibusPerdido1096x156.png";
import BgOnibusPerdidoTablet from "../../assets/imgs/home/Slide/tablet/OnibusPerdidoTablet1378x774.jpg";
import BgPluribus from "../../assets/imgs/home/Slide/Pluribus548x1186.jpg";
import LogoPluribus from "../../assets/imgs/home/Slide/pluribus1096x188.png";
import BgPluribusTablet from "../../assets/imgs/home/Slide/tablet/PluribusTablet1378x774.jpg";
import BgTeera from "../../assets/imgs/home/Slide/teera548x1186.jpg";
import LogoTeera from "../../assets/imgs/home/Slide/Logoteera.png";
import BgTeeraTablet from "../../assets/imgs/home/Slide/tablet/teeraTablet1378x774.jpg";

const slides = [
  {
    id: 1,
    content: {
      bgUrl: BgSuspeito,
      bgTabletUrl: BgSuspeitoTablet,
      LogoUrl: LogoSuspeito,
      altLogo: "Sequestro",
      category: "Suspense",
      subTitle: " Em quem confiar quando tudo sai dos trilhos?",
      urlButton: "#",
      ClasseExtra: " ",
    },
  },
  {
    id: 2,
    content: {
      bgUrl: BgGotasDivinas,
      LogoUrl: LogoGotasDivinas,
      bgTabletUrl: BgGotasDivinasTablet,
      altLogo: "Gotas Divinas",
      category: "Drama",
      subTitle: "Uma harmonização impossível.",
      urlButton: "#",
      ClasseExtra: " ",
    },
  },
  {
    id: 3,
    content: {
      bgUrl: BgF1,
      LogoUrl: LogoF1,
      bgTabletUrl: BgF1Tablet,
      altLogo: "Formula 1",
      category: "Ação",
      subTitle:
        "Um piloto lendário volta às pistas nesta história eletrizante.",
      urlButton: "#",
      ClasseExtra: "h-[3.375rem]",
    },
  },
  {
    id: 4,
    content: {
      bgUrl: BgOnibusPerdido,
      LogoUrl: LogoOnibusPerdido,
      bgTabletUrl: BgOnibusPerdidoTablet,
      altLogo: "o onibus perdido",
      category: "Suspense",
      subTitle: " Inspirado em uma história real de sobrevivência.",
      urlButton: "#",
      ClasseExtra: "",
    },
  },
  {
    id: 5,
    content: {
      bgUrl: BgPluribus,
      LogoUrl: LogoPluribus,
      bgTabletUrl: BgPluribusTablet,
      altLogo: "Pluribus",
      category: "Drama",
      subTitle: "Felicidade é um estado de espírito.",
      urlButton: "#",
      ClasseExtra: "",
    },
  },
  {
    id: 6,
    content: {
      bgUrl: BgTeera,
      LogoUrl: LogoTeera,
      bgTabletUrl: BgTeeraTablet,
      altLogo: "Teerã",
      category: "Suspense",
      subTitle:
        "Uma agente secreta embarca em sua missão mais perigosa até agora.",
      urlButton: "#",
      ClasseExtra: "h-[3.375rem]",
    },
  },
];

export default function CenterCarousel() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: "trimSnaps",
    },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const toggleAutoplay = () => {
    if (!emblaApi) return;

    if (isPlaying) {
      autoplay.current.stop();
    } else {
      autoplay.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full max-w-[100rem] mx-auto pb-10">
      {/* SLIDES */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 md:gap-2">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="flex-[0_0_70%] md:flex-[0_0_85%] lg:flex-[0_0_65%]">
              <div
                className={`relative h-[33rem] flex items-center justify-center text-white text-2xl transition-transform duration-300 bg-cover bg-end bg-no-repeat
                ${
                  index === selectedIndex
                    ? "opacity-100"
                    : "scale-95 opacity-50"
                } md:h-[23rem] lg:h-[33rem]`}>
                <picture className="absolute inset-0 z-0">
                  <source
                    media="(min-width: 768px)"
                    srcSet={slide.content.bgTabletUrl}
                  />
                  <img
                    src={slide.content.bgUrl}
                    alt=""
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </picture>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div className="flex flex-col justify-between items-center h-full w-full p-7 z-20 md:justify-end md:items-start">
                  <img
                    src={slide.content.LogoUrl}
                    alt={`Logo escrita ${slide.content.altLogo}`}
                    className={`md:hidden ${
                      slide.content.ClasseExtra ?? "w-1/3"
                    }`}
                  />
                  <div
                    className={`
    flex flex-col justify-center items-center
    transition-all duration-700 ease-out
    ${
      index === selectedIndex
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-6"
    }
  md:flex-row-reverse md:gap-3 `}>
                    <div className="flex flex-col justify-center items-center md:flex-row md:gap-1 md:hidden">
                      <h3 className="font-apple font-bold text-[1rem]! md:text-[1.125rem]">
                        {slide.content.category}
                      </h3>

                      <span className="hidden md:inline-block w-1 h-1 rounded-full bg-white translate-y-[1px]" />
                      <p className="font-apple font-normal text-center text-[1rem]! md:text-[1.125rem]">
                        {slide.content.subTitle}
                      </p>
                    </div>
                    <div className="hidden flex-col justify-center items-center md:flex-row md:gap-1 md:flex">
                      <p className="font-apple text-center md:text-left text-[1rem] md:text-[1.125rem] leading-tight lg:text-[1.25rem]">
                        <span className="font-bold">
                          {slide.content.category}
                        </span>

                        <span className="hidden md:inline-block w-1 h-1 rounded-full bg-white translate-y-[-3px] mx-1" />

                        <span className="block md:inline">
                          {slide.content.subTitle}
                        </span>
                      </p>
                    </div>
                    <a
                      href={slide.content.urlButton}
                      className="shrink-0 whitespace-nowrap font-apple text-[1rem] bg-cinzaClaro text-black leading-3 rounded-full py-4 px-6 shadow mt-3 md:mt-0 lg:text-[1.1rem]">
                      Assista agora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTROLS */}
      <div className="relative mt-6 flex items-center justify-center pr-4">
        {/* BULLETS (centro real) */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition
          ${index === selectedIndex ? "bg-black/80" : "bg-gray-400"}`}
            />
          ))}
        </div>

        {/* PLAY / PAUSE (canto direito) */}
        <button
          onClick={toggleAutoplay}
          className="absolute right-5 text-sm font-medium bg-cinzaClaro rounded-full p-2 hover:text-black shadow">
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
    </div>
  );
}
