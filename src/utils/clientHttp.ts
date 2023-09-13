import axios from "axios";
import { REACT_APP_API_URL } from "@env";

enum RequestMethods {
  GET = "GET",
  PUT = "PUT",
  DELETE = "DELETE",
  POST = "POST",
}

type Headers = {
  [key: string]: string;
};

function clientHttp(
  endPoint: string,
  method: RequestMethods,
  header: Headers,
  data?: any,
): Promise<any> {
  return axios({
    data: data,
    headers: header,
    method: method,
    url: REACT_APP_API_URL + endPoint,
  });
}

export { clientHttp, RequestMethods, Headers };
