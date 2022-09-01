import smallPhoto1 from "./photos/small/1.jpg";
import smallPhoto2 from "./photos/small/2.jpg";
import smallPhoto3 from "./photos/small/3.jpg";
import largePhoto1 from "./photos/large/1.jpg";
import largePhoto2 from "./photos/large/2.jpg";
import largePhoto3 from "./photos/large/3.jpg";
import logo from "./logo.png";

const info = {
  id: 3,
  title: 'АО "КАМЧАТСКОЕ ЗОЛОТО"\n АО "КАМГОЛД"',
  photos: [
    {
      small: smallPhoto1,
      large: largePhoto1,
      alt: "Весна на месторождении",
    },
    {
      small: smallPhoto2,
      large: largePhoto2,
      alt: "Работа под землей",
    },
    {
      small: smallPhoto3,
      large: largePhoto3,
      alt: "Тяжелая техника",
    },
  ],
  logo,
  marker: {
    value: "Бараньевское",
    position: { top: 70, left: 14.5 },
    corner: "right",
  },
};

export default info;
