<template>
  <div id="app">
    <JSX :data="data" />
    <CE :data="data" />
  </div>
</template>

<script>
import JSX from "./components/FC-JSX";
import CE from "./components/FC-CreateElement";

export default {
  name: "App",
  data() {
    return {
      data: {
        foo: "bar",
        baz: "qux",
      },
    };
  },
  components: {
    JSX,
    CE,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.b-red {
  border: 1px solid red;
  margin: 10px;
  padding: 10px;
}
.b {
  border: 1px solid;
  margin: 5px;
  padding: 5px;
}
</style>
