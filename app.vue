<script lang="ts"setup>
import TaskForm from './components/TaskForm/TaskForm.vue';
import TaskList from './components/TaskList/TaskList.vue';

import { type Task } from './types/Task';

const listTasks = ref<Array<Task>>([])

const handleAddTask = ( task: string) => {
  listTasks.value.push({
    task,
    status: false,
  })
}

const handleDeleteTask = ( indexRemove: number) => {
  listTasks.value = listTasks.value.filter((_, index) => index !== indexRemove)
}

const handleToogleStatusTask = (indexToogle: number) => {
  listTasks.value.forEach((item, index) => {
    if(index === indexToogle) {
      item.status = !item.status
    }
  })
}
</script>

<template>
  <div class="container">
      <h1>Tarefas</h1>:
      <TaskForm @emit-add="handleAddTask" />
      <TaskList :list-tasks="listTasks"  @emit-status="handleToogleStatusTask" @emit-delete="handleDeleteTask"/>
  </div>
</template>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 100px 0;
}


</style>