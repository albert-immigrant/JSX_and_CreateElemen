import List from "./List";

export default {
  name: "FC-CreateElement",
  props: ["data"],
  render(h) {
    return h("div", null, [
      // 等同于 <List data={this.data} />
      /* h(List, {
        attrs: {
          data: this.data
        }
      }),  */
      h(List, {
        props: this.data
      })
    ]);
  }
};
