// tests/components/SomeComponents.nuxt.spec.ts
import { describe, it, expect } from 'vitest'
import { mount, } from '@vue/test-utils'
import TaskList from '../components/TaskList.vue'

describe('TasksList', () => {
    it('should render ListTaks component', () => {
        const wrapper = mount(TaskList)
        expect(wrapper.vm).toBeTruthy()
    })

    it('should emit delete and emit status of task', () => {
        const wrapper = mount(TaskList, {
            props: {
                listTasks: [
                    { id: 1, name: 'Task 1', status: false },
                    { id: 2, name: 'Task 2', status: false },
                ]
            }
        })
        wrapper.find('.btn-delete').trigger('click')
        wrapper.find('.btn-status').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('emit-status')
        expect(wrapper.emitted()).toHaveProperty('emit-delete')

    })

    it('should list the listTaks values', () => {
        const wrapper = mount(TaskList, {
            props: {
                listTasks: [
                    { id: 1, name: 'Task 1' },
                    { id: 2, name: 'Task 2' },
                ]
            }
        })
        expect(wrapper.html()).toContain('Task 1')
        expect(wrapper.html()).toContain('Task 2')

    })

    it('test case where the ul list is not rendered when the listTasks is empty.', () => {
        const wrapper = mount(TaskList, {
            props: {
                listTasks: []
            }
        })

        expect(wrapper.find('.list-tasks').exists()).toBe(false)
    })

})