import { Expose } from "class-transformer";
import { IsNumber, IsString, IsUUID } from "class-validator";

export class UserShortDto {
    @Expose()
    @IsUUID()
    id: string

    @Expose()
    @IsString()
    first_name: string

    @Expose()
    @IsNumber()
    user_id: number
}