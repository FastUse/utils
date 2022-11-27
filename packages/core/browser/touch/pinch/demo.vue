<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { pinch } from '.'

const pinchRef = ref<HTMLElement>()

const scale = ref(1)

onMounted(() => {
  pinch({
    el: pinchRef.value!,
    onPinchStart(ev) {
      ev.preventDefault()
    },
    onPinchMove(pinchEv) {
      pinchEv.origin.preventDefault()
      const { scale: _scale } = pinchEv.delta
      scale.value *= _scale
    }
  })
})
</script>
<template>
  <div>
    <div class="mb4">请用手机查看效果</div>
    <div class="border h80 flex items-center justify-center">
      <div
        ref="pinchRef"
        class="w20 h20 border"
        :style="{
          transform: `scale(${scale})`
        }"
      ></div>
    </div>
  </div>
</template>
