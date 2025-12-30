import { LitElement, html } from "lit";
import { suscribeStyles } from "./suscribe.css.js";
import "../common/check-icon.js";
import "../common/styled-button.js";
import "../common/benefits-list.js";

export class SuscribeForm extends LitElement {
  static styles = [suscribeStyles];

  static properties = {
    _list: { type: Array },
  };

  constructor() {
    super();
    this.email = "";
    this._error = false;
    this._list = [
      {
        text: "Product discovery and building what matters",
      },
      {
        text: "Measuring to ensure updates are a success",
      },
      {
        text: "And much more!",
      },
    ];
  }

  /**
   * Validates the email format and updates the error state.
   * @param {string} email - The email to validate.
   * @returns {boolean} - True if the email is valid, false otherwise.
   */
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Called when the user changes the email address input field.
   * Updates the email property and checks if the input is a valid email address.
   * If the input is not a valid email address, sets the _error property to true.
   * Calls requestUpdate to re-render the component.
   * @param {Event} e - The event object.
   */
  onchangeEmail(e) {
    this.email = e.target.value.trim();
    this._error = !this.validateEmail(this.email);
    this.requestUpdate();
  }

  /**
   * Called when the user submits the form.
   * Checks if the email property is empty or invalid, if so, sets the _error property to true and calls requestUpdate to re-render the component.
   * Otherwise, dispatches a custom event "submit" with the email property as the detail.
   * The event bubbles and is composed.
   */
  handleSubmit() {
    if (!this.email || this._error) {
      this._error = true;
      this.requestUpdate();
      return;
    }

    this.dispatchEvent(
      new CustomEvent("submit", {
        detail: { email: this.email },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
        <div class="container">
          <article class="information">
            <h1>Stay updated!</h1>
            <p>
              Join 60,000+ product managers receiving monthly updates on:</p>
            <benefits-list .items=${this._list}></benefits-list>
            <section class="form">
              <article class="input"> 
                <label for="email">Email address</label>
                ${
                  this._error
                    ? html`<span class="error">Valid email required</span>`
                    : ""
                }
              </article>
              <input .value=${this.email} @input=${this.onchangeEmail} type="email" placeholder="email@company.com" required />
              <styled-button @click=${this.handleSubmit} label="Subscribe to monthly newsletter"></styled-button>
            </section>
          </article>
          <section class="banner">
            <img src="./src/assets/img/banner-desktop.jpg" alt="illustration-sign-up-mobile">
          </section>
        </div>
    `;
  }
}

customElements.define("suscribe-form", SuscribeForm);
