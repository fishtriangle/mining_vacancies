import smallPhoto1 from "./photos/small/1.jpg";
import smallPhoto2 from "./photos/small/2.jpg";
import smallPhoto3 from "./photos/small/3.jpg";
import largePhoto1 from "./photos/large/1.jpg";
import largePhoto2 from "./photos/large/2.jpg";
import largePhoto3 from "./photos/large/3.jpg";
import logo from "./logo.png";

const info = {
  id: 1,
  title: 'АО "Аметистовое"',
  photos: [
    {
      small: smallPhoto1,
      large: largePhoto1,
      alt: "Поселок",
    },
    {
      small: smallPhoto2,
      large: largePhoto2,
      alt: "На заводе",
    },
    {
      small: smallPhoto3,
      large: largePhoto3,
      alt: "В шахте",
    },
  ],
  logo,
  marker: {
    value: "Аметистовое",
    position: { top: 22.5, left: 26.5 },
    corner: "left",
  },
};

export default info;
