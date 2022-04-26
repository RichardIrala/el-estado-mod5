import { state } from "./state";
import "./componentes/addPendientes";
// import { nameComponent } from "./name-component";
import "./componentes/hojaPendientes";
function main() {
  state.subscribe(function () {
    localStorage.setItem("state-cache", JSON.stringify(state.getState()));
  });
  // console.log(localStorage.getItem("state-cache"), "tamos uwu");
}
main();
