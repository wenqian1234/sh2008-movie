
// 定义两个列表需要的地址，导两次是按需导出：export
export const nowPlayingListUri = 
    "gateway?cityId=110100&pageSize=10&type=1&k=6606805&pageNum=";

export const comingSoonListUri = 
    "gateway?cityId=110100&pageSize=10&type=2&k=4314402&pageNum=";

// 电影详情数据
export const movieDetailUrl = 
    "gateway?&k=6606805&filmId=";

// 城市列表数据
export const cityListUrl = "gateway?k=9028099";

// 个人中心相关接口（确认地址一定要正确）
export const loginUrl = "http://127.0.0.1:3000/api/v1/login";
export const centerUrl = "http://127.0.0.1:3000/api/v1/user_info";
