<script>
import { RouterLink } from "vue-router";

export default { components: { RouterLink } };
</script>

<template>
  <div
    class="flex justify-between items-center flex-wrap w-full p-6 h-85 bg-gorfeelt-700 rounded-md"
  >
    <router-link
      class="inline-flex items-center gap-2 hover:underline text-gorfeelt-100"
      to="/"
    >
      <img src="/icon.svg" alt="logo" class="h-8" />
      gorfeelt
    </router-link>
    <div class="inline-flex gap-2 text-gorfeelt-100">
      <router-link class="hover:underline" to="/">Home</router-link>
      <router-link class="hover:underline" to="/">Log in</router-link>
      <router-link class="hover:underline" to="/">Register</router-link>
      <router-link class="hover:underline" to="/">Start thread</router-link>
    </div>
  </div>
</template>
