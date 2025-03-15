<script setup>
import { ref } from 'vue';

const isYellow = ref('color-yellow');
</script>


<template>
    <h1 :class="isYellow">Vue Js Template Syntax <span>Two</span></h1>
</template>



<style scoped>
.color-yellow {
    color: yellow;
}
</style>