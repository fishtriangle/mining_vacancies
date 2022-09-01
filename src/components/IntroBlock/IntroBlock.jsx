import { Link } from "react-router-dom";

function IntroBlock() {
  return (
    <div className={`fs-3 d-flex align-items-center p-6`}>
      <div>
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
          Выбирай предприятие, жми на кнопку{" "}
          <Link to={"edit"} className={"text-decoration-none"}>
            «Вакансии»
          </Link>{" "}
          — и стань частью нашей команды!
        </p>
      </div>
    </div>
  );
}

export default IntroBlock;
