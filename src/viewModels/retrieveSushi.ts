import { Sushi } from "../dto/sushi";
import { clientHttp, RequestMethods } from "../utils/clientHttp";
import { REACT_APP_API_URL } from "@env";

interface ViewModel {
  isRequestSuccess: boolean;
  isRequestFailure: boolean;
  isRequestPending: boolean;
  sushi: Sushi[];
  retrieveSushi(): void;
}

function useSushiRetrieval(): ViewModel {
  return {
    isRequestPending: false,
    isRequestFailure: false,
    isRequestSuccess: false,
    sushi: [],
    retrieveSushi: () => {
      console.log(REACT_APP_API_URL + "/api/sushi");
      clientHttp("/api/sushi", RequestMethods.GET, {}, "")
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    },
  };
}

export { useSushiRetrieval };
