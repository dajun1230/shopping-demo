<script setup lang="ts">
import { RouterView } from 'vue-router';
import { NConfigProvider, zhCN, dateZhCN } from 'naive-ui';
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <RouterView />
  </n-config-provider>
</template>

<style scoped lang="scss">
#app > div {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
