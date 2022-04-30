<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import { RouterView } from "vue-router";

export default {
  components: { SiteHeader, SiteFooter, RouterView },
};
</script>

<template>
  <div
    class="bg-gorfeelt-800 p-8 md:rounded-md shadow-[0px_0px_10px_15px_rgba(51,38,25,0.125)]"
  >
    <site-header />
    <router-view />
    <site-footer />
  </div>
</template>
