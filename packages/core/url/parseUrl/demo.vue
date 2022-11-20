<script setup lang="ts">
import { computed, ref } from 'vue'
import { parseUrl } from '.'

const url = ref('https://www.baidu.com?foo=1')

const result = computed(() => JSON.stringify(parseUrl(url.value)))
</script>

<template>
  <div>
    <section class="mt3">
      <div class="flex items-center">
        <label class="mr3" for="">parseUrl</label>
        <input v-model="url" type="text" />
      </div>
    </section>
    <section>result: {{ result }}</section>
  </div>
</template>
