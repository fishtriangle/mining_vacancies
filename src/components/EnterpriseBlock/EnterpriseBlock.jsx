import Carousel from 'nuka-carousel';
import { useDispatch, useSelector } from 'react-redux';

import { setImage } from '../../redux/slices/fullScreenImageSlice';
import EnterpriseDescription from './EnterpriseDescription';
import styles from './EnterpriseBlock.module.scss';
import { setCurrentId } from '../../redux/slices/vacanciesSlice';
import { selectCurrentEnterprise } from '../../redux/slices/enterprisesSlice';
import YellowBtn from '../YellowBtn/YellowBtn';
import CloseBtn from '../CloseBtn/CloseBtn';

function EnterpriseBlock() {
  const enterprisesInfo = useSelector(selectCurrentEnterprise);

  const { photos, title, logo, id } = enterprisesInfo;

  const dispatch = useDispatch();

  function handleVacancies(id) {
    dispatch(setCurrentId(id));
  }

  return (
    <div className={styles.enterpriseBlock_container}>
      <div className={'d-flex flex-row justify-content-between mb-4'}>
        <img
          src={logo}
          alt={'logo'}
          className={`align-self-center my-2 me-1 ${styles.enterpriseBlock_highlandLogo}`}
        />
        <h3 className={'h5 my-0 mx-4 align-self-center fw-bold text-uppercase'}>
          {title}
        </h3>
        <CloseBtn />
      </div>
      <div>
        <EnterpriseDescription id={id} />
      </div>

      <div className={styles.enterpriseBlock_carouselContainer}>
        <Carousel
          className={`mt-2 ${styles.enterpriseBlock_carousel}`}
          renderCenterLeftControls={null}
          renderCenterRightControls={null}
          wrapAround={true}
          slidesToShow={3}
          defaultControlsConfig={{
            pagingDotsClassName: styles.enterpriseBlock_carouselDots,
            pagingDotsContainerClassName:
              styles.enterpriseBlock_carouselDotsContainer,
          }}
        >
          {photos.map(({ small, large, alt }, index) => (
            <img
              src={small}
              alt={alt}
              key={index}
              width={'200px'}
              onClick={() => dispatch(setImage({ image: large, alt }))}
              className={'btn border-0 shadow-none'}
            />
          ))}
        </Carousel>
      </div>

      <YellowBtn onClick={() => handleVacancies(id)} text={'Вакансии'} />
    </div>
  );
}

export default EnterpriseBlock;
