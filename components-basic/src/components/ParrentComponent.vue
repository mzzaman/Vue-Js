<script setup>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';
const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

const increaseCount = () => {
  console.log("Button Was Clicked")
}

</script>


<template>
  <h1>Hello Parent Component</h1>
  <ChildComponent v-for="post in posts" :key="post.id" :title="post.title" @increase="increaseCount" />
</template>
