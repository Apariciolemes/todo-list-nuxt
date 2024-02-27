import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TextField from '../components/TextField.vue'

describe('TextField', () => {
    it('render text field compoent', () => {
        const wrapper = mount(TextField)
        expect(wrapper.vm).toBeTruthy()
    })
})