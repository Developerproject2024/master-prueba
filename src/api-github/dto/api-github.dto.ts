import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class ApiGithubDto {
  @ApiProperty({ description: 'The name of the user' })
  @IsString({message: "El campo debe ser un string"})
  @MinLength(5)
  name: string;
}