import { LitElement, css, html } from "lit";
import sheet from "./example-component.css" assert { type: "css" };

class ExampleComponent extends LitElement {
  // inline css to create SFC
  // static styles = css`
  //   p {
  //     color: var(--cyan-8);
  //   }
  // `;

  // or

  // constructable stylesheets
  static styles = [sheet];
  render() {
    return html`
      <p>Rendering a Lit component. This is cool! <slot></slot></p>
    `;
  }
}

customElements.define("example-component", ExampleComponent);
