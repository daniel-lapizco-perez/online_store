import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProviderDocumen = HydratedDocument<Provider>;

@Schema({
    timestamps: true
})
export class Provider{
    @Prop({
        required: true,
        trim: true
    })
    name: string;

    @Prop({
        required: true,
        trim: true
    })
    address: string;

    @Prop({
        required: true,
        trim: true
    })
    phone: string;

    @Prop({
        required: true,
        trim: true
    })
    email: string;

    @Prop({
        required: true,
        trim: true
    })
    company: string;

    @Prop({
        required: false,
        default: true
    })
    status: boolean
}

export const ProviderSchema = SchemaFactory.createForClass(Provider);