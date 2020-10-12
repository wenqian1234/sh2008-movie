
// 发送具体的请求

// 引入封装头信息和请求域名的axios对象
import http from './http'
// 引入请求的url地址
import{
    // 正在热映列表请求uri地址
    nowPlayingListUri,
    comingSoonListUri,
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
}