import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
//? 2nd import { Exclude } from 'class-transformer';
import { Document } from 'mongoose';
import { ExcludeProperty } from 'nestjs-mongoose-exclude';

@Schema({
  //? 1st method for excluding password
  // toJSON: {
  //   transform: (_document, returnedObject) => {
  //     returnedObject.id = returnedObject._id;
  //     delete returnedObject._id;
  //     delete returnedObject.__v;
  //     delete returnedObject.password;
  //   },
  // },
})
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, minlength: 6, select: false })
  //? 2nd @Exclude()
  @ExcludeProperty() //? 3rd Method for excluding password
  password: string;

  @Prop({ required: true })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
