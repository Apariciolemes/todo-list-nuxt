<template>
  <input :value="props.value" @input="setInputValue($event)">
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['emit-input'])
const props = defineProps({
    value: {
        type: String,
        default: ''
    }
})


const setInputValue = (event: InputEvent) => {
    const value = (event.target as HTMLInputElement).value
    emit('emit-input', value)
}

</script>