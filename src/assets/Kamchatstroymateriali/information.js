import smallPhoto1 from "./photos/small/1.jpg";
import smallPhoto2 from "./photos/small/2.jpg";
import smallPhoto3 from "./photos/small/3.jpg";
import smallPhoto4 from "./photos/small/4.jpg";
import smallPhoto5 from "./photos/small/5.jpg";
import smallPhoto6 from "./photos/small/6.jpg";
import smallPhoto7 from "./photos/small/7.jpg";
import largePhoto1 from "./photos/large/1.jpg";
import largePhoto2 from "./photos/large/2.jpg";
import largePhoto3 from "./photos/large/3.jpg";
import largePhoto4 from "./photos/large/4.jpg";
import largePhoto5 from "./photos/large/5.jpg";
import largePhoto6 from "./photos/large/6.jpg";
import largePhoto7 from "./photos/large/7.jpg";

import logo from "./logo.png";

const info = {
  id: 4,
  title: "АО КСМ",
  photos: [
    {
      small: smallPhoto1,
      large: largePhoto1,
      alt: "Конвейеры",
    },
    {
      small: smallPhoto2,
      large: largePhoto2,
      alt: "Работа тяжелой техники",
    },
    {
      small: smallPhoto3,
      large: largePhoto3,
      alt: "Работа тяжелой техники",
    },
    {
      small: smallPhoto4,
      large: largePhoto4,
      alt: "Бульдозер",
    },
    {
      small: smallPhoto5,
      large: largePhoto5,
      alt: "Колотый камень",
    },
    {
      small: smallPhoto6,
      large: largePhoto6,
      alt: "Парковка бульдозеров",
    },
    {
      small: smallPhoto7,
      large: largePhoto7,
      alt: "Сбор песка",
    },
  ],
  logo,
  marker: {
    value: "Камчатскстройматериалы",
    position: { top: 81, left: 15.3 },
    corner: "left",
  },
};

export default info;
