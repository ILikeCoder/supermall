/*
 * @Author: 孙秋云
 * @Date: 2020-06-18 10:14:17
 * @LastEditTime: 2021-05-09 19:20:43
 * @LastEditors: Please set LastEditors
 * @Description:商品类及网络请求API的封装
 * @FilePath: \MiniSuper\src\network\detail.js
 */
import { request } from "./request";

export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  });
}

export function getCommend() {
  return request({
    url: "/recommend"
  });
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.discountDesc;
    this.realPrice = itemInfo.lowNowPrice;
    this.columns = columns;
    this.services = services;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : "";
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
