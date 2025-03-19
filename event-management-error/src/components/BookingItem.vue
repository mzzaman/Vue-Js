<script setup>
import { Check, LoaderCircle } from "lucide-vue-next";
import SectionCard from "@/components/SectionCard.vue";
import Button from "@/components/Button.vue";
import { computed } from "vue";
const props = defineProps({
  title: String,
  status: String,
})
defineEmits(['cancelBooking']);
const pending = computed(() => props.status === 'pending');
const icon = computed(() => pending.value ? LoaderCircle : Check)

</script>


<template>
  <SectionCard>
    <div class="flex justify-between">
      <div class="flex space-x-4">
        <div>{{ title }}</div>
        <div>
          <component :is="icon" :class="{ 'animate-spin': pending }" />
        </div>
      </div>
      <div>
        <Button variant="danger" @click="$emit('cancelBooking')">Cancel</Button>
      </div>
    </div>

  </SectionCard>
</template>
