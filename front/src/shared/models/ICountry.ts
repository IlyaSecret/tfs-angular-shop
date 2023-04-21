export interface ICountry {
  name: string;
  currencies: [{
    code: string;
    name: string;
    symbol: string;
  }];
}
