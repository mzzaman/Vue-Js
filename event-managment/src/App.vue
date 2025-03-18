<script setup>
  import EventCard from "@/components/EventCard.vue";
  import BookingItem from "@/components/BookingItem.vue";

</script>

<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class='text-4xl font-medium'>Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Event</h2>
    <section class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-rows-1 gap-8">
      <EventCard v-for="i in 6" :key="i"
      title="Vue Conference 20024"
      when="2025-05-01"
      description="Conference About Vue and Javascript"
      @register="console.log('Register Emit Added')"
      />
    </section>

     <h2 class="text-2xl font-medium">Your Booking</h2>
    <section class="grid sm:grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       <BookingItem v-for="i in 3" :key="i"/>
    </section>

  </main>

</template>

