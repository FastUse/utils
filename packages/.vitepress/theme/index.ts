import DemoContainer from './components/DemoContainer.vue'
import DefaultTheme from 'vitepress/theme'
import './styles/demo.less'
import './styles/vars.less'
import 'uno.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('DemoContainer', DemoContainer)
  }
}