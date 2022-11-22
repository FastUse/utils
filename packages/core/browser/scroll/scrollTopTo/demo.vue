<script lang="ts" setup>
import { ref } from 'vue'
import { scrollTopTo } from '.'

const scrollRef = ref()
const top = ref(200)
const duration = ref(0.4)

function setTop() {
  scrollTopTo(scrollRef.value, top.value || 0, duration.value)
}
</script>

<template>
  <div>
    <section class="mb5">
      <div>
        <label for="">Top:</label>
        <input v-model="top" type="number" />
      </div>
      <div>
        <label for="">duration:</label>
        <input v-model="duration" type="number" />
      </div>
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
