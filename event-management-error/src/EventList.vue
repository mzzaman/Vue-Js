<script setup>
import { onMounted, ref } from "vue";
import EventCard from "@/components/EventCard.vue";
import LoadingEventCard from "@/components/LoadingEventCard.vue";
import SectionCard from "@/components/SectionCard.vue";
import Button from "@/components/Button.vue";

const events = ref([]);
const loading = ref(false);
const error = ref(null);

defineEmits(['register'])


const fetchEvents = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await fetch('http://localhost:3001/events');
    events.value = await response.json();
  } catch (e) {
    error.value = e;
  } finally {
    loading.value = false;
  }

}

onMounted(() => fetchEvents())


</script>
<template>
  <template v-if="error">
    <SectionCard>
      <div class="space-y-4 flex items-center flex-col">
        <div class="text-red-500">
          Could not load events at the moment, Please try again
        </div>
        <Button @click="fetchEvents">Retry now</Button>
      </div>
    </SectionCard>
  </template>
  <template v-else>
    <section class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <template v-if="!loading">
        <template v-if="events.length">
          <EventCard v-for="event in events" :key="event.id" :title="event.title" :when="event.date"
            :description="event.description" @register="$emit('register', event)" />
        </template>
        <template v-else>
          <div class="col-span-2 text-center text-gray-500">No Events yet</div>
        </template>
      </template>

      <template v-else>
        <LoadingEventCard v-for="i in 4" :key="i" />
      </template>
    </section>
  </template>
</template>
