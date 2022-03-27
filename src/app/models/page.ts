import {Shop} from "./shop";
import {Goods} from "./goods";

export class Page {
  constructor(
    public content: Shop[] | Goods[],
    public totalPages: number,
    public pageable: number,
  ) {
  }
}

