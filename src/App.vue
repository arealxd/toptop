<script setup lang="ts">
import AHeader from '@/components/AHeader.vue'
import AFooter from '@/components/AFooter.vue'
import NavBar from '@/components/Mobile/NavBar.vue'
</script>

<template>
  <div class="app">
    <AHeader class="header" />
    <main class="content">
      <RouterView />
    </main>
    <AFooter class="footer" />
    <NavBar />
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
  @media (max-width: 880px) {
    background-color: #f0f0f0;
    padding-bottom: 76px;
  }
}

.footer {
  margin-top: auto;
}
</style>
