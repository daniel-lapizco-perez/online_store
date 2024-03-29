import { Module } from '@nestjs/common';
import { ProvidersController } from './providers.controller';
import { ProvidersService } from './providers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Provider, ProviderSchema } from './schema/providers.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Provider.name,
        schema: ProviderSchema
      }
    ])
  ],
  controllers: [ProvidersController],
  providers: [ProvidersService]
})
export class ProvidersModule {}
