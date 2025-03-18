<script setup>
import ButtonComonent from './ButtonComonent.vue';



defineProps({
  title: String
})
defineEmits(['increase'])


</script>

<template>
  <p>{{ title }}</p>

  <ButtonComonent>Submit</ButtonComonent>
  <ButtonComonent>Login</ButtonComonent>
  <ButtonComonent>SignUp</ButtonComonent>

</template>
