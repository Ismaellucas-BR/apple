import { PRODUCT_COLORS_MAP } from "../../data/productColors";
type ProductsColorsProps = {
  colors: string[];
};

export default function ProductsColors({ colors }: ProductsColorsProps) {
  return (
    <div className="flex gap-2">
      {colors.map((colorId) => {
        const color = PRODUCT_COLORS_MAP[colorId];

        if (!color) return null;

        return (
          <img
            key={color.id}
            src={color.image}
            alt={color.label}
            className="w-3 h-3 rounded-full"
          />
        );
      })}
    </div>
  );
}
