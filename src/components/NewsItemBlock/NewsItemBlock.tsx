import React from 'react';
import CloseBtn from '../CloseBtn/CloseBtn';
import Carousel from 'nuka-carousel';
import { setImages } from '../../redux/slices/fullScreenImageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentNews } from '../../redux/slices/enterprisesSlice';
import { useQuery } from '@apollo/client';
import { getNews, getNewsVars, photo } from '../../common/types';
import Loader from '../Loader/Loader';
import { GET_ONE_NEWS } from '../../graphql/query/news';
import styles from './NewsItemBlock.module.scss';
import {
  hideRightBlock,
  setNews,
  showRightBlock,
} from '../../redux/slices/rightBlockSlice';

const NewsItemBlock: React.FC = () => {
  const id = useSelector(selectCurrentNews);

  const dispatch = useDispatch();

  const { data, loading, error } = useQuery<getNews, getNewsVars>(
    GET_ONE_NEWS,
    {
      variables: {
        pollInterval: 3000,
        id,
      },
    }
  );

  if (loading) return <Loader />;
  if (error)
    return (
      <>
        <p className={'text-center'}>Ошибка загрузки новости...</p>
        <p>{error.message}</p>
      </>
    );

  const photos: photo[] | undefined = data?.getNews.photos;

  const handleCloseClick = () => {
    dispatch(hideRightBlock());
    setTimeout(() => {
      dispatch(setNews());
      dispatch(showRightBlock());
    }, 1500);
  };

  return (
    <div className={` me-5 text-white w-100`}>
      <div className={'me-5 h-100 d-flex justify-content-center flex-column'}>
        <div className={'mb-2 block-bg h-75'}>
          <div className={'d-flex flex-row justify-content-between mb-3'}>
            <span></span>
            <CloseBtn closeAction={handleCloseClick} />
          </div>

          <div className={'add-scrollbar-custom'}>
            <h5>
              {data?.getNews.date &&
                data?.getNews.date.split('T')[0].split('-').reverse().join('.')}
            </h5>
            {data?.getNews.title && (
              <article>
                <h2 className={'text-uppercase text-primary fs-4 fw-bold mb-3'}>
                  {data?.getNews.title}
                </h2>
                <p>{data?.getNews.description}</p>
              </article>
            )}
          </div>
        </div>
        <div className={'mb-5 mx-3 w-90 align-self-center'}>
          {photos && photos.length > 0 && (
            <Carousel
              className={`mt-2`}
              renderCenterLeftControls={null}
              renderCenterRightControls={null}
              wrapAround={true}
              slidesToShow={4}
              defaultControlsConfig={{
                pagingDotsClassName: styles.NewsItemBlock_carouselDots,
                pagingDotsContainerClassName:
                  styles.NewsItemBlock_carouselDotsContainer,
              }}
            >
              {photos.map(
                ({
                  id,
                  small,
                  alt,
                }: {
                  id: number;
                  small?: string;
                  alt?: string;
                }) => (
                  <img
                    src={small}
                    alt={alt}
                    key={id}
                    width={'200px'}
                    onClick={() =>
                      dispatch(
                        setImages({
                          images: photos,
                          currentImage: id,
                        })
                      )
                    }
                    className={'btn border-0 shadow-none'}
                  />
                )
              )}
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsItemBlock;
