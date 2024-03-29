import { Controller, Get, Post, Put, Param, Delete, Body, ConflictException, NotFoundException, HttpCode } from '@nestjs/common';

import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { ProvidersService } from './providers.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Providers')
@Controller('providers')
export class ProvidersController {
    constructor(private providerService: ProvidersService){}

    @Get()
    async findAllProviders(){
        return await this.providerService.findAllProvider();
    }

    @Get(':id')
    async findOneProvider(@Param('id') id:string){
        const providers = await this.providerService.findOneProvider(id);
        if(!providers) throw new NotFoundException('Provider not found');
        return providers;
    }

    @Post()
    async createProvider(@Body() createProvider: CreateProviderDto){
        try{
            return await this.providerService.createProvider(createProvider);
        } catch(error) {
            if(error.code === 11000){
                throw new ConflictException('Provider already exists');
            }
            throw error;
        }
    }

    @Put(':id')
    @HttpCode(205)
    async updateProvider(@Param('id') id: string, @Body() updateProvider: UpdateProviderDto){
        try{
            const updatedProvider = await this.providerService.updateProvider(id, updateProvider);
            if(!updatedProvider) throw new NotFoundException('Provider not found')
            return updatedProvider;
        } catch (error){
            if(error.code === 11000){
                throw new ConflictException('Provider already exists')
            }
        }
    } 

    @Delete(':id')
    @HttpCode(204)
    async deleteProvider(@Param('id') id: string){{
        const deletedProvider = await this.providerService.deletProvider(id);
        if(!deletedProvider) throw new NotFoundException('Provider not found');
        return deletedProvider;
    }}
}
