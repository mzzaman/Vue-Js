<script setup>
import { computed, ref } from 'vue'
let msg = ref("Vue Js Reactivity Fundamentals")


setTimeout(() => {
  msg.value = "Vue Js Reactivity Hello World"
}, 5000);

const firsName = ref("Devil");
const lastName = ref("Doe");
const fullName = () => {
  return firsName.value + ' ' + lastName.value;
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>Hello: {{ fullName() }}</h2>
</template>

<style scoped></style>
