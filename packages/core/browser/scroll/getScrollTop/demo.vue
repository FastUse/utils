<script lang="ts" setup>
import { ref } from 'vue'
import { getScrollTop } from '.'

const result = ref('')

const scrollRef = ref()

function getTop() {
  result.value = getScrollTop(scrollRef.value) + ''
}
</script>

<template>
  <div>
    <section
      ref="scrollRef"
      class="h100 overflow-y-auto mb5"
      @scroll="onScroll"
    >
      <div v-for="i in 8" :key="i" class="border h20 mb3">{{ i }}</div>
    </section>
    <section class="mb5">
      <button @click="getTop">获取</button>
    </section>
    <div>result: {{ result }}</div>
  </div>
</template>
