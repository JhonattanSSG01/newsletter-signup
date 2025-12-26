import { LitElement } from 'lit';
import { customElements } from "lit/decorators.js";

export class SuscribeForm extends LitElement {
  render() {
    return html`
        <div>
          <article>
            <h1>Stay updated!</h1>
            <p>
              Join 60,000+ product managers receiving monthly updates on:</p>
            <p>
              <ul>
                <li>Product discovery and building what matters</li>
                <li>Measuring to ensure updates are a success</li>
                <li>And much more!</li>
              </ul>
            </p>
            <section>
              <input type="email" placeholder="Email address">
              <button>Subscribe to monthly newsletter</button>
            </section>
          </article>
          <section>
            <img src="./src/assets/img/banner-mobile.jpg" alt="illustration-sign-up-mobile">
          </section>
        </div>
    `;
  }
}

customElements.define('suscribe-form', SuscribeForm);
