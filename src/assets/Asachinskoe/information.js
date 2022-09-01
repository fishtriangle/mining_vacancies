import smallPhoto1 from "./photos/small/1.jpg";
import smallPhoto2 from "./photos/small/2.jpg";
import smallPhoto3 from "./photos/small/3.jpg";
import largePhoto1 from "./photos/large/1.jpg";
import largePhoto2 from "./photos/large/2.jpg";
import largePhoto3 from "./photos/large/3.jpg";
import logo from "./logo.png";

const info = {
  id: 2,
  title: 'АО "ТСГ АСАЧА"',
  photos: [
    {
      small: smallPhoto1,
      large: largePhoto1,
      alt: "Дорога к месторождению",
    },
    {
      small: smallPhoto2,
      large: largePhoto2,
      alt: "Слиток золота",
    },
    {
      small: smallPhoto3,
      large: largePhoto3,
      alt: "Рабочий поселок",
    },
  ],
  logo,
  marker: {
    value: "Асачинское",
    position: { top: 85, left: 13 },
    corner: "right",
  },
};

export default info;
