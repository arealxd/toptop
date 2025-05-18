<script setup lang="ts">
import UILoader from '@/components/UI/UILoader.vue'

interface Props {
  title: string
  size?: 'small' | 'medium' | 'large'
  type?: 'colored' | 'outlined' | 'text'
  background?: string
  color?: string
  gap?: string
  disabled?: boolean
  loading?: boolean
  preIcon?: string | null
  postIcon?: string | null
  buttonType?: 'button' | 'submit'
}

withDefaults(defineProps<Props>(), {
  title: 'Button',
  size: 'large',
  type: 'colored',
  background: '#3C9462',
  color: '#fff',
  gap: '16px',
  disabled: false,
  loading: false,
  preIcon: null,
  postIcon: null,
  buttonType: 'button'
})
</script>

<template>
  <button
    class="a-button"
    :type="buttonType"
    :class="{
      large: size === 'large',
      medium: size === 'medium',
      small: size === 'small',
      colored: type === 'colored',
      outlined: type === 'outlined',
      text: type === 'text',
      disabled: disabled
    }"
  >
    <template v-if="loading">
      <UILoader :size="24" />
    </template>
    <template v-else>
      <img v-if="preIcon" class="a-button__preicon" :src="`/icons/${preIcon}.svg`" alt="icon" />
      <span>{{ title }}</span>
      <img v-if="postIcon" class="a-button__posticon" :src="`/icons/${postIcon}.svg`" alt="icon" />
    </template>
  </button>
</template>

<style scoped lang="scss">
.a-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: v-bind(background);
  border-radius: 8px;
  gap: v-bind(gap);
  span {
    color: v-bind(color);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
.large {
  padding: 12px 24px;
  max-height: 48px;
}
.medium {
  padding: 8px 16px;
  max-height: 40px;
}
.small {
  padding: 4px 8px;
  max-height: 32px;
}
.colored {
  background: v-bind(background);
  border: none;
  span {
    color: v-bind(color);
  }
  &:hover {
    opacity: 0.9;
  }
}
.outlined {
  background: none;
  border: 1px solid v-bind(background);
  span {
    color: v-bind(background);
  }
  &:hover {
    background: v-bind(background);
    span {
      color: v-bind(color);
    }
  }
}
.text {
  width: fit-content;
  padding: 0;
  background: none;
  border: none;
  span {
    color: v-bind(color);
    text-decoration: underline;
  }
  &:hover {
    opacity: 0.7;
  }
}
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
