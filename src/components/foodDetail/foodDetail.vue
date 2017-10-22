<template>
    <div class="foodDetail" v-show="showFlag">
        <div class="img-div">
            <img :src="food.image" :alt="food.name">
            <div class="close" @click="showFlag=false">
                <span>×</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props:{
            food:{
                type:Object
            }
        },
        data (){
            return {
                showFlag:false
            }
        },
        methods:{
            show(){
                this.showFlag = true;
            }
        }
    }
</script>

<style scoped type="text/less" lang="less">
    .foodDetail{
        position: fixed;
        top:0;
        left:0;
        bottom:48px;
        width:100%;
        background-color: #000;
        .img-div{
            position: relative;
            top:0;
            left:0;
            width:100%;
            height:0;
            padding-top:100%;
            img{
                position: absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
            }
            .close{
                position: absolute;
                top: 10px;
                left: 0;
                width:50px;
                height:50px;
                color:#fff;
                font-size: 30px;
                span{
                    display: block;
                    height:20px;
                    width: 20px;
                    margin:10px auto;
                }
            }
        }
    }
</style>
