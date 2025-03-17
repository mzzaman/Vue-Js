<script setup>
import { onBeforeMount, onMounted } from 'vue';


onMounted(() => {
    console.log("mounted")
});

onBeforeMount(() => {
    console.log("onBeforeMount")
})

</script>

<template>
    <h1>Vue Js Lifecycle Hooks</h1>

</template>

<style scoped></style>