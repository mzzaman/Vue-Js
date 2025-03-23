<script setup lang="ts">
import useSettings from "@/composables/useSettings";

const { privacy } = useSettings();
import { useNotifications } from "@/composables/useNotifications";

const { addNotification } = useNotifications();
const save = () => {
  addNotification("Privacy settings was save Successfully")
}
</script>



<template>
  <div>
    <h1 class="text-2xl mb-4">Privacy</h1>
    <form class="space-y-4 mx-auto" @submit.prevent="save">
      <div class="flex items-center gap-2">
        <input type="checkbox" v-model="privacy.searchEngineIndexing">
        <label>Search engine indexing</label>
      </div>

      <div>
        <label class="mb-1">Visibility</label>
        <select v-model="privacy.visibility">
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
      </div>
      <button type="submit" class="btn-primary">Save</button>
    </form>
  </div>
</template>
