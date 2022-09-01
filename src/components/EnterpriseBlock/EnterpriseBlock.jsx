import Carousel from "nuka-carousel";
import { useDispatch, useSelector } from "react-redux";

import {
  hideRightBlock,
  showRightBlock,
  setIntro,
} from "../../redux/slices/rightBlockSlice";
import { setImage } from "../../redux/slices/fullScreenImageSlice";
import EnterpriseDescription from "./EnterpriseDescription";
import styles from "./EnterpriseBlock.module.scss";
import closeBtnImg from "./img/close.png";
import { setCurrentId } from "../../redux/slices/vacanciesSlice";
import { selectCurrentEnterprise } from "../../redux/slices/enterprisesSlice";

function EnterpriseBlock() {
  const enterprisesInfo = useSelector(selectCurrentEnterprise);

  const { photos, title, logo, id } = enterprisesInfo;

  const dispatch = useDispatch();

  function handleClose() {
    dispatch(hideRightBlock());
    setTimeout(() => {
      dispatch(setIntro());
      dispatch(showRightBlock());
    }, 1500);
  }

  function handleVacancies(id) {
    dispatch(setCurrentId(id));
  }

  return (
    <div className={styles.enterpriseBlock_container}>
      <div className={"d-flex flex-row justify-content-between mb-4"}>
        <img
          src={logo}
          alt={"logo"}
          className={`align-self-center my-2 ${styles.enterpriseBlock_highlandLogo}`}
        />
        <h3
          className={"h5 my-0 mx-2 align-self-center fw-bold text-capitalize"}
        >
          {title}
        </h3>
        <div>
          <img
            src={closeBtnImg}
            alt={"Close button"}
            className={`align-self-start ${styles.enterpriseBlock_closeBtn}`}
            onClick={handleClose}
          />
        </div>
      </div>
      <div>
        <EnterpriseDescription id={id} />
      </div>

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
          {photos.map(({ small, large, alt }, index) => (
            <img
              src={small}
              alt={alt}
              key={index}
              width={"200px"}
              onClick={() => dispatch(setImage({ image: large, alt }))}
              className={"btn border-0 shadow-none"}
            />
          ))}
        </Carousel>
      </div>

      <div className={"d-flex justify-content-center"}>
        <b
          className={`btn text-uppercase text-center fw-bold fs-5 text-black rounded-3 ${styles.enterpriseBlock_vacancyBtn}`}
          onClick={() => handleVacancies(id)}
        >
          Вакансии
        </b>
      </div>
    </div>
  );
}

export default EnterpriseBlock;
