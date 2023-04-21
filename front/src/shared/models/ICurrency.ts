export interface ICurrency {
  info: {
    quote: number;
  }
  query: {
    amount: number;
    from: string;
    to: string;
  }
  result: number;
  success: boolean;
}
