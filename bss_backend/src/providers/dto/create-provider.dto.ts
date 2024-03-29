import { IsString, IsBoolean, IsOptional, IsNotEmpty } from "class-validator";

export class CreateProviderDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsNotEmpty()
    company: string;

    @IsBoolean()
    @IsOptional()
    status?: boolean;
}