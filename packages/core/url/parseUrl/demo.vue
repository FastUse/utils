<script setup lang="ts">
import { computed, ref } from 'vue'
import { parseUrl } from '.'

const isRemoveHash = ref(true)

const url = ref('https://www.baidu.com/#/index.html?foo=1')

const result = computed(() =>
  JSON.stringify(parseUrl(url.value, { removeHash: isRemoveHash.value }))
)
</script>

<template>
  <div>
    <section class="mt3">
      <div class="mb3 flex items-center">
        <label class="mr3" for="">removeHash</label>
        <select v-model="isRemoveHash">
          <option :value="true">true</option>
          <option :value="false">false</option>
        </select>
      </div>
      <div class="flex items-center">
        <label class="mr3" for="">parseUrl</label>
        <input v-model="url" type="text" />
      </div>
    </section>
    <section>result: {{ result }}</section>
  </div>
</template>
