import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Navbar from './Navbar.vue'

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.use(ElementPlus)
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
