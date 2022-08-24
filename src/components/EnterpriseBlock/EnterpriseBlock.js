import styles from "./EnterpriseBlock.module.scss";
// import highlandLogo from "./img/highland_logo.png";
import closeBtnImg from "./img/close.png";
import Carousel from "nuka-carousel";

// import ametistovoe from "../../assets/Ametistovoe/information";
// import asacha from "../../assets/Asachinskoe/information";
// import baranjevskoe from "../../assets/Baranjevskoe/information";
// import kamchatstroymateriali from "../../assets/Kamchatstroymateriali/information";
import kymroch from "../../assets/Kymroch/information";
import { useState } from "react";

function EnterpriseBlock() {
  const { photos, Article, title, logo } = kymroch;

  const [isClosed, setClosed] = useState(false);

  function handleClose() {
    setClosed(!isClosed);
    setTimeout(() => {
      setClosed((closed) => !closed);
    }, 1500);
  }

  return (
    <div
      className={`${styles.enterpriseBlock} ${
        isClosed && styles.enterpriseBlock__closed
      }`}
    >
      <div className={styles.enterpriseBlock_container}>
        <div className={"d-flex flex-row justify-content-between mb-4"}>
          <img
            src={logo}
            alt={"logo"}
            className={`align-self-center my-2 ${styles.enterpriseBlock_highlandLogo}`}
          />
          <h3 className={"h2 m-0 align-self-center fw-bold text-capitalize"}>
            {title}
          </h3>
          <div>
            <img
              src={closeBtnImg}
              alt={"Close button"}
              className={`align-self-start ${styles.enterpriseBlock_closeBtn}`}
              onTouchEnd={handleClose}
            />
          </div>
        </div>
        <Article />
        <div className={styles.enterpriseBlock_carouselContainer}>
          <Carousel
            className={`mt-2 ${styles.enterpriseBlock_carousel}`}
            renderCenterLeftControls={null}
            renderCenterRightControls={null}
            wrapAround={true}
            slidesToShow={3}
            defaultControlsConfig={{
              pagingDotsClassName: styles.enterpriseBlock_carouselDots,
              pagingDotsContainerClassName:
                styles.enterpriseBlock_carouselDotsContainer,
            }}
          >
            {photos.map(({ data, alt }, index) => (
              <img src={data} alt={alt} key={index} width={"200px"} />
            ))}
          </Carousel>
        </div>

        <div className={"d-flex justify-content-center mt-4"}>
          <p
            href={"/"}
            className={`text-uppercase text-center fw-bold fs-5 text-black rounded-3 ${styles.enterpriseBlock_vacancyBtn}`}
          >
            Вакансии
          </p>
        </div>
      </div>
    </div>
  );
}

export default EnterpriseBlock;
