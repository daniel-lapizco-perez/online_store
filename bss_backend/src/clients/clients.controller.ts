import { Controller, Post, Param, Put, Delete, Get, NotFoundException, ConflictException, HttpCode, Body } from '@nestjs/common';

import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsService } from './clients.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Clients')
@Controller('clients')
export class ClientsController {
    constructor(private clientService: ClientsService){}

    @Get()
    async findAllClients(){
        return await this.clientService.findAllClients();
    }

    @Get(':id')
    async findOneClient(@Param('id') id: string){
        const client = await this.clientService.findOneClient(id)
        if(!client) throw new NotFoundException('Client not found')
        return client;
    }

    @Post()
    async createClient(@Body() createClientyDto: CreateClientDto){
        try{
            return await this.clientService.createClient(createClientyDto)
        } catch(error){
            if(error.code === 11000){
                throw new ConflictException('Client already exists');
            } else {
                throw new Error("Field can't be empty")
            }
            throw error; 
        }
    }

    @Delete(':id')
    async deleteClient(@Param('id') id: string){
        const clienteDeleted = await this.clientService.deleteClient(id)
        if(!clienteDeleted) throw new NotFoundException('Client not found in database')
        return clienteDeleted;
    }

    @Put(':id')
    async updateClient(@Param('id') id: string, @Body() clientUpdated: UpdateClientDto){
        const client = await this.clientService.updateClient(id, clientUpdated);
        if(!client) throw new NotFoundException('Client not found to update')
        return client;
    }
}
