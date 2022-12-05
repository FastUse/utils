<script setup lang="ts">
import { getDevice } from '.'

const deviceInfo = getDevice()
</script>

<template>
  <div>
    设备id: {{ deviceInfo.deviceId }}
    <br />
    设备类型: {{ deviceInfo.deviceType }}
    <br />
    设备型号: {{ deviceInfo.deviceModel }}
    <br />
    设备方向: {{ deviceInfo.deviceOrientation }}
    <br />
    设备像素比: {{ deviceInfo.devicePixelRatio }}
  </div>
</template>
