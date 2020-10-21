<template>
    <div>    
            <div class="top">
             <router-link to='/city' tag="p">北京</router-link>
              <div class="title">影院</div>
              <div class="search">搜索</div>  
            </div>  
            <div class="tab">
                <div class="city">全城</div>
                <div class="app">APP订票</div>
                <div class="where">最近去过</div>
            </div>  
            <div class="container"  v-for="(item,index) in list" :key="index" >

                <div class="rowone">
                    <div class="name">{{item.name}}</div>
                    <p>￥{{item.lowPrice/100}} 起</p>
                </div>
                <div class="rowtwo">
                    <div class="address">{{item.address}}</div>
                    <p class="farth">距离未知</p>
                </div>
            </div>      
   
    </div>
</template>

// <script>

import {cinemaListData} from '@/api/api'

export default {
    data() {
        return {
          list:[],
        };
    },
    async mounted() {
         let ret = await cinemaListData();
        this.list = ret.data.data.cinemas
        // console.log(cinemas);
    },
}
</script>

<style lang="scss" scoped>

    // display: flex;

    .top{
        width:100%;
       height: 30px;
       
        p{
        float: left;
        margin-right: 150px;
        margin:10px 50px;
        }
        .title{
            float: left;
            margin:10px 50px;
            font-size: 20px;
     
        }
        .search{
            float: left;
            // width:30px;
            // height:20px;
            margin: 10px 20px 5px; 
        } 
    }
    .tab{
        margin:20px;
        width:100%;
        height: 50px;
        display: flex;

        .city,.app,.where{
            flex:1;
        }
    }
    .container{
        width:100%;
        min-height:30px;
        margin:30px 5px;
        .rowone{
            width:100%;
            margin:5px;
            display: flex;

            .name{
                width:80%;  
                flex: 1;
                font-size:15px;
            }
            p{
                width:20%;
                float:right;
                font-size:15px;
                color:rgb(255, 94, 0);
            }
        }
        .rowtwo{
            width:100%;
            margin:5px;
            display: flex;
            color:#797d82;
            .address{
                width: 60%; 
                // flex: 1;
                font-size:14px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;    
            }
            p{
                width: 20%;
                float:right;
                font-size:12px;
                margin-left: 20%;
            }
            }
            
        
        

    }
    
</style>