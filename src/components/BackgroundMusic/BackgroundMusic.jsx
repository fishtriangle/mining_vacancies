import { useEffect, useState } from "react";
import useSound from "use-sound";

import music from "./Zoloto_music.mp3";
import styles from "./BackgroundMusic.module.scss";

function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause }] = useSound(music, {
    volume: 1,
    loop: true,
    autoplay: false,
  });

  function handleClick() {
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    isPlaying ? play() : pause();
    // eslint-disable-next-line
  }, [isPlaying]);

  return (
    <div className={`${styles.BackgroundMusic}`}>
      <svg
        x="0px"
        y="0px"
        viewBox="0 0 58 58"
        style={{ enableBackground: "new 0 0 58 58" }}
        className={
          isPlaying
            ? styles.BackgroundMusic_icon__active
            : styles.BackgroundMusic_icon__notActive
        }
        onClick={() => handleClick()}
      >
        <g>
          <g>
            <path
              d="M29,0C13.01,0,0,13.009,0,29s13.01,29,29,29s29-13.009,29-29S44.99,0,29,0z M29,56C14.112,56,2,43.888,2,29S14.112,2,29,2
			s27,12.112,27,27S43.888,56,29,56z"
            />
            <path
              d="M43.994,19.202c0.003-2.973,0.006-5.781-0.044-8.552c-0.016-0.811-0.519-1.325-1.313-1.343
			c-0.478-0.015-0.953,0.02-1.43,0.054l-0.243,0.017c-2.592,0.17-5.127,0.353-7.657,0.723c-4.572,0.668-8.637,1.727-12.428,3.24
			c-0.478,0.191-0.773,0.577-0.833,1.084c-0.042,0.354-0.044,0.708-0.044,1.087C20,22.293,19.998,29.074,20.004,35.878
			c-2.247-0.426-4.352,0.055-6.277,1.433c-1.177,0.842-1.982,1.909-2.394,3.169c-0.649,1.978-0.356,3.749,0.872,5.264
			c0.604,0.745,1.392,1.126,2.082,1.424c1.102,0.476,2.193,0.713,3.27,0.713c1.618,0,3.203-0.536,4.738-1.606
			c1.705-1.188,2.632-2.906,2.681-4.969c0.023-0.987,0.024-1.974,0.025-2.961l0.002-0.848c0.005-1.553,0-3.106-0.004-4.66
			c-0.009-2.822-0.018-5.74,0.036-8.614c0-0.017,0.001-0.034,0.001-0.05c0.016-0.004,0.032-0.009,0.05-0.014
			c2.964-0.864,5.941-1.542,8.849-2.014c1.939-0.315,3.564-0.504,5.052-0.587c-0.006,3.426-0.007,6.851,0.001,10.276
			c-0.346-0.07-0.715-0.121-1.102-0.132c-2.609-0.077-4.718,0.8-6.329,2.6c-1.217,1.36-1.729,2.967-1.479,4.647
			c0.304,2.059,1.541,3.525,3.676,4.356c2.231,0.869,4.513,0.66,6.783-0.624v0C42.803,41.398,44,39.355,44,36.774V25.091
			C43.99,22.996,43.992,21.052,43.994,19.202z M42,36.774c0,1.871-0.801,3.233-2.448,4.166c-1.746,0.986-3.404,1.152-5.072,0.501
			c-1.457-0.567-2.227-1.453-2.424-2.786c-0.163-1.104,0.161-2.092,0.991-3.021c1.217-1.36,2.772-1.995,4.78-1.935
			c0.544,0.016,1.088,0.158,1.548,0.294c0.167,0.049,0.676,0.2,1.143-0.147c0.216-0.161,0.473-0.475,0.473-1.056
			c-0.012-3.982-0.011-7.964-0.002-11.945c0.002-0.411-0.123-0.74-0.371-0.981c-0.247-0.239-0.585-0.343-0.981-0.339
			c-1.766,0.059-3.679,0.264-6.021,0.644c-2.988,0.485-6.046,1.181-9.097,2.071c-1.169,0.34-1.46,0.722-1.482,1.954
			c-0.054,2.886-0.045,5.815-0.036,8.647c0.004,1.549,0.009,3.098,0.004,4.647l-0.002,0.852c-0.001,0.972-0.002,1.944-0.025,2.917
			c-0.033,1.42-0.646,2.556-1.823,3.376c-1.979,1.378-3.967,1.607-6.073,0.697c-0.618-0.267-1.032-0.491-1.32-0.848
			c-0.795-0.98-0.962-2.054-0.526-3.382c0.281-0.86,0.824-1.568,1.658-2.165c1.128-0.807,2.304-1.208,3.557-1.208
			c0.628,0,1.274,0.1,1.944,0.3c0.169,0.051,0.687,0.204,1.149-0.141c0.464-0.346,0.464-0.887,0.464-1.066
			C21.998,29.72,22,22.616,22.002,15.488c0-0.148-0.001-0.294,0.004-0.442c3.533-1.373,7.33-2.345,11.59-2.967
			c2.457-0.359,4.949-0.539,7.5-0.706l0.25-0.017c0.205-0.014,0.41-0.029,0.615-0.039c0.038,2.549,0.036,5.146,0.033,7.883
			c-0.002,1.853-0.004,3.801,0.006,5.896C42,25.096,42,36.774,42,36.774z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default BackgroundMusic;