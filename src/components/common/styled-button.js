import { LitElement, html } from "lit";
import { commonStyles } from "../common/css/common.css.js";

export class StyledButton extends LitElement {
  static styles = [commonStyles];

  static properties = {
    label: { type: String },
  };

  constructor() {
    super();
    this.label = "";
  }

  render() {
    return html`<button type="submit" class="btn shadow"><slot>${this.label}</slot></button>`;
  }
}

customElements.define("styled-button", StyledButton);