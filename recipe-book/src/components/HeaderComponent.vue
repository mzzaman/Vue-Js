<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router';

</script>


<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a class="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
        <img src="../assets/logo.svg" class="h-8" alt="Vue Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Vue</span>
      </a>


      <ul
        class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <RouterLink to="/"
            class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
            aria-current="page">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" href="#"
            class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            About</RouterLink>
        </li>
        <li>
          <RouterLink to="/services"
            class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Services</RouterLink>
        </li>
        <li>
          <RouterLink to="pricing"
            class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Pricing</RouterLink>
        </li>
        <li>
          <RouterLink to="contact"
            class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Contact</RouterLink>
        </li>
      </ul>
    </div>
  </nav>

  <RouterView />

</template>
