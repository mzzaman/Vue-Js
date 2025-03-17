<script setup>
import { ref, onMounted } from 'vue';


const newTaskInput = ref(null);

onMounted(() => {
    newTaskInput.value.focus();
})

</script>
<template>
    <form>
        <!-- Adding tasks form -->
        <input placeholder="Add new task" ref="newTaskInput">
        <select>
            <option disabled value="">Select priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
        </select>
        <button type="submit">Add Task</button>
    </form>

</template>

<style scoped></style>