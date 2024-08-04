import "../css/style.css";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `

`;

setupCounter(document.querySelector("#counter"));
