import { IsString, IsBoolean, IsOptional, IsNotEmpty, IsEmail } from "class-validator";

export class CreateClientDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsOptional()
    @IsBoolean()
    status?: boolean;
}