"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const create_provider_dto_1 = require("./dto/create-provider.dto");
const update_provider_dto_1 = require("./dto/update-provider.dto");
const providers_service_1 = require("./providers.service");
const swagger_1 = require("@nestjs/swagger");
let ProvidersController = class ProvidersController {
    constructor(providerService) {
        this.providerService = providerService;
    }
    async findAllProviders() {
        return await this.providerService.findAllProvider();
    }
    async findOneProvider(id) {
        const providers = await this.providerService.findOneProvider(id);
        if (!providers)
            throw new common_1.NotFoundException('Provider not found');
        return providers;
    }
    async createProvider(createProvider) {
        try {
            return await this.providerService.createProvider(createProvider);
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.ConflictException('Provider already exists');
            }
            throw error;
        }
    }
    async updateProvider(id, updateProvider) {
        try {
            const updatedProvider = await this.providerService.updateProvider(id, updateProvider);
            if (!updatedProvider)
                throw new common_1.NotFoundException('Provider not found');
            return updatedProvider;
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.ConflictException('Provider already exists');
            }
        }
    }
    async deleteProvider(id) {
        {
            const deletedProvider = await this.providerService.deletProvider(id);
            if (!deletedProvider)
                throw new common_1.NotFoundException('Provider not found');
            return deletedProvider;
        }
    }
};
exports.ProvidersController = ProvidersController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "findAllProviders", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "findOneProvider", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_provider_dto_1.CreateProviderDto]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "createProvider", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(205),
    openapi.ApiResponse({ status: 205, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_provider_dto_1.UpdateProviderDto]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "updateProvider", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    openapi.ApiResponse({ status: 204, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "deleteProvider", null);
exports.ProvidersController = ProvidersController = __decorate([
    (0, swagger_1.ApiTags)('Providers'),
    (0, common_1.Controller)('providers'),
    __metadata("design:paramtypes", [providers_service_1.ProvidersService])
], ProvidersController);
//# sourceMappingURL=providers.controller.js.map