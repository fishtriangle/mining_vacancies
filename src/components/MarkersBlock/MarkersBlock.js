import Marker from "./Marker";
import ametist from "../../assets/Ametistovoe/information";
import asacha from "../../assets/Asachinskoe/information";
import baranjevskoe from "../../assets/Baranjevskoe/information";
import ksm from "../../assets/Kamchatstroymateriali/information";
import kymroch from "../../assets/Kymroch/information";
// import { useRef } from "react";

function MarkersBlock() {
  const enterprisesInfo = [ametist, asacha, baranjevskoe, ksm, kymroch];
  return (
    <div className={"position-absolute top-0 start-0 w-50 h-100"}>
      {enterprisesInfo.map(
        ({ id, marker: { value, position, corner } }, index) => (
          <Marker
            value={value}
            position={position}
            corner={corner}
            key={index}
            id={id}
          />
        )
      )}
    </div>
  );
}

export default MarkersBlock;
