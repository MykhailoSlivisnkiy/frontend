export class Goods {
  constructor(
    public name: string,
    public image: string,
    public count: number,
    public price: number,
    public shopId?: number,
) {
  }
}
