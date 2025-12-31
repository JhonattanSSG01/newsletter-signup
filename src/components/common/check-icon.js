import { LitElement, html, css } from "lit";

export class CheckIcon extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    img {
      width: 100%;
      height: 100%;
      display: block;
    }

  `;

  static properties = {
    name: { type: String },
  };

  constructor() {
    super();
    this.name = "";
  }
  
  render() {
    return html`
        <img src=${`./src/assets/images/${this.name}.svg`} alt="check-icon"/>
    `;
  }
}

customElements.define("check-icon", CheckIcon);