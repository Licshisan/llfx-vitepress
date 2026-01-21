import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Navbar from './Navbar.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.use(ElementPlus)
		for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
			app.component(key, component)
		}
	},
	Layout() {
		return h(
			DefaultTheme.Layout, 
			null, 
			{ 
				'nav-bar-content-after': () => h(Navbar),
			},
		)
	}
}
