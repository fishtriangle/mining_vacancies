import movie from "./Zoloto_BG_2.webm";

function BackgroundVideo() {
  return (
    <div
      className={
        "vw-100 vh-100 d-block position-absolute top-0 overflow-hidden"
      }
    >
      <video
        className={"vw-100"}
        loop="loop"
        autoPlay="autoplay"
        preload="auto"
        muted
      >
        <source src={movie} type={'video/webm; codecs="vp8, vorbis"'} />
        <p>
          Если вы видите эту надпись, значит ваш браузер не поддерживает видео
          HTML5.
        </p>
      </video>
    </div>
  );
}

export default BackgroundVideo;
