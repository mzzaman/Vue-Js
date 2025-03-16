<script setup>
import { computed, ref } from 'vue';
const name = ref("Devil");
function greet(event) {
    alert(`Hello ${name.value}!`);

    if (event) {
        alert(event.target.tagName);
    }
}

const sayHello = () => {
    alert('Say Hello');
}

const sayBye = () => {
    alert('Say Bye');
}

const firstName = ref("");
const lastName = ref('')

const fullName = () => {
    return `${firstName.value}  ${lastName.value}`;
}

</script>
<template>
    <h1>Event Handling</h1>

    <button @click="greet">Greet</button>

    <button @click="sayHello">Say Hello</button>
    <button @click="sayBye">Say Bye</button>

    <form action="get" @submit.prevent="fullName">
        <input type="text" name="firsName" v-model="firstName" placeholder="Enter Your First Name">
        <input type="text" name="lastName" v-model="lastName" placeholder="Enter Your Last Name">
        <button type="submit">Submit</button>
    </form>

    <div>{{ fullName() }}</div>

</template>
<style scoped></style>