<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { type Task } from '../../types/Task';

defineProps({
  listTasks: Array<Task>
})

const emit = defineEmits(['emit-delete', 'emit-status'])
const labelStatus = (status: boolean) => {
    return status ? 'Concluído' : 'Pendente'
}

const bgColorStatus = (status: boolean) => {
    return status ? '#00BD68' : '#405cf5'
}
</script>

<template>
    <ul class="list-tasks" v-if="listTasks?.length">
        <li v-for="(item, index) in listTasks" :key="JSON.stringify(item)">
            <label :style="{ textDecoration: item.status ? 'line-through' : '' }">{{ item.task }}</label> 
            <div class="flex align-center">
                <button class="btn-status" @click="emit('emit-status', index)" :style="{ background: bgColorStatus(item.status) }"> {{ labelStatus(item.status) }} </button>
                <button class="btn-delete bg-red" @click="emit('emit-delete', index)">Apagar Task </button>
            </div>
        </li>
    </ul>
</template>

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
    margin: 20px 0;
}

.btn-status {
    margin: 0 8px 0 40px;
}

.bg-red {
    background-color: red;
}
</style>