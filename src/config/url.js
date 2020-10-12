/*
 * @Author: your name
 * @Date: 2020-10-10 11:48:04
 * @LastEditTime: 2020-10-12 02:11:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\sh2008-movie\src\config\url.js
 */
// 定义两个列表需要的地址，导两次是按需导出：export
export const nowPlayingListUri = 
    "gateway?cityId=110100&pageSize=10&type=1&k=6606805&pageNum=";

export const comingSoonListUri = 
    "gateway?cityId=110100&pageSize=10&type=2&k=4314402&pageNum=";

// 电影详情数据
export const movieDetailUrl = 
    "gateway?&k=6606805&filmId="
