
// 封装axios,添加请求拦截器（2个奇怪的请求头）
import axios from 'axios';
// 设置基础域名（请求地址）
axios.defaults.baseURL = "https://m.maizuo.com/";
//请求拦截器处理，添加2个请求头
axios.interceptors.request.use(
    function(config){
        let host = "mall.film-ticket.film.list"; //把host写成动态
        let info = config.headers.info;  //通过info判断当前使用哪个axios
        if(info =="film"){
            host = "mall.film-ticket.film.list";
        }
        if (info == "cinema") {
            host = "mall.film-ticket.cinema.list";
        }
        if (info =="info"){
            host = "mall.film-ticket.film.info";
        }
        if(info =='city'){
            host = "mall.film-ticket.city.list";
        }
        // ....后续有其他的都数据请求需求，接着写
        if(config.headers.authorization){
            config.headers = {
                authorization:config.headers.authorization,
            }
        }else{
            config.headers = {
                "X-Client-Info": 
                '{"a":"3000","ch":"1002","v":"5.0.4","e":"16022353832880561550983169","bc":"110100"}',
                "X-Host":host,
            };
        }
        
       return config; 
    },
    function(error){
        // return Promise.reject(error);
    }
);

// 默认导出封装好的axios
export default axios;


