import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ClientDocument = HydratedDocument<Client>;

@Schema({
    timestamps: true
})
export class Client {
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
        required: false,
        trim: true
    })
    phone: string;
    
    @Prop({
        required: false,
        trim: true
    })
    email: string;
    
    @Prop({
        required: false,
        default: true
    })
    status: boolean;
}

export const clientSchema = SchemaFactory.createForClass(Client);