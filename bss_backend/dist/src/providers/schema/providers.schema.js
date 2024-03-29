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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderSchema = exports.Provider = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Provider = class Provider {
};
exports.Provider = Provider;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true
    }),
    __metadata("design:type", String)
], Provider.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true
    }),
    __metadata("design:type", String)
], Provider.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true
    }),
    __metadata("design:type", String)
], Provider.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true
    }),
    __metadata("design:type", String)
], Provider.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true
    }),
    __metadata("design:type", String)
], Provider.prototype, "company", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        default: true
    }),
    __metadata("design:type", Boolean)
], Provider.prototype, "status", void 0);
exports.Provider = Provider = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], Provider);
exports.ProviderSchema = mongoose_1.SchemaFactory.createForClass(Provider);
//# sourceMappingURL=providers.schema.js.map