import styles from "./ImageShow.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  resetImage,
  selectImage,
  showImage,
} from "../../redux/slices/fullScreenImageSlice";
import { useEffect } from "react";

function ImageShow() {
  const dispatch = useDispatch();

  const { image, alt, isImageShown } = useSelector(selectImage);

  useEffect(() => {
    setTimeout(() => dispatch(showImage()), 0);
  });

  return (
    <div
      className={`vw-100 vh-100 position-absolute top-0 overflow-hidden d-flex justify-content-center align-items-center`}
    >
      <div
        className={`w-100 h-100 position-absolute top-0 overflow-hidden bg-black opacity-75 ${styles.ImageShow_bg}`}
        onClick={() => dispatch(resetImage())}
      />
      <img
        src={image}
        className={`${styles.ImageShow_img} ${
          isImageShown && styles.ImageShow_img__show
        }`}
        alt={alt}
        onClick={() => dispatch(resetImage())}
      />
    </div>
  );
}

export default ImageShow;
