<script lang="ts" setup>
import { ref } from 'vue'
import { setScrollTop } from '.'

const scrollRef = ref()
const inputVal = ref(0)

function setTop() {
  setScrollTop(scrollRef.value, inputVal.value || 0)
}
</script>

<template>
  <div>
    <section class="mb5">
      <input v-model="inputVal" type="number" />
      <button @click="setTop">设置</button>
    </section>
    <section ref="scrollRef" class="h100 overflow-y-auto mb5">
      <div
        v-for="i in 8"
        :key="i"
        class="border h20 mb3 b-rd flex items-center justify-center"
      >
        {{ i }}
      </div>
    </section>
  </div>
</template>
