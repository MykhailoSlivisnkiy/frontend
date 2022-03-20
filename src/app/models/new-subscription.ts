export class NewSubscription {
 constructor(
    public shopId: number,
    public token: string,
    public shopName: string,
    public typesOfSubscription: string[],
  ) {}
}
