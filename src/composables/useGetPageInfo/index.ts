
import pageJson from '@/pages.json'
import { getPageTitle } from "@/utils/sysTools";

export default {
	routerList: pageJson.pages,
	currentPages(){
		const n = $computed(() => getCurrentPages()?.pop() || '')
		return n
	},

	currentRoute(){
		const n = $computed(() => getCurrentPages()?.pop()?.route || '')
		return n
	},
	currentTitle(){
		return getPageTitle(this.routerList,this.currentRoute())
	}
}










