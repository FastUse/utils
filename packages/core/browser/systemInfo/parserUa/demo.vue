<script setup lang="ts">
import { parserUa } from '.'

const result = parserUa()
</script>
<template>
  <div>
    <code>
      <pre>{{ JSON.stringify(result, null, 2) }}</pre>
    </code>
  </div>
</template>
