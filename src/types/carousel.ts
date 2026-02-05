export type CarouselItem = {
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
  postitle?: string;
  pretitle?: string;
  extraClasseColor?: string;
  productCard?: boolean;
  productImg?: string;
  header?: boolean;
  extraClasseColorSubtitle?: string;
  colors?: string[];
};
export type ProductColor = {
  id: string;
  image: string;
  label?: string;
};
