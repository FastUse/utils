<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { rotate } from '.'

const rotateRef = ref<HTMLElement>()

const rotateAngle = ref(0)

onMounted(() => {
  rotate({
    el: rotateRef.value!,
    onRotateStart(ev) {
      ev.preventDefault()
    },
    onRotateIng(rotateEv) {
      rotateEv.origin.preventDefault()
      const { rotate: _rotate } = rotateEv.delta
      rotateAngle.value += _rotate
    }
  })
})
</script>
<template>
  <div>
    <div class="mb4">请用手机查看效果</div>
    <div class="border h80 flex items-center justify-center">
      <div
        ref="rotateRef"
        class="w20 h20 border"
        :style="{
          transform: `rotate(${rotateAngle}deg)`
        }"
      ></div>
    </div>
  </div>
  <div>rotate: {{ rotateAngle }}</div>
</template>
