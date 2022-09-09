import { Route, Routes } from 'react-router-dom';

import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo';
import Home from './pages/Home';
import Edit from './pages/Edit';
import BackgroundMusic from './components/BackgroundMusic/BackgroundMusic';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import {
  hideRightBlock,
  setIntro,
  showRightBlock,
} from './redux/slices/rightBlockSlice';
import { resetImage } from './redux/slices/fullScreenImageSlice';
import { resetVacancies } from './redux/slices/vacanciesSlice';
import { setCurrent } from './redux/slices/enterprisesSlice';

function App() {
  const dispatch = useDispatch();
  const reset = _.debounce(() => {
    dispatch(hideRightBlock());
    setTimeout(() => {
      dispatch(setCurrent({ id: null }));
      dispatch(setIntro());
      dispatch(showRightBlock());
    }, 2500);

    dispatch(resetImage());

    dispatch(resetVacancies());
  }, 180000);

  return (
    <div className='App' onClick={() => reset()}>
      <BackgroundVideo />

      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'edit'} element={<Edit />} />
      </Routes>
      <BackgroundMusic />
    </div>
  );
}

export default App;
