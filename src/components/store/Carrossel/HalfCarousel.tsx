import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import MortarBoard from "../../../assets/svgs/Mortarboard";
import type { CarouselItem } from "../../../types/carousel";
import ProductsColors from "../ProductsColors";

type CarouselProps = {
  items: CarouselItem[];
};

export function HalfCarousel({ items }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

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

  return (
    <div className="w-full max-w-5xl mx-auto pb-10 lg:mx-0">
      {/* SLIDES */}
      <div ref={emblaRef}>
        <div className="flex gap-4 md:gap-7">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_80%] md:flex-[0_0_55%] lg:flex-[0_0_40%]">
              <div className="relative h-[28.125rem] rounded-2xl shadow-xl overflow-hidden bg-white md:h-[31.25rem]">
                {/* Background */}
                {!item.productCard && (
                  <picture className="absolute inset-0 xl:-top-16">
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
                )}
                {/* Content */}
                {!item.productCard && (
                  <div className="relative z-10 h-full p-6 flex flex-col justify-start items-start gap-3">
                    {item.logo && (
                      <img src={item.logo} alt="" className="md:hidden w-1/3" />
                    )}

                    {item.validOffer ? (
                      <div className="flex flex-col gap-1">
                        {item.pretitle && (
                          <p
                            className={`font-apple font-semibold text-[0.75rem] ${
                              item.extraClasseColor || "text-[#424245]"
                            }`}>
                            {item.pretitle}
                          </p>
                        )}
                        <p
                          className={`font-apple font-semibold leading-7 text-[1.375rem] whitespace-pre-line  ${
                            item.extraClasseColor || "text-CinzaEscuro"
                          }`}>
                          {item.title}
                        </p>
                        {item.subtitle && (
                          <p
                            className={`font-apple font-semibold leading-7 text-[1rem] whitespace-pre-line ${
                              item.extraClasseColorSubtitle ||
                              "text-CinzaEscuro"
                            }`}>
                            {item.subtitle}
                          </p>
                        )}
                        {item.postitle && (
                          <p
                            className={`font-apple text-[1.1rem] ${
                              item.extraClasseColor || "text-CinzaEscuro"
                            }`}>
                            {item.postitle}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="w-full">
                        <div className="flex justify-between items-center gap-1">
                          <span className="font-apple font-semibold text-[0.75rem] text-[#b64400]">
                            OFERTA VÁLIDA
                          </span>
                          <MortarBoard />
                        </div>

                        <p className="flex flex-col gap-1 text-start text-[1rem] md:text-[1.125rem] leading-tight text-CinzaEscuro">
                          <span className="font-apple font-semibold text-[#1d1d1f] text-[1.375rem] whitespace-pre-line">
                            {item.title}
                          </span>

                          <span className="font-apple font-semibold text-[1.1rem] leading-7 bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent">
                            {item.subtitle}
                          </span>

                          <span>{item.spanContent}</span>
                        </p>
                      </div>
                    )}
                  </div>
                )}
                {item.productCard && (
                  <div className="flex flex-col justify-between items-center gap-1 p-5 h-full">
                    <div className="flex  flex-col items-center justify-end w-full">
                      {item.header != false && (
                        <div className="flex justify-end w-full">
                          <MortarBoard />
                        </div>
                      )}
                      <img
                        src={item.productImg}
                        alt={item.title}
                        className="w-[12.375rem] h-[12.375rem]"
                      />
                    </div>
                    {item.productCard && item.colors && (
                      <ProductsColors colors={item.colors} />
                    )}
                    <div className="flex flex-col justify-start w-full px-5 mt-5 gap-1">
                      <h2 className="font-apple text-[1.1rem] text-CinzaEscuro font-semibold line-clamp-2 min-h-[2.625rem] whitespace-pre-line">
                        {item.title}
                      </h2>
                      <span className="font-apple text-[0.875rem] text-CinzaEscuro font-normal">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
