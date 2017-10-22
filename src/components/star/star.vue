<template>
    <div :class="starType" class="star">
        <ul class="clearfix">
            <li class="star-item fl" :class="itemClass" v-for="itemClass in itemClasses"></li>
        </ul>
    </div>
</template>

<script >
    const CLS_ON='on';
    const CLS_HALF='half';
    const CLS_OFF='off';
    const starLength = 5;
    export default {
        props:{
            size:{
                type:Number
            },
            score:{
                type:Number
            }
        },
        data () {
            return {
            }
        },
        computed:{
            starType (){
                return 'star-' + this.size;
            },
            itemClasses (){
                let result = [];
                let myScore = Math.floor(this.score*2)/2;
                let hasDecimal = myScore%1 != 0;
                let integer= Math.floor(myScore);
                for(var i=0;i<integer;i++){
                    result.push(CLS_ON);
                }
                if(hasDecimal){
                    result.push(CLS_HALF);
                }
                while (result.length < starLength){
                    result.push(CLS_OFF);
                }
                return result
            }
        }
    }
</script>

<style scoped type="text/less" lang="less">
    @import "../../common/less/mixin.less";
    .star{
        ul{
            display: inline-block;
        }
        &.star-48{
            .star-item{
                display: inline-block;
                background-size: 100% 100%;
                width:30px;
                height:30px;
                margin-right: 22px;
                &:last-child{
                    margin-right: 0;
                }
                &.on{
                    .bg-img('star48_on');
                }
                &.half{
                    .bg-img('star48_half');
                }
                &.off{
                    .bg-img('star48_off');
                }
            }
        }

    }
</style>
