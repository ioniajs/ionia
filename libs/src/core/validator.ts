import { StatusCodes, getReasonPhrase } from "http-status-codes";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { ClassType } from "class-transformer/ClassTransformer";
import { ApiResponse, ErrorItem } from "../services";

export function validator(cls: ClassType<any>) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const value = descriptor.value;

    descriptor.value = async (params: any) => {
      const instance = plainToClass(cls, params);

      const errors = await validate(instance);

      if (errors && errors.length > 0) {
        return new ApiResponse(
          StatusCodes.BAD_REQUEST,
          getReasonPhrase(StatusCodes.BAD_REQUEST),
          false,
          errors.map(
            (e) =>
              new ErrorItem(
                e.property,
                e.constraints ? Object.values(e.constraints) : []
              )
          )
        );
      }

      return value(params);
    };
  };
}
