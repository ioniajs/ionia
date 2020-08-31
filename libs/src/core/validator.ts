// import { validate } from "class-validator";
// import { plainToClass } from "class-transformer";
// import { ClassType } from "class-transformer/ClassTransformer";
// import { ApiResult } from "@/protocols/base/result";
// import { ErrorItem } from "@/protocols/base/validate";

// export function validator(cls: ClassType<any>) {
//   return (target: any, key: string, descriptor: PropertyDescriptor) => {
//     const value = descriptor.value;

//     descriptor.value = async (params) => {
//       const instance = plainToClass(cls, params);

//       const errors = await validate(instance);

//       if (errors && errors.length > 0) {
//         return new ApiResult(
//           400,
//           "参数校验失败",
//           false,
//           errors.map(
//             (e) =>
//               new ErrorItem(
//                 e.property,
//                 e.constraints ? Object.values(e.constraints) : []
//               )
//           )
//         );
//       }

//       return value(params);
//     };
//   };
// }
