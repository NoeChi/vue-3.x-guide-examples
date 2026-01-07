<!-- <template>
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
</template> -->

<script>
import { h } from "vue";

export default {
  setup(props, { slots }) {
    // console.log(slots);
    console.log(slots.header);
    console.log(slots.default);

    return () => [
      h("header", {}, slots.header()),
      h("main", {}, slots.default()),
    ];
  },
};
</script>

<style scoped></style>
