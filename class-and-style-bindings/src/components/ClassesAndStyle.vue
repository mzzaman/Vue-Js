<script setup>
import { computed, ref } from 'vue'
const topic = ref("Vue Js Class and Style Bindings");

const age = ref(18);
const canPassPort = computed(() => {
    return age.value >= 18 ? "Yes" : "No";
})

const eligibleTrue = ref(true);
const eligibleFalse = ref(false);


const newAge = ref(16);
const canVote = computed(() => {
    return newAge.value > 18 ? "Eligible" : "Not Eligible";
})

const isEighteen = ref(true);
const notEighteen = ref(false);

</script>

<template>
    <h1>{{ topic }}</h1>
    <p :class="{ eligible: eligibleTrue, notEligible: eligibleFalse }">Do You Have PassProt : {{
        canPassPort
        }}</p>

    <p :class="{ isEighteen: isEighteen, notEighteen: notEighteen }">Are you 18 Years Old : {{
        canPassPort
        }}</p>

</template>

<style scoped>
.eligible {
    color: green;
    font-size: 2.2rem;
}

.notEligible {
    color: red;
}

.isEighteen {
    color: yellow;
}

.notEighteen {
    color: coral;
}
</style>
