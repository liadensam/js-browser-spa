import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  async getHtml() {
    return /*HTML*/ `
        <h1>Posts</h1>
        <h2>Fetch API</h2>
        <p>12.12.2021</p>
        <p>
        Fetch provides a generic definition of Request and Response objects (and other things involved with network requests). This will allow them to be used wherever they are needed in the future, whether it’s for service workers, Cache API, and other similar things that handle or modify requests and responses, or any kind of use case that might require you to generate your responses programmatically (that is, the use of computer program or personal programming instructions).
        <br><br>
        It also defines related concepts such as CORS and the HTTP Origin header semantics, supplanting their separate definitions elsewhere.
        <br><br>
        For making a request and fetching a resource, use the fetch() method. It is implemented in multiple interfaces, specifically Window and WorkerGlobalScope. This makes it available in pretty much any context you might want to fetch resources in.
        <br><br>
        The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status. You can also optionally pass in an init options object as the second argument (see Request).
        <br><br>
        Once a Response is retrieved, there are a number of methods available to define what the body content is and how it should be handled.
        <br><br>
        You can create a request and response directly using the Request() and Response() constructors, but it's uncommon to do this directly. Instead, these are more likely to be created as results of other API actions (for example, FetchEvent.respondWith() from service workers).
        <span class="reference-link"><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">(Mozzila Developer reference).</a></span>
        
        </p>
    `;
}
}