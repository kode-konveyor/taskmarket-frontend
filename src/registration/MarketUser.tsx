interface User {
  login: string,
  roles: number[],
}

export interface MarketUser {
  id: number;
  user: User;
  personalName: string;
}
