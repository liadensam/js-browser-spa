import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Viewing Post");
  }

  async getHtml() {
    // console.log(this.params.id);
    return /*HTML*/ `
        <h1>Viewing Post</h1>
        <p>
        Lorem ipsum dolor sit amet.
        </p>
    `;
}
}