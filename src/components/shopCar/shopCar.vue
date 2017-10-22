<template>
    <div>
    <div class="shopCar">
        <div class="content">
            <div class="content-left clearfix">
                <div class="logoWrapper fl" :class="{'highLight': totalCount>0}" @click="showList">
                    <div class="num" v-show="totalCount>0">{{totalCount}}</div>
                </div>
                <div class="price fl" :class="{'highLight': totalPrice>0}">￥{{totalPrice}}</div>
                <div class="desc fl">另需配送费￥{{deliveryPrice}}元</div>
            </div>
            <div class="content-right" :class="{'highLight': totalPrice>=minPrice}" @click.stop.prevent="pay">{{payDesc}}</div>
        </div>
        <div class="shopCarList" v-show="listShow">
            <p class="title clearfix">
                <span class="left">购物车</span>
                <span class="right" @click="emptyShopCar">清空</span>
            </p>
            <div class="list-div">
                <ul class="list-ul">
                    <li class="list-item" v-for="item in selectFoods">
                        <span class="left">{{item.name}}</span>
                        <div class="right clearfix">
                            <span class="fl clearfix"><i>￥</i><em class="em">{{item.price*item.count}}</em></span>
                            <div class="carControl-wrapper fr">
                                <car-control :food="item"></car-control>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="list-master" v-show="listShow" @click="hideList"></div>
    </div>
</template>

<script>
    import IScroll from 'iscroll/build/iscroll-probe';
    import CarControl from '../carControl/carControl'
    export default {
        props:{
            deliveryPrice:{
                type:Number
            },
            minPrice:{
                type:Number
            },
            selectFoods:{
                type:Array,
                default:function(){
                    return [
                        {price:10,count:0}
                    ]
                }
            }
        },
        data (){
            return {
                collapse:"close"
            }
        },
        created (){
            console.log("22");
        },
        computed:{
            totalCount (){
                let count = 0;
                this.selectFoods.forEach((food) => {
                    count += food.count;
                });
                return count;
            },
            totalPrice (){
                let price = 0;
                this.selectFoods.forEach((food) => {
                    price += food.price*food.count;
                });
                return price;
            },
            payDesc (){
                if(this.totalPrice === 0){
                    return '满￥'+this.minPrice+'起送';
                }else if(this.totalPrice<this.minPrice){
                    let diff = this.minPrice - this.totalPrice;
                    return '还差￥'+diff+'起送';
                }else{
                    return '去结算';
                }
            },
            listShow (){
                if(this.collapse == "open" && this.totalCount>0){
                    return true;
                }else{
                    return false;
                }
            }
        },
        methods:{
            //初始化滚动条
            _initScroll (){
                this.shopCarListScroll = new IScroll(".list-div", {
                    mouseWheel: true,
                    click:true,
                    probeType:3
                });
            },
            //打开购物车
            showList (){
                if(this.collapse == "open"){
                    this.collapse = "close";
                }else if(this.collapse == "close"){
                    this.collapse = "open";
                    this.$nextTick(() => {
                        this._initScroll();
                    });
                }
            },
            //隐藏购物车
            hideList (){
                this.collapse = "close";
            },
            //清空购物车
            emptyShopCar (){
                this.selectFoods = [];
                this.collapse = "close";
            },
            //去结算
            pay (){
                if(this.totalPrice < this.minPrice){
                    return;
                }
                alert(`支付${this.totalPrice}元`);
            }
        },
        components:{
            CarControl
        }
    }
</script>

<style type="text/less" lang="less">
    @import "../../common/less/mixin.less";
    .shopCar{
        position: fixed;
        left:0;
        bottom:0;
        width:100%;
        height:48px;
        background-color: #141d27;
        z-index: 10;
        .content{
            display: flex;
            padding-left:13px;
            .content-left{
                flex:1;
                .logoWrapper{
                    background-image: url("shopCar-no.png");
                    &.highLight{
                        background-image: url("shopCar-yes.png");
                    }
                    width: 56px;
                    height:56px;
                    border-radius: 50%;
                    position: relative;
                    top:-10px;
                    z-index: 11;
                    background-color: #141d27;
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size:  78% 78%;
                    .num{
                        width:25px;
                        height:16px;
                        line-height: 16px;
                        color: #fff;
                        font-size: 9px;
                        font-weight: bold;
                        border-radius: 8px;
                        background-color: red;
                        position: absolute;
                        top:0px;
                        right:-4px;
                    }
                }
                .price{
                    width: 55px;
                    height: 25px;
                    margin:12px 0 12px 12px;
                    border-right:1px solid #2b333b;
                    font-size: 16px;
                    color:rgba(255,255,255,0.5);
                    font-weight: bold;
                    &.highLight{
                        color:#fff;
                    }
                }
                .desc{
                    height: 25px;
                    line-height: 25px;
                    margin:12px;
                    font-size:10px;
                    color:rgba(255,255,255,0.5);
                }
            }
            .content-right{
                background-color: #2b333b;
                flex:0 0 105px;
                width:105px;
                height: 48px;
                line-height: 24px;
                font-size:12px;
                font-weight: bold;
                padding:12px 0;
                color:rgba(255,255,255,0.5);
                &.highLight{
                    color:#fff;
                    background-color: #00b43c;
                }
            }
        }
        .shopCarList{
            position: absolute;
            bottom: 48px;
            width:100%;
            background-color: #6a7076;
            z-index: 9;
            .title{
                background-color: #f3f5f7;
                height: 40px;
                line-height: 40px;
                padding:0 16px;
                border-bottom: 1px solid #dbdee1;
                .left{
                    float:left;
                    font-size: 14px;
                    color:#07111b;
                }
                .right{
                    float:right;
                    font-size: 12px;
                    color:#00a0dc;
                }
            }
            .list-div{
                overflow: hidden;
                .list-ul{
                    overflow: auto;
                    background-color: #fff;
                    max-height: 218px;
                    padding:0 16px;
                    .list-item{
                        height: 48px;
                        line-height: 48px;
                        border-bottom: 1px solid #e6e7e8;
                        .left{
                            float:left;
                            font-size:14px;
                            color:#07111b;
                        }
                        .right{
                            float:right;
                            i{
                                float:left;
                                display: inline-block;
                                height:16px;
                                color:#f01414;
                                font-size:10px;
                            }
                            em{
                                float:left;
                                display: inline-block;
                                height:16px;
                                color:#f01414;
                                font-size:14px;
                                font-weight: bold;
                            }
                            .carControl-wrapper{
                                position: relative;
                                top:4px;
                                margin-left: 15px;
                            }
                        }
                    }
                }
            }
        }
    }
    .list-master{
        position: fixed;
        width:100%;
        height: 100%;
        top:0;
        left:0;
        background-color: rgba(7,17,27,0.6);
    }
</style>
