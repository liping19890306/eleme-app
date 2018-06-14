<template>
    <div class="header clearfix">
        <div class="fl header-pic">
            <img src="./images/avatar.png" alt="" width="64" height="64">
        </div>
        <div class="fl header-desc">
            <div class="clearfix line1">
                <img src="./images/brand@2x.png" alt="" class="fl" width="30" height="18">
                <span class="fl title">{{ this.seller.name }}</span>
            </div>
            <div class="line2 textleft">{{ this.seller.description}}/{{ this.seller.deliveryTime }}分钟送达</div>
            <div class="clearfix line3">
                <img src="./images/decrease_1@2x.png" alt="" class="fl" width="12" height="12">
                <span class="text fl">{{ this.seller.supports[0].description }}</span>
                <span class="num fr" @click="showDetail">{{ this.seller.supports.length }}个 ></span>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="notice" @click="showDetail">
            <img src="./images/bulletin@2x.png" alt="" class="fl" width="22" height="12">
            <span class="fl">{{ this.seller.bulletin }}</span>
        </div>
        <div class="detail" v-show="detailShow">
            <div class="detail-wrapper">
                <div class="detail-main">
                    <p class="detail-title">粥品香坊（回龙观）</p>
                    <div class="star-wrapper">
                        <star :size="48" :score="this.seller.score"></star>
                    </div>
                    <div class="detail-subTit">
                        <div class="detail-line"></div>
                        <div class="detail-subtit">优惠信息</div>
                        <div class="detail-line"></div>
                    </div>
                    <ul class="detail-support">
                        <li class="clearfix" v-for="item in this.seller.supports">
                            <i class="fl icon"  :class="classesMap[item.type]"></i>
                            <span class="fl">{{ item.description }}</span>
                        </li>
                    </ul>
                    <div class="detail-subTit">
                        <div class="detail-line"></div>
                        <div class="detail-subtit">商家公告</div>
                        <div class="detail-line"></div>
                    </div>
                    <p class="detail-desc textleft">{{ this.seller.bulletin }}</p>
                </div>
            </div>
            <div class="detail-close">
                <i class="icon-close cursor" @click="hideDetail">×</i>
            </div>
        </div>
    </div>
</template>

<script>
    import star from '../star/star.vue'
    export default {
        components:{
          star
        },
        props:{
            seller:{
                type:Object
            }
        },
        data () {
            return {
                detailShow : false
            }
        },
        created (){
            this.classesMap = ['decrease','discount','special','invoice','guarantee'];
        },
        methods:{
            showDetail (){
                this.detailShow = true
            },
            hideDetail (){
                this.detailShow = false
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/less" lang="less">
    @import url("../../common/less/mixin.less");
    .header{
        width:100%;
        height:134px;
        padding:24px 13px 18px 24px;
        font-size:10px;
        position: relative;
        color:#fff;
        background: #6a7076 url("./images/avatar-bg.png");
        .header-desc{
            margin-left:16px;
                .line1{
                    margin-bottom: 2px;
                    img{
                        margin-right:6px;
                        position: relative;
                        top:1px;
                    }
                    span{
                        font-size:16px;
                        font-weight: bold;
                        line-height: 22px;
                    }
            }
            .line2{
                font-size:12px;
                line-height: 22px;
                margin-bottom: 2px;
            }
            .line3{
                font-size:10px;
                img{
                    position: relative;
                    top:1px;
                    margin-right: 2px;
                }
                .text{
                    margin-right: 50px;
                }
                .num{
                    width:43px;
                    height:24px;
                    background-color: #3f362e;
                    line-height: 24px;
                    border-radius: 12px;
                    position: relative;
                    top:-6px;
                }
            }
        }
        .notice{
            width:100%;
            height: 28px;
            background-color: #3d3631;
            position: absolute;
            bottom:0;
            left:0;
            padding:0 12px;
            img{
                position: relative;
                top:8px;
                margin-right: 4px;
            }
            span{
                line-height:28px;
                width: calc(100% - 10px);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        .detail{
            overflow:auto;
            position: fixed;
            z-index: 100;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(7,17,27,0.8);
            .detail-wrapper{
                 width:100%;
                 min-height: 100%;
                 padding-top: 64px;
                 padding-bottom: 64px;
                 .detail-main{
                     overflow:auto;
                     width:100%;
                     .detail-title{
                         font-size: 16px;
                         font-weight: bold;
                     }
                     .star-wrapper{
                         padding:21px 0;
                     }
                     .detail-subTit{
                         display: flex;
                         padding:37px 35px 0 35px;

                         .detail-line{
                             flex: 3;
                             border-top:1px solid #ddd;
                         }
                         .detail-subtit{
                             flex: 2;
                             position: relative;
                             top:-8px;
                             font-size:14px;
                             font-weight: bold;
                         }
                     }
                     .detail-support{
                         padding:15px 50px 0 50px;
                         li{
                             margin-bottom: 12px;
                             .icon{
                                 width:16px;
                                 height:16px;
                                 margin-right: 6px;
                                 background-size: 100% 100%;
                                 background-repeat: no-repeat;
                                 &.decrease{
                                     .bg-img('decrease_2');
                                 }
                                 &.discount{
                                     .bg-img('discount_2');
                                 }
                                 &.special{
                                     .bg-img('special_2');
                                 }
                                 &.invoice{
                                     .bg-img('invoice_2');
                                 }
                                 &.guarantee{
                                     .bg-img('guarantee_2');
                                 }
                             }
                             span{
                                 font-size: 12px;
                                 line-height: 16px;
                             }
                         }
                     }
                     .detail-desc{
                         line-height: 25px;
                         padding:15px 50px 0 50px;
                     }
                 }
             }
            .detail-close{
                position: relative;
                width:100%;
                height:32px;
                margin:-64px auto 0 auto;
                clear: both;
                font-size:32px;
                text-align: center;
                .icon-close{
                    display: inline-block;
                    width:32px;
                    height:32px;
                }
            }
        }
    }
</style>
