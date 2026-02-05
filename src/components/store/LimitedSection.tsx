import { HalfCarousel } from "./Carrossel/HalfCarousel";
import type { CarouselItem } from "../../types/carousel";
interface LimitedSectionProps {
  title: string;
  subtitle?: string;
  items: CarouselItem[];
  className?: string;
}

export function LimitedSection({
  title,
  subtitle,
  items,
  className = "",
}: LimitedSectionProps) {
  return (
    <div
      className={`flex flex-col justify-center items-start w-full ${className}`}>
      <div className="font-apple font-semibold text-[1.5rem] leading-8 mt-10 mb-5">
        <h2 className="text-CinzaEscuro">{title}</h2>

        {subtitle && <span className="text-CinzaMedio">{subtitle}</span>}
      </div>

      <HalfCarousel items={items} />
    </div>
  );
}
