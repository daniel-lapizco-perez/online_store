import { IsString, IsBoolean, IsOptional, IsNotEmpty } from "class-validator";

export class UpdateProviderDto{
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    address?: string;

    @IsString()
    @IsOptional()
    phone?: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    company?: string;

    @IsBoolean()
    @IsOptional()
    status?: boolean;
}