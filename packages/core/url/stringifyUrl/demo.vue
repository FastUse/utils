<script lang="ts" setup>
import { ref, computed } from 'vue'
import { stringifyUrl } from '.'

const inputVal = ref('')

const url = window.location.href
const urlText = computed(() =>
  stringifyUrl({ url, query: { input: inputVal.value } })
)
</script>

<template>
  <div>
    <div class="flex items-center mb4">
      <label class="mr3">input:</label>
      <input v-model="inputVal" type="text" />
    </div>
    <div>{{ urlText }}</div>
  </div>
</template>
