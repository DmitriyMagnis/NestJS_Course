import { IsString } from "class-validator";

IsString

export class CreateMessageDto {
  @IsString()
  content: string;
}