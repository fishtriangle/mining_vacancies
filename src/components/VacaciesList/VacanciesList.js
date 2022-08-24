import styles from "./VacanciesList.module.scss";

function VacanciesList() {
  const Text = (props) => {
    const { children, Wrapper = "div" } = props;
    return <Wrapper style={{ whiteSpace: "pre-line" }}>{children}</Wrapper>;
  };

  return (
    <div
      className={`vw-100 vh-100 position-absolute top-0 overflow-hidden d-flex flex-column p-6 ${styles.VacanciesList}`}
    >
      <div
        className={`w-100 h-100 position-absolute top-0 overflow-hidden bg-black align-self-center`}
      />

      <h3 className={"h1 text-uppercase align-self-center mb-5 fw-bold"}>
        Вакантные должности АО «ТСГ АСАЧА»
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
        <table className={"table fs-3 m-0 text-primary border-primary"}>
          <tbody className={"overflow-auto"}>
            <tr>
              <th scope={"row"}>1</th>
              <td>Грохотовщик</td>
              <td>
                Среднее полное образование
                <br />
                Опыт работы в аналогичной должности от 1 года
              </td>
              <td>
                Паспорт (копия)
                <br />
                ИНН, СНИЛС (копия)
                <br />
                Трудовая книжка (копия)
                <br />
                Удостоверение грохотовщика
              </td>
            </tr>
            <tr>
              <th scope={"row"}>2</th>
              <td>Директор по ремонтам</td>
              <td>
                Высшее техническое образование (горные машины и оборудование)
                <br />
                Опыт работы на добывающих предприятиях (ПГР) от 5 лет
                <br />
                Знание программ: MS Office, Еxcel, 1С
              </td>
              <td>
                Паспорт (копия)
                <br />
                ИНН, СНИЛС (копия)
                <br />
                Трудовая книжка (копия)
                <br />
                Диплом
              </td>
            </tr>
            <tr>
              <th scope={"row"}>3</th>
              <td>Главный механик</td>
              <td>
                Высшее профессиональное (техническое) образование
                <br />
                Опыт работы не менее 5 лет в горнодобывающих предприятиях на
                руководящих должностях
                <br />
                Знание программ: MS Office, Еxcel, 1С
              </td>
              <td>
                Паспорт (копия)
                <br />
                ИНН, СНИЛС (копия)
                <br />
                Трудовая книжка (копия)
                <br />
                Диплом
              </td>
            </tr>
            <tr>
              <th scope={"row"}>4</th>
              <td>Электрослесарь по ремонту автомобиля</td>
              <td>
                Опыт работы по профилю от 2 лет
                <br />
                Профильное образование средне-специальное или высшее
                <br />
                Опыт работы с отечественной и импортной автомобильной и
                строительной техникой
                <br />
                Опыт работы с подземной горной техникой будет большим
                преимуществом
              </td>
              <td>
                Паспорт (копия)
                <br />
                ИНН, СНИЛС (копия)
                <br />
                Трудовая книжка (копия)
                <br />
                Удостоверение электрослесаря
                <br />
                по ремонту автомобилей
              </td>
            </tr>
            <tr>
              <th scope={"row"}>5</th>
              <td>Токарь-фрезеровщик</td>
              <td>
                Опыт работы токарем фрезеровщиков на станках отечественного
                производства от 5 лет
                <br />
                Средне-специальное образование
                <br />
                Разряд токаря не менее 3-го
              </td>
              <td>
                Паспорт (копия)
                <br />
                ИНН, СНИЛС (копия)
                <br />
                Трудовая книжка (копия)
                <br />
                Удостоверение токаря
              </td>
            </tr>
            <tr>
              <th scope={"row"}>6</th>
              <td>Машинист автовышки и автогидроподъемника</td>
              <td>
                Удостоверение машиниста автовышки и автогидроподъемника
                <br />
                Водительское удостоверение категории С<br />
                Опыт работы от 5 лет
              </td>
              <td>
                <Text>
                  {
                    "Паспорт(копия) \nИНН, СНИЛС (копия)\nТрудовая книжка (копия)\nУдостоверение тракториста-машиинста, удостоверение машиниста автокрана"
                  }
                </Text>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VacanciesList;
