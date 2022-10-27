import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_NEWS } from '../../graphql/query/news';
import Loader from '../Loader/Loader';
import styles from '../../pages/Edit.module.scss';
import CloseBtn from '../CloseBtn/CloseBtn';
import {
  hideRightBlock,
  setNewsItem,
  showRightBlock,
} from '../../redux/slices/rightBlockSlice';
import { setCurrent } from '../../redux/slices/enterprisesSlice';
import { useDispatch } from 'react-redux';

const NewsBlock: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error, refetch } = useQuery(GET_ALL_NEWS, {
    variables: {
      pollInterval: 3000,
    },
  });

  if (loading) return <Loader />;
  if (error)
    return (
      <>
        <p className={'text-center'}>Ошибка загрузки списка новостей...</p>
        <p>{error.message}</p>
      </>
    );

  const handleClick = (id: number) => {
    dispatch(hideRightBlock());
    setTimeout(() => {
      dispatch(setNewsItem());
      dispatch(setCurrent(id));
      dispatch(showRightBlock());
    }, 1500);
  };

  return (
    <div className={`d-flex justify-content-center flex-column text-white`}>
      <div className={`mb-4 block-bg h-75 w-950p`}>
        <div className={'d-flex flex-row justify-content-end mb-3'}>
          <CloseBtn />
        </div>
        <div>
          <p className={'text-uppercase text-primary fs-2 fw-bold mb-3'}>
            Новости
          </p>
          <div className={`${styles.editPage_tableContainer}`}>
            <table className={'table text-primary border-primary'}>
              <thead>
                <tr>
                  <th scope={'col'}>Дата</th>
                  <th scope={'col'}>Новость</th>
                  <th scope={'col'}></th>
                </tr>
              </thead>

              <tbody className={'overflow-auto'}>
                {data.getAllNews.map(
                  (newsItem: { id: number; date: Date; title: string }) => (
                    <tr key={newsItem.id}>
                      <td className={'py-3'}>
                        {newsItem.date
                          .toString()
                          .split('T')[0]
                          .split('-')
                          .reverse()
                          .join('.')}
                      </td>
                      <td className={'py-3'}>{newsItem.title}</td>
                      <td>
                        <button
                          type={'button'}
                          className='btn btn-sm bg-warning text-black fw-bold mt-1'
                          onClick={() => handleClick(newsItem.id)}
                        >
                          Посмотреть
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBlock;
