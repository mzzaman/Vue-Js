<script setup>
import SectionCard from "@/components/SectionCard.vue";
import Button from "@/components/Button.vue";
defineProps({
  title: String,
})
</script>


<template>
  <SectionCard>
    <div class="flex justify-between">
      <div>{{ title }}</div>
      <div>
        <Button variant="danger">Cancel</Button>
      </div>
    </div>

  </SectionCard>
</template>
