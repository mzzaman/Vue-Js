<script setup>
import useBookings from "@/composables/useBookings";
import EventList from "@/components/EventList.vue";
import BookingList from "@/components/BookingList.vue"
const { handleRegistration } = useBookings();
</script>

<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class='text-4xl font-medium'>Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Event</h2>

    <EventList @register="handleRegistration($event)" />

    <h2 class="text-2xl font-medium">Your Booking</h2>

    <BookingList />

  </main>

</template>
