import styles from "./ImageShow.module.scss";
import image from "../../assets/Asachinskoe/photos/1.jpg";

function ImageShow() {
  return (
    <div
      className={`vw-100 vh-100 position-absolute top-0 overflow-hidden d-flex justify-content-center align-items-center`}
    >
      <div
        className={`w-100 h-100 position-absolute top-0 overflow-hidden bg-black opacity-75 ${styles.ImageShow_bg}`}
      />
      <img src={image} className={`${styles.ImageShow_img}`} alt={"road"} />
    </div>
  );
}

export default ImageShow;
