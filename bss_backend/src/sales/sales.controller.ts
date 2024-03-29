import { Controller, Post, Param, Put, Delete, Get, NotFoundException, ConflictException, Body } from '@nestjs/common';

import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { SalesService } from './sales.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Sales')
@Controller('sales')
export class SalesController {
    constructor(private saleService: SalesService){}

    @Get()
    async findAllSales(){
        return await this.saleService.findAllSales();
    }

    @Get(':id')
    async findOneSale(@Param('id') id: string){
        const sale = await this.saleService.findSale(id);
        if(!sale) throw new NotFoundException('Sale not found!');
        return sale;
    }

    @Get(':buyer')
    async findOneSaleByBuyer(@Param('buyer') buyer: string){
        const saleByBuyer = await this.saleService.findAllSalesByBuyer(buyer);
        if(!saleByBuyer) throw new NotFoundException('Sale not found');
        return saleByBuyer;
    }

    @Get(':seller')
    async findOneSaleBySeller(@Param('seller') seller: string){
        const saleBySeller = await this.saleService.findAllSalesBySeller(seller);
        if(!saleBySeller) throw new NotFoundException('Sale not found');
        return saleBySeller;
    }

    @Post()
    async createSale(@Body() createSale: CreateSaleDto){
        return await this.saleService.createSale(createSale)
    }

    @Delete(':id')
    async deleteSale(@Param('id') id: string){
        const saleDelete = await this.saleService.deleteSale(id);
        if(!saleDelete) throw new NotFoundException('Sale not found!');
        return saleDelete;
    }

    @Put(':id')
    async updateSale(@Param('id') id: string, @Body() updatedSale: UpdateSaleDto){
        const saleUpdated = await this.saleService.updateSale(id, updatedSale);
        if(!saleUpdated) throw new NotFoundException('Sale not found!');
        return saleUpdated;
    }
    
}
