// tests/components/SomeComponents.nuxt.spec.ts
import { describe, it, expect } from 'vitest'
import { mount, } from '@vue/test-utils'
import TaskList from './TaskList.vue'

describe('TasksList', () => {
    it('should render ListTaks component', () => {
        const wrapper = mount(TaskList)
        expect(wrapper.vm).toBeTruthy()
    })

    it('should emit delete and emit status of task', () => {
        const wrapper = mount(TaskList, {
            props: {
                listTasks: [
                    { task: 'Task 1', status: false },
                    { task: 'Task 2', status: false },
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
                    { task: 'Task 1', status: false },
                    { task: 'Task 2', status: false },
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

    it('correct label status and tasks', () => {
        const wrapper = mount(TaskList, {
            props: {
                listTasks: [
                    { task: 'Task 1', status: false },
                    { task: 'Task 2', status: true },
                ]
            }
        })

        const listTasks = wrapper.findAll('li');
        const firstTask = listTasks[0].findAll('button')[0]?.text();
        const secondTask = listTasks[1].findAll('button')[0]?.text();

        expect(firstTask).toBe('Pendente')
        expect(secondTask).toBe('Concluído')

    })

    it('should cross out the text when status is concluded', () => {
        const wrapper = mount(TaskList, {
            props: {
                listTasks: [
                    { task: 'Task 1', status: true },
                ]
            }
        })

        const listTasks = wrapper.findAll('li');
        const firstTask = listTasks[0].findAll('label')[0]

        expect(firstTask.element.style.textDecoration).toBe('line-through')
    })
})