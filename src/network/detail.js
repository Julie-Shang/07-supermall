import { request } from "./request"

export function getDetail(iid) {
    return request({
        url: "/detail",
        params: {
            iid
        }
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}

export class Shop {
    constructor(shopInfo) {
        this.name = shopInfo.name;
        this.logo = shopInfo.shopLogo;
        this.id = shopInfo.shopId;
        this.score = shopInfo.score;
        this.sells = shopInfo.cSells;
        this.goodsCount = shopInfo.cGoods;
        this.fans = shopInfo.cFans
    }
}

export class GoodsParam {
    constructor(info, rule) {
        this.image = info.image ? info.image[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables
    }
}

export class Rate {
    constructor(rate) {
        const data = rate.list[0];
        this.content = data.content;
        this.time = data.created;
        this.style = data.style;
        this.images = data.images ? data.images : '';
        this.user = data.user;
        this.cRate = data.cRate ? data.cRate : ''
    }
}

export function getRecommend() {
    return request({
        url: '/recommend'
    })
}