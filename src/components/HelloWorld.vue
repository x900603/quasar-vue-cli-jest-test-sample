<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="../assets/logo.svg"
      style="width: 200px; height: 200px"
    />
    <b-btn @click="emit('click-btn')">Test Emit</b-btn>
  </q-page>
</template>

<script setup lang="ts">
const emit = defineEmits(["click-btn"]);
</script>

<script lang="ts">
export default {
  name: "HelloWorld",
};
</script>
