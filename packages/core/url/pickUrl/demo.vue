<script lang="ts" setup>
import { computed, ref } from 'vue'
import { pickUrl } from '.'

const url = window.location.href
const urlText = ref(`${url}?foo=foo&bar=bar&zoo=zoo`)
const inputVal = ref('')

const result = computed(() => pickUrl(urlText.value, inputVal.value.split(',')))
</script>

<template>
  <div>
    <div class="mt3">{{ urlText }}</div>
    <section class="mt3">
      <div class="flex items-center">
        <label class="mr3" for="">pickKey</label>
        <input v-model="inputVal" type="text" />
      </div>
      <p>输入要保留的key以英文逗号分隔</p>
    </section>
    <div>result: {{ result }}</div>
  </div>
</template>
