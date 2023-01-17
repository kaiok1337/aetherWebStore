import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/auth/enums/role.enum';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ unique: true })
  email: string;

  @Prop({ unique: true })
  password: string;

  @Prop()
  shippingAddress: string;

  @Prop()
  zip: number;

  @Prop()
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User)