import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { ProvidersModule } from './providers/providers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/BSS'),
    ClientsModule, ProvidersModule, SalesModule],
})
export class AppModule {}
