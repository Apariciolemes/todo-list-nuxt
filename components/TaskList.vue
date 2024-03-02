<template>
    <ul class="list-tasks" v-if="listTasks?.length">
        <li v-for="(item, index) in listTasks" :key="JSON.stringify(item)">
            <label>{{ item.task }}</label> 
            <button class="btn-status" @click="emit('emit-status', index)"> {{ labelStatus(item.status) }} </button>
            <button class="btn-delete" @click="emit('emit-delete', index)">Apagar Tasks </button>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { type Task } from '../types/Task';

defineProps({
  listTasks: Array<Task>
})

const emit = defineEmits(['emit-delete', 'emit-status'])

const labelStatus = (status: boolean) => {
    return status ? 'Concluído' : 'Pendente'
}

</script>

<style>
.list-tasks ul {
    display: flex;
    flex-direction: row;
}   
.list-tasks li {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
}

.btn-status {
    margin: 0 4px 0 40px;
}

</style>