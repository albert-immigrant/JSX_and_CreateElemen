<template functional>
  <div class="b-red">
    {{ parent.$options.name }}
    <div class="b">props: {{ props }}</div>
    <div class="b">data: {{ data }}</div>
    <div class="b" v-if="parent.$options.name === 'FC-JSX'">
      foo: {{ data.foo }}
    </div>
    <div class="b" v-else>foo: {{ props.foo }}</div>
  </div>
</template>
