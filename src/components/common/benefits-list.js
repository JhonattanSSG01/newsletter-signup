import { LitElement, html } from "lit";
import { commonStyles } from "../common/css/common.css.js";
import "./check-icon.js";

export class BenefitsList extends LitElement {
  static styles = [commonStyles];

  static properties = {
    items: { type: Array },
  };

  constructor() {
    super();
    this.items = [];
  }

  render() {
    return html`
      <ul>
        ${this.items.map(
          (item) => html`
            <li>
              <icon><check-icon></check-icon></icon>
              ${item.text}
            </li>`
        )}
      </ul>
    `;
  }
}

customElements.define("benefits-list", BenefitsList);