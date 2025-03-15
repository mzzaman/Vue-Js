<script setup>
import { computed, ref } from 'vue';

const task = ref("Vue Js Computed Property");

const age = ref(18);
const canVote = computed(() => age.value >= 18 ? "eligible" : " not eligible");
const canDrive = computed(() => age.value >= 18 ? "eligible" : "not eligible");

const author = ref({
    name: 'Devil Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})


const publishedBooksMessage = computed(() => author.value.books.length > 0 ? 'Yes' : 'No');

</script>

<template>
    <h1>{{ task }}</h1>
    <p>You are <span>{{ age }}</span>, And You are <span>{{ canVote }}</span> for Vote</p>
    <p>You are <span>{{ age }}</span>,And You are <span>{{ canDrive }}</span> for Drive</p>

    <h2>{{ author.name }} is Published Books: {{ publishedBooksMessage }}</h2>
    <p></p>
</template>

<style scoped>
span {
    color: #ffdede;
    font-weight: bold;
    background-color: teal;
    padding: 10px;
    text-align: center;
    text-transform: capitalize;
    letter-spacing: 2px;
    border-radius: 2px;
}

p {
    margin-bottom: 2rem;
}
</style>