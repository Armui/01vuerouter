import Vue from "vue"
import VueRouter from "vue-router"
// 1.定义组件
import HelloWorld from '../components/HelloWorld'
import Home from "../components/Home"

import H1 from "../components/hellochild/h1"
import H2 from "../components/hellochild/h2"

Vue.use(VueRouter)

// 2.定义路由 3.创建 router 实例，然后传 `routes` 配置
export default new VueRouter({
    mode:"history",
    routes: [
        {
            path: "/hello",
            component: HelloWorld,
            redirect:"/hello/h1",
            children: [
                {
                    path: "h1",
                    component: H1
                },
                {
                    path: "h2",
                    component: H2
                }
            ]
        },
        {
            path: "/home",
            name:"home",
            component: Home
        }
    ]
})
