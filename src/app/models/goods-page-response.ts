import {Goods} from "./goods";

export class GoodsPageResponse {
  constructor(
    public content: Goods[],
  ) {
  }
}
