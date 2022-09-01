import { useSelector } from "react-redux";

import MarkersBlock from "../components/MarkersBlock/MarkersBlock";
import RightSlidingBlock from "../components/RightSlidingBlock/RightSlidingBlock";
import ImageShow from "../components/ImageShow/ImageShow";
import VacanciesBlock from "../components/VacaciesList/VacanciesBlock";

function Home() {
  const fullScreenImage = useSelector((state) => state.fullScreenImage.image);
  const currentId = useSelector((state) => state.vacancies.currentId);
  return (
    <>
      <MarkersBlock />
      <RightSlidingBlock />
      {fullScreenImage && <ImageShow />}
      {currentId && <VacanciesBlock />}
    </>
  );
}
export default Home;
