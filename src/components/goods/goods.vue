<template>
    <div class="goods">
        <div class="menu">
            <ul class="menu-list" ref="menuWrapper">
                <li class="menu-item" v-for="(item,index) in goods" :class="{'current':currentIndex === index}" @click="selectMenu(index)">
                    <span class="text">
                        <i class="icon" v-show="item.type>0" :class="classesMap[item.type]"></i>
                        <span>{{ item.name }}</span>
                    </span>
                </li>
            </ul>
        </div>
        <div class="foods">
            <ul class="goods-list" ref="foodsWrapper">
                <li class="goods-item" v-for="goodsItem in goods" >
                    <h1 class="goods-title">{{ goodsItem.name }}</h1>
                    <ul class="foods-list">
                        <li class="foods-item clearfix" v-for="foodsItem in goodsItem.foods" @click="selectFood(foodsItem)">
                            <div class="fl img-div">
                                <img :src="foodsItem.image" alt="" width="57" height="57">
                            </div>
                            <div class="foods-detail fl">
                                <h2 class="title textleft">{{foodsItem.name}}</h2>
                                <h5 class="type textleft" v-if="foodsItem.description">咸粥</h5>
                                <p class="num textleft">
                                    <span class="sellCount">月销{{foodsItem.sellCount}}份</span>
                                    <span class="rating">好评率{{foodsItem.rating}}%</span>
                                </p>
                                <div class="price textleft">
                                    <span class="newPrice textleft">¥<i>{{ foodsItem.price }}</i></span>
                                    <span class="oldPrice" v-if="foodsItem.oldPrice">28元</span>
                                </div>
                                <div class="carControl-wrapper">
                                    <car-control :food="foodsItem"></car-control>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <shop-car :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice" :select-foods="selectFoods"></shop-car>
        <food-detail :food="selectedFood" ref="foodDetail"></food-detail>
    </div>
</template>

