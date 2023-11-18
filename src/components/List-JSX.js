export default {
  functional: true,
  render(h, ctx) {
    console.log(ctx);
    const { props, data, parent } = ctx;
    return (
      <div class="b-red">
        {parent.$options.name}
        <div class="b">props: {JSON.stringify(props)}</div>
        <div class="b">data: {JSON.stringify(data)}</div>
      </div>
    );
  }
};
