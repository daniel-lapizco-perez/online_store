import { IsString, IsBoolean, IsOptional, IsNotEmpty, IsEmail } from "class-validator";

export class UpdateClientDto{
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    address?: string;

    @IsString()
    @IsOptional()
    phone?: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsOptional()
    @IsBoolean()
    status?: boolean;
}