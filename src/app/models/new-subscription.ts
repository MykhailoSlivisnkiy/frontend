export class NewSubscription {
 constructor(
    public shopId: number | undefined,
    public token: string,
    public shopName: string,
    public typesOfSubscription: string[],
  ) {}
}
