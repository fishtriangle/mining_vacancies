import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import styles from "./VacanciesBlock.module.scss";
import {
  resetVacancies,
  showVacancies,
} from "../../redux/slices/vacanciesSlice";
import VacanciesList from "./VacanciesList";

function VacanciesBlock() {
  const dispatch = useDispatch();

  const isVacanciesShown = useSelector(
    (state) => state.vacancies.isVacanciesShown
  );

  const { title } = useSelector((state) => state.enterprisesInfo.current);

  useEffect(() => {
    setTimeout(() => dispatch(showVacancies()), 0);
  });

  return (
    <div
      className={`vw-100 vh-100 position-absolute top-0 overflow-hidden d-flex flex-column p-6 ${styles.VacanciesList}`}
      onClick={() => dispatch(resetVacancies())}
    >
      <div
        className={`w-100 h-100 position-absolute top-0 overflow-hidden bg-black align-self-center`}
      />
      <div
        className={`${styles.VacanciesList_content} ${
          isVacanciesShown && styles.VacanciesList_content__show
        }`}
      >
        <h3
          className={
            "h1 text-uppercase align-self-center mb-5 fw-bold text-center"
          }
        >
          Вакантные должности {title}
        </h3>
        <div className={`overflow-hidden ${styles.VacanciesList_tableHead}`}>
          <table className={"table fs-3 text-primary border-0"}>
            <thead>
              <tr>
                <th scope={"col"}>#</th>
                <th scope={"col"}>Вакансия</th>
                <th scope={"col"}>Требования к кандидату</th>
                <th scope={"col"}>Необходимые документы</th>
              </tr>
            </thead>
          </table>
        </div>

        <div className={styles.VacanciesList_tableBody}>
          <VacanciesList />
        </div>
      </div>
    </div>
  );
}

export default VacanciesBlock;
