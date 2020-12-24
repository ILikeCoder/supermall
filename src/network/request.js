import axios from "axios";
export const request = (config) => {
  const baseConfig = {
    baseURL: "http://152.136.185.210:8000/api/w6", //数据接口公共地址
    timeout: 5000, //超时时间
  };

  const instance = axios.create(baseConfig);
  
  //axios拦截器
  // instance.interceptors.request.use(//请求拦截
  //   (config) => {//请求成功拦截
  //     return config;
  //   },
  //   (error) => {//请求失败拦截
  //     console.log(error);
  //   }
  // );

  // instance.interceptors.response.use(//响应拦截
  //   (result) => {//响应成功拦截
  //     return result.data;
  //   },
  //   (error) => {//响应失败拦截
  //     console.log(error);
  //   }
  // );

  return instance(config);
};



