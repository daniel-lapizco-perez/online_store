/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Provider } from './schema/providers.schema';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
export declare class ProvidersService {
    private providerModel;
    constructor(providerModel: Model<Provider>);
    createProvider(provider: CreateProviderDto): Promise<import("mongoose").Document<unknown, {}, Provider> & Provider & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findOneProvider(id: string): Promise<import("mongoose").Document<unknown, {}, Provider> & Provider & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAllProvider(): Promise<(import("mongoose").Document<unknown, {}, Provider> & Provider & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updateProvider(id: string, updatedProvider: UpdateProviderDto): Promise<import("mongoose").Document<unknown, {}, Provider> & Provider & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deletProvider(id: string): Promise<import("mongoose").Document<unknown, {}, Provider> & Provider & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
