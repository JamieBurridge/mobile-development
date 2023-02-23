import Button from "../components/Button.js";
import Menu from "../components/Menu.js";
import RangeBar from "../components/RangeBar.js";
import ToggleButton from "../components/ToggleButton.js";

window.onload = () => {
  setupLayout();
};

const setupLayout = () => {
  const previousButton = new Button("#previous-button");
  previousButton.onClick((value) => {
    console.log("previous button", value);
  });

  const nextButton = new Button("#next-button");
  nextButton.onClick((value) => {
    console.log("next button", value);
  });

  const actionButton = new ToggleButton("#action-button"); // Play and pause
  actionButton.onClick((value) => {
    console.log("toggle button", value);
    actionButton.toggle();
  });

  const infoButton = new ToggleButton("#info-button");
  infoButton.onClick((value) => {
    console.log("info button", value);
    infoButton.toggle();
  });

  const volumeBar = new RangeBar("#volume");
  volumeBar.onInput((value) => {
    console.log(value);
  });

  const menu = new Menu("#menu");

  // Show all buttons on load
  infoButton.toggle();
  actionButton.toggle();
};
