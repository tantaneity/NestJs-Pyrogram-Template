import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  username?: string;

  @IsNumber()
  userId: number;
}
