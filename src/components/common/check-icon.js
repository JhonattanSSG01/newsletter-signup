import { LitElement, html, css } from "lit";

export class CheckIcon extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      width: 16px;
      height: 16px;
    }

    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  `;
  render() {
    return html`
        <img src="./src/assets/images/icon-list.svg" alt="check-icon"/>
    `;
  }
}

customElements.define("check-icon", CheckIcon);