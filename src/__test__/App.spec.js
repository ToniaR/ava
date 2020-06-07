import { mount, createLocalVue } from '@vue/test-utils'
import App from '../App.vue'

describe('App.vue', () => {
    const vue = createLocalVue()
    
    const app = mount(App, { vue })

    it('setup correctly', () => {
        expect(true).toBe(true);
    })
    it('App has a .center-content class', () => {
        expect(app.classes()).toContain('center-content')
    })
});
