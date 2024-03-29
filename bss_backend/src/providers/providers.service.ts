import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Provider } from './schema/providers.schema';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';

@Injectable()
export class ProvidersService {
    constructor(@InjectModel(Provider.name) private providerModel: Model<Provider>){}


    async createProvider(provider: CreateProviderDto){
        const createProvider = await new this.providerModel(provider);
        return createProvider.save();
    }

    async findOneProvider(id: string){
        return await this.providerModel.findById(id);
    }

    async findAllProvider(){
        return await this.providerModel.find();
    }

    async updateProvider(id: string, updatedProvider: UpdateProviderDto){
        return await this.providerModel.findByIdAndDelete(id, updatedProvider);
    }

    async deletProvider(id: string){
        return await this.providerModel.findByIdAndDelete(id);
    }

}
