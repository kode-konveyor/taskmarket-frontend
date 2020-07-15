import { MarketUser } from "./MarketUser";
import { ShownViews } from "./ShownViews";


export interface GlobalState {
    user: MarketUser,
    visibility: ShownViews
}
  