<script >
    import IScroll from 'iscroll/build/iscroll-probe';
    import ShopCar from '../shopCar/shopCar';
    import CarControl from '../carControl/carControl'
    import FoodDetail from '../foodDetail/foodDetail'
    export default {
        props:{
            seller:{
                type:Object
            }
        },
        data () {
            return {
                goods: [
                    {
                        "name": "热销榜",
                        "type": -1,
                        "foods": [
                            {
                                "name": "皮蛋瘦肉粥",
                                "price": 10,
                                "oldPrice": "",
                                "description": "咸粥",
                                "sellCount": 229,
                                "rating": 100,
                                "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "很喜欢的粥",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 1,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "扁豆焖面",
                                "price": 14,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 188,
                                "rating": 96,
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 1,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "info": "",
                                "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "葱花饼",
                                "price": 10,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 124,
                                "rating": 85,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 1,
                                        "text": "没啥味道",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 1,
                                        "text": "很一般啊",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "牛肉馅饼",
                                "price": 14,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 114,
                                "rating": 91,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 1,
                                        "text": "难吃不推荐",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "招牌猪肉白菜锅贴/10个",
                                "price": 17,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 101,
                                "rating": 78,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 1,
                                        "text": "不脆,不好吃",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "南瓜粥",
                                "price": 9,
                                "oldPrice": "",
                                "description": "甜粥",
                                "sellCount": 91,
                                "rating": 100,
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "红豆薏米美肤粥",
                                "price": 12,
                                "oldPrice": "",
                                "description": "甜粥",
                                "sellCount": 86,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "八宝酱菜",
                                "price": 4,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 84,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "红枣山药糙米粥",
                                "price": 10,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 81,
                                "rating": 91,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "糊塌子",
                                "price": 10,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 80,
                                "rating": 93,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    },
                    {
                        "name": "单人精彩套餐",
                        "type": 2,
                        "foods": [
                            {
                                "name": "红枣山药粥套餐",
                                "price": 29,
                                "oldPrice": 36,
                                "description": "红枣山药糙米粥,素材包,爽口莴笋丝,四川泡菜或八宝酱菜,配菜可备注",
                                "sellCount": 17,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    },
                    {
                        "name": "冰爽饮品限时特惠",
                        "type": 1,
                        "foods": [
                            {
                                "name": "VC无限橙果汁",
                                "price": 8,
                                "oldPrice": 10,
                                "description": "",
                                "sellCount": 15,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "还可以",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    },
                    {
                        "name": "精选热菜",
                        "type": -1,
                        "foods": [
                            {
                                "name": "娃娃菜炖豆腐",
                                "price": 17,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 43,
                                "rating": 92,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "菜量还可以,味道还可以",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "手撕包菜",
                                "price": 16,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 29,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "香酥黄金鱼/3条",
                                "price": 11,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 15,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    },
                    {
                        "name": "爽口凉菜",
                        "type": -1,
                        "foods": [
                            {
                                "name": "八宝酱菜",
                                "price": 4,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 84,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "拍黄瓜",
                                "price": 9,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 28,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    },
                    {
                        "name": "精选套餐",
                        "type": -1,
                        "foods": [
                            {
                                "name": "红豆薏米粥套餐",
                                "price": 37,
                                "oldPrice": "",
                                "description": "红豆薏米粥,三鲜干蒸烧卖,拍黄瓜",
                                "sellCount": 3,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "皮蛋瘦肉粥套餐",
                                "price": 31,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 12,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    },
                    {
                        "name": "果拼果汁",
                        "type": -1,
                        "foods": [
                            {
                                "name": "蜜瓜圣女萝莉杯",
                                "price": 6,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 1,
                                "rating": "",
                                "info": "",
                                "ratings": [],
                                "icon": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "加多宝",
                                "price": 6,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 7,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "VC无限橙果汁",
                                "price": 8,
                                "oldPrice": 10,
                                "description": "",
                                "sellCount": 15,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "还可以",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    },
                    {
                        "name": "小吃主食",
                        "type": -1,
                        "foods": [
                            {
                                "name": "扁豆焖面",
                                "price": 14,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 188,
                                "rating": 96,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 1,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "葱花饼",
                                "price": 10,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 124,
                                "rating": 85,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 1,
                                        "text": "没啥味道",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 1,
                                        "text": "很一般啊",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "牛肉馅饼",
                                "price": 14,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 114,
                                "rating": 91,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 1,
                                        "text": "难吃不推荐",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "招牌猪肉白菜锅贴/10个",
                                "price": 17,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 101,
                                "rating": 78,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 1,
                                        "text": "不脆,不好吃",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "糊塌子",
                                "price": 10,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 80,
                                "rating": 93,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    },
                    {
                        "name": "特色粥品",
                        "type": -1,
                        "foods": [
                            {
                                "name": "皮蛋瘦肉粥",
                                "price": 10,
                                "oldPrice": "",
                                "description": "咸粥",
                                "sellCount": 229,
                                "rating": 100,
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "很喜欢的粥",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 1,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "南瓜粥",
                                "price": 9,
                                "oldPrice": "",
                                "description": "甜粥",
                                "sellCount": 91,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "红豆薏米美肤粥",
                                "price": 12,
                                "oldPrice": "",
                                "description": "甜粥",
                                "sellCount": 86,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "红枣山药糙米粥",
                                "price": 10,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 81,
                                "rating": 91,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "鲜蔬菌菇粥",
                                "price": 11,
                                "oldPrice": "",
                                "description": "咸粥",
                                "sellCount": 56,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": ""
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "田园蔬菜粥",
                                "price": 10,
                                "oldPrice": "",
                                "description": "咸粥",
                                "sellCount": 33,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    },
                    {
                        "name": "精选套餐",
                        "type": -1,
                        "foods": [
                            {
                                "name": "红豆薏米粥套餐",
                                "price": 37,
                                "oldPrice": "",
                                "description": "红豆薏米粥,三鲜干蒸烧卖,拍黄瓜",
                                "sellCount": 3,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "皮蛋瘦肉粥套餐",
                                "price": 31,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 12,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    },
                    {
                        "name": "果拼果汁",
                        "type": -1,
                        "foods": [
                            {
                                "name": "蜜瓜圣女萝莉杯",
                                "price": 6,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 1,
                                "rating": "",
                                "info": "",
                                "ratings": [],
                                "icon": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "加多宝",
                                "price": 6,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 7,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "VC无限橙果汁",
                                "price": 8,
                                "oldPrice": 10,
                                "description": "",
                                "sellCount": 15,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "还可以",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    },
                    {
                        "name": "小吃主食",
                        "type": -1,
                        "foods": [
                            {
                                "name": "扁豆焖面",
                                "price": 14,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 188,
                                "rating": 96,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 1,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "葱花饼",
                                "price": 10,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 124,
                                "rating": 85,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 1,
                                        "text": "没啥味道",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 1,
                                        "text": "很一般啊",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "牛肉馅饼",
                                "price": 14,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 114,
                                "rating": 91,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 1,
                                        "text": "难吃不推荐",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "招牌猪肉白菜锅贴/10个",
                                "price": 17,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 101,
                                "rating": 78,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 1,
                                        "text": "不脆,不好吃",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "糊塌子",
                                "price": 10,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 80,
                                "rating": 93,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    },
                    {
                        "name": "特色粥品",
                        "type": -1,
                        "foods": [
                            {
                                "name": "皮蛋瘦肉粥",
                                "price": 10,
                                "oldPrice": "",
                                "description": "咸粥",
                                "sellCount": 229,
                                "rating": 100,
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "很喜欢的粥",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 1,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "南瓜粥",
                                "price": 9,
                                "oldPrice": "",
                                "description": "甜粥",
                                "sellCount": 91,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "红豆薏米美肤粥",
                                "price": 12,
                                "oldPrice": "",
                                "description": "甜粥",
                                "sellCount": 86,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "红枣山药糙米粥",
                                "price": 10,
                                "oldPrice": "",
                                "description": "",
                                "sellCount": 81,
                                "rating": 91,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "鲜蔬菌菇粥",
                                "price": 11,
                                "oldPrice": "",
                                "description": "咸粥",
                                "sellCount": 56,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": ""
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750"
                            },
                            {
                                "name": "田园蔬菜粥",
                                "price": 10,
                                "oldPrice": "",
                                "description": "咸粥",
                                "sellCount": 33,
                                "rating": 100,
                                "info": "",
                                "ratings": [
                                    {
                                        "username": "3******c",
                                        "rateTime": 1469281964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "2******3",
                                        "rateTime": 1469271264000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    },
                                    {
                                        "username": "3******b",
                                        "rateTime": 1469261964000,
                                        "rateType": 0,
                                        "text": "",
                                        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                                    }
                                ],
                                "icon": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114",
                                "image": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750"
                            }
                        ]
                    }
                ],
                listHeight:[],
                scrollY:0,
                currIndex : 0,
                selectedFood:{} /*选中的食物，传给foodDetail组件的*/
            }
        },
        created:function (){
            this.classesMap = ['decrease','discount','special','invoice','guarantee'];
            /*this.$http.get('http://192.168.1.100:8080/master/test/strtest').then((result) => {
                let data = JSON.parse(result.body);
                this.goods = data;*/
                this.$nextTick(() => {
                    this._initScroll();
                    this._calculateHeight();
                });
            /*},(err) => {
                console.log(err);
            });*/

        },
        computed :{
            currentIndex (){
                if(this.listHeight.length>1){
                    for(let i=0;i<this.listHeight.length;i++){
                        let height2 = this.listHeight[i+1];
                        let height1 = this.listHeight[i];
                        if((!height2)||(this.scrollY >= height1 && this.scrollY < height2)){
                            return i;
                        }
                    }
                }else{
                    return 0;
                }

            },
            //选择de食物
            selectFoods (){
                let foods = [];
                this.goods.forEach((good) => {
                    good.foods.forEach((food) => {
                        if(food.count){
                            foods.push(food);
                        }
                    });
                });
                return foods;
            }
        },
        methods :{
            //初始化滚动条
            _initScroll (){
                this.meunScroll = new IScroll(".menu", {
                    mouseWheel: true,
                    click:true
            });
                this.foodsScroll = new IScroll(".foods" , {
                    mouseWheel: true,
                    click:true,
                    probeType:3
                });
                this.foodsScroll.on('scroll', () => {
                    this.scrollY = Math.abs(Math.round( this.foodsScroll.y))/*+200*/;
                });
            },
            //计算高度:将每个goodsItem的高度放入数组中
            _calculateHeight (){
                let height = 0;
                let list = this.$refs.foodsWrapper.getElementsByClassName("goods-item");
                this.listHeight.push(height);
                for(let i=0;i<list.length;i++){
                    height += list[i].clientHeight;
                    this.listHeight.push(height);
                }
            },
            //选择菜单
            selectMenu (index){
                console.log(index);
                let el = this.$refs.foodsWrapper.getElementsByClassName("goods-item")[index];
                this.foodsScroll.scrollToElement(el);
            },
            //点击某个食物
            selectFood (food){
                this.selectedFood = food;
                this.$refs.foodDetail.show();
            }
        },
        components :{
            ShopCar,
            CarControl,
            FoodDetail
        }
    }
</script>

<style type="text/less" lang="less">
    @import "../../common/less/mixin.less";
    .goods{
        display: flex;
        position: absolute;
        width:100%;
        top:174px;
        bottom:48px;
        overflow: hidden;
        .menu{
            width:80px;
            height: 100%;
            /*position: absolute;
            top:0;left:0;*/
            overflow: hidden;
            background-color: #f3f5f7;
            .menu-list{
                overflow: auto;
                .menu-item{
                    &.current{
                        background-color: #fff;
                        .text{
                            border:0 none;
                        }
                    }
                    display: table;
                    width:80px;
                    height: 54px;
                    line-height: 14px;
                    padding:0 12px;
                    margin:0 auto;
                    .icon{
                        display: inline-block;
                        width:12px;
                        height:12px;
                        vertical-align: top;
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        &.decrease{
                            .bg-img('decrease_3');
                        }
                        &.discount{
                            .bg-img('discount_3');
                        }
                        &.special{
                            .bg-img('special_3');
                        }
                        &.invoice{
                            .bg-img('invoice_3');
                        }
                        &.guarantee{
                            .bg-img('guarantee_3');
                        }
                    }
                    .text{
                        display: table-cell;
                        vertical-align: middle;
                        text-align: left;
                        border-bottom:1px solid #ddd;
                    }
                }
            }
        }
        .foods{
            flex: 1;
            height: 100%;
            overflow: hidden;
            .goods-list{
                overflow: auto;
                .goods-item{
                    .goods-title{
                        height: 26px;
                        line-height: 26px;
                        font-size:12px;
                        color:#93999f;
                        border-left:2px solid #d9dde1;
                        background-color: #f3f5f7;
                    }
                    .foods-list{
                        .foods-item{
                            padding:18px;
                            position: relative;
                            .img-div{
                                width:57px;
                                height:57px;
                                margin-right:9px;
                            }
                            .foods-detail{
                                text-align: center;
                                .title{
                                    color:#07111b;
                                    font-size: 14px;
                                    line-height: 20px;
                                }
                                .type{
                                    line-height: 18px;
                                    color:#93999f;
                                    font-size:10px;
                                }
                                .num{
                                    line-height: 20px;
                                    color:#93999f;
                                    font-size:10px;
                                    .sellCount{
                                        margin-right: 10px;
                                    }
                                }
                                .price{
                                    line-height: 20px;
                                    .newPrice{
                                        color:#f01414;
                                        font-size:10px;
                                        i{
                                            font-size:14px;
                                            margin-right: 6px;
                                            font-weight: bold;
                                        }
                                    }
                                    .oldPrice{
                                        text-decoration:line-through;
                                        color:#93999f;
                                        font-size: 10px;
                                        font-weight: bold;
                                    }
                                }
                                .carControl-wrapper{
                                    position: absolute;
                                    bottom: 10px;
                                    right:18px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

</style>
