<script setup>
import { computed, ref } from 'vue';


const questions = [
  'How much is 2+2',
  'How much is 3*5+1',
  'What is the rest from 3/1'
];
const answers = [
  '4',
  '16',
  '1'
];


const score = ref(0);
const current = ref(0);
const answer = ref(null);

const question = computed(() => questions[current.value]);
const rightAnswer = computed(() => answers[current.value]);
const areWeDone = computed(() => questions.length === current.value);


const check = () => {
  if (answer.value === rightAnswer.value) {
    score.value++;
  }
  answer.value = null;
  current.value++;
  if (areWeDone.value) {
    clearInterval(interval)
  }
}
const interval = setInterval(check, 4000);

</script>

<template>
  <div>

    {{ areWeDone ? 'Your score: ' + score : 'Next question' }}
  </div>
  <div>
    {{ question }}
  </div>
  <div>
    <input v-model="answer" placeholder="Enter Your Answer" />
  </div>
</template>

<style scoped>
div {
  font-size: 2rem;
}

input {
  width: 100%;
  height: 40px;
  background-color: #bda9a9;
  outline: none;
  border: none;
  color: teal;
  font: inherit;
}
</style>
