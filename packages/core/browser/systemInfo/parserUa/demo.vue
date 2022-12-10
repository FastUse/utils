<script setup lang="ts">
import { computed, ref } from 'vue'
import { ua as defaultUa } from '../utils'
import { parserUa } from '.'

const ua = ref(defaultUa)
const result = computed(() => parserUa(ua.value))
</script>
<template>
  <div>
    <div class="mb3 flex items-center">
      <label class="mr3" for="">user-agent</label>
      <input v-model="ua" type="text" />
    </div>
    <code>
      <pre>{{ JSON.stringify(result, null, 2) }}</pre>
    </code>
  </div>
</template>
