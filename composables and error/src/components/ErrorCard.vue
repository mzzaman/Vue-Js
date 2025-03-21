<script setup>

import SectionCard from "@/components/SectionCard.vue";
import Button from "@/components/Button.vue";
defineProps({
  retry: {
    type: Function,
    required: false,
  }
})
</script>
<template>
  <SectionCard>
    <div class="space-y-4 flex items-center flex-col">
      <div class="text-red-500">
        <slot />
      </div>
      <Button @click="retry" v-if="retry">Retry now</Button>
    </div>
  </SectionCard>
</template>
