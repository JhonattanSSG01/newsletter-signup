import { LitElement, html } from "lit";
import { suscribeStyles } from "./suscribe-styles.js";
export class SuscribeForm extends LitElement {
  static get styles() {
    return suscribeStyles;
  }

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
   * Called when the user changes the email address input field.
   * Updates the email property and checks if the input is a valid email address.
   * If the input is not a valid email address, sets the _error property to true.
   * Calls requestUpdate to re-render the component.
   * @param {Event} e - The event object.
   */
  onchangeEmail(e) {
    this.email = e.target.value;
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(this.email){
      this._error = !validateEmail.test(this.email);
      this.requestUpdate();
    }
  }

  
  /**
   * Called when the user submits the form.
   * Checks if the email property is empty, if so, sets the _error property to true and calls requestUpdate to re-render the component.
   * Otherwise, dispatches a custom event "submit" with the email property as the detail.
   * The event bubbles and is composed.
   */
  handleSubmit() {
    if (!this.email) {
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
            <p>
              <ul>
                ${this._list.map(
                  (item) =>
                    html`<li>
                      <icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#b98016"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-circle-check-icon lucide-circle-check"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </icon>
                      ${item.text}
                    </li>`
                )}
              </ul>
            </p>
            <section class="form">
              <article class="input"> 
                <label for="email">Email address</label>
                ${
                  this._error
                    ? html`<span class="error">Valid email required</span>`
                    : ""
                }
              </article>
              <input .value=${this.email} @input=${
      this.onchangeEmail
    } type="email" placeholder="email@company.com" required />
              <button @click=${
                this.handleSubmit
              }>Subscribe to monthly newsletter</button>
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
