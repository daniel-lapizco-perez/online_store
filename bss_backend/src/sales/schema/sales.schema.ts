import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, trusted } from "mongoose";

export type SalesDocment = HydratedDocument<Sale>;

@Schema({
    timestamps: true
})
export class Sale{
    @Prop({
        required: true,
        trim: true
    })
    buyer: string;

    @Prop({
        required: true,
        trim: true
    })
    seller: string;

    @Prop({
        required: true,
        trim: true
    })
    date: string;

    @Prop({
        required: true,
        trim: true
    })
    total: string;

    @Prop({
        required: true,
        trim: true
    })
    products_list: object;
}

export const salesSchema = SchemaFactory.createForClass(Sale);