import DemoContainer from './components/DemoContainer.vue'
import DefaultTheme from 'vitepress/theme'
import './styles/demo.less'
import './styles/vars.less'
import 'uno.css'
import VConsole from 'vconsole'

if(import.meta.env.MODE === "development") {
  new VConsole()
}

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('DemoContainer', DemoContainer)
  }
}