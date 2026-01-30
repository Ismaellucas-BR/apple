import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "@phosphor-icons/react";

type CarouselItem = {
  bgImage?: string;
  bgTabletImage?: string;
  logo?: string;
  category?: string;
  title?: string;
  subtitle?: string;
  spanContent?: string;
  buttonText?: string;
  link?: string;
  validOffer?: boolean;
};

type CarouselProps = {
  items: CarouselItem[];
};

export function HalfCarousel({ items }: CarouselProps) {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: false,
      containScroll: "trimSnaps",
    },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const toggleAutoplay = () => {
    if (!emblaApi) return;

    isPlaying ? autoplay.current.stop() : autoplay.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full max-w-5xl mx-auto pb-10">
      {/* SLIDES */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-4 md:gap-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_80%] md:flex-[0_0_70%] shadow rounded-lg">
              <div className="relative flex flex-col justify-center items-start h-[28.125rem] md:h-[22rem] text-white">
                {/* Background */}
                <picture className="absolute inset-0">
                  {item.bgTabletImage && (
                    <source
                      media="(min-width: 768px)"
                      srcSet={item.bgTabletImage}
                    />
                  )}
                  <img
                    src={item.bgImage}
                    alt=""
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </picture>

                {/* Content */}
                <div className="relative z-10 h-full p-6 flex flex-col justify-start items-start gap-3">
                  {item.logo && (
                    <img src={item.logo} alt="" className="md:hidden w-1/3" />
                  )}
                  {item.validOffer ? (
                    <>
                      <p className="text-red-400 font-semibold">
                        OFERTA VÁLIDA
                      </p>
                      <p className="text-sm opacity-80 text-CinzaEscuro">
                        Essa oferta não está mais disponível
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-center md:text-left text-[1rem] md:text-[1.125rem] leading-tight text-CinzaEscuro">
                        <span className="font-bold">{item.category}</span>
                        <span className="inline-block mx-1">·</span>
                        <span>{item.subtitle}</span>
                      </p>

                      <p className="text-sm opacity-90 text-CinzaEscuro">
                        Condições especiais por tempo limitado
                      </p>

                      <p className="text-xs opacity-70 text-CinzaEscuro">
                        Sujeito à disponibilidade
                      </p>
                    </>
                  )}

                  <a
                    href={item.link}
                    className="shrink-0 bg-cinzaClaro text-black rounded-full py-1.5 px-4 text-sm shadow">
                    {item.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTROLS */}
      <div className="relative mt-6 flex items-center justify-center">
        {/* Bullets */}
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition
                ${i === selectedIndex ? "bg-black/80" : "bg-gray-400"}`}
            />
          ))}
        </div>

        {/* Play / Pause */}
        <button
          onClick={toggleAutoplay}
          className="absolute right-4 bg-cinzaClaro p-2 rounded-full shadow">
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
    </div>
  );
}
