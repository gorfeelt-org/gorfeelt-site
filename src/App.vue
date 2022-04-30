<script>
import SiteHeader from "./components/SiteHeader.vue";
import MainThread from "./components/MainThread.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  components: { SiteHeader, MainThread, SiteFooter },
};
</script>

<template>
  <div
    class="bg-gorfeelt-800 p-8 md:rounded-md shadow-[0px_0px_10px_15px_rgba(51,38,25,0.125)]"
  >
    <site-header />
    <main-thread />
    <main-thread />
    <main-thread />
    <main-thread />
    <main-thread />
    <main-thread />
    <main-thread />
    <main-thread />
    <main-thread />
    <site-footer />
  </div>
</template>
