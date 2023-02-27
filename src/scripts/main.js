import Controller from "../components/Controller.js";
import Info from "../components/Info.js";
import Menu from "../components/Menu.js";
import RangeBar from "../components/RangeBar.js";

let appData;

window.onload = async () => {
  const req = await fetch("app_data.json");
  appData = await req.json();

  setupLayout();
};

const setupLayout = () => {
  const info = new Info("#info", (value) => {
    console.log("info", value);
  });

  const controller = new Controller("#controller", (value) => {
    console.log("controller", value);
  });

  const volumeBar = new RangeBar("#volume", (value) => {
    console.log("volume", value);
  });

  const menu = new Menu("#menu", (value) => {
    console.log("menu", value);
  });
  menu.data = appData;
};
