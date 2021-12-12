import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  //home page component
  async getHtml() {
    return /*HTML*/ `
        <h1>Home</h1>
        <p>
        An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.<br>
        This therefore allows users to use websites without loading whole new pages from the server, which can result in performance gains and a more dynamic experience, with some tradeoff disadvantages such as SEO, more effort required to maintain state, implement navigation, and do meaningful performance monitoring.
        <span class="reference-link"><a href="https://developer.mozilla.org/en-US/docs/Glossary/SPA">(Mozzila Developer reference).</a></span>
        </p>
        
        <p class="home-link">
          ► <a href="/posts" data-link>View recent posts.</a>
        </p>
    `;
}
}