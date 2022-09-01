import smallPhoto1 from "./photos/small/1.jpg";
import smallPhoto2 from "./photos/small/2.jpg";
import smallPhoto3 from "./photos/small/3.jpg";
import smallPhoto4 from "./photos/small/4.jpg";
import largePhoto1 from "./photos/large/1.jpg";
import largePhoto2 from "./photos/large/2.jpg";
import largePhoto3 from "./photos/large/3.jpg";
import largePhoto4 from "./photos/large/4.jpg";
import logo from "./logo.png";

const info = {
  id: 5,
  title: 'АО "Быстринская горная компания"',
  photos: [
    {
      small: smallPhoto1,
      large: largePhoto1,
      alt: "Прилетела новая вахта",
    },
    {
      small: smallPhoto2,
      large: largePhoto2,
      alt: "На объекте",
    },
    {
      small: smallPhoto3,
      large: largePhoto3,
      alt: "Вертолет",
    },
    {
      small: smallPhoto4,
      large: largePhoto4,
      alt: "Поселок",
    },
  ],
  logo,
  marker: {
    value: "Кумроч",
    position: { top: 65.5, left: 20.5 },
    corner: "left",
  },
};

export default info;
