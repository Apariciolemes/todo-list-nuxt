import { describe, it, expect } from 'vitest'
import { mount, } from '@vue/test-utils'
import TaskForm from './TaskForm.vue'
import BaseTextField from '../BaseTextField/BaseTextField.vue'

describe('TaskForm', () => {
    it('should render TaskForm component and render with child components', () => {
        const wrapper = mount(TaskForm)
        expect(wrapper.vm).toBeTruthy()
        expect(wrapper.findComponent(BaseTextField).exists()).toBe(true)
    })

    it('should emit event add task when has value in TextField', () => {
        const wrapper = mount(TaskForm)
        const vm = wrapper.vm as ComponentPublicInstance<{
            formData: { task: string; status: boolean };
        }>

        vm.formData.task = 'Task 1'
        wrapper.find('button').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('emit-add')
    })

    it('clean fields when reset formData', async () => {
        const wrapper = mount(TaskForm)

        const vm = wrapper.vm as ComponentPublicInstance<{
            formData: { task: string; status: boolean };
            reset: () => void;
        }>

        vm.formData.task = 'Task 1'
        vm.formData.status = false
        vm.reset()

        expect(vm.formData.task).toBe('')
        expect(vm.formData.status).toBe(false)
    })
})