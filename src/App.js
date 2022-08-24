import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
// import IntroBlock from "./components/IntroBlock/IntroBlock";
import EnterpriseBlock from "./components/EnterpriseBlock/EnterpriseBlock";
import MarkersBlock from "./components/MarkersBlock/MarkersBlock";
// import ImageShow from "./components/ImageShow/ImageShow";
// import VacanciesList from "./components/VacaciesList/VacanciesList";

function App() {
  // let couter = 0;
  // console.log(couter++);
  return (
    <div className="App">
      <BackgroundVideo />
      {/*<IntroBlock />*/}
      <MarkersBlock />
      <EnterpriseBlock />
      {/*<ImageShow />*/}
      {/*<VacanciesList />*/}
    </div>
  );
}

export default App;
