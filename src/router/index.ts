// import router from "@/router/index.json";
//
// export const getPageView = (route: any) => {
// 	const pathList = router.subPackages
// 		? [
// 				...router.pages,
// 				...router.subPackages.flatMap((item: any) =>
// 					item?.pages.map(page => ({
// 						...page,
// 						path: `${item?.root}/${page.path}`,
// 					}))
// 				),
// 		  ]
// 		: router.pages;
//
// 	return route.map(item => {
// 		const res: any = pathList.find(sub_item => sub_item?.path == item.route);
// 		return {
// 			name: res?.name,
// 			title: res?.style?.navigationBarTitleText,
// 			path: res?.path,
// 			options: item?.options,
// 		};
// 	});
// };
export default  {
	pages:{},
	globalStyle: {
		navigationBarTextStyle: 'white',
		navigationBarTitleText: '司机配送',
		navigationBarBackgroundColor: '#4a9ff8',
		backgroundColor: '#4a9ff8'
	},
	tabBar: {
		color: '#666',
		selectedColor: '#4a9ff8',
		backgroundColor: '#f7f7f7',
		borderStyle: 'white',
		list: [
			{
				pagePath: 'pages/home/index',
				text: '首页'
			},
			{
				pagePath: 'pages/user/index',
				text: '个人中心'
			},
		]
	},
	condition: { //模式配置，仅开发期间生效
		current: 0, //当前激活的模式（list 的索引项）
		list: [{
			name: "test", //模式名称
			path: "pages/home/index" //启动页面，必选
		}]
	},
}
