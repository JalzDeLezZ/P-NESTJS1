import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Brand } from './brand.entity';
import { SubDoc, SubDocSchema } from './sub-doc.entity';

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

  /* @Prop({ type: SubDocSchema })
  subDoc: SubDoc; // 👈 new field (1:1) */

  @Prop({ type: [SubDocSchema] })
  subDocs: Types.Array<SubDoc>; // 👈 new field (1:N)
}

export const ProductSchema = SchemaFactory.createForClass(Product);

//? Compound Index
// ProductSchema.index({ price: 1, stock: -1 }); //* Greater performance in the search
ProductSchema.index({ price: 1, stock: -1 }, { unique: true }); //* Avoid duplicates
