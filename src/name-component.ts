import { state } from "./state";
export function nameComponent(container: Element) {
  const lastState = state.getState();

  function render(nombre) {
    const h1 = document.createElement("h1");
    h1.style.border = "solid 3px";
    container.appendChild(h1);
    h1.textContent = nombre;
    h1.addEventListener("click", () => {
      container.firstChild?.remove();
      //signo de preguntas significa: => existe?
      state.setState({ ...lastState, nombre: "Richard Miguel" });
    });
  }
  //Necesito comprender, por qué cada vez que hago el click en el H1, se activa este subscribe
  //y hace lo que hace. Donde está el escuchador... Por así decirlo.
  //Fuera de eso entiendo todo completamente.
  state.subscribe(() => {
    const lastState = state.getState();
    render(lastState.nombre);
    console.log("este es el listener", lastState);
  });

  render(lastState.nombre);
}
