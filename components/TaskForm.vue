<template>
    <div>
        <TextField v-model:value="formData.task"/>
        <button  @click="add">Adicionar</button>
    </div>
</template>


<script lang="ts" setup>
import { defineEmits, reactive } from 'vue'
import TextField from './TextField.vue'


const initialFormData = {
    task: '',
    status: false
}

let formData = reactive({...initialFormData})

const emit = defineEmits(['emit-add'])

const add = () => {
    emit('emit-add', formData.task )
    reset()
}

const reset = () => {
    Object.assign(formData, initialFormData);
}

</script>