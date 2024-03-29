import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, clientSchema } from 'src/clients/schema/clients.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Client.name,
        schema: clientSchema
      }
    ])
  ],
  controllers: [ClientsController],
  providers: [ClientsService]
})
export class ClientsModule {}
