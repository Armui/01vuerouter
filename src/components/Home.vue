<template>
    <div>
        Home:{{ username }}
    </div>
</template>

<script>
export default {
    name:"Home",
    data(){
        return{
            username:this.$route.params.username
        }
    },
    watch:{
        '$route' (to, from) {
            // 对路由变化作出响应...
            console.log(to);
            console.log(from);
        }
    },
    beforeRouteUpdate (to, from, next) {
        console.log(to)
    }
}
</script>
<style lang="">
    
</style>