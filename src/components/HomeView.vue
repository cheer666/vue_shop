<template>
    <div>
        <el-button type="info" @click="logout">退出</el-button>
    </div>
</template>
<script>
export default {

    methods:{
        logout(){
            window.sessionStorage.clear();
            // window.sessionStorage.removeItem("token");只删除token
            this.$router.push("/login")
        }
    }
}
</script>
<style lang="less" scoped></style>