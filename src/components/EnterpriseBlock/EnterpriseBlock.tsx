import Carousel from 'nuka-carousel';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { setImages } from '../../redux/slices/fullScreenImageSlice';
import EnterpriseDescription from './EnterpriseDescription';
import styles from './EnterpriseBlock.module.scss';
import { setCurrentId } from '../../redux/slices/vacanciesSlice';
import { selectCurrentEnterprise } from '../../redux/slices/enterprisesSlice';
import YellowBtn from '../YellowBtn/YellowBtn';
import CloseBtn from '../CloseBtn/CloseBtn';

const EnterpriseBlock: React.FC = () => {
  const enterprisesInfo = useSelector(selectCurrentEnterprise);

  const { photos, title, logo, id } = enterprisesInfo;

  const dispatch = useDispatch();

  function handleVacancies(id: number) {
    dispatch(setCurrentId(id));
  }

  return (
    <div className={` me-5 text-white w-100`}>
      <div className={'me-5 h-100 d-flex justify-content-center flex-column'}>
        <div className={'mb-3 block-bg h-60'}>
          <div className={'d-flex flex-row justify-content-between mb-3'}>
            <img
              src={logo}
              alt={'logo'}
              className={`align-self-center my-2 me-1 ${styles.enterpriseBlock_highlandLogo}`}
            />
            <CloseBtn />
          </div>

          <div className={'add-scrollbar'}>
            <EnterpriseDescription id={id} title={title} />
          </div>
        </div>
        <div className={'mb-5 mx-3 w-90 align-self-center'}>
          <Carousel
            className={`mt-2`}
            renderCenterLeftControls={null}
            renderCenterRightControls={null}
            wrapAround={true}
            slidesToShow={4}
            defaultControlsConfig={{
              pagingDotsClassName: styles.editPage_carouselDots,
              pagingDotsContainerClassName:
                styles.editPage_carouselDotsContainer,
            }}
          >
            {photos.map(
              (
                { small, alt }: { small: string; alt: string },
                index: number
              ) => (
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
              )
            )}
          </Carousel>
        </div>

        <div className={'d-flex justify-content-center'}>
          <YellowBtn onClick={() => handleVacancies(id)} text={'Вакансии'} />
        </div>
      </div>
    </div>
  );
};

export default EnterpriseBlock;
