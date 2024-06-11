<script setup>
import { RouterView } from "vue-router";
import Header from "./pages/common/Header.vue";
import Footer from "./pages/common/Footer.vue";


</script>

<template>
  <div>
    <Header dark transparent />
    <router-view />
    <Footer />
  </div>
</template>
