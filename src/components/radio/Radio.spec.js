import { shallowMount } from '@vue/test-utils'
import BRadio from '@components/radio/Radio'

let wrapper

describe('BRadio', () => {
    beforeEach(() => {
        wrapper = shallowMount(BRadio)
    })

    it('is called', () => {
        expect(wrapper.name()).toBe('BRadio')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('has an input radio', () => {
        expect(wrapper.contains('label input[type=radio]')).toBeTruthy()
    })

    it('emit input event with value when value change', () => {
        wrapper.setProps({ value: true })
        expect(wrapper.vm.computedValue).toBeTruthy()
        wrapper.vm.computedValue = false
        const valueEmitted = wrapper.emitted()['input'][0]
        expect(valueEmitted).toContainEqual(false)
    })
})
