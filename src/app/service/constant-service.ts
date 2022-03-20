export class ConstantService {
  private readonly defaultURL: string = 'http://localhost:8080';
  readonly authServiceURL: string = this.defaultURL + '/auth';
  readonly subscriptionServiceURL: string = this.defaultURL +  '/subscription';
  readonly goodsServiceURL: string = this.defaultURL + '/main';
}
