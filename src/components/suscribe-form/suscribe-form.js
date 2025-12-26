import { LitElement } from 'lit';
import { customElements } from "lit/decorators.js";

@customElements("suscribe-form")
export class SuscribeForm extends LitElement {
  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}
