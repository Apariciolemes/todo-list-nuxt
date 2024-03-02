// tests/components/SomeComponents.nuxt.spec.ts
import { describe, it, expect } from 'vitest'
import { mount, } from '@vue/test-utils'
import TaskForm from '../components/TaskForm.vue'
import TextField from '../components/TextField.vue'


describe('TaskForm', () => {
    it('should render TaskForm component and render with child components', () => {
        const wrapper = mount(TaskForm)
        expect(wrapper.vm).toBeTruthy()
        expect(wrapper.findComponent(TextField).exists()).toBe(true)
    })

    it('should emit event add task ', () => {
        const wrapper = mount(TaskForm)
        wrapper.find('button').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('emit-add')
    })

    it('clean field after add task', async () => {

        const wrapper = mount(TaskForm)

        wrapper.vm.formData.task = 'Task 1'
        wrapper.vm.formData.status = false

        await wrapper.vm.reset()
        expect(wrapper.vm.formData.task).toBe('')
        expect(wrapper.vm.formData.status).toBe(false)
    })
})