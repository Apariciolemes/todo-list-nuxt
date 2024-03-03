import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseTextField from './BaseTextField.vue'
import TaskForm from '../TaskForm/TaskForm.vue'

describe('BaseTextField', () => {
    it('render text field compoent', () => {
        const wrapper = mount(BaseTextField)
        expect(wrapper.vm).toBeTruthy()
    })

    it('render with props value', () => {
        const wrapper = mount(BaseTextField, {
            props: {
                value: 'Task 1'

            }
        })
        const input = wrapper.find('input')
        expect(input.element.value).toEqual('Task 1')
    })

    it('should update formData.task on the TaskForm when update value BaseTextField', async () => {
        const wrapperTaskForm = mount(TaskForm)
        const baseTextField = wrapperTaskForm.findComponent(BaseTextField)

        await baseTextField.find('input').setValue('Task 1')

        const vm = wrapperTaskForm.vm as ComponentPublicInstance<{
            formData: { task: string; status: boolean };
        }>

        expect(vm.formData.task).toEqual('Task 1')
    })
})