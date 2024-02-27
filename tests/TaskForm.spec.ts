// tests/components/SomeComponents.nuxt.spec.ts
import { describe, it, expect } from 'vitest'
import { mount, } from '@vue/test-utils'
import TaskForm from '../components/TaskForm.vue'

describe('TaskForm', () => {
    it('should render TaskForm component', () => {
        const wrapper = mount(TaskForm)
        expect(wrapper.vm).toBeTruthy()
    })

    it('should emit add task', () => {
        const wrapper = mount(TaskForm)
        wrapper.find('.btn-add').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('emit-add')

    })


})