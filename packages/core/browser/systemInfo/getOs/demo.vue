<script lang="ts" setup>
import { getOs } from '.'

const os = getOs()
</script>

<template>
  <div>
    系统名：{{ os.osName }}
    <br />
    系统版本：{{ os.osVersion }}
    <br />
    系统语言：{{ os.osLanguage }}
    <br />
    系统主题：{{ os.osTheme }}
  </div>
</template>
