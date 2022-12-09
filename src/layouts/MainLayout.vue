<script setup>
import TheHeader from "src/components/common/TheHeader.vue";
import TheFooter from "src/components/common/TheFooter.vue";
import TheMobileMenu from "src/components/common/TheMobileMenu.vue";
</script>
<template>
  <q-layout>
    <TheHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
    <TheMobileMenu />
    <TheFooter />
  </q-layout>
</template>
