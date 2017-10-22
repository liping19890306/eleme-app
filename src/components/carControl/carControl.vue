<template>
    <div class="carControl clearfix">
        <div class="left">
            <div class="left-img" v-show="food.count>0" @click.stop.prevent="reduceFood"></div>
        </div>
        <div class="center">
            <div v-show="food.count>0">{{food.count}}</div>
        </div>
        <div class="right">
            <div class="right-img" @click.stop.prevent="addFood"></div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default {
        props:{
          food:{
              type:Object,
              default: function(){
                  return {price:23,count:1};
              }
          }
        },
        data (){
            return {

            }
        },
        methods :{
            addFood(event){
                Vue.set(this.food,1,"count");
                if(!this.food.count){
                    Vue.set(this.food,'count',1);
                }else{
                    this.food.count++;
                }
                this.$emit('add', event.target);
            },
            reduceFood(){
                this.food.count--;
            }
        }
    }
</script>

<style type="text/less" lang="less">
    .carControl{
        width:70px;
        .left{
            float:left;
            width:20px;
            height: 40px;
            .left-img{
                width:20px;
                height: 40px;
                padding:10px 0;
                background: url("reduce.png") no-repeat center center;
                background-size: 20px 20px;
            }
        }
        .center{
            float: left;
            width:29px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            color:#93999f;
            font-size:10px;
        }
        .right{
            float:left;
            .right-img{
                width:20px;
                height: 40px;
                padding:10px 0;
                background: url("add.png") no-repeat center center;
                background-size: 20px 20px;
            }
        }
    }
</style>
