<script setup>
import { ref } from 'vue';

const isColorRed = ref('text-red');
const isColorGreen = ref('text-green');



</script>

<template>
    <div>
        <button :class="isColorRed">Click Me</button>
        <button :class="isColorGreen">Click Me</button>
    </div>
</template>

<style scoped>
.text-red {
    color: red;
}

.text-green {
    color: green;
}

div {
    display: flex;
    justify-content: center;
    gap: 15px;
}
</style>