<script lang="ts" setup>
import { getBrowser } from '.'

function setMeta(name: string, content: string) {
  document.querySelector(`meta[name=${name}]`)?.setAttribute('content', content)
}

setMeta('viewport', 'width=device-width,initial-scale=1,viewport-fit=cover')

const result = getBrowser()
</script>
<template>
  <div>
    <code>
      <pre>{{ JSON.stringify(result, null, 2) }}</pre>
    </code>
  </div>
</template>
<style>
#app {
  padding-bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */
  padding-bottom: env(safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */
}
</style>
