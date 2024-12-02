<script setup lang="ts">
import AHeader from '@/components/AHeader.vue'
import AFooter from '@/components/AFooter.vue'
</script>

<template>
  <div class="app">
    <AHeader class="header" />
    <main class="content">
      <RouterView />
    </main>
    <AFooter class="footer" />
  </div>
</template>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

.footer {
  margin-top: auto;
}
</style>
