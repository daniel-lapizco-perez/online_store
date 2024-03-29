import { IsString, IsObject, IsNotEmpty  } from "class-validator";

export class CreateSaleDto {
    @IsString()
    @IsNotEmpty()
    buyer: string;

    @IsString()
    @IsNotEmpty()
    seller: string;

    @IsString()
    @IsNotEmpty()
    date: string;

    @IsString()
    @IsNotEmpty()
    total: string;

    @IsObject()
    @IsNotEmpty()
    product_list: object;
}