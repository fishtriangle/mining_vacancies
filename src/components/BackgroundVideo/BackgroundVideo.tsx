import movie from './Zoloto_BG_2.webm';

function BackgroundVideo() {
  return (
    <div
      className={'w-100 h-100 d-block position-absolute top-0 overflow-hidden'}
    >
      <video
        className={'w-100'}
        loop={true}
        autoPlay={true}
        preload='auto'
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
