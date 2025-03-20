<script setup>
import { onMounted } from "vue";

import useBookings from "./composables/useBookings";

import BookingItem from "@/components/BookingItem.vue";
import LoadingBookingItem from "./components/LoadingBookingItem.vue";
import EventList from "./EventList.vue";


const { bookings, loading, bookingFetch } = useBookings()

const handleRegistration = async (event) => {

  if (bookings.value.some((booking) => booking.eventId === event.id && booking.userId === 1)) {
    alert("You Are Already Registered for this event.");
    return;
  }

  const newBooking = {
    id: Date.now().toString(),
    userId: 1,
    eventId: event.id,
    eventTitle: event.title,
    status: "pending",
  }
  bookings.value.push(newBooking)

  try {
    const response = await fetch('http://localhost:3001/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...newBooking,
        status: 'confirmed'
      })
    })
    if (response.ok) {
      const index = findBookingById(newBooking.id);
      bookings.value[index] = await response.json();
    } else {
      throw new Error('Failed to confirm booking');
    }

  } catch (error) {
    console.error('Failed to register for event:', error);
    bookings.value = bookings.value.filter(b => b.id !== newBooking.id);
  }
}

const findBookingById = id => bookings.value.findIndex(b => b.id === id);

const cancelBooking = async (bookingId) => {
  const index = findBookingById(bookingId);
  const originalBooking = bookings.value[index];
  bookings.value.splice(index, 1);

  try {
    const response = await fetch(`http://localhost:3001/bookings/${bookingId}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error("Booking could not be cancelled");
    }

  } catch (e) {
    console.log(`Failed to cancel booking:`, e);
    bookings.value.splice(index, 0, originalBooking)

  }
}


onMounted(() => {
  bookingFetch()
});
</script>

<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class='text-4xl font-medium'>Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Event</h2>

    <EventList @register="handleRegistration($event)" />

    <h2 class="text-2xl font-medium">Your Booking</h2>
    <section class="grid sm:grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <template v-if="!loading">
        <BookingItem v-for="booking in bookings" :key="booking.id" :title="booking.eventTitle" :status="booking.status"
          @click="cancelBooking(booking.id)" />
      </template>

      <template v-else>
        <LoadingBookingItem v-for="i in 4" :key="i" />
      </template>
    </section>


  </main>

</template>
