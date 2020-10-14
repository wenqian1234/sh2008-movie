/*
 * @Author: your name
 * @Date: 2020-10-10 17:40:35
 * @LastEditTime: 2020-10-14 12:15:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\sh2008-movie\src\api\api.js
 */

// 发送具体的请求

// 引入封装头信息和请求域名的axios对象
import http from './http'
// 引入请求的url地址
import{
    // 正在热映列表请求uri地址
    nowPlayingListUri,
    comingSoonListUri,
    cityListUrl,
}from '@/config/url';
import { movieDetailUrl } from '../config/url';
//  请求正在热映列表数据，按需导出
export const nowPlayingListData = (pageNum ) =>{
  http.defaults.headers.info = "film";
  return  http.get(nowPlayingListUri +pageNum);
};

//  请求即将上映列表数据
export const comingSoonListData = (pageNum ) =>{
  http.defaults.headers.info = "film";
   return  http.get(comingSoonListUri +pageNum);
}

// 请求电影详情数据
export const movieDetailData = (filmId) =>{
  // 给axios设置请求头
  http.defaults.headers.info = "info";
  return  http.get(movieDetailUrl +filmId);
};
// 获取城市列表的数据
export const cityListData = async () =>{
  // 给axios设置请求头
  http.defaults.headers.info = "city";
  let ret = await http.get(cityListUrl)
  // 定义基本的数据
  let cities = ret.data.data.cities;
  // 定义字母数据
  let codeList = [];  //'A','B','C'...(完整的26个字母)
  let dataList =[];   //城市信息，
  let indexList =[];  //'A','B','C'...(经过筛选的字母)

  // for循环生成26个字母
  for(let i=65;i<=90;i++){
    codeList.push(String.fromCodePoint(i));
  }
  //开始处理
  codeList.forEach((element)=>{
    // 与城市信息的拼音字段首字母对比，如果符合则留下大字母
    let tempArr = cities.filter((item)=> element.toLowerCase() == item.pinyin.substr(0,1) )
    if(tempArr.length >0){
      indexList.push(element)
      dataList.push({
        index:element,
        data:tempArr,
      });
    }
  })
  
  // 返回数据
  return Promise.resolve([dataList,indexList]);
 
}