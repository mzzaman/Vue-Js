<script setup>
import { ref } from 'vue';

const isOrange = ref('color-orange');
</script>

<template>
    <h1 :class="isOrange">Vue Js Template Syntax <span>Three</span></h1>
</template>

<style scoped>
.color-orange {
    color: orange;
}
</style>