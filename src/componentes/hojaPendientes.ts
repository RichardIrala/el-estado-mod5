import { state } from "../state";

class addHojaPendiente extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  constructor() {
    super();
    this.render();
  }
  connectedCallback() {
    state.subscribe(() => {
      console.log(state.getState(), "aaa");
      // this.reset();
      this.render();
    });
  }
  reset() {
    this.shadow.innerHTML = "";
  }
  render() {
    console.log(state.getState().list, "leame ahora mismo holiis");
    const list = state.getState().list;
    console.log(list, "hi bebe soy io");
    var style = document.createElement("style");
    style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        .div-principal {
            min-height: 80vh;
            background: #777777;
            display: flex;
            flex-direction: column;
        }
        .listas::marker {
          color: red
        }
        .listas {
          color:white;
          font-family: 'Pacifico', cursive;
          font-weight: 400;
          font-size: 32px;
        }
        `;
    this.shadow.appendChild(style);

    const div = document.createElement("div");
    div.classList.add("div-principal");
    div.innerHTML = `
      <ul>
      ${list
        .map((item) => {
          return `
        <li class="listas">${item}</li>
        `;
        })
        .join("")}
      </ul>
      `;

    this.shadow.appendChild(div);
  }
}
customElements.define("hoja-pendiente-el", addHojaPendiente);
console.log(state.getState().list, "leame ahora mismo xd");
