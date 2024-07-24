<template>
  <div id="app" class="bg-gray-100 min-h-screen">
    <Navbar />
    <div class="p-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>

<style scoped>
/* Global styles */
</style>
