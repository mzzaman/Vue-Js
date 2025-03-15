<script setup>
import { ref } from 'vue';

const colorTeal = ref('color-teal')
</script>


<template>
    <h1 :class="colorTeal">Vue Js Template Syntax <span>One</span></h1>
</template>



<style>
span {
    color: red;
}

.color-teal {
    color: teal;
}
</style>