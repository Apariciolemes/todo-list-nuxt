import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TextField from '../components/TextField.vue'

describe('TextField', () => {
    it('render text field compoent', () => {
        const wrapper = mount(TextField)
        expect(wrapper.vm).toBeTruthy()
    })

    it('render with props value', () => {
        const wrapper = mount(TextField, {
            props: {
                value: 'Task 1'

            }
        })
        const input = wrapper.find('input')
        expect(input.element.value).toEqual('Task 1')
    })

    it('should output the update input value with emit', () => {
        const wrapper = mount(TextField)
        const input = wrapper.find('input')
        input.setValue('Task 1')

        const updateEvent = wrapper.emitted('emit-input')
        const valueEmitted = updateEvent ? updateEvent[0][0] : ''

        expect(input.element.value).toEqual('Task 1')
        expect(valueEmitted).toEqual('Task 1')
    })
})