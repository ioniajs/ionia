import { StatusCodes, getReasonPhrase } from "http-status-codes";
import { ErrorItem, ValidateResult } from "./validate";

export class RequestResponse extends ValidateResult {
  constructor(
    public readonly code: StatusCodes = StatusCodes.OK,
    public readonly message: string = getReasonPhrase(StatusCodes.OK),
    public readonly isSuccess: boolean,
    public readonly errors?: ErrorItem[]
  ) {
    super(errors);
  }
}

export class ApiResponse<T> extends RequestResponse {
  constructor(
    public readonly code: StatusCodes = StatusCodes.OK,
    public readonly message: string = getReasonPhrase(StatusCodes.OK),
    public readonly isSuccess: boolean,
    public readonly errors?: ErrorItem[],
    public readonly data?: T
  ) {
    super(code, message, isSuccess, errors);
  }
}
