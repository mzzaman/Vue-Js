<script setup lang="ts">
import useSettings from "@/composables/useSettings";
import { useNotifications } from "@/composables/useNotifications";

const { addNotification } = useNotifications();

const { general } = useSettings();


const save = () => {
  addNotification("General settings was save Successfully")
}


</script>


<template>
  <div>
    <h1 class="text-2xl mb-4">General</h1>

    <form class="space-y-4 mx-auto" @submit.prevent="save">
      <div>
        <label class="mb-1">UserName</label>
        <input type="text" v-model="general.userName">
      </div>

      <div>
        <label class="mb-1">Email</label>
        <input type="email" v-model="general.email">
      </div>

      <div>
        <label class="mb-1">About Me</label>
        <textarea v-model="general.aboutMe"></textarea>
      </div>

      <div>
        <label class="mb-1">Gender</label>
        <label>
          <input type="radio" value="male" v-model="general.gender"><span>Male</span>
        </label>

        <label>
          <input type="radio" value="female" v-model="general.gender"><span>Female</span>
        </label>

        <label>
          <input type="radio" value="other" v-model="general.gender"> <span>Other</span>
        </label>

      </div>

      <div>
        <label class="mb-1">Country</label>
        <select v-model="general.country">
          <option>Bangladesh</option>
          <option>Canada</option>
          <option>USA</option>
        </select>
      </div>

      <button type="submit" class="btn-primary">Save</button>

    </form>
  </div>
</template>
