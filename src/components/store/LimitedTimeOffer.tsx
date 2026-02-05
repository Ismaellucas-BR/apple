import { LimitedSection } from "./LimitedSection";
//slide1
import IpadAir from "../../assets/imgs/store/LimitedTimeSection/slide1/store-card-40-bts-ipad-air-202505_GEO_BR_FMT_WHH.jfif";
import MacBookAir from "../../assets/imgs/store/LimitedTimeSection/slide1/store-card-40-bts-macbook-air-202505_GEO_BR_FMT_WHH.jfif";
import MacBookPro from "../../assets/imgs/store/LimitedTimeSection/slide1/store-card-40-bts-macbook-pro-202505_FMT_WHH.jfif";
import IpadPro from "../../assets/imgs/store/LimitedTimeSection/slide1/store-card-40-bts-ipad-pro-202505_GEO_BR_FMT_WHH.jfif";
import IMac from "../../assets/imgs/store/LimitedTimeSection/slide1/store-card-40-bts-imac-202505_GEO_BR_FMT_WHH.jfif";
import StoreCard from "../../assets/imgs/store/LimitedTimeSection/slide1/store-card-40-bts-offer-featured-202505_GEO_BR_FMT_WHH.jfif";
//slide 2
import Savings from "../../assets/imgs/store/LimitedTimeSection/slide2/store-card-40-bts-savings-202505_FMT_WHH.jfif";
import AppleMusic from "../../assets/imgs/store/LimitedTimeSection/slide2/store-card-40-bts-apple-music-tv-202505_FMT_WHH.jfif";
import Financing from "../../assets/imgs/store/LimitedTimeSection/slide2/store-card-40-bts-financing-202505_FMT_WHH.jfif";
import Customize from "../../assets/imgs/store/LimitedTimeSection/slide2/store-card-40-bts-customize-202505_FMT_WHH.jfif";
import AppleCreator from "../../assets/imgs/store/LimitedTimeSection/slide2/store-card-40-bts-apple-creator-studio-202601_FMT_WHH.jfif";
import Specialist from "../../assets/imgs/store/LimitedTimeSection/slide2/store-card-40-bts-specialist-202505_FMT_WHH.jfif";
//slide3
import Accessories from "../../assets/imgs/store/LimitedTimeSection/slide3/store-card-40-bts-accessories-202505_GEO_BR_FMT_WHH.jfif";
import Pen from "../../assets/imgs/store/LimitedTimeSection/slide3/MX2D3.jfif";
import MacBook from "../../assets/imgs/store/LimitedTimeSection/slide3/MGYY4.jfif";
import AirpodsPro from "../../assets/imgs/store/LimitedTimeSection/slide3/airpods-pro-3-hero-select-202509_FMT_WHH.jfif";
import CapaIPhone from "../../assets/imgs/store/LimitedTimeSection/slide3/MGFJ4.jfif";
import MacBookIngles from "../../assets/imgs/store/LimitedTimeSection/slide3/MWR53.jfif";
import Carregador from "../../assets/imgs/store/LimitedTimeSection/slide3/MNWP3_GEO_BR.jfif";
//slide4
import appleCollege from "../../assets/imgs/store/LimitedTimeSection/slide4/store-card-50-edu-apple-college-202404_FMT_WHH.jfif";
import eduCommunity from "../../assets/imgs/store/LimitedTimeSection/slide4/store-card-50-edu-community-202404_GEO_BR_FMT_WHH.jfif";
import eduSuccess from "../../assets/imgs/store/LimitedTimeSection/slide4/store-card-40-edu-success-202404_GEO_BR_FMT_WHH.jfif";
import eduSwift from "../../assets/imgs/store/LimitedTimeSection/slide4/store-card-40-edu-swift-202510_FMT_WHH.jfif";
import eduCareers from "../../assets/imgs/store/LimitedTimeSection/slide4/store-card-40-edu-careers-202404_FMT_WHH.jfif";
//slide5
import iphone17Pro from "../../assets/imgs/store/LimitedTimeSection/slide5/store-card-40-iphone-17-pro-202509_FMT_WHH.jfif";
import iphoneAir from "../../assets/imgs/store/LimitedTimeSection/slide5/store-card-40-iphone-air-202509_FMT_WHH.jfif";
import iphone17 from "../../assets/imgs/store/LimitedTimeSection/slide5/store-card-40-iphone-17-202509_FMT_WHH.jfif";
import watchS11 from "../../assets/imgs/store/LimitedTimeSection/slide5/store-card-40-watch-s11-202509_GEO_BR_FMT_WHH.jfif";
import watchSe from "../../assets/imgs/store/LimitedTimeSection/slide5/store-card-40-watch-se-202509_GEO_BR_FMT_WHH.jfif";
import watchUltra from "../../assets/imgs/store/LimitedTimeSection/slide5/store-card-40-watch-ultra-202509_GEO_BR_FMT_WHH.jfif";
import eduAirpodsPro from "../../assets/imgs/store/LimitedTimeSection/slide5/store-card-40-edu-airpods-pro-202509_FMT_WHH.jfif";

