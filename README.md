路由：
    1.安装
        npm install vue-router --save
    2.使用
        import VueRouter from "vue-router"
        Vue.use(VueRouter)
    3.实现
        // 1.定义组件
        import HelloWorld from './components/HelloWorld'   

        // 2.定义路由 3.创建 router 实例，然后传 `routes` 配置
        const router = new VueRouter({
        routes: [
            {
            path: "/",
            component: HelloWorld
            }
        ]
        }) 

        new Vue({
            el: '#app',
            // 4.挂载到Vue实例对象中
            router,
            components: { App },
            template: '<App/>'
        })

        <!-- 路由显示位置 -->
        <router-view></router-view>

    4.路由切换
        <router-link to="/home">home</router-link>
    5.动态路由匹配
        动态传递参数
            path: "/home/:username"
            <router-link to="/home/iwen">home</router-link>
            {{ this.$route.params.username }}
        响应路由参数的变化
    6.提取路由
    7.路由嵌套
        children
    8. 重定向
        redirect
    9.命令路由
        <router-link :to="{name:'home',params:{'username':username}}">home</router-link>
    10.HTML5 History 模式
        hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。
        history: 依赖 HTML5 History API 和服务器配置。查看 HTML5 History 模式。
        abstract: 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式