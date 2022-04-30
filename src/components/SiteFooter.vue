<script>
import { RouterLink } from "vue-router";

export default { components: { RouterLink } };
</script>

<template>
  <div
    class="flex justify-center items-center flex-wrap w-full h-85 bg-gorfeelt-700 rounded-md p-6 mt-4"
  >
    <div class="inline-flex gap-2">
      <router-link class="hover:underline text-gorfeelt-100" to="/"
        >About</router-link
      >
      <router-link class="hover:underline text-gorfeelt-100" to="/"
        >Deez</router-link
      >
      <router-link class="hover:underline text-gorfeelt-100" to="/"
        >Nuts</router-link
      >
      <router-link class="hover:underline text-gorfeelt-100" to="/"
        >Instance</router-link
      >
    </div>
  </div>
</template>
