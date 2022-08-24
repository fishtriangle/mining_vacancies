import styles from "./IntroBlock.module.scss";

function IntroBlock() {
  return (
    <div
      className={`w-50 position-absolute end-0 fs-3 ${styles.introBlock}`}
      ref={"introBlock"}
    >
      <h2 className={"h1 fw-bold text-center mb-5"}>Горная промышленность</h2>
      <p className={"fw-bold"}> 5 причин работать у нас:</p>
      <ul>
        <li>стабильный высокий доход;</li>
        <li>команда настоящих профессионалов;</li>
        <li>карьерный рост;</li>
        <li>комфортные социально-бытовые условия;</li>
        <li>бонусы и социальные гарантии.</li>
      </ul>
      <p className={"fw-bold"}>
        Выбирай предприятие, жми на кнопку «Вакансии» — и стань частью нашей
        команды!
      </p>
    </div>
  );
}

export default IntroBlock;
