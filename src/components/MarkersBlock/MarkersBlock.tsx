import React from 'react';
import Marker from './Marker';

import styles from './MarkersBlock.module.scss';
import { useQuery } from '@apollo/client';
import { GET_ALL_ENTERPRISES } from '../../graphql/query/enterprise';
import { enterprice } from '../../common/types';

type PhotoItem = {
  small: string;
  large?: string;
  alt?: string;
};

type PositionItem = {
  top: number;
  left: number;
};

type MarkerItem = {
  value: string;
  position: PositionItem;
  corner?: string;
};

type EnterprisesInfoItem = {
  id: number;
  title?: string;
  photos?: PhotoItem[];
  logo?: string;
  marker?: MarkerItem;
  contacts?: string[];
};

const MarkersBlock: React.FC = () => {
  const { data, loading, error, refetch } = useQuery(GET_ALL_ENTERPRISES, {
    variables: {
      pollInterval: 3000,
    },
  });

  if (loading) return <div></div>;
  if (error)
    return (
      <>
        <p className={'text-center'}>Ошибка загрузки списка предприятий...</p>
        <p>{error.message}</p>
      </>
    );

  return (
    <div className={styles.markersBlock}>
      {data.getAllEnterprises.map((enterprise: enterprice, index: number) => (
        <Marker
          value={enterprise.marker?.value || ''}
          position={{
            top: enterprise.marker?.top || 0,
            left: enterprise.marker?.left || 0,
          }}
          corner={
            enterprise.marker?.corner ===
            ('bottom-left' || 'top-left' || 'top-right' || 'bottom-right')
              ? enterprise.marker?.corner
              : 'top-left'
          }
          key={enterprise.id}
          id={enterprise.id}
        />
      ))}
    </div>
  );
};

export default MarkersBlock;
