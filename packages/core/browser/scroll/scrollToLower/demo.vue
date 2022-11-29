<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { scrollToLower } from '.'

function sleep() {
  return new Promise<number[]>(res => {
    setTimeout(() => {
      res([1, 2, 3])
    }, 100)
  })
}

const scrollRef = ref<HTMLElement>()
const data = ref(new Array(20).fill(1))

onMounted(() => {
  scrollRef.value?.addEventListener('scroll', () => {
    scrollToLower({
      scroller: scrollRef.value!,
      async callback() {
        const res = await sleep()
        data.value = [...data.value, ...res]
      },
      threshold: 0
    })
  })
})
</script>

<template>
  <div>
    <div ref="scrollRef" class="h100 border round overflow-y-auto px2">
      <div
        v-for="(item, idx) in data"
        :key="idx"
        class="h10 flex border items-center justify-center my2"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
