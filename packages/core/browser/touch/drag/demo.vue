<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { drag, IDragEv } from '.'

const dragRef = ref()
const state = reactive({
  x: 0,
  y: 0,
  lastX: 0,
  lastY: 0
})

function updateState(dragEv: IDragEv) {
  dragEv.origin.preventDefault()
  state.x = dragEv.delta.deltaX
  state.y = dragEv.delta.deltaY
}

function onDragEnd() {
  state.lastX += state.x
  state.lastY += state.y
  state.x = 0
  state.y = 0
}

onMounted(() => {
  drag({
    el: dragRef.value,
    onDragMove: updateState,
    onDragEnd
  })
})
</script>

<template>
  <div class="mb4">请在手机模式下使用</div>
  <div class="border h80">
    <div
      ref="dragRef"
      class="w20 h20 border"
      :style="{
        transform: `matrix(1, 0, 0, 1, ${state.lastX + state.x}, ${
          state.lastY + state.y
        })`
      }"
    ></div>
  </div>
  <div class="mt4">
    x: {{ state.x }} y: {{ state.y }} <br />
    lastX: {{ state.lastX }} lastY: {{ state.lastY }} <br />
    moveX: {{ state.lastX + state.x }} moveY:
    {{ state.lastY + state.y }}
  </div>
</template>
