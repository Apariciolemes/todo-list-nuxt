<script lang="ts" setup>
import { defineModel} from 'vue';
const value = defineModel('value')
</script>

<template>
  <input v-model="value">
</template>

<style>
input {
    margin-right: 8px;
    height: 24px;
    font-size: 20px;
}
</style>