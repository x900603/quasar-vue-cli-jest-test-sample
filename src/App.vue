<template>
  <div>
    <HelloWorld />
  </div>
</template>

<script>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "LayoutDefault",

  components: {
    HelloWorld,
  },

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
