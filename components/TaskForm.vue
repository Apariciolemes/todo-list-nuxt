<template>
    <div>
        <button class="btn-add" @click="emit('emit-add')">Adicionar</button>
    </div>
</template>


<script lang="ts" setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['emit-add'])

</script>