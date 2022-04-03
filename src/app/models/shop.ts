export class Shop {
  constructor(
    public id?: number,
    public name?: string,
    public type?: string,
    public phone?: string,
    public country?: string,
    public city?: string,
    public street?: string,
    public website?: string,
    public image?: string,
    public email?: string,
    public openTime?: string,
    public closeTime?: string,
    public isSubscribed?: boolean,
    public description?: string
  ) {
  }
}
