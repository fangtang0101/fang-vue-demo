//1.导入 vue 模块文件
import Home from './components/Home.vue'
import My   from './components/My.vue'
import News from './components/News.vue'
// 2.js 文件 导出的形式设置 ==> 实际就是配置 模块与url 后面路径（最后参数的对应方式）
export default {
	routes:[
		{path:'/home',component:Home},  //3.设置对应的关系 home 路径对应的是加载 Home 
		{path:'/my',component:My},
		{path:'/news',component:News},
		{path:'*',redirct:'/home'}
	]
}
