import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_ONE_ENTERPRISE } from "../../graphql/query/enterpriseVacancies";

import Text from "../Text/Text";
import { selectCurrentId } from "../../redux/slices/vacanciesSlice";

function VacanciesList() {
  const currentId = useSelector(selectCurrentId);

  const { data, loading, error } = useQuery(GET_ONE_ENTERPRISE, {
    variables: {
      id: `${currentId}`,
      pollInterval: 3000,
    },
  });

  if (loading) return <p className={"text-center"}>Загрузка...</p>;
  if (error)
    return (
      <>
        <p className={"text-center"}>Ошибка загрузки вакансий...</p>
        <p>{error.message}</p>
      </>
    );

  const { vacancies } = data["getEnterprise"];
  console.log(vacancies);

  return (
    <table className={"table fs-3 m-0 text-primary border-primary"}>
      <tbody className={"overflow-auto"}>
        {vacancies.map(({ id, vacancy, requirements, docs }) => (
          <tr key={id}>
            <th scope={"row"}>{id}</th>
            <td>{vacancy}</td>
            <td>
              <Text>{requirements}</Text>
            </td>
            <td>
              <Text>{docs}</Text>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default VacanciesList;
