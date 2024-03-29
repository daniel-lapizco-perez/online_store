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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { ProvidersService } from './providers.service';
export declare class ProvidersController {
    private providerService;
    constructor(providerService: ProvidersService);
    findAllProviders(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/providers.schema").Provider> & import("./schema/providers.schema").Provider & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOneProvider(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/providers.schema").Provider> & import("./schema/providers.schema").Provider & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createProvider(createProvider: CreateProviderDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/providers.schema").Provider> & import("./schema/providers.schema").Provider & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateProvider(id: string, updateProvider: UpdateProviderDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/providers.schema").Provider> & import("./schema/providers.schema").Provider & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteProvider(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/providers.schema").Provider> & import("./schema/providers.schema").Provider & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
