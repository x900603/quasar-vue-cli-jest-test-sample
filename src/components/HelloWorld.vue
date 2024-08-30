<template>
  <img
    alt="Quasar logo"
    src="../assets/logo.svg"
    style="width: 200px; height: 200px"
  />
  <q-btn @click="emit('click-btn')">Test Emit</q-btn>
</template>

<script setup lang="ts">
const emit = defineEmits(["click-btn"]);
</script>

<script lang="ts">
export default {
  name: "HelloWorld",
};
</script>
