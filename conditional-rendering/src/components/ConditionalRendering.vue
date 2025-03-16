<script setup>
import { computed, ref } from 'vue';
const awesome = ref(true);

const showForm = ref(false);
const firstName = ref("Devil")
const lastName = ref("Doe")

let age = ref(15);
let canVote = computed(() => age.value >= 18 ? "Eligible" : "Not Eligible");

</script>
<template>
    <h1>Vue Js Conditional Rendering</h1>

    <button @click="awesome = !awesome">Toggle</button>
    <h1 v-if="awesome">Vue Js is Awesome</h1>
    <h1 v-else>Oh no 😢</h1>

    <button @click="showForm = !showForm">Show Form</button>
    <form v-if="showForm">
        <h1>Test Form</h1>
        <input type="text" name="firstName" v-model="firstName">
        <input type="text" name="lastName" v-model="lastName">
        <button type="submit">Submit</button>
    </form>
    <p v-else>Form not exist</p>

    <p>You age now {{ age }}, and You are {{ canVote }} For Vote</p>


</template>
<style scoped></style>