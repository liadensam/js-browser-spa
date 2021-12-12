export default class {
  constructor(params) {
      this.params = params;

      // console.log(this.params);
  }

  setTitle(title) {
    //updates the title of the page in the tab
    document.title = title;
  }

  async getHtml() {
    return "";
  }
}