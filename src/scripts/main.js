window.onload = () => {
  const volumeSlider = document.querySelector("input");

  const changeSliderValue = () => {
    volumeSlider.style.setProperty(
      "--slider-position",
      `${volumeSlider.value}%`
    );
  };

  volumeSlider.addEventListener("input", changeSliderValue);
};
