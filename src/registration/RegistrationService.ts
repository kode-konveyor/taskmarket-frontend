import { RegistrationActionEnum } from "./RegistrationActionEnum";
import URLMapping from "../api/URLMapping.json";
import { httpPost } from "../api/http/PostRequest";
import { MarketUser } from "./MarketUser";

export default function RegistrationService(formData: MarketUser) {
  return async (dispatch: CallableFunction) => {
    await httpPost(URLMapping.REGISTRATION_URI, formData)
      .then((response: Response) => {
        response
          .json()
          .then((json: Object) =>
            dispatch({ type: RegistrationActionEnum.SUBMIT, response: json })
          );
      })
      .catch(() => dispatch({ type: RegistrationActionEnum.ERROR }));
  };
}
