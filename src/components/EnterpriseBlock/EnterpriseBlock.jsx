import Carousel from 'nuka-carousel';
import { useDispatch, useSelector } from 'react-redux';

import { setImages } from '../../redux/slices/fullScreenImageSlice';
import EnterpriseDescription from './EnterpriseDescription';
import styles from './EnterpriseBlock.module.scss';
import { setCurrentId } from '../../redux/slices/vacanciesSlice';
import { selectCurrentEnterprise } from '../../redux/slices/enterprisesSlice';
import YellowBtn from '../YellowBtn/YellowBtn';
import CloseBtn from '../CloseBtn/CloseBtn';
import Text from '../Text/Text';

function EnterpriseBlock() {
  const enterprisesInfo = useSelector(selectCurrentEnterprise);

  const { photos, title, logo, id } = enterprisesInfo;

  const dispatch = useDispatch();

  function handleVacancies(id) {
    dispatch(setCurrentId(id));
  }

  return (
    <div className={'py-5 px-5 d-flex align-items-center w-100 flex-column'}>
      <div className={'d-flex flex-row justify-content-between mb-4 w-100'}>
        <img
          src={logo}
          alt={'logo'}
          className={`align-self-center my-2 me-1 ${styles.enterpriseBlock_highlandLogo}`}
        />
        <h3 className={'h5 my-0 mx-4 align-self-center fw-bold text-uppercase'}>
          <Text>{title}</Text>
        </h3>
        <CloseBtn />
      </div>
      <div className={styles.enterpriseBlock_description}>
        <EnterpriseDescription id={id} />
      </div>

      <div className={'w-100 mb-5'}>
        <Carousel
          className={`mt-2 ${styles.enterpriseBlock_carousel}`}
          renderCenterLeftControls={null}
          renderCenterRightControls={null}
          wrapAround={true}
          slidesToShow={4}
          defaultControlsConfig={{
            pagingDotsClassName: styles.enterpriseBlock_carouselDots,
            pagingDotsContainerClassName:
              styles.enterpriseBlock_carouselDotsContainer,
          }}
        >
          {photos.map(({ small, alt }, index) => (
            <img
              src={small}
              alt={alt}
              key={index}
              width={'200px'}
              onClick={() =>
                dispatch(setImages({ images: photos, currentImage: index }))
              }
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