const products = [
  {
    id: 0,
    title:
      "Economize no Mac ou iPad para a faculdade. E escolha: AirPods ou um acessório qualificado",
    bgImage: StoreCard,
    validOffer: true,
  },
  {
    id: 1,
    title: "iPad Air",
    subtitle: "Apple Intelligence",
    spanContent: "A partir de R$ 6.869 com desconto para educação",
    bgImage: IpadAir,
    validOffer: false,
  },
  {
    id: 2,
    title: "MacBook Air",
    subtitle: "Apple Intelligence",
    spanContent: "A partir de R$ 11.799 com desconto para educação",
    bgImage: MacBookAir,
    validOffer: false,
  },
  {
    id: 3,
    title: "MacBook Pro",
    subtitle: "Apple Intelligence",
    spanContent: "A partir de R$ 18.799 com desconto para educação",
    bgImage: MacBookPro,
    validOffer: false,
  },
  {
    id: 4,
    title: "iPad Pro",
    subtitle: "Apple Intelligence",
    spanContent: "A partir de R$ 11.299 com desconto para educação",
    bgImage: IpadPro,
    validOffer: false,
  },
  {
    id: 5,
    title: "iMac",
    subtitle: "Apple Intelligence",
    spanContent: "A partir de R$ 14.899 com desconto para educação",
    bgImage: IMac,
    validOffer: false,
  },
];
const products2 = [
  {
    id: 0,
    title: "Saiba mais sobre os descontos para educação. Só na Apple",
    bgImage: Savings,
    validOffer: true,
  },
  {
    id: 1,
    title: "A Assinatura Universitária do Apple Music vem com Apple TV grátis",
    postitle: "Preço especial para estudantes.",
    bgImage: AppleMusic,
    validOffer: true,
  },
  {
    id: 2,
    pretitle: "PARCELAS MENSAIS SUAVES",
    title: "Pague à vista ou parcelado. Você escolhe.",
    bgImage: Financing,
    validOffer: true,
  },
  {
    id: 3,
    pretitle: "PERSONALIZE SEU MAC",
    title: "Deixe do jeito que quiser.",
    postitle:
      "Na memória, no armazenamento, na capacidade gráfica e até nas cores.",
    bgImage: Customize,
    validOffer: true,
  },
  {
    id: 5,
    pretitle: "APPLE CREATOR STUDIO",
    title: "R$ 14,90 por mês para estudantes e profissionais da educação.",
    postitle:
      "O Apple Creator Studio inclui Final Cut Pro, Logic Pro, Pixelmator Pro, apps de produtividade avançados e muito mais.",
    bgImage: AppleCreator,
    validOffer: true,
    extraClasseColor: "text-white",
  },
  {
    id: 6,
    title: "Compre com a ajuda de especialistas. Na Apple Store ou online.   ",
    bgImage: Specialist,
    validOffer: true,
  },
];
const products3 = [
  {
    id: 0,
    title: "Reúna seu grupo de estudos.",
    bgImage: Accessories,
    validOffer: true,
  },
  {
    id: 1,
    title: "Apple Pencil Pro",
    subtitle: "R$ 1.379,00 com desconto para educação",
    productImg: Pen,
    validOffer: true,
    productCard: true,
  },
  {
    id: 2,
    title:
      "Magic Keyboard para iPad Air de 13 polegadas (M3) – Inglês (EUA) – Preto",
    subtitle: "R$ 3.089,00 com desconto para educação",
    productImg: MacBook,
    validOffer: true,
    productCard: true,
    colors: ["white", "black"],
  },
  {
    id: 3,
    title: "AirPods Pro 3",
    subtitle: "R$ 2.699,00",
    productImg: AirpodsPro,
    validOffer: true,
    productCard: true,
  },
  {
    id: 4,
    title: "Capa de silicone com MagSafe para iPhone 17 Pro – Terracota",
    subtitle: "R$ 569,00",
    productImg: CapaIPhone,
    validOffer: true,
    productCard: true,
    colors: [
      "yellow",
      "purple",
      "blue",
      "orange",
      "orangeDark",
      "white",
      "black",
    ],
  },
  {
    id: 5,
    title:
      "Magic Keyboard para iPad Pro de 13 polegadas (M5) – Inglês (EUA) – Preto",
    subtitle: "R$ 3.579,00 com desconto para educação",
    productImg: MacBookIngles,
    validOffer: true,
    productCard: true,
    colors: ["white", "black"],
  },
  {
    id: 6,
    title: "Adaptador de energia USB-C de 35W com duas portas",
    subtitle: "R$ 559,00",
    productImg: Carregador,
    validOffer: true,
    productCard: true,
    header: false,
  },
];
const slide4 = [
  {
    id: 0,
    pretitle: "APPLE PARA A UNIVERSIDADE ",
    title: "Geniais nas suas classes. Na faculdade e fora dela.",
    postitle:
      "Arrase em qualquer curso ou projeto paralelo com um Mac e um iPad.",
    bgImage: appleCollege,
    validOffer: true,
    extraClasseColor: "text-white",
  },
  {
    id: 1,
    pretitle: "APPLE EDUCATION COMMUNITY",
    title: "Acesse novas ideias e recursos gratuitos para ensinar com a Apple.",
    postitle:
      "Acesse novas ideias e recursos gratuitos para ensinar com a Apple.",
    bgImage: eduCommunity,
    validOffer: true,
  },
  {
    id: 2,
    title: "Conheça histórias de sucesso.",
    postitle:
      "Inspire-se com estudantes e profissionais que compartilham suas histórias com a Apple.",
    bgImage: eduSuccess,
    validOffer: true,
  },
  {
    id: 3,
    pretitle: "APRENDA A CRIAR APPS",
    title: "Aprenda mais sobre o Swift.",
    postitle:
      "Descubra ferramentas que levam você da primeira linha de código até seu primeiro app.",
    bgImage: eduSwift,
    validOffer: true,
  },
  {
    id: 4,
    pretitle: "Para o alto e além.",
    title: "Faça sua carreira voar com oportunidades de estágio e emprego.",
    bgImage: eduCareers,
    validOffer: true,
  },
];
const slide5 = [
  {
    id: 0,
    title: "iPhone 17 Pro",
    subtitle: "Pro em tudo.",
    postitle: "A partir de R$ 11.499",
    bgImage: iphone17Pro,
    validOffer: true,
    extraClasseColor: "text-white",
    extraClasseColorSubtitle: "text-white",
  },
  {
    id: 1,
    title: "iPhone Air",
    subtitle: "O iPhone mais fino já feito.",
    postitle: "A partir de R$ 10.499",
    bgImage: iphoneAir,
    validOffer: true,
  },
  {
    id: 2,
    title: "iPhone 17",
    subtitle: "Magicolorido.",
    postitle: "A partir de R$ 7.999",
    bgImage: iphone17,
    validOffer: true,
  },
  {
    id: 3,
    title: "Apple Watch Series 11",
    subtitle: "O parceiro ideal para cuidar da sua saúde.",
    postitle: "A partir de R$ 5.499",
    bgImage: watchS11,
    validOffer: true,
  },
  {
    id: 4,
    title: "Apple Watch SE 3",
    subtitle: "Treinar. Falar. Saber. Amar.",
    postitle: "A partir de R$ 3.299",
    bgImage: watchSe,
    validOffer: true,
  },
  {
    id: 5,
    title: "Apple Watch Ultra 3",
    subtitle: "Imparável.",
    postitle: "A partir de R$ 10.499",
    bgImage: watchUltra,
    validOffer: true,
    extraClasseColor: "text-white",
    extraClasseColorSubtitle: "text-white",
  },
  {
    id: 6,
    title: "AirPods Pro 3",
    subtitle: "Cancelamento Ativo de Ruído como você nunca ouviu.",
    postitle: "R$ 2.699",
    bgImage: eduAirpodsPro,
    validOffer: true,
  },
];
export default function LimitedTimeOffer() {
  return (
    <section className="defaultSection">
      <LimitedSection
        title="Oferta por tempo limitado."
        subtitle="Possibilidades ilimitadas."
        items={products}
      />

      <LimitedSection
        title="Essenciais para educação."
        subtitle="Para estudantes universitários, educadores e muito mais."
        items={products2}
        className="mt-1"
      />
      <LimitedSection
        title="Acessórios."
        subtitle="Não deixe faltar nas aulas."
        items={products3}
        className="mt-1"
      />
      <LimitedSection
        title="Potencial ilimitado."
        subtitle="O ensino e a aprendizagem vão além com a Apple."
        items={slide4}
        className="mt-1"
      />
      <LimitedSection
        title="Você vai adorar."
        subtitle="Outras maneiras de se preparar para a faculdade."
        items={slide5}
        className="mt-1"
      />
    </section>
  );
}
