import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Brand } from './brand.entity';

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  //? Index: Add priority to the search
  @Prop({ type: Number, index: true })
  price: number;

  @Prop({ type: Number })
  stock: number;

  @Prop()
  image: string;

  @Prop(raw({ name: { type: String }, image: { type: String } }))
  category: Record<string, any>;

  @Prop({ type: Types.ObjectId, ref: Brand.name })
  brand: Brand | Types.ObjectId;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

//? Compound Index
// ProductSchema.index({ price: 1, stock: -1 }); //* Greater performance in the search
ProductSchema.index({ price: 1, stock: -1 }, { unique: true }); //* Avoid duplicates
