import React from 'react';
import Text from '../Text/Text';

const EnterpriseDescription: React.FC<{
  description: string;
  title: string;
}> = ({ description, title }) => (
  <article>
    <p className={'text-uppercase text-primary fs-4 fw-bold m-0'}>{title}</p>
    <p>{description}</p>
  </article>
);

export default EnterpriseDescription;
