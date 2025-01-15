<script setup lang="ts">
interface Props {
  breadcrumbs: BreadCrumb[]
}

interface BreadCrumb {
  title: string
  url: string
}

defineProps<Props>()
</script>

<template>
  <div class="a-breadcrumbs">
    <div
      class="a-breadcrumbs__list"
      v-for="(breadcrumb, index) in breadcrumbs"
      :key="breadcrumb.url"
    >
      <router-link :to="breadcrumb.url" class="a-breadcrumbs__item">
        {{ breadcrumb.title }}
      </router-link>
      <span class="a-breadcrumbs__devider">{{ index < breadcrumbs.length - 1 ? ' / ' : '' }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.a-breadcrumbs {
  display: flex;
  align-items: center;
  &__item,
  &__devider {
    color: #898989;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: underline;
    &:hover {
      color: #000;
    }
  }
  &__devider {
    text-decoration: none;
    margin: 0 4px 0 2px;
  }
  @media (max-width: 880px) {
    display: none;
  }
}
</style>
