<template>
    <ul class="list-tasks" v-if="listTasks?.length">
        <li v-for="item in listTasks" :key="JSON.stringify(item)">
            <label>{{ item.name }}</label> 
            <button class="btn-delete" @click="emit('emit-delete')">DELETE </button>
            <button class="btn-status" @click="emit('emit-status')">DELETE </button>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps({
  listTasks: Array<{
    name: string
  }>
})

const emit = defineEmits(['emit-delete', 'emit-status'])

</script>

<style>
.list-tasks ul {
    display: flex;
    flex-direction: row;
}   
.list-tasks li {
    display: flex;
    align-items: center;
}
</style>