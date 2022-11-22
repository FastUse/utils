<script lang="ts" setup>
import { ref } from 'vue'
import { scrollLeftTo } from '.'

const scrollRef = ref()
const left = ref(200)
const duration = ref(0.4)

function setLeft() {
  scrollLeftTo(scrollRef.value, left.value, duration.value)
}
</script>

<template>
  <div>
    <section class="mb5">
      <div>
        <label for="">Left:</label>
        <input v-model="left" type="number" />
      </div>
      <div>
        <label for="">duration:</label>
        <input v-model="duration" type="number" />
      </div>
      <button @click="setLeft">设置</button>
    </section>
    <section ref="scrollRef" class="flex overflow-x-auto mb5">
      <div
        v-for="i in 8"
        :key="i"
        class="border w50 h50 mr5 flex-shrink-0 mb3 b-rd"
      ></div>
    </section>
  </div>
</template>
