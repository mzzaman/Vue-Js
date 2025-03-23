<script setup lang="ts">
import useSettings from "@/composables/useSettings";

const { notifications } = useSettings();

import { useNotifications } from "@/composables/useNotifications";

const { addNotification } = useNotifications();
const save = () => {
  addNotification("Notification settings was save Successfully")
}

</script>


<template>
  <div>
    <h1 class="text-2xl mb-4">Notification</h1>

    <form class="space-y-4 mx-auto" @submit.prevent="save">
      <div class="flex items-center gap-2">
        <input type="checkbox" v-model="notifications.email">
        <label>Email Notifications</label>
      </div>
      <div class="flex items-center gap-2">
        <input type="checkbox" v-model="notifications.sms">
        <label>Sms Notifications</label>
      </div>
      <button type="submit" class="btn-primary mt-2">Save</button>
    </form>
  </div>
</template>
