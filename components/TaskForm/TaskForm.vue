<script lang="ts" setup>
import { defineEmits, reactive } from 'vue'
import BaseTextField from '../BaseTextField/BaseTextField.vue'

const initialFormData = {
    task: '',
    status: false
}

const formData = reactive({...initialFormData})
const emit = defineEmits(['emit-add'])
const add = () => {
    if(formData.task) {
        emit('emit-add', formData.task )
        reset()
    }
}
   

const reset = () => {
    Object.assign(formData, initialFormData);
}

</script>

<template>
    <div>
        <BaseTextField v-model:value="formData.task"/>
        <button @click="add">Adicionar</button>
    </div>
</template>
