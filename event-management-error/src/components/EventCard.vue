<script setup>
import Button from "@/components/Button.vue";
import SectionCard from "@/components/SectionCard.vue";
defineProps({
  title: String,
  when: String,
  description: String
})

defineEmits(['register'])


</script>
<template>
  <SectionCard>
    <template #header>
      {{ title }}
    </template>
    {{ when }}
<template #footer>
  <div class="space-y-4">
    <p class="p-4">{{ description }}</p>
  <div class="flex justify-end p-4">
        <Button @click="$emit('register')">Register</Button>
    </div>
  </div>
</template>
  </SectionCard>
</template>
