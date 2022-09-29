import smallPhoto1 from './photos/small/1.jpg';
import smallPhoto2 from './photos/small/2.jpg';
import smallPhoto3 from './photos/small/3.jpg';
// import smallPhoto4 from './photos/small/4.jpg';
// import smallPhoto5 from './photos/small/5.jpg';
import smallPhoto6 from './photos/small/6.jpg';
import largePhoto1 from './photos/large/1.jpg';
import largePhoto2 from './photos/large/2.jpg';
import largePhoto3 from './photos/large/3.jpg';
// import largePhoto4 from './photos/large/4.jpg';
// import largePhoto5 from './photos/large/5.jpg';
import largePhoto6 from './photos/large/6.jpg';
import logo from './logo.png';

const info = {
  id: 2,
  title: 'АО «ТСГ АСАЧА»',
  photos: [
    {
      small: smallPhoto1,
      large: largePhoto1,
      alt: 'Дорога к месторождению',
    },
    {
      small: smallPhoto2,
      large: largePhoto2,
      alt: 'Слиток золота',
    },
    {
      small: smallPhoto3,
      large: largePhoto3,
      alt: 'Рабочий поселок',
    },
    // {
    //   small: smallPhoto4,
    //   large: largePhoto4,
    //   alt: 'Чистые слитки',
    // },
    // {
    //   small: smallPhoto5,
    //   large: largePhoto5,
    //   alt: 'Общежития',
    // },
    {
      small: smallPhoto6,
      large: largePhoto6,
      alt: 'Вид на вулкан',
    },
  ],
  logo,
  marker: {
    value: 'Асачинское',
    position: { top: 93, left: 14.5 },
    corner: 'bottom-left',
  },
  contacts: [
    '+7 (909) 880-14-47 (Ирина Михайловна Кравченко)',
    '+7 (909) 836-23-79 (Валерий Сергеевич Свекровкин)',
    '+7 (914) 997-65-40 (Екатерина Викторовна Зарезова)',
  ],
};

export default info;
