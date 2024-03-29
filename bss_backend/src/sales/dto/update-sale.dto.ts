import { IsString, IsOptional, IsObject } from "class-validator";

export class UpdateSaleDto{
    
    @IsString()
    @IsOptional()
    buyer?: string;

    @IsString()
    @IsOptional()
    seller?: string;

    @IsString()
    @IsOptional()
    date?: string;

    @IsString()
    @IsOptional()
    total?: string;

    @IsObject()
    @IsOptional()
    product_list?: object;
}