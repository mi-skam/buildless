import { LitElement, css, html } from "lit";

class ExampleComponent extends LitElement {
  static styles = css`
    p {
      color: var(--cyan-8);
    }
  `;
  render() {
    return html`
      <p>Rendering a Lit component. This is cool! <slot></slot></p>
    `;
  }
}

customElements.define("example-component", ExampleComponent);
