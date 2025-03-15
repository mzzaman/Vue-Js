<script setup>
import { computed, ref } from 'vue'
const age = ref(18);
const canVote = computed(() => {
  return age.value >= 18 ? "You Can Vote Now" : "You Can Not Vote Now";
})

const name = ref("Devil");
const whoAreYou = computed(() => {
  return name.value.toLowerCase() === "devil" ? "Hello Devil" : name;
})


const message = ref("");
const checked = ref(false)

const checkedNames = ref([]);

const picked = ref('One')

const selected = ref('');
</script>

<template>

  <input v-model.number="age">
  <p> {{ canVote }}</p>
  <input v-model="name">
  <p>{{ whoAreYou }}</p>


  <span>Multiline message is:</span>
  <textarea v-model.trim="message" placeholder="Add Multiline Message"></textarea>
  <p>{{ message }}</p>


  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>


  <div>Checked names: {{ checkedNames }}</div>

  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">John</label>

  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>


  <div>Picked: {{ picked }}</div>

  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>

  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>


  <div>Selected: {{ selected }}</div>

  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
</template>

<style scoped>
span {
  display: block;
  margin-bottom: 15px;
  text-transform: capitalize;
}
</style>
