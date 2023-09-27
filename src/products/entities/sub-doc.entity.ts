import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class SubDoc {
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  name: string;

  @Prop()
  description: string;
}

export const SubDocSchema = SchemaFactory.createForClass(SubDoc);
