import { IsNotEmpty, Length } from "class-validator";

export class UserLoginReq {
  @IsNotEmpty({ message: "请输入用户名" })
  @Length(6, 12, { message: "用户名长度必须在6-12位之间" })
  username!: string;
}
