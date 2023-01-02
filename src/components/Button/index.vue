<script lang="ts" setup>
import { toRefs } from "vue";

interface Props {
  className?: string;
}

const props = defineProps<Props>();
const { className } = toRefs(props);
</script>

<template>
  <button :class="className">
    <slot></slot>
  </button>
</template>
