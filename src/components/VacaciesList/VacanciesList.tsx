import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_ONE_ENTERPRISE } from '../../graphql/query/enterpriseVacancies';
import React from 'react';

import Text from '../Text/Text';
import { selectCurrentId } from '../../redux/slices/vacanciesSlice';

type Vacancy = {
  id: number;
  vacancy: string;
  requirements: string;
  docs: string;
  salary: string;
};

const VacanciesList: React.FC = () => {
  const currentId = useSelector(selectCurrentId);

  const { data, loading, error } = useQuery(GET_ONE_ENTERPRISE, {
    variables: {
      id: `${currentId}`,
      pollInterval: 3000,
    },
  });

  if (loading) return <p className={'text-center'}>Загрузка...</p>;
  if (error)
    return (
      <>
        <p className={'text-center'}>Ошибка загрузки вакансий...</p>
        <p>{error.message}</p>
      </>
    );

  const { vacancies } = data['getEnterprise'];
  return (
    <table className={'table fs-4 m-0 text-primary border-primary'}>
      <thead>
        <tr>
          <th scope={'col'}>#</th>
          <th scope={'col'}>Вакансия</th>
          <th scope={'col'}>Требования к кандидату</th>
          <th scope={'col'}>Необходимые документы</th>
          <th scope={'col'}>Заработная плата</th>
        </tr>
      </thead>

      <tbody className={'overflow-auto'}>
        {vacancies.map(
          ({ id, vacancy, requirements, docs, salary }: Vacancy) => (
            <tr key={id}>
              <td scope={'row'}>{id}</td>
              <td>{vacancy}</td>
              <td>
                <Text>{requirements || ''}</Text>
              </td>
              <td>
                <Text>{docs || ''}</Text>
              </td>
              <td>
                <Text>{salary || ''}</Text>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default VacanciesList;
