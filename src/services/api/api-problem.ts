// import ToastService from "../../utils/ToastService"
import { AxiosResponse } from "axios";
import NotificationService from "../NotificationService";

export type GeneralApiProblem =
  /**
   * Times up.
   */
  | { kind: "timeout"; temporary: true }
  /**
   * Cannot connect to the server for some reason.
   */
  | { kind: "cannot-connect"; temporary: true }
  /**
   * The server experienced a problem. Any 5xx error.
   */
  | { kind: "server" }
  /**
   * We're not allowed because we haven't identified ourself. This is 401.
   */
  | { kind: "unauthorized"; data: {} }
  /**
   * We don't have access to perform that request. This is 403.
   */
  | { kind: "forbidden"; data: null }
  /**
   * Unable to find that resource.  This is a 404.
   */
  | { kind: "not-found"; data: null }
  /**
   * All other 4xx series errors.
   */
  | { kind: "rejected"; data: null }
  /**
   * Something truly unexpected happened. Most likely can try again. This is a catch all.
   */
  | { kind: "unknown"; temporary: true }
  /**
   * The data we received is not in the expected format.
   */
  | { kind: "bad-data"; data: null };

/**
 * Attempts to get a common cause of problems from an api response.
 *
 * @param response The api response.
 */
export function getGeneralApiProblem(
  response: AxiosResponse
): GeneralApiProblem | null {
  // ToastService.showError(response)

  // const { authStore } = useStores()

  switch (response.status) {
    case 500:
      return { kind: "server" };
    case 400:
      return { kind: "bad-data", data: response.data };
    case 401:
      NotificationService.show(
        "Your login session has expired, please login again",
        "error"
      );

      return {
        kind: "unauthorized",
        data: { data: "Your login session has expired, please login again" },
      };
    case 403:
      return { kind: "forbidden", data: response.data };
    case 404:
      return { kind: "not-found", data: response.data };
    default:
      return { kind: "unknown", temporary: true };
  }
}

export function processErrorResponse(error: any): any {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    //console.log(error.response.data);

    return getGeneralApiProblem(error.response);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    // console.log(error.request);
    return {
      kind: "NetworkError",
      data: error.message,
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("checkError", error.message);

    return {
      kind: "NetworkError",
      data: error.message,
    };
  }
}
