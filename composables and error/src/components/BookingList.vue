<script setup>
import { onMounted } from "vue";
import ErrorCard from "@/components/ErrorCard.vue";
import useBookings from "@/composables/useBookings";
import BookingItem from "@/components/BookingItem.vue";
import LoadingBookingItem from "@/components/LoadingBookingItem.vue";
const { bookings, loading, bookingFetch, error, cancelBooking } = useBookings();

onMounted(() => bookingFetch());


</script>

<template>
  <template v-if="error">
    <ErrorCard :retry="bookingFetch">Failed to load bookings</ErrorCard>
  </template>
  <template v-else>
    <section class="grid sm:grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <template v-if="!loading">
        <BookingItem v-for="booking in bookings" :key="booking.id" :title="booking.eventTitle" :status="booking.status"
          @click="cancelBooking(booking.id)" />
      </template>

      <template v-else>
        <LoadingBookingItem v-for="i in 4" :key="i" />
      </template>
    </section>
  </template>
</template>
