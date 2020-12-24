import { request } from "./request";

export const getHomeMultiData = () => {
  return request({
    url: "/home/multidata"
  });
};

export const getHomeGoods = (type, page) => {
  return request({
    url: "/home/data",
    params: {
      type,
      page
    }
  });
};
