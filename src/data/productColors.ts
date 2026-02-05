import WhiteColor from "../assets/imgs/store/LimitedTimeSection/colors/white_SW_COLOR.jfif";
import BlackColor from "../assets/imgs/store/LimitedTimeSection/colors/black_SW_COLOR.jfif";
import YellowColor from "../assets/imgs/store/LimitedTimeSection/colors/yellow_SW_COLOR.jfif";
import BlueColor from "../assets/imgs/store/LimitedTimeSection/colors/blue_SW_COLOR.jfif";
import OrangeColor from "../assets/imgs/store/LimitedTimeSection/colors/orange_SW_COLOR.jfif";
import OrangeDarkColor from "../assets/imgs/store/LimitedTimeSection/colors/orangeDark_SW_COLOR.jfif";
import PurpleColor from "../assets/imgs/store/LimitedTimeSection/colors/purple_SW_COLOR.jfif";

import type { ProductColor } from "../types/carousel";

export const PRODUCT_COLORS_MAP: Record<string, ProductColor> = {
  white: {
    id: "white",
    image: WhiteColor,
    label: "Branco",
  },
  black: {
    id: "black",
    image: BlackColor,
    label: "Preto",
  },
  yellow: {
    id: "yellow",
    image: YellowColor,
    label: "Amarelo",
  },
  blue: {
    id: "blue",
    image: BlueColor,
    label: "Azul",
  },
  orange: {
    id: "orange",
    image: OrangeColor,
    label: "Laranja",
  },
  orangeDark: {
    id: "orangedark",
    image: OrangeDarkColor,
    label: "Laranja-escuro",
  },
  purple: {
    id: "purple",
    image: PurpleColor,
    label: "Purple",
  },
};
