import List from "./List";
import ListJSX from "./List-JSX";

export default {
  name: "FC-JSX",
  props: ["data"],
  render() {
    return (
      <div>
        <div>
          {/*  
            h(List, {
              attrs: {
                data: this.data
              }
            }) 
          */}
          {/* 等同于 */}
          {/* <List data={this.data} /> */}
          <List {...this.data} />
        </div>
        {/* 与上面代码同样的功能 */}
        {/* <div>
          <ListJSX data={this.data} />
          <ListJSX {...this.data} />
        </div> */}
      </div>
    );
  }
};
