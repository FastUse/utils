<script lang="ts" setup>
import { reactive } from 'vue'
import { stringifyUrl } from '.'

const state = reactive({
  foo: '',
  bar: '',
  urlText: ''
})

const url = window.location.href

function onChange() {
  state.urlText = stringifyUrl({
    url,
    query: { foo: state.foo, bar: state.bar }
  })
}
</script>

<template>
  <div>
    <div class="flex items-center mb4">
      <label class="mr3">foo:</label>
      <input v-model="state.foo" type="text" />
    </div>
    <div class="flex items-center mb4">
      <label class="mr3">bar:</label>
      <input v-model="state.bar" type="text" />
    </div>
    <div>
      <button @click="onChange">change</button>
    </div>
    <div class="mt3">{{ state.urlText }}</div>
  </div>
</template>
