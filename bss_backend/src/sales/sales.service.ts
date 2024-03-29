import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sale } from './schema/sales.schema';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Injectable()
export class SalesService {
    constructor(@InjectModel(Sale.name) private saleModel: Model<Sale>){}
    
    async createSale(sale: CreateSaleDto){
        const newSale = await new this.saleModel(sale)
        return newSale.save();
    }

    async findAllSales(){
        return await this.saleModel.find();
    }

    async findSale(id: string){
        return await this.saleModel.findById(id);
    }

    async findAllSalesByBuyer(buyer: string){
        return await this.saleModel.findOne({buyer});
    } 

    async findAllSalesBySeller(seller: string){
        return await this.saleModel.findOne({seller})
    }

    async updateSale(id: string, saleUpdated: UpdateSaleDto){
        return await this.saleModel.findByIdAndUpdate(id);
    }

    async deleteSale(id: string){
        return await this.saleModel.findByIdAndDelete(id);
    }
}
